import * as React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Article } from "@Components";
import { Container } from "react-bootstrap";
import { IFeed } from "./Feed";
import { IStore } from "@Redux/IStore";

export const Feed: React.FunctionComponent<IFeed.IProps> = (
    props: IFeed.IProps
) => {
    const storeHome = useSelector((state: IStore) => state?.home);
    console.log("🚀 ~ file: index.tsx ~ line 13 ~ storeHome", storeHome);
    return (
        <Container
            {...{
                className: "w-100 d-flexjustify-content-center",
            }}
        >
            <h1>Feed page</h1>
            <Article />
            <Article />
            <Article />
        </Container>
    );
};
