const express = require("express");
const router = express.Router();

const admin = require("firebase-admin");
const serviceAccount = require("../../transformationalagility-firebase-adminsdk-4e03z-64480f19af.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

db.collection("articles")
	.get()
	.then(querySnapshot => {
		const documents = querySnapshot.docs.map(doc => doc.data());
		router.get("/", function (req, res, next) {
			res.json(documents);
		});
	});

module.exports = router;