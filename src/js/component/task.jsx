import React, {useState} from "react";

function Task ({text, deleteTask}) {
    
    const [rowHover, setRowHover] = useState(false)

    return(
        <div className="row border-top border-bottom p-2 m-0" 
            onMouseEnter={()=>{setRowHover(true)}}
            onMouseLeave={()=>{setRowHover(false)}}
        >
            <div className="col" >
                <p className="m-0">{text}</p>
            </div>
            <div className="col-1">
               <button 
                    type="button" 
                    className={`btn-close ${rowHover?"":"hide"}`} 
                    aria-label="Close"
                    onClick={() => deleteTask(text)}
                ></button> 
            </div>
        </div>
    )
}

export default Task;