// --- src/Register.jsx ---
import { CheckCircle, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  console.log({ navigate });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ name, photo, email, password });

    createUser(email, password)
      .then((res) => {
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            console.log("User profile updated");
            setUser({ ...res.user, displayName: name, photoURL: photo });
            toast.success("User created successfully!");
            navigate("/login");
          })
          .catch((err) => {
            console.log("Profile update error:", err);
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error("User creation failed!");
      });
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#e6fdf6] via-[#f0fefb] to-[#e9fdf8] flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl bg-white/80 backdrop-blur shadow-xl ring-1 ring-[#02B290]/30 p-8">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ring-2 ring-[#02B290]/30 bg-white">
          <CheckCircle className="h-10 w-10 text-[#02B290]" />
        </div>

        <h1 className="text-center text-2xl font-semibold text-slate-800 tracking-tight">
          Create your account
        </h1>
        <p className="mt-1 text-center text-sm text-slate-500">
          Join us in a few seconds
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
        >
          {/* Full Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Full name
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                <User className="h-5 w-5 text-[#02B290]" />
              </span>
              <input
                type="text"
                name="name"
                placeholder="e.g. Neel Ahmed"
                className="w-full rounded-xl border bg-white/90 py-3 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-[#02B290]"
              />
            </div>
            {errors.name && (
              <p
                id="name-error"
                className="mt-1 text-xs text-rose-600"
              >
                {errors.name}
              </p>
            )}
          </div>

          {/* Username */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Photo URL
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                <User className="h-5 w-5 text-[#02B290]" />
              </span>
              <input
                type="text"
                name="photoURL"
                placeholder="Choose a photo URL"
                className="w-full rounded-xl border bg-white/90 py-3 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-[#02B290]"
              />
            </div>
            {errors.photoURL && (
              <p
                id="photoURL-error"
                className="mt-1 text-xs text-rose-600"
              >
                {errors.photoURL}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Email
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                <Mail className="h-5 w-5 text-[#02B290]" />
              </span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border bg-white/90 py-3 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-[#02B290]"
              />
            </div>
            {errors.email && (
              <p
                id="email-error"
                className="mt-1 text-xs text-rose-600"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
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
                placeholder="At least 6 characters"
                className="w-full rounded-xl border bg-white/90 py-3 pl-10 pr-10 text-sm outline-none focus:ring-2 focus:ring-[#02B290]"
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
            <p
              id="password-hint"
              className="mt-1 text-xs text-slate-500"
            >
              Use 8+ characters with a mix of letters & numbers.
            </p>
            {errors.password && (
              <p
                id="password-error"
                className="mt-1 text-xs text-rose-600"
              >
                {errors.password}
              </p>
            )}
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3">
            <input
              id="agree"
              type="checkbox"
              name="agree"
              className="mt-1 h-4 w-4 rounded border-[#97e8d9] text-[#02B290] focus:ring-[#02B290]"
            />
            <label
              htmlFor="agree"
              className="text-sm text-slate-700"
            >
              I agree to the{" "}
              <Link
                to="/terms"
                className="text-[#02B290] hover:underline"
              >
                Terms
              </Link>{" "}
              &{" "}
              <Link
                to="/privacy"
                className="text-[#02B290] hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </label>
          </div>
          {errors.agree && (
            <p
              id="agree-error"
              className="mt-1 text-xs text-rose-600"
            >
              {errors.agree}
            </p>
          )}

          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-[#02B290] py-3 font-semibold text-white shadow hover:bg-[#018e72] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#02B290] disabled:opacity-60"
          >
            Create account
          </button>

          <p className="text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#02B290] hover:underline"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
