import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Trainer } from "./graphql/types";
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
export declare type TrainerUpdateFormInputValues = {
    name?: string;
    gender?: string;
    age?: number;
    email?: string;
    mobile?: string;
};
export declare type TrainerUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
    email?: ValidationFunction<string>;
    mobile?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrainerUpdateFormOverridesProps = {
    TrainerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    mobile?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TrainerUpdateFormProps = React.PropsWithChildren<{
    overrides?: TrainerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    trainer?: Trainer;
    onSubmit?: (fields: TrainerUpdateFormInputValues) => TrainerUpdateFormInputValues;
    onSuccess?: (fields: TrainerUpdateFormInputValues) => void;
    onError?: (fields: TrainerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TrainerUpdateFormInputValues) => TrainerUpdateFormInputValues;
    onValidate?: TrainerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TrainerUpdateForm(props: TrainerUpdateFormProps): React.ReactElement;
