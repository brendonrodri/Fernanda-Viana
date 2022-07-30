import React from "react";
import AboutMeComponent from "../AboutMe";
import FooterComponent from "../Footer";
import HeaderComponent from "../Header";
import * as S from "./styles"
export default function MainComponent(){
    return(
        <S.Main>
            <HeaderComponent />
            <AboutMeComponent />
            <FooterComponent />
        </S.Main>
    )
}