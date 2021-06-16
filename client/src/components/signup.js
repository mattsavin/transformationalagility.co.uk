import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
//import { HashLink as Link } from "react-router-hash-link";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError("Passwords do not match.")
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/")
        } catch {
            setError("Failed to create an account!");
        }

        setLoading(false);
    }

    return(
        <>
            <div className={"login-body"}>
                <h2 className={"text-center mb-4"}>Sign Up</h2>
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
                    <Form.Group id={"confirm-password"}>
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type={"password"} ref={confirmPasswordRef} required />
                    </Form.Group>
                    <Button disabled={loading} type={"submit"} className={"form-button button"}>Sign Up</Button>
                </Form>
                <div className={"w-100 text-center mt-2"}>
                    <p>Already have an account? <Link to={"/login"}>Login.</Link></p>
                </div>
            </div>
        </>
    );
}