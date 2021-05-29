/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";

import {
    AccessCode,
    Feed,
    Layout,
    Login,
    Password,
    Registration,
} from "@Components";
import { IHomePage, ReduxNextPageContext } from "@Interfaces";

import { Card } from "react-bootstrap";
import { HomeActions } from "@Actions";
import { IStore } from "@Redux/IStore";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { withTranslation } from "@Server/i18n";

const componentSwitch = (path: string = "login") =>
    ({
        login: <Login />,
        accessCode: <AccessCode />,
        registration: <Registration />,
        password: <Password />,
        feed: <Feed />,
    }[path]);

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({}) => {
    const currentPath = useSelector((state: IStore) => state?.home?.path);
    const currentComponent = componentSwitch(currentPath);

    if (currentPath === "feed") {
        return (
            <Layout>
                <>{currentComponent}</>
            </Layout>
        );
    }

    return (
        <Layout>
            <Card className="m-2">{currentComponent}</Card>
        </Layout>
    );
};

Home.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IHomePage.InitialProps> => {
    await ctx.store.dispatch(
        HomeActions.GetApod({
            params: { hd: true },
        })
    );
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Home);

export default Extended;
