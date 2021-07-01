import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Signup(): JSX.Element {
	const emailRef = useRef<any>();
	const passwordRef = useRef<any>();
	const confirmPasswordRef = useRef<any>();
	const { signup }: any = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	async function handleSubmit(e: any) {
		e.preventDefault();

		if (passwordRef.current.value !== confirmPasswordRef.current.value) {
			return setError("Passwords do not match.");
		}

		try {
			setError("");
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			router.push("/");
		} catch {
			setError("Failed to create an account!");
		}

		setLoading(false);
	}

	return(
		<>
			<div className={"login-body parallax"}>
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
					<p>Already have an account? <Link href={"/login"}><a>Login.</a></Link></p>
				</div>
			</div>
		</>
	);
}