import * as React from 'react';
import styled from "styled-components";
import {globalTheme} from "../../GlobalTheme";

export const TextField = styled.input`
    background-color: transparent;
    border: 1px solid ${globalTheme.colors.darkGrey};
    padding: 14px 25px;
    outline: none;
    box-shadow: none;

    color: ${globalTheme.colors.lightGrey};
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 400;
    
    &::placeholder {
        color: ${globalTheme.colors.mediumGrey};
        font-family: Inter, sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        text-align: left;
    }
`