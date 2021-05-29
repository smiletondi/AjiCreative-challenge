/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Container, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import React, { BaseSyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HomeActions } from "@Actions";
import { IHomePage } from "@Interfaces";
import { IRegistration } from "./Registration";
import { IStore } from "@Redux/IStore";
import { LogoBanner } from "@Components";

export const Registration: React.FunctionComponent<IRegistration.IProps> = (
    props: IRegistration.IProps
) => {
    const existingUser: IHomePage.UserFields = useSelector(
        (state: IStore) => state?.home?.user
    );
    const { handleSubmit, control } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data: IRegistration.IForm, e: BaseSyntheticEvent) => {
        e?.preventDefault();
        dispatch(
            HomeActions.ValidateRegistration({
                ...data,
            })
        );
    };

    return (
        <Container className="p-3">
            <LogoBanner />
            <h3 {...{ className: "p-0 pb-4" }}>Inscription</h3>
            <Form {...{ onSubmit: handleSubmit(onSubmit) }}>
                <Form.Text className="pb-3">
                    Nous avons besoin de quelques informations supplémentaires
                    pour creer votre compte
                </Form.Text>
                <Form.Group>
                    <Form.Label>Nom</Form.Label>
                    <Controller
                        {...{
                            name: "name",
                            control,
                            defaultValue: existingUser?.name || "",
                            render: ({ field }) => (
                                <Form.Control
                                    {...{
                                        ...field,
                                        type: "text",
                                        placeholder: "Nom",
                                    }}
                                    required
                                />
                            ),
                        }}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Prenom</Form.Label>
                    <Controller
                        name="firstName"
                        control={control}
                        defaultValue={existingUser?.firstName || ""}
                        render={({ field }) => (
                            <Form.Control
                                {...{
                                    ...field,
                                    type: "text",
                                    placeholder: "Prenom",
                                }}
                                required
                            />
                        )}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>E-mail</Form.Label>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue={existingUser?.email || ""}
                        render={({ field }) => (
                            <Form.Control
                                {...{
                                    ...field,
                                    type: "email",
                                    placeholder: "Email",
                                }}
                                required
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
