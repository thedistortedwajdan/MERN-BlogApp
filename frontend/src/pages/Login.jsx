import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="auth">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>Login</button>
          <p>Error!</p>
          <span>
            <Link to={"/register"}>Register</Link>
          </span>
        </form>
      </div>
    </>
  );
}

export default Login;
