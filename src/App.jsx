import React, {useState , useRef , useEffect} from "react";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
export function App(){
    const [todos,setTodos]=useState([]);
    const todoTaskRef=useRef();
    const toggleTodo = (id)=> {
        const newTodos = [...todos];
        const todo= newTodos.find((todo)=>todo.id===id);
        todo.completed=!todo.completed
        setTodos(newTodos);

    }
    const handleTodoAdd = ()=> {
        const task = todoTaskRef.current.value;
        if (task=== '') return;
        setTodos((prevTodos)=>{
            return [...prevTodos,{id: uuidv4(), task, completed: false}]
        })
    }
    return (
    <>
    <TodoList todos={todos} toggleTodo={toggleTodo}/> 
    <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea"/>
    <button onClick={handleTodoAdd}>➕</button>
    <button >🗑️​</button>
    <div>Te quedan {todos.filter((todo)=>!todo.completed).length} tareas por terminar</div>
    </>
    );
}