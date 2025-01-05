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
let id = 0;

app.get("/blogs", (req, res) => {
  res.render("blogs", { blogs });
});

app.post("/blogs", (req, res) => {
  const newBlog = {
    id: id++,
    title: req.body.title,
    content: req.body.content,
  };

  blogs.push(newBlog);

  console.log(req.body);
  console.log(blogs);

  res.redirect("/blogs");
});

// Route to display the form for editing a blog
app.get("/blogs/:id", (req, res) => {
  const blogId = parseInt(req.params.id, 10);
  const blog = blogs.find((b) => b.id === blogId);

  if (blog) {
    res.json(blog); // Return blog data as JSON
  } else {
    res.status(404).send("Blog not found");
  }
});

// Route to update the blog when the form is submitted
app.post("/blogs/:id", (req, res) => {
  const blogId = parseInt(req.params.id, 10);
  const blog = blogs.find((b) => b.id === blogId);

  if (blog) {
    blog.title = req.body.title;
    blog.content = req.body.content;
    res.redirect("/blogs");
  } else {
    res.status(404).send("Blog not found");
  }
});

// Route to delete a blog
app.delete("/blogs/:id", (req, res) => {
  const blogId = parseInt(req.params.id, 10);
  const blogIndex = blogs.findIndex((b) => b.id === blogId);

  if (blogIndex !== -1) {
    blogs.splice(blogIndex, 1); // Remove the blog from the array
    res.status(200).send("Blog deleted successfully");
  } else {
    res.status(404).send("Blog not found");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
