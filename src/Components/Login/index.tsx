/* eslint-disable import/order */
import * as React from "react";

import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
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
        const registredUserEmail = useSelector(
            (state: IStore) => state?.home?.user?.email
        );
        const emailHasErrors = useSelector(
            (state: IStore) => state?.home?.errors?.email
        );
        console.log(
            "🚀 ~ file: index.tsx ~ line 25 ~ emailHasErrors",
            emailHasErrors
        );

        const { handleSubmit, control } = useForm();
        const onSubmit = async (
            data: ILogin.IForm,
            e: React.BaseSyntheticEvent<object, any, any>
        ) => {
            e?.preventDefault();
            const userIsRegistered = data?.email === registredUserEmail;
            // console.log(
            //     "🚀 ~ file: index.tsx ~ line 32 ~ userIsRegistered",
            //     userIsRegistered
            // );
            if (!userIsRegistered) {
                return dispatch(
                    HomeActions.SetErrors({
                        email: true,
                    })
                );
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
                            <Form.Control.Feedback type="invalid" tooltip>
                                aucun utilisateur enregistré avec cette adresse
                                e-mail
                            </Form.Control.Feedback>
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
