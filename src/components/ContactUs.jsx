import React, { useState } from "react";
import axios from "axios";
import "../css/contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaMapPin } from "react-icons/fa";

// Import toastify components
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    schoolname: "",
    phone: "",
    std: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/form", formData);
      setStatus(response.data.message);
      toast.success("Form submitted successfully!"); // Success toast
    } catch (err) {
      setStatus(err.response?.data?.message || "Error submitting form");
      toast.error("Error submitting form!"); // Error toast
    }
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <p className=" text-blue-900 font-bold text-6xl">Contact Us</p>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="schoolname"
          placeholder="Enter your school name"
          value={formData.schoolname}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="\d{10}"
        />
        <input
          type="number"
          name="std"
          placeholder="Enter your standard/class"
          value={formData.std}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Enter your message (optional)"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
        <p className="status-message">{status}</p>
      </form>
      <div className="contact-details">
        <p className="cnt"><FaPhoneAlt className="contact-icon mx-5" /> +91 12345 67890</p>
        <p className="cnt"><CiMail className="contact-icon mx-5" /> support@example.com</p>
        <p className="cnt"><FaMapPin className="contact-icon mx-5" /> 1234 Elm Street, Your City, Your State</p>
      </div>

      {/* Toast Container */}
      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover
      />
    </div>
  );
};

export default ContactForm;
