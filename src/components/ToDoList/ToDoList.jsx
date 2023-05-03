import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ButtonAdd from '../../style/ButtonAdd';
import ButtonDelete from '../../style/ButtonDelete';
import ToDoListStyle from './ToDoListStyle';
import ToDoButtons from '../Buttons/ToDoButtons';

const InputStyle = styled.input`
    
    width: 500px;
    height: 30px;
    border-radius: 10px;
    border-color: transparent;

`;



const ToDoList = () => {

    const [input, setInput] = useState("");
    const [list, setList] = useState ([]);
    

    const addToDo = (todo) => {

        const newToDo ={
            id: Math.random,
            todo:todo,
        };

        setList([...list, newToDo]);

        setInput("");
    }; 

    const deleteTasks = () => {
        setList([])
    };
    


    
  return (

    <ToDoListStyle>

        <InputStyle
        type='text'
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        placeholder='Ingresa tus tareas aqui por favor'
        ></InputStyle>
        <ToDoButtons>
        <ButtonAdd disabled={input ? "" : "disabled"} onClick={() => addToDo(input)}>Add</ButtonAdd>
        <ButtonDelete onClick={() => deleteTasks(list)}>Delete</ButtonDelete>
        </ToDoButtons>
        <ul>
            {list.map((todo)=>(
                <li key={todo.id}>
                    
                    {todo.todo}
                    
                </li>
            ))}

        </ul>
    </ToDoListStyle>

    
  )
}

export default ToDoList