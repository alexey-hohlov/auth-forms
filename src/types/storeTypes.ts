export interface IAuthentication {
    dialog: boolean;
    data: { loginData: ILoginData; signUpData: ISignUpData };
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
