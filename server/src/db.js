// import { app } from "./app";
// import { mysql } from "mysql2";

// // mysql 추가학습 후 보충

// const log = console.log;

// // Create connection
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "mydatabase",
// });

// // Connect
// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("MySQL Connected...");
// });

// // Create DB
// app.get("/createdb", (req, res) => {
//   let sql = "CREATE DATABASE mydatabase";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Database created...");
//   });
// });

// // Select posts
// app.get("/getposts", (req, res) => {
//   let sql = "SELECT * FROM posts";
//   db.query(sql, (err, results) => {
//     if (err) throw err;
//     console.log(results);
//     res.send("Posts fetched...");
//   });
// });

// // Insert post 1
// app.get("/addpost1", (req, res) => {
//   let post = { title: "Post One", body: "This is post one" };
//   let sql = "INSERT INTO posts SET ?";
//   db.query(sql, post, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Post 1 added...");
//   });
// });
