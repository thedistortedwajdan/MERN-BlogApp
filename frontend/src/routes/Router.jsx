import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import Error from "../pages/Error.jsx";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Single from "../pages/Single";
import Upload from "../pages/Upload";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/post/:id",
    element: <Single />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
]);

export const Routes = () => {
  return (
    <>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  );
};
