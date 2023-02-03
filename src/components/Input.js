import React from "react";
import { useState } from "react";


export default function Input(){
const [text,setText]=useState("");
const [updated,setUpdated]=useState(text);





const handleChange=(event)=>{

    setText(event.target.value);
};

const handleClick=()=>{
    setUpdated(text);
};

return (
    <>
    <center>
        <input type="text" id="message" name="todolits_element" onChange={handleChange} value={text} placeholder="Add your tasks here!!"/>
        <button onClick={handleClick}>Updated</button>
        <br /><br />
        {updated}
        </center>
        
    
    </>
);

}

