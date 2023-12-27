export interface IValidation {
    required?: string;
    minLength?: { value: number; message: string };
    pattern?: {
        value: RegExp;
        message: string;
    };
}
