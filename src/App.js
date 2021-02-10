import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Item from './Item';

function App() {

    const [todos, setTodos] = useState([
        {title: "Eat", isCompleted: true},
        {title: "Code", isCompleted: false},
        {title: "Sleep", isCompleted: false},
    ]);

    const addTodo = title => {
        const newTodos = [...todos, {title}];
        setTodos(newTodos);
    }

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className="app">
            <div className="container bg-light">
                <Form todos={addTodo} completeTodo={completeTodo}/>
                <ul className="list-group">
                    {
                    todos.map((todo, index) => (
                        <Item 
                        key={index}
                        index={index}
                        title={todo.title} 
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                        />
                    )) 
                    }
                </ul>
            </div>
        </div>
    )
}

export default App;
