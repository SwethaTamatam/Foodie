import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./About";
import ContactUs from "./ContactUs";
import Error from "./Error";
import Header from "./Header";
import Body from "./Body";
import RestaurantMenu from "./RestaurantMenu";
import Shimmer from "./Shimmer";
// import Grocery from "./Grocery";

const Grocery = lazy(()=> import("./Grocery") );

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/grocery", element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
