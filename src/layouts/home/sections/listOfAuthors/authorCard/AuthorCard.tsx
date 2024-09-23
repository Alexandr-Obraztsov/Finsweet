import * as React from 'react';
import styled from "styled-components";
import {HeadingH3} from "../../../../../components/styled/HeadingH3";
import {Body2} from "../../../../../components/styled/Body2";
import {SocialWrapper} from "../../../../../components/socialWrapper/SocialWrapper";
import {FlexWrapper} from "../../../../../components/styled/FlexWrapper";

export type AuthorCardType = {
    backColor: string
    image: string
    name: string
    description: string
    socials: { facebook?: string, twitter?: string, instagram?: string, linkedIn?: string }
};


export const AuthorCard : React.FC<AuthorCardType> = ({backColor, image, name, description, socials}) => {
    return (
        <StyledAuthorCard backColor={backColor}>
            <FlexWrapper direction={"column"} align={"center"}>
                <Image src={image}/>
                <HeadingH3 style={{textAlign: "center", marginTop: "20px"}}>{name}</HeadingH3>
                <Body2>{description}</Body2>
                <SocialWrapper style={{marginTop: "20px"}} {...socials}/>
            </FlexWrapper>
        </StyledAuthorCard>
    );
};

const StyledAuthorCard = styled.div<{backColor: string}>`
    background-color: ${props => props.backColor};
    flex-grow: 1;
    padding: 40px 0;
`

const Image = styled.img`
    width: 128px;
    height: 128px;
    border-radius: 50%;
    object-fit: cover;
`