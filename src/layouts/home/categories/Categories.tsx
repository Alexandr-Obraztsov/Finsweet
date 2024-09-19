import * as React from 'react';
import styled from "styled-components";
import {HeadingH2} from "../../../components/styled/HeadingH2";
import {CategoriesList, CategoryType} from "./categoriesList/CategoriesList";
import {v1} from "uuid";
import BusinessIcon from "../../../assets/svgs/Business.svg";

const categories : CategoryType[] = [
    {
        id: v1(),
        icon: BusinessIcon,
        title: "Business",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        active: false
    },
    {
        id: v1(),
        icon: BusinessIcon,
        title: "Business",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        active: true
    },
    {
        id: v1(),
        icon: BusinessIcon,
        title: "Business",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        active: false
    },
    {
        id: v1(),
        icon: BusinessIcon,
        title: "Business",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        active: false
    }
]


export const Categories: React.FC = () => {
    return (
        <StyledCategories>
            <HeadingH2 style={{textAlign: "center"}}>Choose A Catagory</HeadingH2>
            <CategoriesList categories={categories}/>
        </StyledCategories>
    );
};


const StyledCategories = styled.section`
    margin-top: 128px;
`