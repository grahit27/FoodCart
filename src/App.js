import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header, { Title } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import { LoadShimmer } from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
// import { About, About2 } from "./components/About"; Replaced with Lazy Loading

// Lazy Import with Default Import
// const About2 = lazy(() => import("./components/About"));

//Lazy import with Named Import
const About = React.lazy(() =>
  import("./components/About").then((module) => ({
    default: module.About,
  }))
);
const About2 = React.lazy(() =>
  import("./components/About").then((module) => ({
    default: module.About2,
  }))
);

const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};
// Configuration file to set routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<LoadShimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/about2",
        element: (
          <Suspense fallback={<LoadShimmer />}>
            <About2 />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
