import * as React from 'react';
import styled from "styled-components";
import {ReactNode} from "react";

type IconButtonProps = StyledIconButtonType & {
    children: ReactNode,
    onClick?: () => void
    style?: React.CSSProperties
};


type StyledIconButtonType = {
    size?: number
    backgroundColor?: string
}


export const IconButton : React.FC<IconButtonProps> = ({children, style, size=48, backgroundColor="white", onClick=() => {}}) => {
    return (
        <StyledIconButton style={style} size={size} backgroundColor={backgroundColor} onClick={onClick}>
            {children}
        </StyledIconButton>
    );
};

const StyledIconButton = styled.button<StyledIconButtonType>`
    flex-shrink: 0;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-color: ${props => props.backgroundColor};
    border-radius: 50%;
    border: none;    
`