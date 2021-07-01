import * as React  from "react";
import { useState } from "react";
import {Alert, Button} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Dashboard (): JSX.Element {
	const [error, setError] = useState("");
	const { currentUser, logout }: any = useAuth();
	const router = useRouter();

	async function handleLogout() {
		setError("");

		try {
			await logout();
			router.push("/");
		} catch {
			setError("Failed to log out!");
		}
	}

	return (
		<>
			<div className={"dashboard-body parallax"}>
				<h2 className={""}>Dashboard</h2>
				{error && <Alert variant={"danger"}>{error}</Alert>}
				<p><strong>Email: </strong> {currentUser.email}</p>
				<Link href={"/update-profile"}>
					<a className={"form-button button"}>Update Profile</a>
				</Link>
				<Button className={"form-button button"} variant={"link"} onClick={handleLogout}>Log Out</Button>
			</div>
		</>
	);
}