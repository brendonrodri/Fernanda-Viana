import React from "react"
import NavBarComponent from "./Components/NavBar"
import { GlobalStyle } from "./Components/Styles"
import RoutesComponent from "./Services/Routes";
export default function App (){
  return(
    <>
      <GlobalStyle />
      <NavBarComponent />
      <RoutesComponent />
    </>
  );
}