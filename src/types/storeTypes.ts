export interface IAuthentication {
    dialog: boolean;
    data: { loginData: ILoginData };
}

export interface ILoginData {
    email: string;
    password: string;
}
