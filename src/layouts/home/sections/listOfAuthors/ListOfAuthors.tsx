import * as React from 'react';
import styled from "styled-components";
import {HeadingH2} from "../../../../components/styled/HeadingH2";
import {AuthorCard, AuthorCardType} from "./authorCard/AuthorCard";
import {globalTheme} from "../../../../GlobalTheme";
import {FlexWrapper} from "../../../../components/styled/FlexWrapper";
import authorExample from "../../../../assets/images/author.png";
import {v1} from "uuid";

const authors : (AuthorCardType & {id: string})[] = [
    {
        id: v1(),
        backColor: globalTheme.colors.lightGrey,
        image: authorExample,
        name: "Floyd Miles",
        description: "Content Writer @Company",
        socials: {
            twitter: "#",
            facebook: "#",
            instagram: "#",
            linkedIn: "#"
        }
    },
    {
        id: v1(),
        backColor: globalTheme.colors.lightYellow,
        image: authorExample,
        name: "Floyd Miles",
        description: "Content Writer @Company",
        socials: {
            twitter: "#",
            facebook: "#",
            instagram: "#",
            linkedIn: "#"
        }
    },
    {
        id: v1(),
        backColor: globalTheme.colors.lightGrey,
        image: authorExample,
        name: "Floyd Miles",
        description: "Content Writer @Company",
        socials: {
            twitter: "#",
            facebook: "#",
            instagram: "#",
            linkedIn: "#"
        }
    },
    {
        id: v1(),
        backColor: globalTheme.colors.lightGrey,
        image: authorExample,
        name: "Floyd Miles",
        description: "Content Writer @Company",
        socials: {
            twitter: "#",
            facebook: "#",
            instagram: "#",
            linkedIn: "#"
        }
    }

]


export const ListOfAuthors = () => {
    return (
        <StyledListOfAuthors>
            <HeadingH2 style={{textAlign: "center"}}>List of Authors</HeadingH2>
            <FlexWrapper gap={32} style={{marginTop: "48px"}}>
                {authors.map((author) => <AuthorCard key={author.id} {...author}/>)}
            </FlexWrapper>
        </StyledListOfAuthors>
    );
};


const StyledListOfAuthors = styled.section`
    margin-top: 128px;
`