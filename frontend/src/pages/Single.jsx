import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

function Single() {
  const { user } = useContext(AuthContext);
  const [post, setpost] = useState({});
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`/api/post/${postId}`);
        if (res.status === 200) {
          setpost(res.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getPost();
  }, [postId]);
  return (
    <>
      <Navbar />
      <div className="single">
        <div className="content">
          <img src={post?.image} alt="" />
          <div className="user">
            <img src="" alt="" />
            <div className="info">
              <span>{post?.username}</span>
              <p>{moment(post.date).fromNow()} ago</p>
            </div>
            {user.username === post.username && (
              <div className="edit">
                <Link to={`/upload?edit=`}>
                  <img src={Edit} alt="" />
                </Link>
                <Link>
                  <img src={Delete} alt="" />
                </Link>
              </div>
            )}
          </div>
          <h1>{post.title}</h1>
          {post.description}
        </div>
        <Menu />
      </div>
      <Footer />
    </>
  );
}

export default Single;
