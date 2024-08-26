import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Attendee } from "./graphql/types";
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
export declare type AttendeeUpdateFormInputValues = {
    name?: string;
    gender?: string;
    age?: number;
    email?: string;
    mobile?: string;
};
export declare type AttendeeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
    email?: ValidationFunction<string>;
    mobile?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AttendeeUpdateFormOverridesProps = {
    AttendeeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    mobile?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AttendeeUpdateFormProps = React.PropsWithChildren<{
    overrides?: AttendeeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    attendee?: Attendee;
    onSubmit?: (fields: AttendeeUpdateFormInputValues) => AttendeeUpdateFormInputValues;
    onSuccess?: (fields: AttendeeUpdateFormInputValues) => void;
    onError?: (fields: AttendeeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AttendeeUpdateFormInputValues) => AttendeeUpdateFormInputValues;
    onValidate?: AttendeeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AttendeeUpdateForm(props: AttendeeUpdateFormProps): React.ReactElement;
