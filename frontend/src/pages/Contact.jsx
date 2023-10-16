import React, { useState } from 'react';
import "./contact.css"

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto mt-6 p-8">
      <h1 id='contact-title' className="text-3xl font-semibold text-white mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-1 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-1 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-40 p-2 border rounded"
            rows="6"
            required
          ></textarea>
        </div>
        <button id='contact-button' type="submit" className="absolute bg-blue-500 text-white py-2 px-8 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
}
