import React, { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    localStorage.setItem(
      "formData",
      JSON.stringify({ ...formData, [name]: value })
    );
  };

  const validateUsername = (username) => /^[a-zA-Z\s]+$/.test(username);
  const validateEmail = (email) => email === email.toLowerCase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email } = formData;

    if (!validateUsername(name)) {
      setError("Use only English alphabets for username.");
      return;
    }

    if (!validateEmail(email)) {
      setValidEmail(false);
      setError("Email must be in lowercase.");
      return;
    }

    setError("");
    setValidEmail(true);
    localStorage.removeItem("formData");

    try {
      const response = await fetch("https://formspree.io/f/xbllqgye", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Failed to send message.");
      }
    } catch (err) {
      setError("Error sending message.");
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setError("");
    setSuccessMessage("");
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div
        className={`py-10 px-6 mt-10 duration-300 shadow-lg rounded-lg w-full max-w-2xl transform hover:scale-105 ${
          darkMode ? "bg-gray-900 shadow-gray-700" : "bg-white shadow-gray-300"
        }`}
      >
        <h2 id="contact" className="text-4xl font-bold text-center mb-4 transition duration-500 ease-in-out transform hover:translate-x-1 text-sky-600">
          Contact Me
        </h2>
        <p
          className={`mb-6 text-lg text-center ${
            darkMode ? "text-gray-100" : "text-gray-600"
          }`}
        >
          If you have an app you'd like to develop, a feature you need
          implemented, or a project that requires coding, I'd be excited to
          assist!
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-4"
        >
          <div className="w-full max-w-xs">
            {" "}
            {/* Adjusted for responsiveness */}
            <label className="block mb-1 text-sm font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-sky-600 transition duration-300 ease-in-out hover:shadow-lg ${
                error && !validateUsername(formData.name)
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
          </div>
          <div className="w-full max-w-xs">
            {" "}
            {/* Adjusted for responsiveness */}
            <label className="block mb-1 text-sm font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-sky-600 transition duration-300 ease-in-out hover:shadow-lg ${
                !validEmail ? "border-red-500" : "border-gray-300"
              }`}
            />
            {!validEmail && (
              <p className="text-red-500 text-sm">
                Email must be in lowercase.
              </p>
            )}
          </div>
          <div className="w-full max-w-xs">
            {" "}
            <label
              className="block mb-1 text-sm font-semibold"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Your Message"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-sky-600 transition duration-300 ease-in-out hover:shadow-lg"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <button
              type="submit"
              className="px-11 w-full md:w-48 bg-sky-600 text-white py-2 rounded hover:bg-sky-700 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full md:w-48 bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400 transition duration-300 ease-in-out"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
