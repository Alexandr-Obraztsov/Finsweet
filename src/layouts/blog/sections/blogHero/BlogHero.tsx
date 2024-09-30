import * as React from 'react';
import styled from "styled-components";
import {globalTheme} from "../../../../GlobalTheme";
import {Cap3} from "../../../../components/styled/Cap3";
import {HeadingH2} from "../../../../components/styled/HeadingH2";
import {Label1} from "../../../../components/styled/Label1";
import {Body1} from "../../../../components/styled/Body1";
import {Button} from "../../../../components/button/Button";
import blogHeroImage from "../../../../assets/images/blogHero.png";
import {FlexWrapper} from "../../../../components/styled/FlexWrapper";

export const BlogHero : React.FC = () => {
    return (
        <StyledBlogHero>
            <FlexWrapper gap={141}>
                <div>
                    <Cap3 style={{display: "block", marginTop: "14px"}}>Featured Post</Cap3>
                    <HeadingH2 style={{marginTop: "20px"}}>Step-by-step guide to choosing great font pairs</HeadingH2>
                    <Label1 style={{display: "block", marginTop: "16px"}}>By <span style={{color: globalTheme.colors.purple}}>John Doe</span>l May 23, 2022 </Label1>
                    <Body1 style={{marginTop: "16px"}}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</Body1>
                    <Button style={{marginTop: "32px"}} theme={"yellow"}>Read More &gt;</Button>
                </div>
                <Picture src={blogHeroImage} alt={"Человек за компом"}/>
            </FlexWrapper>
        </StyledBlogHero>
    );
};

const StyledBlogHero = styled.main`
    padding: 80px;
    background-color: ${globalTheme.colors.lavender};
`

const Picture = styled.img`
    max-width: 515px;
    height: 359px;
    width: 100%;
    object-fit: cover;
`