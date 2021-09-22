import IUser from "./IUser";

export default interface IStartUpState {
    isLoadingUser: boolean;
    user: IUser | null;
    error: string | null;
}