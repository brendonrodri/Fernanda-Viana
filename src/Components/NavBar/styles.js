import styled, {keyframes} from "styled-components";
export const NavBar = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    background: #821616;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    position: fixed;
    z-index: 1;
    @media (min-width: 1279px){
        background: transparent;
    }
`;
export const MenuButton = styled.button`
    width: 15vw;
    height: 7vh;
    border: none;
    background: none;
    cursor: pointer;
    @media (min-width: 1279px){
        width: 5vw;
        svg{
            position: relative;
            right: 37px;
        }
    }
    svg{
        width: 10vw;
        height: 5vh;
    }
`;
export const menuanimation = keyframes`
    from{
        top: -20px;
    }
    to{
        top: 8%;  
    }
`
export const MenuList = styled.ul`
    width: 100%;
    padding: 10px 5px;
    background: #821616;
    position: absolute;
    top: 80%;
    animation: ${menuanimation} 310ms ease;
    @media (min-width: 1279px){
        width: 100vw;
        height: 12vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        left: 0%;
        top: 0;
    }
`;
export const MenuListItem = styled.li`
    list-style: none;
    font-weight: bold;
    padding: 7px;
    color: rgba(255,255,255, 0.8);
    
    a{
        text-decoration: none;
        color: rgba(255,255,255, 0.8);
    }
    @media (min-width: 1279px){
        font-size: 1.2em;
        margin-left: 10px;
    }
`;
