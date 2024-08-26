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
export declare type TrainingCreateFormInputValues = {
    title?: string;
    description?: string;
    duration?: string;
    category?: string;
    tags?: string[];
};
export declare type TrainingCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    duration?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrainingCreateFormOverridesProps = {
    TrainingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    duration?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TrainingCreateFormProps = React.PropsWithChildren<{
    overrides?: TrainingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TrainingCreateFormInputValues) => TrainingCreateFormInputValues;
    onSuccess?: (fields: TrainingCreateFormInputValues) => void;
    onError?: (fields: TrainingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TrainingCreateFormInputValues) => TrainingCreateFormInputValues;
    onValidate?: TrainingCreateFormValidationValues;
} & React.CSSProperties>;
export default function TrainingCreateForm(props: TrainingCreateFormProps): React.ReactElement;
