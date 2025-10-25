import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-[rgb(2,178,144)] to-[rgb(0,128,100)] p-6">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-md flex flex-col md:flex-row p-8 gap-10">
        {/* Left Side - Contact Info */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            We are committed to processing the information in order to contact
            you and talk about your project.
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <Mail
                className="text-[rgb(2,178,144)]"
                size={18}
              />
              example@teamwebflow.com
            </p>
            <p className="flex items-center gap-3">
              <MapPin
                className="text-[rgb(2,178,144)]"
                size={18}
              />
              4074 Ebert Summit Suite 375, Lake Leonardchester
            </p>
            <p className="flex items-center gap-3">
              <Phone
                className="text-[rgb(2,178,144)]"
                size={18}
              />
              +44 123 654 7890
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="flex-1 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[rgb(2,178,144)] outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[rgb(2,178,144)] outline-none"
          />
          <input
            type="text"
            placeholder="Website"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[rgb(2,178,144)] outline-none"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[rgb(2,178,144)] outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-medium bg-linear-to-r from-[rgb(2,178,144)] to-[rgb(0,128,100)] hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
