import * as React from 'react';
import styled from "styled-components";
import {globalTheme} from "../../../../GlobalTheme";
import {Label1} from "../../../../components/styled/Label1";
import {HeadingH2} from "../../../../components/styled/HeadingH2";
import {Body1} from "../../../../components/styled/body1";
import {Button} from "../../../../components/button/Button";
import {HeadingH3} from "../../../../components/styled/HeadingH3";

export type MainPostPropsType = {
    image: string
    title: string
    description: string
    author: string
    date: string
    link?: string
};

export const MainPost: React.FC<MainPostPropsType> = (props) => {
    const {image, title, description, author, date} = props
    return (
        <StyledMainPost>
            <Image src={image}/>
            <pre>
                <Label1 style={{display: "block", marginTop: "24px"}}>
                    By <span style={{color: globalTheme.colors.purple}}>{author}</span>   |   {date}
                </Label1>
            </pre>
            <HeadingH3 style={{marginTop: "16px"}}>{title}</HeadingH3>

            <Body1 style={{marginTop: "16px", maxWidth: "90%"}}>
                {description}
            </Body1>

            <Button as={"a"} theme={"yellow"} marginTop="32px" href={props.link}>Read More &gt;</Button>
        </StyledMainPost>
    );
};

const StyledMainPost = styled.article`
    grid-column: 1;
    grid-row: 2 / span 3;
    padding: 32px;
    border: 1px solid ${globalTheme.colors.lightGrey};
`

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 352px;
`