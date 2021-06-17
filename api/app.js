const express = require("express");
const router = express.Router();
const app = express();

const blogPosts = require("./routes/api/blog");

app.use("/api/blog", blogPosts);

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Server started on port ${port}`));
