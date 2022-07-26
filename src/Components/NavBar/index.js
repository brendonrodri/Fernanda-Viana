import React, {useState} from "react";
import {FaBars} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import * as S from "./styles";
export default function NavBarComponent(){
    const [dropdownmenu, setDropdownMenu] = useState()
    const activeMenu = ()=>{
       setDropdownMenu(!dropdownmenu)
    }
    return(
        <S.NavBar>
            <IconContext.Provider value={{color: "rgba(255,255,255, 0.8)"}}>
                    <S.MenuButton onClick={()=>{
                        activeMenu()
                    }}>
                        <FaBars />
                    </S.MenuButton>
            </IconContext.Provider>
            {dropdownmenu && Menu()}
        </S.NavBar>
    );
}
const Menu = ()=>{
    return(
        <S.MenuList>
            <S.MenuListItem>Início</S.MenuListItem>
            <S.MenuListItem>Loja</S.MenuListItem>
            <S.MenuListItem>Dúvidas Comuns</S.MenuListItem>
            <S.MenuListItem>Portfólio</S.MenuListItem>
            <S.MenuListItem>Sobre Mim</S.MenuListItem>
            <S.MenuListItem>Contatos</S.MenuListItem>
        </S.MenuList>
    )
}