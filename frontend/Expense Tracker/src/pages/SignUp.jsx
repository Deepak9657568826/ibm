import React, { useState } from 'react'

function SignUp() {

    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();


    let url = "https://mock-final-server-api.onrender.com/users";



    function handleSubmit(e) {
        e.preventDefault();
        fetch(url, {
            method: "POST",
            headers: { "Content-type": "Application/json" },
            body: JSON.stringify({
                fullname: name,
                email: email,
                password: password,
            }),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);

            })
            .catch((error) => {
                console.log(error);
            });

    }


    return (
        <>
            <h1>Signup</h1>

            <div>

                <form action="" onSubmit={handleSubmit}>

                    <label htmlFor="">Full Name: </label>
                    <input
                     type="text"
                     onChange={(e) => { setname(e.target.value) }}
                     placeholder='Enter full name'
                     />
                     <br />
                     <br />
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
                     placeholder='Enter Password'
                     />
                     <br />
                     <br />
                    <button type='submit'>Submit</button>

                </form>

            </div>
        </>
    )
}

export default SignUp
