import * as React from 'react';
import {AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode} from "react";
import styled from "styled-components";
import {globalTheme} from "../../GlobalTheme";

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement> & {
    theme: "yellow" | "white"
    marginTop?: string
    as?: "a" | "button"
    onClick?: () => void
};


export const Button : React.FC<ButtonPropsType> = (props) => {
    const {children, as} = props

    return (
        <StyledButton as={as} {...props}>
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button<ButtonPropsType>`
    display: inline-block;
    align-items: center;
    background-color: ${props => props.theme === "yellow" ? globalTheme.colors.yellow : globalTheme.colors.lightGrey};
    color: ${globalTheme.colors.black};
    margin-top: ${props => props.marginTop ? props.marginTop : "0"};
    border: none;
    padding: 16px 48px;

    font-family: Sen, sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
`
