import * as React from 'react';
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import {BlogHero} from "./sections/blogHero/BlogHero";
import {Container} from "../../components/container/Container";

export const Blog : React.FC = () => {
    return (
        <>
            <Header/>
            <Container>
                <BlogHero/>
            </Container>
            <Footer/>
        </>
    );
};