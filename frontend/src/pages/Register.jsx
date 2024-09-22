import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
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
  const register = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        "/api/auth/register",
        inputs
      );
      if (res.status !== 200) {
        seterr(res.response.data);
      } else {
        navigate("/login");
      }
    } catch (error) {
      seterr(error.response.data);
    }
  };
  return (
    <>
      <div className="auth">
        <h1>Register</h1>
        <form>
          <input
            required
            type="text"
            name="username"
            placeholder="username"
            onChange={onChange}
          />
          <input
            required
            type="password"
            name="password"
            placeholder="password"
            onChange={onChange}
          />
          <button onClick={register}>Register</button>
          {err && <p>{err}</p>}
          <span>
            <Link to={"/login"}>Login</Link>
          </span>
        </form>
      </div>
    </>
  );
}

export default Register;
