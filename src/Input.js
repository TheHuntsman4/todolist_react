import React from "react";
import { useState } from "react";


export default function Input(){
const [Text,SetText]=useState(" ");

function handleChange(event){
    let val;
    val=event.target.value;
    SetText(val);
    return(
        <h2>{SetText}</h2>
    );
}


function Input_box(){
    
    return (
        
          <>
          
          <input type="text" value={Text} onChange={handleChange}/>
          <h3>{Text}</h3>
          
    </>
    );
}

    return(
        <>
         <center>
         <Input_box />
         </center>
        
        </>
    
    );
}

