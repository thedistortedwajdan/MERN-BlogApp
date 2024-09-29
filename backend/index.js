import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/post.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();
app.use(cors());

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });
app.post("/api/image", upload.single("image"), function (req, res) {
  const image = req.image;
  res.status(200).json(image.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

app.listen(4000, () => {
  console.log("server started");
});
