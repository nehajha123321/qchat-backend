import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
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
export declare type RegistrationCreateFormInputValues = {
    registration_status?: string;
};
export declare type RegistrationCreateFormValidationValues = {
    registration_status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RegistrationCreateFormOverridesProps = {
    RegistrationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    registration_status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type RegistrationCreateFormProps = React.PropsWithChildren<{
    overrides?: RegistrationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RegistrationCreateFormInputValues) => RegistrationCreateFormInputValues;
    onSuccess?: (fields: RegistrationCreateFormInputValues) => void;
    onError?: (fields: RegistrationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RegistrationCreateFormInputValues) => RegistrationCreateFormInputValues;
    onValidate?: RegistrationCreateFormValidationValues;
} & React.CSSProperties>;
export default function RegistrationCreateForm(props: RegistrationCreateFormProps): React.ReactElement;
