import * as React from "react";

import { Container } from "react-bootstrap";
import { IFeed } from "./Feed";

export const Feed: React.FunctionComponent<IFeed.IProps> = (
    props: IFeed.IProps
) => {
    return (
        <Container fluid>
            <h1>Feed page</h1>
        </Container>
    );
};
