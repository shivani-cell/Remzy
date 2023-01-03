import React, { useState } from "react"
import "./register.css"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const history = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        dob:"",
        mobileno:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = async(e) => {
        console.log("helo gjkhkjk")

        e.preventDefault();
        const { name, email,mobileno,dob, password, reEnterPassword } = user
        console.log(user)
        if( name && email && mobileno && dob && password && (password === reEnterPassword)){

            const res= await fetch("/register", {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    name, email, mobileno, dob, password
                })
            });
            const data= await res.json();
            console.log(data);
            if(!data||data.status === "210" ){
                window.alert(data.msg);
                console.log("Invalid Registration");
                
            }
            else{
                window.alert(data.msg);
                console.log("Successful Registration");
                History.push("/Login");
            }
         }
        
        }
    

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Email Id" onChange={ handleChange }></input>
            
            <input type="text" name="mobileno" value={user.mobileno} placeholder="Mobile Number" onChange={ handleChange }></input>
            <input type="date" name="dob" value={user.dob} placeholder="Date Of Birth" onChange={ handleChange }></input>

            <input type="password" name="password" value={user.password} placeholder="Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history("/login")}>Login</div>
        </div>
    )
}

export default Register