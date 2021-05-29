import * as React from "react";

import { Button, Container, Navbar, Spinner } from "react-bootstrap";

import { Article } from "@Components";
import { IFeed } from "./Feed";
import { IStore } from "@Redux/IStore";
import { useInfiniteQuery } from "react-query";
import { useSelector } from "react-redux";

const LOGO_IMAGE = "/images/logoAjiCreative.png";
// const NEWS_API_KEY = process?.env?.NEWS_API_KEY;
const NEWS_API_KEY = "464037e5e124472c9610e3f563c9cadc";

const fetchArticles = ({ pageParam = 0 }) =>
    fetch(
        `https://newsapi.org/v2/top-headlines?country=ca&apiKey=${NEWS_API_KEY}&pageSize=2&page=${pageParam}`
    )
        .then(response => {
            return response.json();
        })
        .then(data => data.articles)
        .catch(err => console.log(err));

export const Feed: React.FunctionComponent<IFeed.IProps> = (
    props: IFeed.IProps
) => {
    const storeHome = useSelector((state: IStore) => state?.home);
    const {
        fetchNextPage,
        data: fetchedArticlesData,
        isFetching,
        isPreviousData,
    } = useInfiniteQuery(["articles"], fetchArticles, {
        keepPreviousData: true,
        refetchOnWindowFocus: false,
        getNextPageParam: (lastPage, allPages) => {
            return allPages?.length + 1;
        },
    });
    const articlesData = fetchedArticlesData?.pages?.flat();
    const loadMore = fetchNextPage;

    return (
        <Container
            {...{
                className: "w-100 d-flex flex-column justify-content-center",
            }}
        >
            <Navbar bg="light" fixed="top" className="mb-2">
                <Container className="w-100 m-0 p-0">
                    <Navbar.Brand className="w-100 m-0 p-0">
                        <img
                            src={LOGO_IMAGE}
                            width="100%"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <div {...{ style: { minHeight: "5em" } }}></div>
            {articlesData?.map((article: any, idx: number) => (
                <Article
                    {...{
                        key: idx,
                        content: {
                            imageLink: article?.urlToImage,
                            title: article?.title,
                            summarry: article?.description,
                        },
                    }}
                />
            ))}
            <Button
                {...{
                    onClick: loadMore,
                    className: "m-2",
                    variant: "light",
                }}
            >
                {!isFetching ? (
                    "Charger plus"
                ) : (
                    <Spinner animation="grow" variant="secondary" />
                )}
            </Button>
        </Container>
    );
};
