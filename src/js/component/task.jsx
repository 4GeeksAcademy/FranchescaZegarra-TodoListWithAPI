import React, {useState} from "react";

function Task ({text}) {
    
    return(
        <div className="row border-top border-bottom p-2 m-0" >
            <div className="col">
                <p className="m-0">{text}</p>
            </div>
            <div className="col-1">
               <button 
                    type="button" 
                    className={`btn-close`} 
                    aria-label="Close"
                ></button> 
            </div>
        </div>
    )
}

export default Task;