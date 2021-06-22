import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import {HashLink as Link} from "react-router-hash-link";

export default function ForgotPassword(): JSX.Element {
	const emailRef = useRef<HTMLInputElement | null>(null);
	const { resetPassword }: any = useAuth();
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e: any) {
		e.preventDefault();

		try {
			setMessage("");
			setError("");
			setLoading(true);
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			await resetPassword(emailRef.current.value);
			setMessage("Check your inbox for further instructions");
		} catch {
			setError("Failed to reset password!");
		}

		setLoading(false);
	}
	
	return(
		<>
			<div className={"login-body parallax"}>
				<h2 className={""}>Password Reset</h2>
				{error && <Alert variant={"danger"}>{error}</Alert>}
				{message && <Alert variant={"success"}>{message}</Alert>}
				<Form className={"login-form"} onSubmit={handleSubmit}>
					<Form.Group id={"email"}>
						<Form.Label>Email</Form.Label>
						<Form.Control type={"email"} ref={emailRef} required />
					</Form.Group>
					<Button disabled={loading} type={"submit"} className={"form-button button"}>Reset Password</Button>
				</Form>
				<div className={""}>
					<Link to={"/login"}>Login</Link>
				</div>
				<div className={""}>
					<p>Need an account? <Link to={"/signup"}>Sign Up</Link></p>
				</div>
			</div>
		</>
	);
}