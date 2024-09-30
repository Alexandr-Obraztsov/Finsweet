import * as React from 'react';
import {Header} from "../header/Header";
import {Container} from "../../components/container/Container";
import {HomeHero} from "./sections/homeHero/HomeHero";
import {FeaturedPosts} from "./featuredPosts/FeaturedPosts";
import {AboutUs} from "./sections/aboutUs/AboutUs";
import {Categories} from "./categories/Categories";
import {SpecialPost} from "./sections/specialPost/SpecialPost";
import {ListOfAuthors} from "./sections/listOfAuthors/ListOfAuthors";
import {LogoComponent} from "./sections/logoComponent/LogoComponent";
import {Testimonials} from "./sections/testimonials/Testimonials";
import {Footer} from "../footer/Footer";

export const Home : React.FC = () => {
    return (
        <>
            <Header/>
            <Container>
                <HomeHero/>
                <FeaturedPosts/>
                <AboutUs/>
                <Categories/>
                <SpecialPost/>
                <ListOfAuthors/>
                <LogoComponent/>
                <Testimonials/>
            </Container>
            <Footer/>
        </>
    );
};