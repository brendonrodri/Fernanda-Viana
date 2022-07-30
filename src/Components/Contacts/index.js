import React from "react";
import {FaWhatsapp, FaInstagram} from "react-icons/fa";
import { AiOutlineMail} from "react-icons/ai";
import {TbMapPin} from "react-icons/tb";
import * as S from "./styles"
export default function ContactsComponent(){
    return(
        <S.ContactsContainer>
            <h2>
                Contatos
            </h2>
            <p>Gostou do meu trabalho?<br/>Clique em uma das opções abaixo para entrar em contato!</p>
            <S.ContactList>
                <S.ContactListItem>
                    <a href="https://api.whatsapp.com/message/JLQA6B7WD2QRN1">
                    <FaWhatsapp />21 91234-56789 </a>
                </S.ContactListItem>
                <S.ContactListItem>
                    <a href="mailto: email@email.com">
                    <AiOutlineMail />email@email.com</a>
                </S.ContactListItem>
                <S.ContactListItem>
                    <a href="https://instagram.com/viennatattoo">
                    <FaInstagram />@viennatattoo</a>
                </S.ContactListItem>
                <S.ContactListItem>
                    <a href="https://www.google.com/maps/dir/-22.6136272,-43.2084854/vienna+tattoo+studio/@-22.619621,-43.2397668,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x990b3f8a2daae5:0xf80e5e2225f078c9!2m2!1d-43.2347013!2d-22.6157858">
                    <TbMapPin />Av. Luís Alves de Lima, 12 - sala 02 - Taquara, Duque de Caxias, RJ</a>
                </S.ContactListItem>
            </S.ContactList>
        </S.ContactsContainer>
    )
}