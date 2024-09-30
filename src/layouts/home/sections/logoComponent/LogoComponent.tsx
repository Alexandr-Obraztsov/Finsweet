import * as React from 'react';
import logo1 from "../../../../assets/svgs/logo1.svg";
import logo2 from "../../../../assets/svgs/logo2.svg";
import logo3 from "../../../../assets/svgs/logo3.svg";
import logo4 from "../../../../assets/svgs/logo4.svg";
import logo5 from "../../../../assets/svgs/logo5.svg";
import logo6 from "../../../../assets/svgs/logo6.svg";
import {FlexWrapper} from "../../../../components/styled/FlexWrapper";
import styled from "styled-components";


export const LogoComponent : React.FC = () => {
    return (
        <StyledLogoComponent>
            <img src={logo1} alt={"Logo 1"}/>
            <img src={logo2} alt={"Logo 2"}/>
            <img src={logo3} alt={"Logo 3"}/>
            <img src={logo4} alt={"Logo 4"}/>
            <img src={logo5} alt={"Logo 5"}/>
            <img src={logo6} alt={"Logo 6"}/>
        </StyledLogoComponent>
    );
};

const StyledLogoComponent = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 96px;
`