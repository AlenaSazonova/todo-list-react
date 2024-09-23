import React, { useState } from 'react';
import './App.css';
import GlobalStyle from './GlobalStyles';
import ProjectTitle from '../src/components/titleTodo/TitleTodo'
import AddTodoInput from './components/addTodoInput/AddTodoInput';
import {
    TodoList,
    TodoItem,
    Checkbox,
    ButtonDelete
}
    from './App.style';


function App() {
    const [tasks, setTasks] = useState([]);

    const handleAddTasks = (newTask) => {
        setTasks([...tasks, { text: newTask, completed: false }])
    };


    const handleToggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) => 
            i === index ? { ...task, completed: !task.completed } : task
        )
        setTasks(updatedTasks);
    };


    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };


    return (
        <>
            <GlobalStyle />
            <ProjectTitle />
            <AddTodoInput onAddTask={handleAddTasks} />
            <TodoList>
                {tasks.map((task, index) => (
                    <TodoItem
                        key={index}>
                        <Checkbox
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggleTask(index)}
                        />
                        <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.text}
                        </p>
                        <ButtonDelete onClick={() => handleDeleteTask(index)}>
                            Delete
                        </ButtonDelete>
                    </TodoItem>
                ))}
            </TodoList>
        </>
    );
}

export default App;