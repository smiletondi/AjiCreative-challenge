/* eslint-disable import/order */
/* eslint-disable react/jsx-one-expression-per-line */
// import { IStore } from "@Redux/IStore";
import * as React from "react";

import { Button, Container, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";

import { HomeActions } from "@Actions";
// #region Interface Imports
import { ILogin } from "./Login";
import { LogoBanner } from "@Components";
import { useDispatch } from "react-redux";

export const Login: React.FunctionComponent<ILogin.IProps> = () =>
    // props: ILogin.IProps
    {
        const dispatch = useDispatch();
        const { handleSubmit, control } = useForm();
        const onSubmit = async (
            data: any,
            e: React.BaseSyntheticEvent<object, any, any>
        ) => {
            e?.preventDefault();
            console.log(
                "🚀 ~ file: index.tsx ~ line 29 ~ onSubmit ~ data",
                data
            );
            dispatch(
                HomeActions.ChangePath({
                    path: "password",
                })
            );
        };
        const createAccount = () => {
            dispatch(
                HomeActions.ChangePath({
                    path: "accessCode",
                })
            );
        };

        return (
            <Container className="p-3">
                <LogoBanner />
                <h3 {...{ className: "p-0 pb-4" }}>Connexion</h3>
                <Form {...{ onSubmit: handleSubmit(onSubmit) }}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
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
                        <span
                            {...{
                                className: "text-primary text-nowrap",
                                onClick: createAccount,
                            }}
                        >
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
