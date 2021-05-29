/* eslint-disable import/order */
// #region Global Imports
import * as React from "react";

// import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Form } from "react-bootstrap"; // #endregion Global Imports
import { Controller, useForm } from "react-hook-form";

import { IPassword } from "./Password";
// #region Interface Imports
import { LogoBanner } from "@Components";
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
                <Form {...{ onSubmit: handleSubmit(onSubmit) }}>
                    <Form.Group>
                        <Form.Label>Mode de passe</Form.Label>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Form.Control
                                    {...{
                                        ...field,
                                        type: "password",
                                        placeholder: "Mot de passe",
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
                        Se connecter
                    </Button>
                </Form>
            </Container>
        );
    };
