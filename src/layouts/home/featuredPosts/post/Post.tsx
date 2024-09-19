import * as React from 'react';
import styled, {css} from "styled-components";
import {Label1} from "../../../../components/styled/Label1";
import {globalTheme} from "../../../../GlobalTheme";
import {HeadingH2} from "../../../../components/styled/HeadingH2";
import {HeadingH4} from "../../../../components/styled/HeadingH4";

export type PostPropsType = {
    author: string
    date: string
    title: string
    isYellow?: boolean
};

export const Post : React.FC<PostPropsType> = (props) => {
    const {author, date, title} = props

    return (
        <StyledPost isYellow={props.isYellow}>
            <pre>
                <Label1 style={{display: "block"}}>
                    By <span style={{color: globalTheme.colors.purple}}>{author}</span>  |   {date}
                </Label1>
            </pre>

            <HeadingH4 style={{marginTop: "8px"}}>{title}</HeadingH4>
        </StyledPost>
    );
};

const StyledPost = styled.article<{isYellow?: boolean}>`
    grid-column: 2;
    padding: 32px;
    ${props => props.isYellow && css`background-color: ${globalTheme.colors.lightYellow};`}
`