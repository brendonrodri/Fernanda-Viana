import styled from "styled-components";
export const Header = styled.header`
    width: 84%;
    height: 100vh;
    display: flex;
    background: #d8cba3;
    position: relative;
    top: 4.5%;
`
export const HeaderPictureBox = styled.div`
    width: 35%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
    }
`
export const HeaderTextSection = styled.section`
    width: 65%;
    background: #dfdfe0;
    display: flex;
    justify-content: center;
`
export const HeaderTextBox = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    @media (min-width: 1279px){
        h1{
            font-size: 3.2em;
            margin: 10px;
        }
        p{
            font-size: 1.6em;
            width: 76%;
            margin: 10px;
        }
    }
`