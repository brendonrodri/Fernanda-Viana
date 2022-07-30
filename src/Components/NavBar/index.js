import React, {useState} from "react";
import { Link } from "react-router-dom";
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
            <S.MenuListItem><Link to="/">Início</Link></S.MenuListItem>
            <S.MenuListItem>Portfólio</S.MenuListItem>
            <S.MenuListItem>Loja</S.MenuListItem>
            <S.MenuListItem><Link to="/duvidas-comuns">Dúvidas Comuns</Link></S.MenuListItem>
            <S.MenuListItem>Sobre Mim</S.MenuListItem>
            <S.MenuListItem><Link to ="/contatos">Contatos</Link></S.MenuListItem>
        </S.MenuList>
    )
}