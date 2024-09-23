import * as React from 'react';
import styled from "styled-components";
import {Container} from "../../../../components/container/Container";
import backImage from "../../../../assets/images/homeHeroBackground.png";
import {Display} from "../../../../components/styled/Display";
import {Body1} from "../../../../components/styled/Body1";
import {globalTheme} from "../../../../GlobalTheme";
import {Button} from "../../../../components/button/Button";
import {Cap1} from "../../../../components/styled/Cap1";

export const HomeHero: React.FC = () => {

    const colorAndMarginStyle = {
        "color": "white",
        "marginTop": "24px",
    }

    return (
        <StyledHomeHero>
            <HomeContainer>
                <Cap1 style={{color: "white"}}>
                    Posted on <span style={{"fontWeight": "bold"}}>startup</span>
                </Cap1>

                <Display style={{...colorAndMarginStyle, "maxWidth": "70%"}}>
                    Step-by-step guide to choosing great font pairs
                </Display>

                <Body1 style={colorAndMarginStyle}>
                    By <span style={{"color": globalTheme.colors.yellow}}>James West</span> | May 23, 2022
                </Body1>

                <Body1 style={{...colorAndMarginStyle, "maxWidth": "45%"}}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident.
                </Body1>

                <Button theme={"yellow"} marginTop="48px">
                    Read More &gt;
                </Button>
            </HomeContainer>
        </StyledHomeHero>
    );
};

const StyledHomeHero = styled.main`
    height: 720px;
`

const HomeContainer = styled(Container)`
    background: radial-gradient(30.56% 76.04% at 74.58% 0%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%), url(${backImage});
    background-size: cover;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-left: 81px;

`