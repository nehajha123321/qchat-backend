import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Schedule } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ScheduleUpdateFormInputValues = {
    startdate?: string;
    starttime?: string;
    enddate?: string;
    endtime?: string;
    location?: string;
    schedule_status?: string;
};
export declare type ScheduleUpdateFormValidationValues = {
    startdate?: ValidationFunction<string>;
    starttime?: ValidationFunction<string>;
    enddate?: ValidationFunction<string>;
    endtime?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    schedule_status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScheduleUpdateFormOverridesProps = {
    ScheduleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    startdate?: PrimitiveOverrideProps<TextFieldProps>;
    starttime?: PrimitiveOverrideProps<TextFieldProps>;
    enddate?: PrimitiveOverrideProps<TextFieldProps>;
    endtime?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    schedule_status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ScheduleUpdateFormProps = React.PropsWithChildren<{
    overrides?: ScheduleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    schedule?: Schedule;
    onSubmit?: (fields: ScheduleUpdateFormInputValues) => ScheduleUpdateFormInputValues;
    onSuccess?: (fields: ScheduleUpdateFormInputValues) => void;
    onError?: (fields: ScheduleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ScheduleUpdateFormInputValues) => ScheduleUpdateFormInputValues;
    onValidate?: ScheduleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ScheduleUpdateForm(props: ScheduleUpdateFormProps): React.ReactElement;
