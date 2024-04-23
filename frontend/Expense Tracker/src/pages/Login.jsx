import React, { useState } from 'react'
import { useEffect } from 'react';

function Login() {

    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [data, setData] = useState();
   

    let url = "https://mock-final-server-api.onrender.com/users";


    function getallData() {
     
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setData(data)

            })
            .catch((error) => {
                console.log(error);
            });

    }
    useEffect(()=>{
        getallData()
    },[])
    console.log(data);

    function handlelogin(e) {
        e.preventDefault();
        if(data.find((temp) => temp.email === email && temp.password === password)){
          alert("login successfull")
        }
        else{
            alert("login failed ")
        }
      }



    return (
        <>
        <h1>Login</h1>
        <div >
            
            <form action="" onSubmit={handlelogin}>
                <label htmlFor="">Email: </label>
                <input
                 type="email" 
                onChange={(e) => { setemail(e.target.value) }}
                placeholder='Enter email'
                 />
                 <br />
                 <br />
                <label htmlFor="">Password: </label>
                <input
                 type="password" 
                onChange={(e) => { setpassword(e.target.value) }}
                placeholder='Enter password'
                />
                      <br />
                      <br />
                <button type='submit'>Login</button>
            </form>

        </div>
        </>
    )
}

export default Login
