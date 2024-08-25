import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="auth">
        <h1>Register</h1>
        <form>
          <input required type="email" placeholder="email" />
          <input required type="text" placeholder="username" />
          <input required type="password" placeholder="password" />
          <button>Login</button>
          <p>Error!</p>
          <span>
            <Link to={"/login"}>Login</Link>
          </span>
        </form>
      </div>
    </>
  );
}

export default Register;
