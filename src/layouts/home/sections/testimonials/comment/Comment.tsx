
import * as React from 'react';
import styled from "styled-components";
import {globalTheme} from "../../../../../GlobalTheme";
import {HeadingH4} from "../../../../../components/styled/HeadingH4";
import {FlexWrapper} from "../../../../../components/styled/FlexWrapper";
import {Body1} from "../../../../../components/styled/Body1";
import {IconButton} from "../../../../../components/iconButton/IconButton";
import arrowLeft from "../../../../../assets/svgs/arrowLeft.svg"
import arrowRight from "../../../../../assets/svgs/arrowRight.svg"

export type CommentType = {
    message: string
    image: string
    name: string
    description: string
    backButtonCallback: () => void
    nextButtonCallback: () => void
}

export const Comment : React.FC<CommentType> = ({message, image, name, description, backButtonCallback, nextButtonCallback}) => {
    return (
        <StyledComment>
            <FlexWrapper direction="column" justify="space-between" height="100%" width="100%">

                <HeadingH4 style={{maxWidth: "469px"}}>{message}</HeadingH4>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <FlexWrapper align={"center"}>
                        <Picture src={image} alt="author"/>
                        <FlexWrapper direction="column" style={{marginLeft: "16px"}}>
                            <HeadingH4>{name}</HeadingH4>
                            <Body1>{description}</Body1>
                        </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper gap={24} align={"center"}>
                        <IconButton onClick={backButtonCallback}><img src={arrowLeft} alt={"back"}/></IconButton>
                        <IconButton onClick={nextButtonCallback} backgroundColor={globalTheme.colors.black} size={62}><img src={arrowRight} alt={"next"}/></IconButton>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </StyledComment>
    );
};

const StyledComment = styled.article`
    border-left: 1px solid ${globalTheme.colors.mediumGrey};
    padding-left: 96px;
    height: 310px;
    width: 100%;
`

const Picture = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
`