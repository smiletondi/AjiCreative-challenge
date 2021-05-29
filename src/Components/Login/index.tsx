import { Alert, Button, Container, Form, InputGroup } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
/* eslint-disable import/order */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HomeActions } from "@Actions";
import { ILogin } from "./Login";
/* eslint-disable import/order */
/* eslint-disable react/jsx-one-expression-per-line */
import { IStore } from "@Redux/IStore";
import { LogoBanner } from "@Components";

export const Login: React.FunctionComponent<ILogin.IProps> = () =>
    // props: ILogin.IProps
    {
        const dispatch = useDispatch();
        const [emailHasErrors, setEmailHasErrors] = useState(false);
        useEffect(() => {
            return () => {
                setEmailHasErrors(false);
            };
        }, []);
        const registredUserEmail = useSelector(
            (state: IStore) => state?.home?.user?.email
        );

        const { handleSubmit, control } = useForm();
        const onSubmit = async (
            data: ILogin.IForm,
            e: React.BaseSyntheticEvent<object, any, any>
        ) => {
            e?.preventDefault();
            const userIsRegistered =
                !!registredUserEmail && data?.email === registredUserEmail;

            if (!userIsRegistered) {
                return setEmailHasErrors(true);
            }
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
                    <Form.Group>
                        <Form.Label>E-mail</Form.Label>
                        <InputGroup hasValidation>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Form.Control
                                        {...{
                                            ...field,
                                            type: "email",
                                            isInvalid: emailHasErrors,
                                            placeholder:
                                                "Entrer votre adresse e-mail",
                                        }}
                                    />
                                )}
                            />
                            {emailHasErrors ? (
                                <Alert variant="danger" className="mt-2">
                                    <small>
                                        Aucun utilisateur enregistré avec cette
                                        adresse e-mail
                                    </small>
                                </Alert>
                            ) : null}
                        </InputGroup>
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
