// #region Local Imports
// import { IStore } from "@Redux/IStore";
// import { LoginActions } from "@Actions";
// #endregion Local Imports
import * as React from "react";
import { Button, Container, Form } from "react-bootstrap";

import { LogoBanner } from "@Components";

// #region Interface Imports
import { ILogin } from "./Login";

// #region Global Imports
// import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #endregion Interface Imports

export const Login: React.FunctionComponent<ILogin.IProps> = () =>
    // props: ILogin.IProps
    {
        // const login = useSelector((state: IStore) => state.login);
        // const dispatch = useDispatch();

        return (
            <Container className="p-5">
                <LogoBanner />
                <h3 {...{ className: "p-0 pb-4" }}>Connexion</h3>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            {...{
                                type: "email",
                                placeholder: "Entrer votre adresse e-mail",
                            }}
                        />
                    </Form.Group>
                    <Form.Text id="passwordHelpBlock" className="pb-3">
                        Vous n&apos;avez pas encore de compte ?
                        <span className="text-primary"> Créez-en un.</span>
                    </Form.Text>
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
