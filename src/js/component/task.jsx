import React, {useState} from "react";

function Task({id, text, deleteTask}){
    const [rowHover, setRowHover] = useState(false);
    return(
        <div className="row border-top border-bottom p-2 m-0" 
            onMouseEnter={(id) => {setRowHover(true)}} 
            onMouseLeave={(id) => {setRowHover(false)}}
        >
            <div className="col">
                <p className="m-0">{text}</p>
            </div>
            <div className="col-1">
               <button 
                    type="button" 
                    class={`btn-close ${rowHover?"":"hide"}`} 
                    aria-label="Close"
                    onClick ={() => deleteTask(id)}
                ></button> 
            </div>
        </div>
    )
}

export default Task;