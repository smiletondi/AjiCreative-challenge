/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Container, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import React, { BaseSyntheticEvent } from "react";

import { IRegistration } from "./Registration";
import { LogoBanner } from "@Components";

export const Registration: React.FunctionComponent<IRegistration.IProps> = (
    props: IRegistration.IProps
) => {
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
