import styled from "styled-components";
export const ContactsContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #821616;
    font-family: 'Montserrat', sans-serif;
    color: rgba(255,255,255, 0.9);
    h2{
        font-size: 3em;
        margin: 20px;
        position: relative;
        bottom: 7%;
    }
    p{
        position: relative;
        bottom: 7%;
        font-size: 1.5em;
        margin: 10px;
        text-align: center;
    }
`
export const ContactList = styled.ul`
    svg{
        width: 10vw;
        height: 8vh;
    }
`
export const ContactListItem = styled.li`
    list-style: none;
    font-size: 1.3em;
    margin: 5px;
    &:hover{
        font-weight: bold;
    }
    a{
        color: rgba(255,255,255, 0.9);
        text-decoration: none;
        display: flex;
        align-items: center;
    }
`