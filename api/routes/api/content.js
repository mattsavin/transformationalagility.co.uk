const express = require("express");
const router = express.Router();
const cors = require("cors");
const admin = require("firebase-admin");
const db = admin.firestore();


db.collection("content")
	.get()
	.then(querySnapshot => {
		const documents = querySnapshot.docs.map(doc => doc.data());
		router.get("/", cors(), (req, res) => {
			res.json(documents);
		});
	});

module.exports = router;