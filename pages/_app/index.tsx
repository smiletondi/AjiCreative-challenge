import "bootstrap/dist/css/bootstrap.min.css";
import "@Static/css/main.scss";

// #region Global Imports
import * as React from "react";

import App, { AppContext, AppInitialProps } from "next/app";

import { AppWithStore } from "@Interfaces";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { appWithTranslation } from "@Server/i18n";
import { makeStore } from "@Redux";
// #region Local Imports
import { theme } from "@Definitions/Styled";
import withRedux from "next-redux-wrapper";
// #endregion Global Imports


// #endregion Local Imports

class WebApp extends App<AppWithStore> {
    static async getInitialProps({
        Component,
        ctx,
    }: AppContext): Promise<AppInitialProps> {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        );
    }
}

export default withRedux(makeStore)(appWithTranslation(WebApp));
