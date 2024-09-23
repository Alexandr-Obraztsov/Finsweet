import * as React from 'react';
import styled from "styled-components";
import {globalTheme} from "../../../../GlobalTheme";
import {FlexWrapper} from "../../../../components/styled/FlexWrapper";
import {Cap1} from "../../../../components/styled/Cap1";
import {HeadingH2} from "../../../../components/styled/HeadingH2";
import {Body1} from "../../../../components/styled/Body1";
import {HeadingH3} from "../../../../components/styled/HeadingH3";

export const AboutUs: React.FC = () => {
    return (
        <StyledAboutUs>
            <FlexWrapper gap={61}>
                <FlexElement>
                    <Cap1>About us</Cap1>
                    <HeadingH2 style={{marginTop: "24px", maxWidth: "490px"}}>We are a community of content writers who share their
                        learnings</HeadingH2>
                    <Body1 style={{marginTop: "16px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</Body1>
                </FlexElement>
                <FlexElement>
                    <Cap1>Our mision</Cap1>
                    <HeadingH3 style={{marginTop: "24px", maxWidth: "480px"}}>Creating valuable content for creatives all around the
                        world</HeadingH3>
                    <Body1 style={{marginTop: "16px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</Body1>
                </FlexElement>
            </FlexWrapper>
        </StyledAboutUs>
    );
};

const FlexElement = styled.div`
    max-width: 515px;
`

const StyledAboutUs = styled.section`
    background-color: ${globalTheme.colors.lavender};
    padding: 119px 80px 96px;
    position: relative;

    &::before {
        content: "";
        display: block;
        position: absolute;
        height: 23px;
        background: linear-gradient(to right, white 0%, white 20%, ${globalTheme.colors.yellow} 20%, ${globalTheme.colors.yellow} 80%, ${globalTheme.colors.purple} 80%);
        top: -23px;
        left: 0;
        right: 0;
    }
`