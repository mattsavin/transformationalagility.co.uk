const express = require("express");
const app = express();

const blogPosts = require("./routes/api/blog");
app.use("/api/blog", blogPosts);

const port = 9000;
app.listen(port, () => console.log(`Server started on port ${port}`));
