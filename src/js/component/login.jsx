import React, {useState, useEffect} from "react";

function Login () {
       
    const [input, setInput] = useState("");

    const inputValue = e => {
        setInput(e.target.value);
    }

    const[showComponent, setShowComponent] = useState(false)

    const url = "https://assets.breatheco.de/apis/fake/todos/user/";

    const createUser = e => {
        e.preventDefault();
        let user = input;
        
        let option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([])
        };

        fetch(`${url}${user}`,option)
        .then( response =>{
            return response.JSON;
        })
        .then( response => {
            console.log(response);
        } )
        .catch(error => console.log(error));

        option.method = "PUT";
        option.body = JSON.stringify([{label: "sample", done: false}]);

        fetch(`${url}${user}`,option)
        .then( response =>{
            return response.JSON;
        })
        .then( response => {
            console.log(response);
        } )
        .catch(error => console.log(error));
    };
    
    const verifyUser = e => {
        e.preventDefault();
        let user = input;
        
        let option = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        };

        fetch(`${url}${user}`,option)
        .then ( response => {
            if (response.status =="404") {
              setShowComponent(true);   
            } 
            return response.json();
        })
        .then (result => console.log (result))
        .catch(error => console.log(error))
    }

    return (
        <form className="col-lg-6 col-md-10 col-sm-12">
            <label className="form-label">Enter your User name:</label>
            <input type="text" className="form-control" onChange={inputValue}/>
            {
                showComponent ? <p className="text-danger">There is not a User with that name, please create one</p> : <></>
            }
            <div className="row">
                <button type="submit" className="btn btn-success col-3 m-2" onClick={verifyUser}>Log In</button>
                {
                    showComponent ? <button type="submit" className="btn btn-primary col-3 m-2" onClick={createUser}>Create User</button> : <></>
                }
                
            </div>
        </form>
    );
};

export default Login;