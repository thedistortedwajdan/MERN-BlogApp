import { db } from "../db.js";
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
      "SELECT `username`, `title`,`description`,p.image,u.image AS userImage,`category`,`date` FROM users u JOIN posts p ON u.id=p.userId WHERE p.id = ? ";
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
  } catch (error) {
    console.log(error.message);
  }
};
export const update = () => {
  try {
  } catch (error) {
    console.log(error.message);
  }
};
export const upload = () => {
  try {
  } catch (error) {
    console.log(error.message);
  }
};
