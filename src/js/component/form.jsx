import React, {useState} from "react";

function Form ({addTask, user, url}) {
    const [input, setInput] = useState("");
    
    const inputValue = e => {
        setInput(e.target.value);
    }
    
    const sentForm = e => {
        e.preventDefault();
        let newTask = {
            label: input,
            done: false
        }
        addTask(newTask);
    }

    return (
        <form className="row m-0" action="" onSubmit={addTask}>
            <input 
                className="form-control col" 
                type="text" 
                placeholder="What needs to be done?" 
                onChange={inputValue}
            />
            <button  
                type= "button" 
                className="btn btn-success col-3"
                onClick={sentForm}
            >Add Task
            </button>
        </form>
    )
}

export default Form;