/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getSchedule } from "./graphql/queries";
import { updateSchedule } from "./graphql/mutations";
const client = generateClient();
export default function ScheduleUpdateForm(props) {
  const {
    id: idProp,
    schedule: scheduleModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    startdate: "",
    starttime: "",
    enddate: "",
    endtime: "",
    location: "",
    schedule_status: "",
  };
  const [startdate, setStartdate] = React.useState(initialValues.startdate);
  const [starttime, setStarttime] = React.useState(initialValues.starttime);
  const [enddate, setEnddate] = React.useState(initialValues.enddate);
  const [endtime, setEndtime] = React.useState(initialValues.endtime);
  const [location, setLocation] = React.useState(initialValues.location);
  const [schedule_status, setSchedule_status] = React.useState(
    initialValues.schedule_status
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = scheduleRecord
      ? { ...initialValues, ...scheduleRecord }
      : initialValues;
    setStartdate(cleanValues.startdate);
    setStarttime(cleanValues.starttime);
    setEnddate(cleanValues.enddate);
    setEndtime(cleanValues.endtime);
    setLocation(cleanValues.location);
    setSchedule_status(cleanValues.schedule_status);
    setErrors({});
  };
  const [scheduleRecord, setScheduleRecord] = React.useState(scheduleModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSchedule.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSchedule
        : scheduleModelProp;
      setScheduleRecord(record);
    };
    queryData();
  }, [idProp, scheduleModelProp]);
  React.useEffect(resetStateValues, [scheduleRecord]);
  const validations = {
    startdate: [],
    starttime: [],
    enddate: [],
    endtime: [],
    location: [],
    schedule_status: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          startdate: startdate ?? null,
          starttime: starttime ?? null,
          enddate: enddate ?? null,
          endtime: endtime ?? null,
          location: location ?? null,
          schedule_status: schedule_status ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateSchedule.replaceAll("__typename", ""),
            variables: {
              input: {
                id: scheduleRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ScheduleUpdateForm")}
      {...rest}
    >
      <TextField
        label="Startdate"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={startdate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              startdate: value,
              starttime,
              enddate,
              endtime,
              location,
              schedule_status,
            };
            const result = onChange(modelFields);
            value = result?.startdate ?? value;
          }
          if (errors.startdate?.hasError) {
            runValidationTasks("startdate", value);
          }
          setStartdate(value);
        }}
        onBlur={() => runValidationTasks("startdate", startdate)}
        errorMessage={errors.startdate?.errorMessage}
        hasError={errors.startdate?.hasError}
        {...getOverrideProps(overrides, "startdate")}
      ></TextField>
      <TextField
        label="Starttime"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={starttime && convertToLocal(new Date(starttime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              startdate,
              starttime: value,
              enddate,
              endtime,
              location,
              schedule_status,
            };
            const result = onChange(modelFields);
            value = result?.starttime ?? value;
          }
          if (errors.starttime?.hasError) {
            runValidationTasks("starttime", value);
          }
          setStarttime(value);
        }}
        onBlur={() => runValidationTasks("starttime", starttime)}
        errorMessage={errors.starttime?.errorMessage}
        hasError={errors.starttime?.hasError}
        {...getOverrideProps(overrides, "starttime")}
      ></TextField>
      <TextField
        label="Enddate"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={enddate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              startdate,
              starttime,
              enddate: value,
              endtime,
              location,
              schedule_status,
            };
            const result = onChange(modelFields);
            value = result?.enddate ?? value;
          }
          if (errors.enddate?.hasError) {
            runValidationTasks("enddate", value);
          }
          setEnddate(value);
        }}
        onBlur={() => runValidationTasks("enddate", enddate)}
        errorMessage={errors.enddate?.errorMessage}
        hasError={errors.enddate?.hasError}
        {...getOverrideProps(overrides, "enddate")}
      ></TextField>
      <TextField
        label="Endtime"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={endtime && convertToLocal(new Date(endtime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              startdate,
              starttime,
              enddate,
              endtime: value,
              location,
              schedule_status,
            };
            const result = onChange(modelFields);
            value = result?.endtime ?? value;
          }
          if (errors.endtime?.hasError) {
            runValidationTasks("endtime", value);
          }
          setEndtime(value);
        }}
        onBlur={() => runValidationTasks("endtime", endtime)}
        errorMessage={errors.endtime?.errorMessage}
        hasError={errors.endtime?.hasError}
        {...getOverrideProps(overrides, "endtime")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              startdate,
              starttime,
              enddate,
              endtime,
              location: value,
              schedule_status,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <SelectField
        label="Schedule status"
        placeholder="Please select an option"
        isDisabled={false}
        value={schedule_status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              startdate,
              starttime,
              enddate,
              endtime,
              location,
              schedule_status: value,
            };
            const result = onChange(modelFields);
            value = result?.schedule_status ?? value;
          }
          if (errors.schedule_status?.hasError) {
            runValidationTasks("schedule_status", value);
          }
          setSchedule_status(value);
        }}
        onBlur={() => runValidationTasks("schedule_status", schedule_status)}
        errorMessage={errors.schedule_status?.errorMessage}
        hasError={errors.schedule_status?.hasError}
        {...getOverrideProps(overrides, "schedule_status")}
      >
        <option
          children="Draft"
          value="Draft"
          {...getOverrideProps(overrides, "schedule_statusoption0")}
        ></option>
        <option
          children="Scheduled"
          value="Scheduled"
          {...getOverrideProps(overrides, "schedule_statusoption1")}
        ></option>
        <option
          children="Cancelled"
          value="Cancelled"
          {...getOverrideProps(overrides, "schedule_statusoption2")}
        ></option>
        <option
          children="Completed"
          value="Completed"
          {...getOverrideProps(overrides, "schedule_statusoption3")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || scheduleModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || scheduleModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
