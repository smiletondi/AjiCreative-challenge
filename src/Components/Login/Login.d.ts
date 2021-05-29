export declare module ILogin {
    export interface IProps {}

    export interface IState {
        IForm: {
            email: string;
        };
    }
    export interface IForm {
        email: string;
    }
    export interface IErrors {
        email: boolean;
        password: boolean;
    }

    export interface IStateProps {}

    module Actions {
        export interface IMapPayload {}
        export interface IMapResponse {}
    }
}
