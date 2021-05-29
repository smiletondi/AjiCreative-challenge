// #region Global Imports
import * as React from "react";

import { Container, Image } from "react-bootstrap"; // #endregion Global Imports// #endregion Global Imports

// #region Interface Imports
import { ILogoBanner } from "./LogoBanner";

const logoImage = "/images/logoAjiCreative.png";

export const LogoBanner: React.FunctionComponent<ILogoBanner.IProps> = () =>
    // props: ILogoBanner.IProps
    {
        return (
            <Container {...{ className: "p-0 m-0 mb-4" }} fluid>
                <Image {...{ src: logoImage }} fluid />
            </Container>
        );
    };
