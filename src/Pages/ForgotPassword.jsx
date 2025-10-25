import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const { resetPassword } = use(AuthContext);
  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    resetPassword(email)
      .then(() => {
        console.log("Password reset email sent");
        toast.success("Please check your email to reset your password.");
      })
      .catch((err) => {
        console.log("Error sending password reset email:", err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          Forgot Password
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Please enter your email address to reset your password.
        </p>

        <form
          onSubmit={handleResetPassword}
          className="space-y-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
          >
            Reset Password
          </button>
        </form>

        <div className="text-center mt-6">
          <a
            href="/login"
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
