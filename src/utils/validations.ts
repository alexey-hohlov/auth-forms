//validation rules for form fields

const defaultMessage = 'this field is required';

export const validations = {
    firstName: {
        required: defaultMessage,
    },
    lastName: {
        required: defaultMessage,
    },
    password: {
        required: defaultMessage,
        minLength: {
            value: 8,
            message: 'short password (8 characters minimum)',
        },
        pattern: {
            value: /^[^\s]+(\s+[^\s]+)*$/,
            message: 'white',
        },
    },
    phone: {
        required: defaultMessage,
        minLength: {
            value: 18,
            message: 'short number',
        },
    },
    email: {
        pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'invalid e-mail address',
        },
        required: defaultMessage,
    },
};
