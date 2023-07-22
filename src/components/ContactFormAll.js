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
  };
  return (
    <div className="lister2">
      <h2>ENQUIRY NOW</h2>
      <form
        action="https://script.google.com/macros/s/AKfycbxW05Igtjw-SGf5X4i3klSWfwXdGWtzJakhgM39GCF9iI4fd7MEvxLG-lf66ma8at0t/exec"
        name="contact_form"
        method="post"
        onSubmit={handleSubmit}
      >
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
            name="chk_data_1"
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
        <input
          type="submit"
          name="Submit"
          defaultValue="SUBMIT"
          onClick="this.style.background='green';this.style.color='white';this.disabled=true;this.value='Sending, Please Wait...';this.form.submit();"
        />
      </form>
    </div>
  );
};

export default ContactFormAll;
