import styled from "styled-components";


export const TodoList = styled.ul`
    display: flex;
    margin-left: 10px;
    flex-direction: column;
    align-items: center;
`;

export const TodoItem = styled.li`
    border-radius: 20px;
    border: 1px solid #007BFF;
    max-width: 1300px;
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    font-size: 30px;
`;

export const Checkbox = styled.input`
    width: 40px;
    height: 40px;
    margin-left: 30px;
    margin-right: 30px;
`;

export const ButtonDelete = styled.button`
    border-radius: 15px;
    max-width: 130px;
    width: 100%;
    height: 50px;
    background: #007BFF;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s;
    margin-left: auto;
    margin-right: 5px;

    &:hover {
        background: #052d59;
    }
`;