import * as React from 'react';
import styled from "styled-components";
import {globalTheme} from "../../GlobalTheme";
import logo from "../../svgs/logo.svg"
import {FlexWrapper} from "../../components/styled/FlexWrapper";
import {LinksList} from "../../components/linksList/LinksList";
import { Button } from '../../components/button/Button';

type HeaderPropsType = {};


export const Header: React.FC<HeaderPropsType> = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify={"space-between"} align={"center"} width="100%">
                <a href={"#"}>
                    <img src={logo} alt="Logo"/>
                </a>
                <FlexWrapper gap={32}>
                    <LinksList/>
                    <Button as={"a"} theme={"white"} href={"#"}>Get started</Button>
                </FlexWrapper>
            </FlexWrapper>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    padding: 12px 80px;
    background-color: ${globalTheme.colors.black};
`