const express = require("express");
const router = express.Router();
const cors = require("cors");

const admin = require("firebase-admin");
// const serviceAccount = require("../../firebase-creds.json");

admin.initializeApp({
	credential: admin.credential.cert({
    "project_id": process.env.FIREBASE_PROJECT_ID,
    "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    "client_email": process.env.FIREBASE_CLIENT_EMAIL
  })
});
const db = admin.firestore();

db.collection("articles")
	.get()
	.then(querySnapshot => {
		const documents = querySnapshot.docs.map(doc => doc.data());
		router.get("/", cors(), (req, res) => {
			res.json(documents);
		});
	});

module.exports = router;
