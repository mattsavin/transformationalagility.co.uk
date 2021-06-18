const express = require("express");
const path = require("path");
const app = express();

const blogPosts = require("./routes/api/blog");
app.use("/api/blog", blogPosts);

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});


const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Server started on port ${port}`));
