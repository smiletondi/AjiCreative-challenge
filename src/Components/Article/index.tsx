import { Button, Card, Container } from "react-bootstrap";

import { IArticle } from "./Article";
import React from "react";
import { StyledCard } from "./styled";

export const Article: React.FunctionComponent<IArticle.IProps> = (
    props: IArticle.IProps
) => {
    const { content } = props;
    return (
        <Container {...{ className: "m-0 my-2" }}>
            <StyledCard>
                <Card.Img {...{ variant: "top", src: content?.imageLink }} />
                <Card.Body>
                    <Card.Title>{content?.title}</Card.Title>
                    <Card.Text>{content?.summarry}</Card.Text>
                </Card.Body>
            </StyledCard>
        </Container>
    );
};
