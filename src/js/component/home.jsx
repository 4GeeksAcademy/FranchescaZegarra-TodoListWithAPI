import React, { useState, useEffect } from "react";
import Form from "./form.jsx";
import Task from "./task.jsx";
import TaskNumber from "./taskNumber.jsx";

//create your first component

const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [numberOfTask, setNumberOfTask] = useState(0);

	const getOption = {
		method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			/*PARAMS: none*/
	}

	let body = [
		{label: "tarea uno", done:false}
	];

	const putOption = {
		method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
		body: JSON.stringify(body)
	}

	useEffect( () => {
		fetch('http://assets.breatheco.de/apis/fake/todos/user/khrisefzm', getOption)
		.then(resp => {
			return resp.json();
		})
		.then(resp => {
			console.log(resp);
		})
		.catch(err => {
			console.log("user does not exist");
		})

		fetch('http://assets.breatheco.de/apis/fake/todos/user/khrisefzm', putOption)
		.then(resp => {
			return resp.json();
		})
		.then(resp => {
			console.log(resp);
		})
		.catch(err => {
			console.log("error");
		})
	}, [])	

	const [input, setInput] = useState("no name");
	const inputValue = e => {
		setInput(e.target.value);
	};

	const sentForm = e => {
		let user = input;
		console.log(user);
		return user;
	};
	

	return (
		<div className="container">
			
		</div>
			
	);
}

export default Home;
