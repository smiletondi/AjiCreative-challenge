// #region Global Imports
import * as React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Form } from "react-bootstrap"; // #endregion Global Imports

import { LogoBanner } from "@Components";

// #region Interface Imports
import { IPassword } from "./Password";
// #region Local Imports
import { StlyedIcon } from "./styled";

const arrowLeftSolidIcon = "/images/arrow-left-solid.svg";

// import { IStore } from "@Redux/IStore";
// import { PasswordActions } from "@Actions";
// #endregion Local Imports

// #endregion Interface Imports

export const Password: React.FunctionComponent<IPassword.IProps> = () =>
    // props: IPassword.IProps
    {
        // const password = useSelector((state: IStore) => state.password);
        // const dispatch = useDispatch();

        return (
            <Container className="p-5">
                <LogoBanner />
                <Container className="p-0 m-0 mb-2">
                    <StlyedIcon
                        {...{
                            src: arrowLeftSolidIcon,
                            alt: "Retour arrière",
                            className: "mr-2",
                        }}
                    />
                    <span className="text-muted">khaled@gmail.com</span>
                </Container>
                <h3 {...{ className: "p-0 pb-4" }}>Entrez le mot de passe</h3>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Mode de passe</Form.Label>
                        <Form.Control
                            {...{
                                type: "password",
                                placeholder: "Mot de passe",
                            }}
                        />
                    </Form.Group>
                    <Button
                        {...{
                            variant: "primary",
                            type: "submit",
                            className: "float-right",
                        }}
                    >
                        Suivant
                    </Button>
                </Form>
            </Container>
        );
    };
