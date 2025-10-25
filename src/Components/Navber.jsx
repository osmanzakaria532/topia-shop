import { Menu, X } from "lucide-react";
import { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "../Provider/AuthProvider";
import Container from "./ui_layout/Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = use(AuthContext);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLogOut = () => {
    logOut(auth)
      .then(() => {
        // console.log("User logged out");
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <nav className="bg-white shadow-md">
      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1 className="bg-linear-to-r from-[rgb(2,178,144)] to-[rgb(0,128,100)] bg-clip-text  text-2xl font-bold text-transparent">
                Topia Shop
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-[rgb(2,178,144)]"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-700 hover:text-[rgb(2,178,144)]"
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className="text-gray-700 hover:text-[rgb(2,178,144)]"
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-[rgb(2,178,144)]"
            >
              Contact
            </NavLink>

            {/* Right Side - Login & Profile */}
            <div className="flex items-center space-x-4 ml-6">
              {user ? (
                <Link
                  to="/profile"
                  className="flex items-center space-x-1 text-gray-700 hover:text-[rgb(2,178,144)]"
                  title={user.displayName}
                >
                  {user.photoURL && (
                    <img
                      src={user.photoURL}
                      alt="User Avatar"
                      className="h-8 w-8 rounded-full"
                    />
                  )}
                </Link>
              ) : (
                <Link
                  to="/profile"
                  className="text-gray-700 hover:text-[rgb(2,178,144)]"
                >
                  Profile
                </Link>
              )}
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="text-white bg-linear-to-r from-[rgb(2,178,144)] to-[rgb(0,128,100)] py-2 px-4 rounded-lg cursor-pointer"
                >
                  Log Out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="text-white bg-linear-to-r from-[rgb(2,178,144)] to-[rgb(0,128,100)] py-2 px-4 rounded-lg"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-1.5">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
          >
            About
          </Link>
          <Link
            to="/products"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
          >
            Contact
          </Link>
          <div className="mt-2 flex gap-2.5 pb-3">
            {user ? (
              <div className="flex items-center gap-0.5 w-full border border-[rgb(2,178,144)] text-[rgb(2,178,144)] px-4 rounded">
                <span>
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="h-8 w-8 rounded-full inline-block mr-2"
                  />
                </span>
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-center "
                >
                  Profile
                </Link>
              </div>
            ) : (
              <Link
                to="/profile"
                className="block px-4 py-2 border border-[rgb(2,178,144)] text-[rgb(2,178,144)] text-center rounded w-full"
              >
                Profile
              </Link>
            )}
            {user ? (
              <button
                onClick={handleLogOut}
                className="w-full bg-linear-to-r from-[rgb(2,178,144)] to-[rgb(0,128,100)] text-white py-2 px-4 rounded-lg"
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/login"
                className="block px-4 py-2 border border-[rgb(2,178,144)] text-[rgb(2,178,144)] text-center rounded w-full"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
