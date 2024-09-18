import * as React from 'react';
import styled from "styled-components";
import {globalTheme} from "../../GlobalTheme";
import {FlexWrapper} from "../styled/FlexWrapper";


export const LinksList : React.FC = () => {
    return (
        <nav>
            <FlexWrapper align={"center"} height="100%">
                <List>
                    <li><Link href="#home">Home</Link></li>
                    <li><Link href="#blog">Blog</Link></li>
                    <li><Link href="#about">About us</Link></li>
                    <li><Link href="#contact">Contact us</Link></li>
                    <li><Link href="#privacyPolice">Privacy Policy</Link></li>
                </List>
            </FlexWrapper>
        </nav>
    );
};


const List = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 24px;
    
  
`

const Link = styled.a`
    text-decoration: none;
    color: ${globalTheme.colors.lightGrey};
`