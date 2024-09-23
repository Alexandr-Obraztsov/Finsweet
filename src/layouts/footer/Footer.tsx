import * as React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/styled/FlexWrapper";
import logo from "../../assets/svgs/logo.svg"
import {LinksList} from "../../components/linksList/LinksList";
import {globalTheme} from "../../GlobalTheme";
import {Button} from "../../components/button/Button";
import {TextField} from "../../components/textField/TextField";
import {HeadingH2} from "../../components/styled/HeadingH2";
import {SocialWrapper} from "../../components/socialWrapper/SocialWrapper";
import {Container} from "../../components/container/Container";
import {Body1} from "../../components/styled/Body1";

export const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <Container style={{padding: "61px 80px 56px"}}>
                <FlexWrapper justify={"space-between"}>
                    <img src={logo} alt={"Logo"}/>
                    <LinksList/>
                </FlexWrapper>
                <StyledCTA justify={"space-between"} align={"center"} gap={64}>
                    <StyledText>Subscribe to our news letter to get latest updates and news</StyledText>
                    <FlexWrapper gap={24}>
                        <TextField type="text" placeholder={"Enter your email"}/>
                        <Button theme={"yellow"}>Subscribe</Button>
                    </FlexWrapper>
                </StyledCTA>
                <FlexWrapper style={{"marginTop": "48px"}} justify={"space-between"} align={"center"}>
                    <ContactInformation>
                        <Body1 as={"address"}>Finstreet 118 2561 Fintown</Body1>
                        <Body1 as={"address"}>Hello@finsweet.com 020 7993 2905</Body1>
                    </ContactInformation>
                    <SocialWrapper facebook={"#"} twitter={"#"} instagram={"#"} linkedIn={"#"}/>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledText = styled(HeadingH2)`
    color: ${globalTheme.colors.lightGrey};
    text-align: left;
`

const StyledFooter = styled.footer`
    background-color: ${globalTheme.colors.black};
`

const StyledCTA = styled(FlexWrapper)`
    margin-top: 55px;
    padding: 64px 80px;
    position: relative;

    &::after {
        content: "";
        background-color: white;
        opacity: 0.05;
        position: absolute;

        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
`

const ContactInformation = styled.div`
    opacity: 0.7;
    color: white;
`