// eslint-disable-next-line no-undef
const express = require("express");
// eslint-disable-next-line no-undef
const path = require("path");
const app = express();
// eslint-disable-next-line no-undef
const admin = require("firebase-admin");
// eslint-disable-next-line no-undef
const serviceAccount = require("./transformationalagility-firebase-adminsdk-4e03z-0824c121e6.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

// eslint-disable-next-line no-undef
app.use("/api/blog", require("./routes/api/blog"));
// eslint-disable-next-line no-undef
app.use("/api/content/home/boxes", require("./routes/api/content/home/boxes"));
// eslint-disable-next-line no-undef
app.use("/api/content/home/intro", require("./routes/api/content/home/intro"));
// eslint-disable-next-line no-undef
app.use("/api/content/home/break", require("./routes/api/content/home/break"));
// eslint-disable-next-line no-undef
app.use("/api/content/about/intro", require("./routes/api/content/about/intro"));

// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, "build")));

app.get("/build/*", (req, res) => {
	// eslint-disable-next-line no-undef
	res.sendFile(path.join(__dirname, "build", "index.html"));
});


// eslint-disable-next-line no-undef
const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Server started on port ${port}`));
