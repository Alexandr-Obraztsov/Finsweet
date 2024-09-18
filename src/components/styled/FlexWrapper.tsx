import styled from "styled-components";

type FlexWrapperPropsType = {
    justify?: "start" | "center" | "end" | "space-between" | "space-around" | "space-evenly"
    align?: "start" | "center" | "end"
    direction?: "row" | "column"
    gap?: number
    wrap?: "wrap" | "nowrap"
    width?: string
    height?: string
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    flex-direction: ${props => props.direction};
    gap: ${props => props.gap}px;
    flex-wrap: ${props => props.wrap};
    width: ${props => props.width};
    height: ${props => props.height};
`