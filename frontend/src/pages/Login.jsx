import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.jsx";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [inputs, setinputs] = useState({
    username: "",
    password: "",
  });
  const [err, seterr] = useState(null);
  const onChange = (e) => {
    try {
      e.preventDefault();
      setinputs((prev) => {
        return { ...prev, [e.target.name]: [e.target.value] };
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      await login(inputs);
      navigate("/");
    } catch (error) {
      seterr(error.response.data);
    }
  };
  return (
    <>
      <div className="auth">
        <h1>Login</h1>
        <form>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={onChange}
          />
          <button onClick={handleLogin}>Login</button>
          {err && <p>{err}</p>}
          <span>
            <Link to={"/register"}>Register</Link>
          </span>
        </form>
      </div>
    </>
  );
}

export default Login;
