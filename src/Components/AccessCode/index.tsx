// #region Global Imports
import * as React from "react";

// import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";

// #region Interface Imports
import { IAccessCode } from "./AccessCode";
// #endregion Global Imports
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

        return (
            <Container className="p-3">
                <LogoBanner />
                <h3 {...{ className: "p-0 pb-4" }}>Code d&apos;accès</h3>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Code</Form.Label>
                        <Form.Control
                            {...{
                                type: "email",
                                placeholder:
                                    "Code d'accès communiqué par votre admin",
                            }}
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
