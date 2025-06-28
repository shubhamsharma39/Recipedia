import React, { useRef } from "react";
import { FaUserEdit } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bmh4h7g",    // <- your Service ID
        "template_9syufch",   // <- your Template ID
        form.current,
        "CpOZGwbasMPqfysCR"   // <- your Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        () => {
          toast.error("Failed to send message!");
          /* console.error removed to silence no-console warning */
        }
      );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-10">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpsTAwNPbWsrAEqQNuTAzeZ_yTyvatRrPhMA&s"
            alt="Contact Illustration"
            className="w-full h-full object-cover rounded-l-xl"
          />
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
              <FaUserEdit className="text-[#6366F1]" /> Contact&nbsp;Us
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              We'd love to hear from you!
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-[#1D5C76] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-[#1D5C76] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-[#1D5C76] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                placeholder="Subject"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-[#1D5C76] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                placeholder="Your Message"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#6366F1] hover:bg-[#4F51D4] text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Send&nbsp;Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
