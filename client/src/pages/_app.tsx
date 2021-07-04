import React from "react";
import Navbar from "../components/navbar";
import { AuthProvider } from "../contexts/AuthContext";
import "../css/App.css";
import Head from "next/head";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export default function MyApp({ Component, pageProps }: any): JSX.Element {
	return (
		<>
			<Head>
				<title>Transformational Agility</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="shortcut icon" type="image/png" href="/images/logo_small.png" />
			</Head>
			<noscript>You need to enable JavaScript to be able to run this app.</noscript>
			<AuthProvider>
				<Navbar />
				<Component {...pageProps} />
			</AuthProvider>
		</>
	);
}

/* COLOUR PALETTE
 * https://coolors.co/03071e-370617-6a040f-9d0208-d00000-dc2f02-e85d04-f48c06-faa307-ffba08 
 * BLACK --> ORANGE
 */