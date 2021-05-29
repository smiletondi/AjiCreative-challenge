// #region Global Imports
import * as React from "react";

import { Container } from "react-bootstrap";
// #region Interface Imports
import { IErrorPage } from "@Interfaces";
// import { Container, TopText, ApodButton } from "@Styled/Home";
import Link from "next/link";
import { NextPage } from "next";
// #region Local Imports
import { withTranslation } from "@Server/i18n";
// #endregion Global Imports

// #endregion Local Imports

// #endregion Interface Imports

const Custom404: NextPage<IErrorPage.IProps> = ({ t }) => {
    return (
        <Container>
            <h1>Error Page</h1>
            {/* <TopText>{t("common:NotFound")}</TopText>
            <Link href="/">
                <ApodButton>{t("common:BackHome")}</ApodButton>
            </Link> */}
        </Container>
    );
};

export default withTranslation("common")(Custom404);
