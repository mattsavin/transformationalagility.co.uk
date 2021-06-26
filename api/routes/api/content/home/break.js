// eslint-disable-next-line no-undef
const express = require("express");
const router = express.Router();
// eslint-disable-next-line no-undef
const cors = require("cors");
// eslint-disable-next-line no-undef
const admin = require("firebase-admin");
const db = admin.firestore();


db.collection("content/home/break")
	.get()
	.then(querySnapshot => {
		const documents = querySnapshot.docs.map(doc => doc.data());
		router.get("/", cors(), (req, res) => {
			res.json(documents);
		});
	});

// eslint-disable-next-line no-undef
module.exports = router;