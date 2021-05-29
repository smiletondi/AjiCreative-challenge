import { WithTranslation } from "next-i18next";
import path from "path";

declare namespace IHomePage {
    export interface IProps extends WithTranslation {}

    export interface InitialProps {
        namespacesRequired: string[];
    }

    export interface IStateProps {
        user: {
            firstName: string;
            name: string;
            email: string;
            password: string;
        };
        path: string;
    }
    export interface UserFields {
        firstName: string;
        name: string;
        email: string;
        password: string;
    }

    namespace Actions {
        export interface IMapPayload {
            user?: {
                firstName: string;
                name: string;
                email: string;
                password: string;
            };
            path?: string;
        }

        export interface IMapResponse {}

        export interface IGetApodPayload extends PlanetaryModel.GetApodPayload {
            params: {};
        }
        export interface IChangePath {
            path: string;
        }
        export interface IUpdateUserDetails {
            firstName: string;
            name: string;
            email: string;
            password: string;
        }
        export interface IValidateRegistration {
            firstName: string;
            name: string;
            email: string;
        }
        export interface IValidatePassword {
            password: string;
        }
        export interface IValidateEmail {
            email: string;
        }
        export interface ISetErrors {
            email?: boolean;
            password?: boolean;
        }

        export interface IGetApodResponse
            extends PlanetaryModel.GetApodResponse {}
    }
}

export { IHomePage };
