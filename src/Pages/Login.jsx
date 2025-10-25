// --- src/Login.jsx ---
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  //   console.log({ location, navigate });

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({ email, password });

    signIn(email, password)
      .then((res) => {
        // console.log(res.user);
        toast.success("Login successful!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        // console.log(err);
        toast.error("Login failed!");
      });
  };

  const handleSignInWithGoogle = (e) => {
    e.preventDefault();
    // Implement Google Sign-In logic here
    signInWithGoogle()
      .then((res) => {
        console.log(res);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log("Error during Google Sign-In:", error);
      });
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#e6fdf6] via-[#f0fefb] to-[#e9fdf8] flex items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white/80 backdrop-blur shadow-xl ring-1 ring-[#02B290]/30/40 p-8">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ring-2 ring-[#02B290]/30 bg-white">
          <User className="h-10 w-10 text-[#02B290]" />
        </div>

        <h1 className="text-center text-2xl font-semibold text-slate-800 tracking-tight">
          Welcome back
        </h1>
        <p className="mt-1 text-center text-sm text-slate-500">
          Sign in to continue
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-6 space-y-4"
        >
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Email address
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                <User className="h-5 w-5 text-[#02B290]" />
              </span>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-[#97e8d9] bg-white/90 py-3 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-[#02B290]"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Password
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                <Lock className="h-5 w-5 text-[#02B290]" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-[#97e8d9] bg-white/90 py-3 pl-10 pr-10 text-sm outline-none focus:ring-2 focus:ring-[#02B290]"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute inset-y-0 right-2 my-auto inline-flex h-8 w-8 items-center justify-center rounded-md text-[#02B290] hover:bg-[#e6f0fa]"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="text-sm">
            <Link
              to="/reset-password"
              type="button"
              className="text-[#02B290] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-[#02B290] py-3 font-semibold text-white shadow hover:bg-[#018e72] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#02B290]"
          >
            Log In
          </button>

          <div className="flex items-center">
            <div className="grow border-t border-gray-300"></div>
            <span className="mx-3 text-gray-500 font-medium">OR</span>
            <div className="grow border-t border-gray-300"></div>
          </div>
          <button
            onClick={handleSignInWithGoogle}
            type="submit"
            className="mt-2 w-full rounded-xl bg-[#4285F4] py-3 font-semibold text-white shadow hover:bg-[#3367D6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4285F4] disabled:opacity-60 transition duration-300"
          >
            <FaGoogle className="inline mr-2 text-white text-lg" />
            Create account with Google
          </button>

          <div className="pt-5 text-center">
            <p className="">
              Don't have an account?{" "}
              <Link
                to="/registration"
                className="text-[#02B290] hover:underline"
              >
                Register Now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
