/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, SelectField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getRegistration } from "./graphql/queries";
import { updateRegistration } from "./graphql/mutations";
const client = generateClient();
export default function RegistrationUpdateForm(props) {
  const {
    id: idProp,
    registration: registrationModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    registration_status: "",
  };
  const [registration_status, setRegistration_status] = React.useState(
    initialValues.registration_status
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = registrationRecord
      ? { ...initialValues, ...registrationRecord }
      : initialValues;
    setRegistration_status(cleanValues.registration_status);
    setErrors({});
  };
  const [registrationRecord, setRegistrationRecord] = React.useState(
    registrationModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getRegistration.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getRegistration
        : registrationModelProp;
      setRegistrationRecord(record);
    };
    queryData();
  }, [idProp, registrationModelProp]);
  React.useEffect(resetStateValues, [registrationRecord]);
  const validations = {
    registration_status: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          registration_status: registration_status ?? null,
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
            query: updateRegistration.replaceAll("__typename", ""),
            variables: {
              input: {
                id: registrationRecord.id,
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
      {...getOverrideProps(overrides, "RegistrationUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Registration status"
        placeholder="Please select an option"
        isDisabled={false}
        value={registration_status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              registration_status: value,
            };
            const result = onChange(modelFields);
            value = result?.registration_status ?? value;
          }
          if (errors.registration_status?.hasError) {
            runValidationTasks("registration_status", value);
          }
          setRegistration_status(value);
        }}
        onBlur={() =>
          runValidationTasks("registration_status", registration_status)
        }
        errorMessage={errors.registration_status?.errorMessage}
        hasError={errors.registration_status?.hasError}
        {...getOverrideProps(overrides, "registration_status")}
      >
        <option
          children="Registered"
          value="Registered"
          {...getOverrideProps(overrides, "registration_statusoption0")}
        ></option>
        <option
          children="On hold"
          value="OnHold"
          {...getOverrideProps(overrides, "registration_statusoption1")}
        ></option>
        <option
          children="Confirmed"
          value="Confirmed"
          {...getOverrideProps(overrides, "registration_statusoption2")}
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
          isDisabled={!(idProp || registrationModelProp)}
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
              !(idProp || registrationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
