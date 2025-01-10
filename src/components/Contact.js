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
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
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
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <button
          type="submit"
          className="w-80 bg-orange-400 text-white py-4 center mx-auto rounded hover:bg-orange-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
