import React, {useState, useEffect} from "react";

function Login ({children, loadTask, addUser, url}) {
       
    const [input, setInput] = useState("");
    const[showComponent, setShowComponent] = useState(false); //To show buttons
    const [showChildren, setShowChildren] = useState(false);
    const inputValue = e => {
        setInput(e.target.value);
    }
    const verifyUser = e => {
        e.preventDefault();
        addUser("");
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
              setShowChildren(false);
            } else {
                setShowChildren(true);
                addUser(user);
            }
            return response.json();
        })
        .then (result => {
            loadTask(result);
        })
        .catch(error => console.log(error))
    }

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

        setShowComponent(false)
    };
    
    return (
        <>
            <form className="col-lg-6 col-md-10 col-sm-12" onSubmit={verifyUser}>
                <label className="form-label">Enter your User name:</label>
                <input type="text" className="form-control" onChange={inputValue}/>
                <div className="form-text">PS: My User Name is khrisefzm</div>
                {
                    showComponent ? <p className="text-danger">There is not a User with that name, please create one</p> : <></>
                }
                <div className="row">
                    <button type="submit" className="btn btn-success col-3 m-2" onClick={verifyUser}>Log In</button>
                    {
                        showComponent ? <button type="submit" className="btn btn-primary col-3 m-2" onClick={createUser}>Create User</button> : <></>
                    }
                </div>
                {
                    showChildren ? <p className="text-success">Success Login</p> : <></>
                }
            </form>
            {
                showChildren ? <>{children}</> : <></>
            } 
        </>
    );
};

export default Login;