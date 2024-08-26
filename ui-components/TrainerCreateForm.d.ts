import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type TrainerCreateFormInputValues = {
    name?: string;
    gender?: string;
    age?: number;
    email?: string;
    mobile?: string;
};
export declare type TrainerCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
    email?: ValidationFunction<string>;
    mobile?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrainerCreateFormOverridesProps = {
    TrainerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    mobile?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TrainerCreateFormProps = React.PropsWithChildren<{
    overrides?: TrainerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TrainerCreateFormInputValues) => TrainerCreateFormInputValues;
    onSuccess?: (fields: TrainerCreateFormInputValues) => void;
    onError?: (fields: TrainerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TrainerCreateFormInputValues) => TrainerCreateFormInputValues;
    onValidate?: TrainerCreateFormValidationValues;
} & React.CSSProperties>;
export default function TrainerCreateForm(props: TrainerCreateFormProps): React.ReactElement;
