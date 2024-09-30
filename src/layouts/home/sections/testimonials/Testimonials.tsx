import * as React from 'react';
import styled from "styled-components";
import {globalTheme} from "../../../../GlobalTheme";
import {Cap1} from "../../../../components/styled/Cap1";
import {HeadingH2} from "../../../../components/styled/HeadingH2";
import {Body1} from "../../../../components/styled/Body1";
import {Comment, CommentType} from "./comment/Comment";
import author from "../../../../assets/images/author.png"
import {v1} from "uuid";

const comments = [
    {
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: author,
        name: "John Doe",
        description: "New york, USA",
    },
    {
        message: "Илья Лох",
        image: author,
        name: "Саша образцов",
        description: "New york, USA",
    }
]


export const Testimonials : React.FC = () => {
    const [messageId, setMessageId] = React.useState<number>(0);

    const nextButtonCallback = () => {
        messageId === comments.length - 1 ? setMessageId(0) : setMessageId(messageId + 1)
    }

    const backButtonCallback = () => {
        messageId === 0 ? setMessageId(comments.length - 1) : setMessageId(messageId - 1)
    }

    return (
        <StyledTestimonials>
            <Heading>
                <Cap1>TESTIMONIALs</Cap1>
                <HeadingH2 style={{marginTop: "12px"}}>What people say about our blog</HeadingH2>
                <Body1 style={{marginTop: "16px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Body1>
            </Heading>
            <Comment {...comments[messageId]} nextButtonCallback={nextButtonCallback} backButtonCallback={backButtonCallback}/>
        </StyledTestimonials>
    );
};

const StyledTestimonials = styled.section`
    margin-top: 96px;
    background-color: ${globalTheme.colors.lightYellow};
    padding: 80px 112px 75px;
    display: flex;
`

const Heading = styled.article`
    max-width: 350px;
    margin-right: 80px;
`