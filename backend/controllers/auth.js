import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = (req, res) => {
  try {
    // check user exists
    let query = "SELECT * FROM users WHERE username= ?";
    db.query(query, [req.body.username[0]], (err, data) => {
      if (err) return res.json(err);
      if (data.length) return res.status(409).json("User Already exists");
    });
    // // hash the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password[0], salt);
    const values = [req.body.username[0], hash];
    //insert into db
    query = "INSERT INTO users(`username`,`password`) VALUES (?)";
    db.query(query, [values], (err, data) => {
      if (err) return console.log(err);
      return res.status(200).json("account created");
    });
  } catch (error) {
    console.error(error.message);
  }
};
export const login = async (req, res) => {
  try {
    // check if user does not exist
    const query = "SELECT * FROM users WHERE username = ?";
    db.query(query, [req.body.username[0]], (err, data) => {
      if (err) return res.json(err);
      if (!data.length) return res.status(404).json("Account does not exist");

      //check is password correct
      const isPasswordCorrect = bcrypt.compare(
        req.body.password[0],
        data[0].password
      );

      if (!isPasswordCorrect)
        return res.status(400).json("incorrect username or password");

      // create token
      const token = jwt.sign({ id: data[0].id }, "jwtkey");

      // seperate password
      const { password, ...other } = data[0];
      // create cookie
      res.cookie("token", token).status(200).json(other);
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const logout = (req, res) => {};
