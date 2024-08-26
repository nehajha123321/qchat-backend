import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Training } from "./graphql/types";
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
export declare type TrainingUpdateFormInputValues = {
    title?: string;
    description?: string;
    duration?: string;
    category?: string;
    tags?: string[];
};
export declare type TrainingUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    duration?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrainingUpdateFormOverridesProps = {
    TrainingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    duration?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TrainingUpdateFormProps = React.PropsWithChildren<{
    overrides?: TrainingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    training?: Training;
    onSubmit?: (fields: TrainingUpdateFormInputValues) => TrainingUpdateFormInputValues;
    onSuccess?: (fields: TrainingUpdateFormInputValues) => void;
    onError?: (fields: TrainingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TrainingUpdateFormInputValues) => TrainingUpdateFormInputValues;
    onValidate?: TrainingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TrainingUpdateForm(props: TrainingUpdateFormProps): React.ReactElement;
