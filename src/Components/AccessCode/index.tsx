/* eslint-disable import/order */
// import { useSelector, useDispatch } from "react-redux";
import { Alert, Button, Container, Form, InputGroup } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";

import { HomeActions } from "@Actions";
import { IAccessCode } from "./AccessCode";
import { LogoBanner } from "@Components";
import { useDispatch } from "react-redux";

const ADMIN_CODE = "123456789";

export const AccessCode: React.FunctionComponent<IAccessCode.IProps> = () =>
    // props: IAccessCode.IProps
    {
        // const accessCode = useSelector((state: IStore) => state.accessCode);
        const dispatch = useDispatch();
        const { handleSubmit, control } = useForm();
        const [accessCodeHasErrors, setAccessCodeHasErrors] = useState(false);
        useEffect(() => {
            return () => {
                setAccessCodeHasErrors(false);
            };
        }, []);
        const onSubmit = (
            data: IAccessCode.IForm,
            e: React.BaseSyntheticEvent<object, any, any>
        ) => {
            e?.preventDefault();
            if (ADMIN_CODE !== data?.accessCode) {
                return setAccessCodeHasErrors(true);
            }
            setAccessCodeHasErrors(false);
            dispatch(
                HomeActions.ChangePath({
                    path: "registration",
                })
            );
        };

        return (
            <Container className="p-3">
                <LogoBanner />
                <h3 {...{ className: "p-0 pb-4" }}>Code d&apos;accès</h3>
                <Form {...{ onSubmit: handleSubmit(onSubmit) }}>
                    <Form.Group>
                        <Form.Label>Code</Form.Label>
                        <InputGroup hasValidation>
                            <Controller
                                name="accessCode"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Form.Control
                                        {...{
                                            ...field,
                                            type: "text",
                                            isInvalid: accessCodeHasErrors,
                                            placeholder:
                                                "Code d'accès communiqué par votre admin",
                                        }}
                                    />
                                )}
                            />
                            {accessCodeHasErrors ? (
                                <Alert variant="danger" className="w-100 mt-2">
                                    <small>Code d'accès incorrecte</small>
                                </Alert>
                            ) : null}
                        </InputGroup>
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
