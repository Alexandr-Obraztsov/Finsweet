import * as React from 'react';
import styled from "styled-components";
import {HeadingH2} from "../../../components/styled/HeadingH2";
import {MainPost, MainPostPropsType} from "./mainPost/MainPost";
import mainPostImage from "../../../assets/images/building.png";
import {Post, PostPropsType} from "./post/Post";

type FeaturedPostsPropsType = {};

const mainPost : MainPostPropsType = {
    image: mainPostImage,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    author: "John Doe",
    date: "May 23, 2022",
    link: "https://it-incubator.io/"
}

const posts : (PostPropsType & {id: string})[] = [
    {
        id: "1",
        author: "John Doe",
        date: "May 23, 2022",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
        id: "2",
        author: "John Doe",
        date: "May 23, 2022",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
        id: "3",
        author: "John Doe",
        date: "May 23, 2022",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    }
]


export const FeaturedPosts: React.FC<FeaturedPostsPropsType> = (props) => {
    return (
        <StyledFeaturedPosts>
            <HeadingH2>Featured Post</HeadingH2>
            <HeadingH2>All Posts</HeadingH2>
            <MainPost {...mainPost}/>
            {posts.map((post, index) =>
                <Post key={post.id}
                      isYellow={(index+1) % 2 === 0}
                      {...post}
                />)}
        </StyledFeaturedPosts>
    );
};

const StyledFeaturedPosts = styled.section`
    padding: 128px 80px 0;
    background-color: white;

    display: grid;
    grid-template-columns: 7fr 5fr;
    grid-template-rows: auto repeat(4, 1fr);
    gap: 32px;

`