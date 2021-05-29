/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
// #region Global Imports
import * as React from "react";

// import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";

// #region Interface Imports
import { IRegistration } from "./Registration";
import { LogoBanner } from "@Components";

// #region Local Imports
// import { IStore } from "@Redux/IStore";
// import { RegistrationActions } from "@Actions";
// #endregion Local Imports

// #endregion Interface Imports

export const Registration: React.FunctionComponent<IRegistration.IProps> = (
    props: IRegistration.IProps
) => {
    // const registration = useSelector((state: IStore) => state.registration);
    // const dispatch = useDispatch();

    return (
        <Container className="p-3">
            <LogoBanner />
            <h3 {...{ className: "p-0 pb-4" }}>Inscription</h3>
            <Form>
                <Form.Text id="passwordHelpBlock" className="pb-3">
                    Nous avons besoin de quelques informations supplémentaires
                    pour creer votre compte
                </Form.Text>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                        {...{
                            type: "text",
                            placeholder: "Nom",
                        }}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Prenom</Form.Label>
                    <Form.Control
                        {...{
                            type: "text",
                            placeholder: "Prenom",
                        }}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        {...{
                            type: "email",
                            placeholder: "Email",
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
