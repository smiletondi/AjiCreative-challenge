/* eslint-disable import/order */
/* eslint-disable react/jsx-one-expression-per-line */
// #region Local Imports
// import { IStore } from "@Redux/IStore";
// import { LoginActions } from "@Actions";
// #endregion Local Imports
import * as React from "react";

import { Button, Container, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";

// #region Interface Imports
import { ILogin } from "./Login";
import { LogoBanner } from "@Components";

// #region Global Imports
// import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #endregion Interface Imports

export const Login: React.FunctionComponent<ILogin.IProps> = () =>
    // props: ILogin.IProps
    {
        // const login = useSelector((state: IStore) => state.login);
        // const dispatch = useDispatch();
        const { handleSubmit, control } = useForm();
        const onSubmit = (
            data: any,
            e: React.BaseSyntheticEvent<object, any, any>
        ) => {
            e?.preventDefault();
            console.log(
                "🚀 ~ file: index.tsx ~ line 29 ~ onSubmit ~ data",
                data
            );
        };

        return (
            <Container className="p-3">
                <LogoBanner />
                <h3 {...{ className: "p-0 pb-4" }}>Connexion</h3>
                <Form {...{ onSubmit: handleSubmit(onSubmit) }}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control {...{}} />
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Form.Control
                                    {...{
                                        ...field,
                                        type: "email",
                                        placeholder:
                                            "Entrer votre adresse e-mail",
                                    }}
                                />
                            )}
                        />
                    </Form.Group>
                    <Form.Text id="passwordHelpBlock" className="pb-3">
                        <span className="text-nowrap">
                            Vous n&apos;avez pas encore de compte ?
                        </span>{" "}
                        <span className="text-primary text-nowrap">
                            Créez-en un.
                        </span>
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
