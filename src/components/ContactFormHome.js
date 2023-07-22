import React, { useState } from "react";

const ContactFormHome = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    classOption: "",
    query: "",
  });

  const handleChange = (e) => {
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
      phone: "",
      city: "",
      classOption: "",
      query: "",
    });
  };

  const handleSubmitClick = (e) => {
    e.target.style.background = "green";
    e.target.style.color = "white";
    e.target.disabled = true;
    e.target.value = "Sending, Please Wait...";
    e.target.form.submit();
  };

  return (
    <div className="lister3">
      <h2>ENQUIRY NOW</h2>
      <form onSubmit={handleSubmit}>
        <div>
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
              name="phone"
              placeholder="Mobile No."
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div>
            <select
              name="classOption"
              id="classOption"
              value={formData.classOption}
              onChange={handleChange}
            >
              <option value="">Class</option>
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
            <input
              type="text"
              name="city"
              placeholder="City Name"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <textarea
            name="query"
            placeholder="Query"
            value={formData.query}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="submit"
            name="Submit"
            defaultValue="SUBMIT"
            onClick={handleSubmitClick}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactFormHome;
