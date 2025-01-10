// src/components/Contact.js
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

  useEffect(() => {
    // Load saved data from local storage
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

  const validateUsername = (username) => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(username);
  };

  const validateEmail = (email) => {
    return email === email.toLowerCase(); // Check if email is in lowercase
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;

    // Validate username and email
    if (!validateUsername(name)) {
      setError("Use only English alphabets for username.");
      return;
    }

    if (!validateEmail(email)) {
      setValidEmail(false);
      setError("Email must be in lowercase.");
      return;
    }

    // Reset error and clear local storage
    setError("");
    setValidEmail(true);
    localStorage.removeItem("formData");

    // Handle form submission logic (e.g., API call)
    console.log("Form submitted:", formData);

    // Optionally reset the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className={`py-20 px-6 transition-all duration-300 shadow-lg rounded-lg max-w-3xl mx-auto my-10 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h2 className="text-5xl font-bold text-left mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label className="block mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full p-2 border rounded ${
              error && !validateUsername(formData.name)
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full p-2 border rounded ${
              !validEmail ? "border-red-500" : "border-gray-300"
            }`}
          />
          {!validEmail && (
            <p className="text-red-500">Email must be in lowercase.</p>
          )}
        </div>
        <div>
          <label className="block mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-2 border rounded"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
