import React, {useRef, useState} from "react";
import {Form, Button, Alert} from "react-bootstrap";
import {useAuth} from "../contexts/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
	const emailRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);
	const {login}: any = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	async function handleSubmit(e: any) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			await login(emailRef.current.value, passwordRef.current.value);
			router.push("/");
		} catch {
			setError("Failed to log in!");
		}

		setLoading(false);
	}

	return (
		<>
			<div className={"login-body parallax"}>
				<h2 className={""}>Log In</h2>
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
				<div className={""}>
					<Link href={"/forgot-password"}>
						<a>Forgot password?</a>
					</Link>
				</div>
				<div className={""}>
					<p>Need an account? <Link href={"/signup"}><a>Sign Up</a></Link></p>
				</div>
			</div>
		</>
	);
}
