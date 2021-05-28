import * as React from "react";
import { Container } from "react-bootstrap";

import { LayoutProps } from "./Layout";
import { Wrapper } from "./styled";

const Layout: React.FunctionComponent<LayoutProps> = ({
    children,
}): JSX.Element => {
    return (
        <Container
            {...{
                className:
                    "d-flex justify-content-center align-items-center p-0 m-0",
            }}
        >
            <Wrapper className="bg-secondary px-2">{children}</Wrapper>
        </Container>
    );
};

export { Layout };
