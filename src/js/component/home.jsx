import React, { useState, useEffect } from "react";
import Form from "./form.jsx";
import Task from "./task.jsx";
import Login from "./login.jsx";
import DeleteButton from "./deleteButton.jsx";

//create your first component
const Home = () => {
	const url = "https://assets.breatheco.de/apis/fake/todos/user/";
	const [tasks, setTasks] = useState([{label:"sample task",done:false}]);
	const [user, setUser] = useState("");

	const addUser = (user) => {
		setUser(user);
	}
	
	const loadTask = (task) => { //task is an array with objects
		setTasks(task);
	}

	const addTask = (task) => {
		let newTasks = [...tasks, task];
		setTasks(newTasks);
		putFetch();
	}

	const deleteTask = (text) => {
		let newTasks = tasks.filter(element => element.label!=text)
		setTasks(newTasks);
		console.log(newTasks);
		putFetch();
	}

	const putFetch = () => {
		fetch(`${url}${user}`,{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(tasks)
		})
		.then(response => {return response.json()})
		.then(response => console.log(response))
		.catch(error=> console.log(error))
	}
	
	const deleteAllTask = () => {
		setTasks([]);
		fetch(`${url}${user}`,{
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		})
		.then(response => {return response.json()})
		.then(response => console.log(response))
		.catch(error=> console.log(error))
	}

	console.log(tasks);
	console.log(user);
	return (
		<div className="container">
			<Login loadTask={loadTask} addUser={addUser} url={url}>
				<Form addTask={addTask} url={url} user={user}/>
				{user != "" && tasks.length>0 ? 
					tasks.map((element, key) => {
						return (
							<Task key={key} text={element.label} deleteTask={deleteTask}/>
						);
					})
					: <></>
				}
				<DeleteButton deleteAllTask={deleteAllTask}/>
			</Login>
		</div>	
	)
}

export default Home;
