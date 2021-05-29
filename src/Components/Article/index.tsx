import { Button, Card, Container } from "react-bootstrap";

import { IArticle } from "./Article";
import React from "react";
import { StyledCard } from "./styled";

export const Article: React.FunctionComponent<IArticle.IProps> = (
    props: IArticle.IProps
) => {
    const title = "Putting out the fire....";
    const publisher = "Le point";
    const author = "Richard";
    return (
        <Container {...{ className: "m-0 my-2" }}>
            <StyledCard>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </StyledCard>
        </Container>
    );
};
