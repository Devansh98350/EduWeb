import React, { useState } from "react";

const ContactFormAll = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    classOption: "",
    query: "",
  });

  const handleChange = (e) => {
    console.log("Input value:", e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the form data
    console.log(formData);
    // Clear the form
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      classOption: "",
      query: "",
    });
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSf77FWM1GUYpp4wzJQEPOEXH5zc7-lhh_ybj75MfLWsUrvO9g/viewform?usp=sf_link";
  };

  return (
    <div className="lister2">
      <h2>ENQUIRY NOW</h2>
      <form name="contact_form" method="post" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="phone"
            placeholder="Mobile No."
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="city"
            placeholder="City Name"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <select
            name="classOption"
            id="classOption"
            value={formData.classOption}
            onChange={handleChange}
          >
            <option value="">Select Class</option>
            <option value={39}>Foundation 2.0(9th)</option>
            <option value={40}>ExcelX (10th)</option>
            <option value={41}>Engineering (11th)</option>
            <option value={42}>Engineering (12th)</option>
            <option value={44}>Medical (11th)</option>
            <option value={45}>Medical (12th)</option>
            <option value={47}>Others</option>
          </select>
        </div>

        <div>
          <textarea
            type="text"
            name="query"
            placeholder="Query"
            value={formData.query}
            onChange={handleChange}
          />
        </div>
        {/* Input fields and other form elements here */}
        <input type="submit" name="Submit" defaultValue="SUBMIT" />
      </form>
    </div>
  );
};

export default ContactFormAll;
