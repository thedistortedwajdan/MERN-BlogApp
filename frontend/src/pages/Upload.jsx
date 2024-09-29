import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
function Upload() {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.description || "");
  const [title, settitle] = useState(state?.title || "");
  const [image, setimage] = useState(null);
  const [category, setcategory] = useState(state?.category || "");

  const navigate = useNavigate();
  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);
      const res = await axios.post("/api/image", formData);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };
  const upload = async (e) => {
    try {
      e.preventDefault();
      const imageUrl = await uploadImage();
      state
        ? await axios.put(`/api/post/${state.id}`, {
            title,
            description: value,
            category,
            image: image ? imageUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          })
        : await axios.post(`/api/post`, {
            title,
            description: value,
            category,
            image: image ? imageUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Navbar />
      <div className="upload">
        <div className="content">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
          <div className="editorContainer">
            <ReactQuill
              className="editor"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <h1>Publish</h1>
            <span>
              <b>Status: </b>Draft
            </span>
            <span>
              <b>Visibility: </b>Public
            </span>
            <input
              style={{ display: "none" }}
              type="file"
              accept=".png,.jpg,.svg,.WebP,.AVIF,.APNG,.GIF"
              name=""
              id="file"
              onChange={(e) => setimage(e.target.files[0])}
            />
            <label className="file" htmlFor="file">
              Upload Image
            </label>
            <div className="buttons">
              <button>Save Draft</button>
              <button onClick={upload}>Upload</button>
            </div>
          </div>
          <div className="item">
            <h1>Category</h1>
            <div className="category">
              <input
                type="radio"
                name="category"
                value="art"
                id="art"
                checked={category === "art"}
                onChange={(e) => setcategory(e.target.value)}
              />
              <label htmlFor="art">Art</label>
            </div>
            <div className="category">
              <input
                type="radio"
                name="category"
                value="science"
                checked={category === "science"}
                id="science"
                onChange={(e) => setcategory(e.target.value)}
              />
              <label htmlFor="science">Science</label>
            </div>
            <div className="category">
              <input
                type="radio"
                name="category"
                value="technology"
                checked={category === "technology"}
                id="technology"
                onChange={(e) => setcategory(e.target.value)}
              />
              <label htmlFor="technology">Technology</label>
            </div>
            <div className="category">
              <input
                type="radio"
                name="category"
                value="food"
                checked={category === "food"}
                id="food"
                onChange={(e) => setcategory(e.target.value)}
              />
              <label htmlFor="food">Food</label>
            </div>
            <div className="category">
              <input
                type="radio"
                name="category"
                value="sports"
                checked={category === "sports"}
                id="sports"
                onChange={(e) => setcategory(e.target.value)}
              />
              <label htmlFor="sports">Sports</label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Upload;
