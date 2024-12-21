import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("main.ejs");
});

const blogs = [];

app.get("/blogs", (req, res) => {
  res.render("blogs", { blogs });
});

app.post("/blogs", (req, res) => {
  const newBlog = {
    title: req.body.title,
    content: req.body.content,
  };

  blogs.push(newBlog);

  console.log(req.body);
  console.log(blogs);

  res.redirect("/blogs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
