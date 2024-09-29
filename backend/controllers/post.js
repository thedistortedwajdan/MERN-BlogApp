import { db } from "../db.js";
import jwt from "jsonwebtoken";
export const getAllPosts = (req, res) => {
  try {
    const query = req.query.category
      ? "SELECT * FROM posts WHERE category=?"
      : "SELECT * FROM posts";

    db.query(query, [req.query.category], (err, data) => {
      if (err) return res.send(err);
      return res.status(200).json(data);
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPost = (req, res) => {
  try {
    const query =
      "SELECT p.id, `username`, `title`,`description`,p.image,u.image AS userImage,`category`,`date` FROM users u JOIN posts p ON u.id=p.userId WHERE p.id = ? ";
    db.query(query, [req.params.id], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(data[0]);
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const deletePost = (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json("not authenticated");
    jwt.verify(token, "jwtkey", (err, user) => {
      if (err) return res.status(403).json("token not valid");
      const postId = req.params.id;
      const query = "DELETE FROM posts WHERE `id` = ? `userId` = ?";
      db.query(query, [postId, user.id], (er, data) => {
        if (err) return res.status(403).json("not your post");
        return res.status(200).json("deleted");
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const update = (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json("not authenticated");

    jwt.verify(token, "jwtkey", (err, user) => {
      if (err) return res.status(403).json("token not valid");
      const query =
        "UPDATE posts SET `title`=?,`description`=?,`image`=?,`category`=? WHERE `id`=? AND `userId`=?";
      const values = [
        req.body.title,
        req.body.description,
        req.body.image,
        req.body.category,
      ];

      db.query(query, [...values, req.params.id, user.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("post updated");
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const upload = (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json("not authenticated");

    jwt.verify(token, "jwtkey", (err, user) => {
      if (err) return res.status(403).json("token not valid");
      const query =
        "INSERT INTO posts(`title`,`description`,`image`,`category`,`date`,`userId`) VALUES (?)";
      const values = [
        req.body.title,
        req.body.description,
        req.body.image,
        req.body.category,
        req.body.date,
        user.id,
      ];

      db.query(query, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("post uploaded");
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};
