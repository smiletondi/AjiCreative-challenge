import "bootstrap/dist/css/bootstrap.min.css";
import "@Static/css/main.scss";

import * as React from "react";

import App, { AppContext, AppInitialProps } from "next/app";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import { AppWithStore } from "@Interfaces";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { appWithTranslation } from "@Server/i18n";
import { makeStore } from "@Redux";
import { theme } from "@Definitions/Styled";
import withRedux from "next-redux-wrapper";

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
        const queryClient = new QueryClient();

        return (
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <ThemeProvider theme={theme}>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </QueryClientProvider>
            </Provider>
        );
    }
}

export default withRedux(makeStore)(appWithTranslation(WebApp));
