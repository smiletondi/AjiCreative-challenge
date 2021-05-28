// #region Global Imports
import * as React from "react";

// import { Button, Container, Form } from "react-bootstrap";
// import { Heading, LocaleButton } from "@Components";
// #region Interface Imports
import { IHomePage, ReduxNextPageContext } from "@Interfaces";

import { HomeActions } from "@Actions";
import { Login } from "@Components/Login";
// import { IStore } from "@Redux/IStore";
import { NextPage } from "next";
import { Wrapper } from "@Styled/Home";
// #region Local Imports
import { withTranslation } from "@Server/i18n";

// import { useDispatch, useSelector } from "react-redux";

// #endregion Global Imports

// #endregion Local Imports

// #endregion Interface Imports

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = (
    // eslint-disable-next-line no-empty-pattern
    {
        // t,
        // i18n,
    }
) => {
    // const home = useSelector((state: IStore) => state.home);
    // const dispatch = useDispatch();

    // const renderLocaleButtons = (activeLanguage: string) =>
    //     ["en", "es", "tr"].map(lang => (
    //         <LocaleButton
    //             key={lang}
    //             lang={lang}
    //             isActive={activeLanguage === lang}
    //             onClick={() => i18n.changeLanguage(lang)}
    //         />
    //     ));

    return (
        <Wrapper className="bg-light">
            <Login />
        </Wrapper>
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
