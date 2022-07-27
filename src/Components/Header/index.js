import React from "react";
import * as S from "./styles";
import fernanda from "../../Assets/fernanda.jpg";
export default function HeaderComponent(){
    return(
        <S.Header>
            <S.HeaderPictureBox>
                <img src={fernanda} alt="Fernanda Viana" />
            </S.HeaderPictureBox>
            <S.HeaderTextSection>
                <S.HeaderTextBox>
                    <h1>Olá, <br/> eu sou <br/>Fernanda <br/> Viana</h1>
                    <p> 
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI.
                    </p>
                </S.HeaderTextBox>
            </S.HeaderTextSection>
        </S.Header>
    );
}