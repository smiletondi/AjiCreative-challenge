/* eslint-disable import/order */
import * as React from "react";

import { Button, Container, Form } from "react-bootstrap"; // #endregion Global Imports
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { HomeActions } from "@Actions";
import { IPassword } from "./Password";
import { IStore } from "@Redux/IStore";
import { LogoBanner } from "@Components";
import { StlyedIcon } from "./styled";

const arrowLeftSolidIcon = "/images/arrow-left-solid.svg";

export const Password: React.FunctionComponent<IPassword.IProps> = () =>
    // props: IPassword.IProps
    {
        const userEmail = useSelector(
            (state: IStore) => state?.home?.user?.email
        );
        // console.log("🚀 ~ file: index.tsx ~ line 29 ~ userEmail", userEmail);
        const dispatch = useDispatch();
        const { handleSubmit, control } = useForm();
        const onSubmit = (
            data: IPassword.IForm,
            e: React.BaseSyntheticEvent
        ) => {
            e?.preventDefault();
            dispatch(
                HomeActions.ValidatePassword({
                    ...data,
                })
            );
        };
        const checkPreviousPath = () => {
            dispatch(
                HomeActions.ChangePath({
                    path: "registration",
                })
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
                            onClick: checkPreviousPath,
                        }}
                    />
                    <span className="text-muted">{userEmail}</span>
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
                        Se connecter
                    </Button>
                </Form>
            </Container>
        );
    };
