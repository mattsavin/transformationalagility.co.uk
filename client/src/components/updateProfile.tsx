import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { HashLink as Link } from "react-router-hash-link";
import { useHistory } from "react-router-dom";


export default function UpdateProfile() {
	const emailRef = useRef<any>();
	const passwordRef = useRef<any>();
	const confirmPasswordRef = useRef<any>();
	const { currentUser, updateEmail, updatePassword }: any = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	function handleSubmit(e: any) {
		e.preventDefault();

		if (passwordRef.current.value !== confirmPasswordRef.current.value) {
			return setError("Passwords do not match.");
		}

		const promises = [];

		setLoading(true);
		setError("");

		if (emailRef.current.value !== currentUser.email) {
			promises.push(updateEmail(emailRef.current.value));
		}
		if (passwordRef.current.value) {
			promises.push(updatePassword(passwordRef.current.value));
		}

		Promise.all(promises).then(() => {
			history.push("/");
		}).catch(() => {
			setError("failed to update account");
		}).finally(() => {
			setLoading(false);
		});

		setLoading(false);
	}

	return(
		<>
			<div className={"login-body parallax"}>
				<h2 className={"text-center mb-4"}>Update Profile</h2>
				{error && <Alert variant={"danger"}>{error}</Alert>}
				<Form className={"login-form"} onSubmit={handleSubmit}>
					<Form.Group id={"email"}>
						<Form.Label>Email</Form.Label>
						<Form.Control type={"email"} ref={emailRef} required defaultValue={currentUser.email}/>
					</Form.Group>
					<Form.Group id={"password"}>
						<Form.Label>Password</Form.Label>
						<Form.Control type={"password"} ref={passwordRef} placeholder={"Leave blank to keep the same"} />
					</Form.Group>
					<Form.Group id={"confirm-password"}>
						<Form.Label>Confirm password</Form.Label>
						<Form.Control type={"password"} ref={confirmPasswordRef} placeholder={"Leave blank to keep the same"} />
					</Form.Group>
					<Button disabled={loading} type={"submit"} className={"form-button button"}>Update</Button>
				</Form>
				<div className={"w-100 text-center mt-2"}>
					<p>Already have an account? <Link to={"/dashboard"}>Cancel</Link></p>
				</div>
			</div>
		</>
	);
}