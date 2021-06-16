import React, { useState } from 'react';
import {Alert, Button} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { HashLink as Link } from "react-router-hash-link";
//import { useHistory } from "react-router-dom";

export default function Dashboard () {
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    //const history = useHistory();

    async function handleLogout() {
        setError('');

        try {
            await logout();
            //history.push("/login")
        } catch {
            setError("Failed to log out!");
        }
    }

    return (
        <>
            <div className={"dashboard-body parallax"}>
                <h2 className={''}>Dashboard</h2>
                {error && <Alert variant={"danger"}>{error}</Alert>}
                <p><strong>Email: </strong> {currentUser.email}</p>
                <Link to={"/update-profile"} className={"form-button button"}>Update Profile</Link>
                <div className={"w-100 text-center mt-2"}>
                    <Button className={"form-button button"} variant={"link"} onClick={handleLogout}>Log Out</Button>
                </div>
            </div>
        </>
    );
}