

import React, {useState} from 'react';
import {useHistory , Link} from "react-router-dom";
import {Alert, Button,Form} from "react-bootstrap";
import {auth} from "../API/firebase";

export const Login = () => {



    const {push}= useHistory();
    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("")
    const [error, setError]=useState("");


    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    };

    const handlePassChange = (e)=>{
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        console.log(email,password)
        e.preventDefault();

        try{
            await auth.signInWithEmailAndPassword(email,password)
            push("./profiledb");

        } catch (e){
            setError(e);
        }

    };



    return (
        <Form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <Form.Group className={"mb-3"} controlId={"formBasicEmail"}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type={"email"}
                    placeholder={"Enter email"}
                    name={"email"}
                    onChange={handleEmailChange}
                    value={email}/>
            </Form.Group>

            <Form.Group className={"mb-3"} controlId={"formBasicPassword"}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type={"password"}
                    placeholder={"Password"}
                    name={"password"}
                    onChange={handlePassChange}
                    value={password}/>
            </Form.Group>

            {error && <Alert>{error.toString()}</Alert>}
            <Button variant={"primary"} type={"submit"}>Submit</Button>
            <hr/>
            <p>
                Already have an account? <Link to={"/login"}></Link>
            </p>

        </Form>
    );
};


