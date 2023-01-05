import React, {useState} from "react"
import "./login.css"
import { useNavigate } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const history = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const loginUser =async (e) =>{
        e.preventDefault();
        const { email, password } = user
        const res = await fetch('/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        });
        const data=res.json();
        console.log(res.status);
        if(res.status === 400 || !data){
            window.alert("Invalid Credentials");
        }
        else{
            window.alert("User logged in Successfully");
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={loginUser}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history("/register")}>Register</div>
        </div>
    )
}

export default Login