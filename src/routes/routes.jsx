import { createBrowserRouter } from "react-router";
import Loading from "../Components/Loading";
import ProductDetails from "../Components/ProductDetails";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import PrivateRoute from "../Provider/PrivateRoute";
import RootLayout from "../rootLayout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/products.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => fetch("/products.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/product-details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/products.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Register />,
  },
]);

export { router };
