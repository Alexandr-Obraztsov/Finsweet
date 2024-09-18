import * as React from 'react';
import {AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode} from "react";
import styled from "styled-components";
import {globalTheme} from "../../GlobalTheme";

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement> & {
    theme: "yellow" | "white"
    icon?: ReactNode
    as?: "a" | "button"
};


export const Button : React.FC<ButtonPropsType> = (props) => {
    const {children, as, icon} = props

    return (
        <StyledButton as={as} {...props}>
            {children}
            {icon}
        </StyledButton>
    );
};

const StyledButton = styled.button<ButtonPropsType>`
    display: flex;
    align-items: center;
    background-color: ${props => props.theme === "yellow" ? globalTheme.colors.yellow : globalTheme.colors.lightGrey};
    color: ${globalTheme.colors.black};
    border: none;
    padding: 8px 16px;

    font-family: Sen, sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
`
