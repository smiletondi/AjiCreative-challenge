import { WithTranslation } from "next-i18next";
import path from "path";

declare namespace IHomePage {
    export interface IProps extends WithTranslation {}

    export interface InitialProps {
        namespacesRequired: string[];
    }

    export interface IStateProps {
        home: {
            version: number;
        };
        image: {
            url: string;
        };
        user: {
            firstName: string;
            name: string;
            email: string;
            password: string;
        };
        path: string;
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

        export interface IGetApodResponse
            extends PlanetaryModel.GetApodResponse {}
    }
}

export { IHomePage };
