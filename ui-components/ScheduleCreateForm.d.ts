import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ScheduleCreateFormInputValues = {
    startdate?: string;
    starttime?: string;
    enddate?: string;
    endtime?: string;
    location?: string;
    schedule_status?: string;
};
export declare type ScheduleCreateFormValidationValues = {
    startdate?: ValidationFunction<string>;
    starttime?: ValidationFunction<string>;
    enddate?: ValidationFunction<string>;
    endtime?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    schedule_status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScheduleCreateFormOverridesProps = {
    ScheduleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    startdate?: PrimitiveOverrideProps<TextFieldProps>;
    starttime?: PrimitiveOverrideProps<TextFieldProps>;
    enddate?: PrimitiveOverrideProps<TextFieldProps>;
    endtime?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    schedule_status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ScheduleCreateFormProps = React.PropsWithChildren<{
    overrides?: ScheduleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ScheduleCreateFormInputValues) => ScheduleCreateFormInputValues;
    onSuccess?: (fields: ScheduleCreateFormInputValues) => void;
    onError?: (fields: ScheduleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ScheduleCreateFormInputValues) => ScheduleCreateFormInputValues;
    onValidate?: ScheduleCreateFormValidationValues;
} & React.CSSProperties>;
export default function ScheduleCreateForm(props: ScheduleCreateFormProps): React.ReactElement;
