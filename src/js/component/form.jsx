import React, {useState} from "react";
import {v4 as uuidv4 } from "uuid";

function Form(props) {
    const [input, setInput] = useState("");

    const inputValue = e => {
        setInput(e.target.value);
    };

    const sentForm = e => {
        e.preventDefault();
        const newTask = {
            id: uuidv4(), // To generate unque id automatically
            text: input
        };
        props.onSubmit(newTask);
    };

    return(
        <> 
            <form className="row m-0" action="" onSubmit={sentForm}>
                <input 
                    className="form-control border-0 rounded-0 col" 
                    type="text" 
                    placeholder="What needs to be done?" 
                    aria-label="readonly input example" 
                    onChange={inputValue}
                />
                <button  
                    type= "button" 
                    className="btn btn-success col-3" 
                    onClick={sentForm}>
                        Add Task
                </button>
            </form>
        </>
    )
}

export default Form;