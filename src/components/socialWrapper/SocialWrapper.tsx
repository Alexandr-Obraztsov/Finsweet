import * as React from 'react';
import {FlexWrapper} from "../styled/FlexWrapper";
import facebook from "../../assets/svgs/facebook.svg";
import twitter from "../../assets/svgs/twitter.svg";
import instagram from "../../assets/svgs/instagram.svg";
import linkedIn from "../../assets/svgs/linkedIn.svg";

type SocialWrapperPropsType = {
    facebook?: string,
    twitter?: string,
    instagram?: string
    linkedIn?: string
};

export const SocialWrapper : React.FC<SocialWrapperPropsType> = (props) => {
    return (
        <FlexWrapper gap={26.7}>
            {props.facebook && <a href={props.facebook} target={"_blank"}><img src={facebook} alt={"Facebook"}/></a>}
            {props.twitter && <a href={props.twitter} target={"_blank"}><img src={twitter} alt={"Twitter"}/></a>}
            {props.instagram && <a href={props.instagram} target={"_blank"}><img src={instagram} alt={"Instagram"}/></a>}
            {props.linkedIn && <a href={props.linkedIn} target={"_blank"}><img src={linkedIn} alt={"LinkedIn"}/></a>}
        </FlexWrapper>
    );
};

