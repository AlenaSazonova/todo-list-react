import React, { useState } from 'react';
import {
    TodoForm,
    TodoInputContainer,
    TodoInput,
    AddButton
}
    from './AddTodoInput.style';


function AddTodoInput({ onAddTask }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            onAddTask(task);
            setTask('');
        }
    };

    return (
        <TodoForm onSubmit={handleSubmit}>
            <TodoInputContainer>
                <TodoInput 
                    type="text" 
                    placeholder="Add new task" 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)}
                    required 
                />
                <AddButton type="submit">Add</AddButton>
            </TodoInputContainer>
        </TodoForm>
    );
}

export default AddTodoInput;