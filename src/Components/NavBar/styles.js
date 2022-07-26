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
    background: #822525;
    position: absolute;
    top: 10%;
    animation: ${menuanimation} 310ms linear;
    @media (min-width: 1279px){
        width: 60%;
        display: flex;
        justify-content: center;
        position: relative;
        left: 17%;
        top: -1%;
    }
`;
export const MenuListItem = styled.li`
@media (min-width: 1279px){
        font-size: 1.2em;
        margin-left: 10px;
    }
    list-style: none;
    font-weight: bold;
    padding: 7px;
    color: rgba(255,255,255, 0.8);
`;
