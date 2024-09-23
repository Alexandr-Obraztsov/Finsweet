
import * as React from 'react';
import styled, {css} from "styled-components";
import {globalTheme} from "../../../../GlobalTheme";
import {HeadingH3} from "../../../../components/styled/HeadingH3";
import {Body1} from "../../../../components/styled/Body1";

export type CategoryType = {
    id: string,
    icon: string,
    title: string,
    description: string,
    active: boolean
}

export const CategoriesList : React.FC<{categories: CategoryType[]}> = ({categories}) => {
    return (
        <StyledCategoriesList>
            {categories.map((category) => (
                <Category key={category.id} active={category.active}>
                    <img src={category.icon} alt={category.title}/>
                    <HeadingH3 style={{marginTop: "16px"}}>{category.title}</HeadingH3>
                    <Body1 style={{marginTop: "4px"}}>{category.description}</Body1>
                </Category>
            ))}
        </StyledCategoriesList>
    );
};

const Category = styled.li<{active: boolean}>`
    padding: 32px;
    ${props => props.active && css`background-color: ${globalTheme.colors.yellow}`};
    ${props => !props.active && css`border: 1px solid ${globalTheme.colors.mediumGrey}`};
`

const StyledCategoriesList = styled.ul`
    margin-top: 48px;
    display: flex;
    list-style: none;
    gap: 32px;
`