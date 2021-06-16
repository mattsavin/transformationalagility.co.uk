import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
//import {HashLink as Link} from "react-router-hash-link"
import { Link, useHistory } from "react-router-dom";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    let history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/")
        } catch {
            setError("Failed to log in!");
        }

        setLoading(false);
    }

    return(
        <>
            <div className={"login-body"}>
                <h2 className={"text-center mb-4"}>Log In</h2>
                {error && <Alert variant={"danger"}>{error}</Alert>}
                <Form className={"login-form"} onSubmit={handleSubmit}>
                    <Form.Group id={"email"}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type={"email"} ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id={"password"}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={"password"} ref={passwordRef} required />
                    </Form.Group>
                    <Button disabled={loading} type={"submit"} className={"form-button button"}>Log In</Button>
                </Form>
                <div className={"w-100 text-center mt-2"}>
                    <p>Need an account? <Link to={"/signup"}>Sign Up</Link></p>
                </div>
            </div>
        </>
    );
}