import styled from "styled-components";
export const CommonQuestionsContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #821616;
    font-family: 'Montserrat', sans-serif;
    color: rgba(255,255,255, 0.9);
    p{
        width: 70%;
        margin: 10px;
    }
`
export const QuestionList = styled.ul`
    width: 70%;
    h3{
        margin: 5px 0;
    }
`
export const QuestionListItem = styled.li`
    list-style: disc;
    margin: 20px;
`