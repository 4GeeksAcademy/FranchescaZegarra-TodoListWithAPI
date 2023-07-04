import React from "react";

function TaskNumber ({number}) {
    return(
        <p className="m-0 pt-2 text-secondary">{number==0 ? "No tasks, add a task" : `${number} task left`}</p>
    );
};

export default TaskNumber;