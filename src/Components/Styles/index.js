import styled, { createGlobalStyle }  from "styled-components"
export const GlobalStyle = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
`
export const SectionContainer = styled.section`
    width: 84%;
    height: 50vh;
    display: flex;
    background: #d8cba3;
    position: relative;
    top: 4%;
`
export const SectionsPictureBox = styled.div`
width: 35%;
height: 100%;
img{
    width: 100%;
    height: 100%;
}
`
export const SectionsTitleBox = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   background: #2f4143;
   color: #fff;
   @media (min-width: 127px){
      width: 35%;
      height: 100%;
      font-family: 'Montserrat', sans-serif;
         h2{
            font-size: 2em;
            font-weight: normal;
         }
   }
`
export const SectionsTextBox = styled.div`
   display: flex;
   @media (min-width: 1279px){
      width: 65%;
      background: #dfdfe0;
      justify-content: center;
   }
`
export const SectionsTextContentBox = styled.div`
   display: flex;
   font-family: 'Montserrat', sans-serif;
   @media (min-width: 1279px){
      width: 80%;
      height: 100%;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
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