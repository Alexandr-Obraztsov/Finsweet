import * as React from 'react';
import styled from "styled-components";
import specialPost from "../../../../assets/images/specialPost.png";
import {Cap1} from "../../../../components/styled/Cap1";
import {HeadingH1} from "../../../../components/styled/HeadingH1";
import {Body1} from "../../../../components/styled/Body1";
import {Button} from "../../../../components/button/Button";

export const SpecialPost: React.FC = () => {
    return (
        <StyledSpecialPost>
            <Content>
                <Cap1>Why we started</Cap1>
                <HeadingH1 style={{marginTop: "24px"}}>It started out as a simple idea and evolved into our passion</HeadingH1>
                <Body1 style={{marginTop: "16px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip.</Body1>
                <Button theme={"yellow"} style={{marginTop: "32px"}}>Discover our story &gt;</Button>
            </Content>
        </StyledSpecialPost>
    );
};

const StyledSpecialPost = styled.section`
    height: 705px;
    margin-top: 128px;
    background-image: url(${specialPost});
    background-size: 949px 100%;
    background-repeat: no-repeat;
    position: relative;
`

const Content = styled.article`
    background-color: white;
    padding: 80px;
    max-width: 706px;
    position: absolute;
    right: 0;
    bottom: 0;

`