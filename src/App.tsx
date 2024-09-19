import React from 'react';
import {Header} from "./layouts/header/Header";
import {Footer} from "./layouts/footer/Footer";
import {HomeHero} from "./layouts/home/sections/homeHero/HomeHero";
import {Container} from "./components/container/Container";
import {FeaturedPosts} from "./layouts/home/featuredPosts/FeaturedPosts";
import {AboutUs} from "./layouts/home/sections/aboutUs/AboutUs";
import {Categories} from "./layouts/home/categories/Categories";

function App() {
    return (
        <>
            <Header/>
            <Container>
                <HomeHero/>
                <FeaturedPosts/>
                <AboutUs/>
                <Categories/>
            </Container>
            <Footer/>
        </>
    );
}

export default App;
