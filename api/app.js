const express = require("express");
const path = require("path");
const app = express();
const admin = require("firebase-admin");
const serviceAccount = require("./transformationalagility-firebase-adminsdk-4e03z-0824c121e6.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

const blogPosts = require("./routes/api/blog");
app.use("/api/blog", blogPosts);
const content = require("./routes/api/content");
app.use("/api/content", content);

app.use(express.static(path.join(__dirname, "build")));

app.get("/build/*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});


const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Server started on port ${port}`));
