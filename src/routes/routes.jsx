import { createBrowserRouter } from "react-router";
import Loading from "../Components/Loading";
import ProductDetails from "../Components/ProductDetails";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import ForgotPassword from "../Pages/ForgotPassword";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFoundPage from "../Pages/NotFoundPage";
import Products from "../Pages/Products";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import Terms from "../Pages/Terms";
import PrivateRoute from "../Provider/PrivateRoute";
import RootLayout from "../RootLayout/RootLayout";

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
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/reset-password",
        element: <ForgotPassword />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export { router };
