export interface IAuthentication {
    dialog: boolean;
    data: {
        loginData: ILoginData;
        signUpData: ISignUpData;
        passwordData: IPasswordData;
    };
}

export interface IPasswordData {
    email: string;
}

export interface ILoginData {
    email: string;
    password: string;
}

export interface ISignUpData {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    confirmPassword: string;
}
