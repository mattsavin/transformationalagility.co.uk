import React from "react";
import Navbar from "../components/navbar";
import { AuthProvider } from "../contexts/AuthContext";
import "../css/App.css";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export default function MyApp({ Component, pageProps }: any): JSX.Element {
	return (
		<>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</>
	);
}

/* COLOUR PALETTE
 * https://coolors.co/03071e-370617-6a040f-9d0208-d00000-dc2f02-e85d04-f48c06-faa307-ffba08 
 * BLACK --> ORANGE
 */