import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { Registration } from "./graphql/types";
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
export declare type RegistrationUpdateFormInputValues = {
    registration_status?: string;
};
export declare type RegistrationUpdateFormValidationValues = {
    registration_status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RegistrationUpdateFormOverridesProps = {
    RegistrationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    registration_status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type RegistrationUpdateFormProps = React.PropsWithChildren<{
    overrides?: RegistrationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    registration?: Registration;
    onSubmit?: (fields: RegistrationUpdateFormInputValues) => RegistrationUpdateFormInputValues;
    onSuccess?: (fields: RegistrationUpdateFormInputValues) => void;
    onError?: (fields: RegistrationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RegistrationUpdateFormInputValues) => RegistrationUpdateFormInputValues;
    onValidate?: RegistrationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RegistrationUpdateForm(props: RegistrationUpdateFormProps): React.ReactElement;
