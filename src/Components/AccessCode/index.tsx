import * as React from "react";

// import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";

import { IAccessCode } from "./AccessCode";
import { LogoBanner } from "@Components";

// #region Local Imports
// import { IStore } from "@Redux/IStore";
// import { AccessCodeActions } from "@Actions";

// #endregion Local Imports

// #endregion Interface Imports

export const AccessCode: React.FunctionComponent<IAccessCode.IProps> = () =>
    // props: IAccessCode.IProps
    {
        // const accessCode = useSelector((state: IStore) => state.accessCode);
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
                <h3 {...{ className: "p-0 pb-4" }}>Code d&apos;accès</h3>
                <Form {...{ onSubmit: handleSubmit(onSubmit) }}>
                    <Form.Group>
                        <Form.Label>Code</Form.Label>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Form.Control
                                    {...{
                                        ...field,
                                        type: "text",
                                        placeholder:
                                            "Code d'accès communiqué par votre admin",
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
