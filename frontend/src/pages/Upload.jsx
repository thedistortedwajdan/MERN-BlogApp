import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
function Upload() {
  const [value, setValue] = useState("");
  return (
    <>
      <Navbar />
      <div className="upload">
        <div className="content">
          <input type="text" placeholder="Title" />
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
              <input type="radio" name="category" value="art" id="art" />
              <label htmlFor="art">Art</label>
            </div>
            <div className="category">
              <input
                type="radio"
                name="category"
                value="science"
                id="science"
              />
              <label htmlFor="science">Science</label>
            </div>
            <div className="category">
              <input
                type="radio"
                name="category"
                value="technology"
                id="technology"
              />
              <label htmlFor="technology">Technology</label>
            </div>
            <div className="category">
              <input type="radio" name="category" value="food" id="food" />
              <label htmlFor="food">Food</label>
            </div>
            <div className="category">
              <input type="radio" name="category" value="sports" id="sports" />
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
