import styled, {keyframes} from "styled-components";
export const NavBar = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    background: #822525;
    font-family: 'Montserrat', sans-serif;
`;
export const MenuButton = styled.button`
    width: 15vw;
    height: 7vh;
    border: none;
    background: none;
    svg{
        width: 10vw;
        height: 5vh;
    }
`;
export const menuanimation = keyframes`
    from{
        top: 0px;
    }
    to{
        top: 10%;  
    }
`
export const MenuList = styled.ul`
    width: 100%;
    padding: 10px 5px;
    background: #822525;
    position: absolute;
    top: 10%;
    animation: ${menuanimation} 240ms linear;
`;
export const MenuListItem = styled.li`
    list-style: none;
    font-weight: bold;
    padding: 7px;
    color: rgba(255,255,255, 0.8);
`;
