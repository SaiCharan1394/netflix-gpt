import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";

import {  useDispatch } from "react-redux";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    { path: "/browse", element: <Browse /> },
  ]);
  
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
};
export default Body;
