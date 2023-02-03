import React from "react";
import { useState } from "react";


export default function Input(){
const [text,setText]=useState("");
const [todo,setTodo]=useState([]);

const listPush=()=>{
    
    todo.push(text);
    setTodo(todo);
    setText("");
    


};

const handleChange=(event)=>{

    setText(event.target.value);
};


return (
    <>
    <center>
        <input type="text" id="message" name="todolist_element" onChange={handleChange} value={text} placeholder="Add your tasks here!!"/>
        <button onClick={listPush}>Updated</button>
        <br /><br />
            
                {todo.length>0 && todo.map((item)=><li>{item}</li>)}


           
        </center>
        
    
    </>
);

}

