import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main.ejs");
});

app.post("/blog", (req, res) => {
  res.render("blog.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
