import * as React from 'react';
import styled from "styled-components";
import {globalTheme} from "../../GlobalTheme";
import logo from "../../assets/svgs/logo.svg"
import {FlexWrapper} from "../../components/styled/FlexWrapper";
import {LinksList} from "../../components/linksList/LinksList";
import {Button} from '../../components/button/Button';
import {Container} from "../../components/container/Container";

type HeaderPropsType = {};


export const Header: React.FC<HeaderPropsType> = () => {
    return (
            <StyledHeader>
                <Container style={{padding: "12px 80px"}}>
                    <FlexWrapper justify={"space-between"} align={"center"} width="100%">
                        <a href={"#"}>
                            <img src={logo} alt="Logo"/>
                        </a>
                        <FlexWrapper gap={32}>
                            <LinksList/>
                            <Button as={"a"} theme={"white"} href={"#"}>Get started</Button>
                        </FlexWrapper>
                    </FlexWrapper>
                </Container>
            </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: ${globalTheme.colors.black};
    position: sticky;
    top: 0;
    z-index: 9999;
`