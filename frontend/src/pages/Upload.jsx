import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
function Upload() {
  const [value, setValue] = useState("");
  const [title, settitle] = useState("");
  const [image, setimage] = useState(null);
  const [category, setcategory] = useState("");
  return (
    <>
      <Navbar />
      <div className="upload">
        <div className="content">
          <input
            type="text"
            placeholder="Title"
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
              <button>Upload</button>
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
                onChange={(e) => setcategory(e.target.value)}
              />
              <label htmlFor="art">Art</label>
            </div>
            <div className="category">
              <input
                type="radio"
                name="category"
                value="science"
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
