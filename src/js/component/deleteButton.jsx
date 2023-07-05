import React from "react";
function DeleteButton({deleteAllTask}){
    return(
        <div className="m-4 d-flex justify-content-center">
            <button  
                type= "button" 
                className="btn btn-danger col-3"
                onClick={ () => deleteAllTask()}
            >Delete all task
            </button> 
        </div>
    )
}

export default DeleteButton;