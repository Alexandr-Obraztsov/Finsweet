import * as React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/styled/FlexWrapper";
import logo from "../../svgs/logo.svg"
import {LinksList} from "../../components/linksList/LinksList";
import {globalTheme} from "../../GlobalTheme";
import {Button} from "../../components/button/Button";
import {TextField} from "../../components/textField/TextField";
import {HeadingH2} from "../../components/headings/HeadingH2";
import {SocialWrapper} from "../../components/socialWrapper/SocialWrapper";

export const Footer: React.FC = () => {
    return (
        <StyledFooter>
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
            <FlexWrapper style={{"marginTop": "48px"}}>
                <ContactInformation>
                    <address>Finstreet 118 2561 Fintown</address>
                    <address>Hello@finsweet.com  020 7993 2905</address>
                </ContactInformation>
                <SocialWrapper facebook={"#"} twitter={"#"} instagram={"#"} linkedIn={"#"}/>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledText = styled(HeadingH2)`
    color: ${globalTheme.colors.lightGrey};
    text-align: left;
`

const StyledFooter = styled.footer`
    background-color: ${globalTheme.colors.black};
    padding: 61px 80px 56px;

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

    & address {
        font-style: normal;
        color: #FFFFFF;
        font-family: Inter, sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        text-align: left;
    }
`