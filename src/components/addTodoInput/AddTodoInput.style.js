import styled from "styled-components";


export const TodoForm = styled.form`
    margin-bottom: 50px;
`;


export const TodoInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const TodoInput = styled.input`
    border-radius: 20px;
    border: 4px solid #007BFF;
    max-width: 500px;
    width: 100%;
    height: 80px;
    font-size: 30px;
    font-weight: 400;
    line-height: 262%;
    padding-left: 20px;
`;

export const AddButton = styled.button`
    border-radius: 20px;
    max-width: 250px;
    width: 100%;
    height: 84px;
    background: #007BFF;
    font-weight: 700;
    font-size: 30px;
    line-height: 247%;
    text-align: center;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s;
    margin-left: 50px;

    &:hover {
        background: #052d59;
    }
`;
