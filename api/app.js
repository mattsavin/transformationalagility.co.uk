const express = require("express");
const path = require("path");
const app = express();
const admin = require("firebase-admin");
const serviceAccount = require("./transformationalagility-firebase-adminsdk-4e03z-0824c121e6.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

app.use("/api/blog", require("./routes/api/blog"));
app.use("/api/content/home/boxes", require("./routes/api/content/home/boxes"));
app.use("/api/content/home/intro", require("./routes/api/content/home/intro"));
app.use("/api/content/home/break", require("./routes/api/content/home/break"));

app.use(express.static(path.join(__dirname, "build")));

app.get("/build/*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});


const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Server started on port ${port}`));
