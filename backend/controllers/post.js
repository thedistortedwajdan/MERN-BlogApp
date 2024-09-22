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

export const getPost = () => {
  try {
  } catch (error) {
    console.log(error.message);
  }
};
export const deletePost = () => {
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
