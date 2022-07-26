import React from "react"
import NavBarComponent from "./Components/NavBar"
import { GlobalStyle } from "./Components/Styles"
export default function App (){
  return(
    <>
      <GlobalStyle />
      <NavBarComponent />
    </>
  );
}