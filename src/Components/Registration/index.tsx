import { Button, Container, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
// #region Global Imports
import React, { BaseSyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

// #region Interface Imports
import { IRegistration } from "./Registration";
// #region Local Imports
import { IStore } from "@Redux/IStore";
import { LogoBanner } from "@Components";
import { RegistrationActions } from "@Actions";

// #endregion Local Imports

// #endregion Interface Imports

export const Registration: React.FunctionComponent<IRegistration.IProps> = (
    props: IRegistration.IProps
) => {
    const registration = useSelector((state: IStore) => state.registration);
    console.log("🚀 ~ file: index.tsx ~ line 24 ~ registration", registration);
    // const dispatch = useDispatch();

    const { register, handleSubmit, control } = useForm();
    const onSubmit = (data: any, e: BaseSyntheticEvent<object, any, any>) => {
        e?.preventDefault();
        console.log("🚀 ~ file: index.tsx ~ line 29 ~ onSubmit ~ data", data);
    };

    return (
        <Container className="p-3">
            <LogoBanner />
            <h3 {...{ className: "p-0 pb-4" }}>Inscription</h3>
            <Form {...{ onSubmit: handleSubmit(onSubmit) }}>
                <Form.Text id="passwordHelpBlock" className="pb-3">
                    Nous avons besoin de quelques informations supplémentaires
                    pour creer votre compte
                </Form.Text>
                <Form.Group>
                    <Form.Label>Nom</Form.Label>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <Form.Control
                                {...{
                                    ...field,
                                    type: "text",
                                    placeholder: "Nom",
                                }}
                            />
                        )}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Prenom</Form.Label>
                    <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <Form.Control
                                {...{
                                    ...field,
                                    type: "text",
                                    placeholder: "Prenom",
                                }}
                            />
                        )}
                    />
                </Form.Group>
                <Form.Group>
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
                                    placeholder: "Email",
                                }}
                            />
                        )}
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
