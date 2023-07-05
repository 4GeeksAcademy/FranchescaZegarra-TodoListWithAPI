import React, { useState, useEffect } from "react";
import Form from "./form.jsx";
import Task from "./task.jsx";
//import TaskNumber from "./taskNumber.jsx";
import Login from "./login.jsx";

//create your first component
const Home = () => {
	const url = "https://assets.breatheco.de/apis/fake/todos/user/";
	const [tasks, setTasks] = useState([{
		label:"",
		done:false
	}]);
	const [user, setUser] = useState("");

	const addUser = (user) => {
		setUser(user);
	}
	
	const loadTask = (task) => { //task is an array with objects
		setTasks(task);
		console.log(tasks);
	}

	const addTask = (task) => {
		let newTasks = [...tasks, task];
		setTasks(newTasks);
	}

	fetch(`${url}${user}`,{
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(tasks)
	})
	.then(response => {return response.JSON})
	.then(response => console.log(response))
	.catch(error=> console.log(error))

	console.log(`the user is: ${user}`)
	return (
		<div className="container">
			<Login loadTask={loadTask} addUser={addUser} url={url}>
				<Form addTask={addTask} url={url} user={user}/>
				{user != "" ? 
					tasks.map((element, key) => {
						return (
							<Task key={key} text={element.label} />
						);
					})
					: <></>
				}
			</Login>
		</div>	
	)
}

export default Home;
