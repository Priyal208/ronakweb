import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    schoolName: "",
    class: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.name.trim()) validationErrors.name = "Name is required.";
    if (!formData.contactNumber.match(/^\d{10}$/)) {
      validationErrors.contactNumber = "Contact number must be 10 digits.";
    }
    if (!formData.schoolName.trim()) validationErrors.schoolName = "School name is required.";
    if (!formData.class.trim()) validationErrors.class = "Class is required.";
    if (!formData.message.trim()) validationErrors.message = "Message is required.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form Submitted:", formData);
    alert("Thank you for submitting the form!");

    setFormData({
      name: "",
      contactNumber: "",
      schoolName: "",
      class: "",
      message: "",
    });
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
          body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
          }
          .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 2rem;
          }
          .form-section, .contact-details {
            width: 100%;
            max-width: 45%;
            margin-bottom: 2rem;
          }
          @media (max-width: 768px) {
            .form-section, .contact-details {
              width: 100%;
            }
          }
          .form-section header h1 {
            font-size: 2rem;
            font-weight: bold;
            color: #1a202c;
            margin-bottom: 1.5rem;
          }
          form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          label {
            font-size: 1rem;
            font-weight: 600;
            color: #1a202c;
          }
          input,
          textarea {
            width: 100%;
            border: 1px solid #4a5568;
            padding: 0.75rem;
            border-radius: 0.5rem;
            font-size: 1rem;
          }
          input:focus,
          textarea:focus {
            border-color: #3182ce;
            outline: none;
            box-shadow: 0 0 0 2px rgba(49, 130, 206, 0.5);
          }
          button {
            width: 100%;
            background-color: #3182ce;
            color: white;
            padding: 0.75rem;
            border-radius: 0.5rem;
            font-size: 1rem;
            font-weight: 600;
            margin-top: 1rem;
            opacity: 1; /* Ensure button is always visible */
          }
          button:hover {
            background-color: #2b6cb0;
          }
          .error-message {
            color: red;
            font-size: 0.875rem;
          }
          .contact-details {
            padding: 1.5rem;
            background-color: #f7fafc;
            border: 1px solid #e2e8f0;
            border-radius: 0.5rem;
            text-align: left;  /* Align text to the left */
          }
          .contact-details h2 {
            font-size: 1.5rem;
            font-weight: bold;
            color: #2d3748;
            margin-bottom: 1rem;
          }
          .contact-details p {
            margin: 0.5rem 0;
            color: #4a5568;
          }
        `}
      </style>
      <div className="container">
        {/* Form Section */}
        <div className="form-section">
          <header>
            <h1>Inquiry Form</h1>
          </header>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Enter a 10-digit contact number"
              />
              {errors.contactNumber && (
                <p className="error-message">{errors.contactNumber}</p>
              )}
            </div>

            <div>
              <label htmlFor="schoolName">School Name</label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                placeholder="Enter your school name"
              />
              {errors.schoolName && (
                <p className="error-message">{errors.schoolName}</p>
              )}
            </div>

            <div>
              <label htmlFor="class">Class</label>
              <input
                type="text"
                id="class"
                name="class"
                value={formData.class}
                onChange={handleChange}
                placeholder="Enter your class"
              />
              {errors.class && <p className="error-message">{errors.class}</p>}
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                rows="4"
              ></textarea>
              {errors.message && (
                <p className="error-message">{errors.message}</p>
              )}
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="contact-details">
          <h2>Contact Details</h2>
          <p>M. 9409027500 / 9106998993</p>
          <p>Email: ronakinstitute22@gmail.com</p>
          <p>
            Address: M.7 Krishna Darshan Soc., Vijay Nagar, Harni Road,
            Karelibaug, Vadodara 390006
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
