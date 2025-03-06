import React, { useState, useEffect } from "react";
import Banner from "../../../../assets/IAST_banner.webp";

const Header = () => {
  const [marginTop, setMarginTop] = useState("0px");
  useEffect(() => {
    const handleResize = () => {
      setMarginTop(window.innerWidth >= 768 ? "-20px" : "0px");
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target[0].value,
      mobile: e.target[1].value,
      email: e.target[2].value,
      stream: e.target[3].value,
      class: e.target[4].value,
    };
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzCMs3zpJR2kbpjZYNioMs5vlx63R1o2v2IcmzuRMM8s6Du-4kzD_ye7-oIEg_GnqdJpg/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result.status === "Success") {
        alert("Form submitted successfully!");
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    }
  };

  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-center px-6"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: marginTop,
      }}
    >
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full mt-0">
        {/* Left Section */}
        <div className="text-white  md:text-left space-y-4 items-center justify-items-center m-5 mt-2">
          <p className="text-lg text-black font-semibold">Appear in</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-[#e2010f]">
            IIT Academy Scholarship Test (IAST)
          </h1>
          <div className="border leading-tight border-[#010363] border-spacing-y-0 p-2  text-black items-center justify-items-center rounded-md  transform skew-x-6 ">
            <p className="font-semibold">Avail upto</p>
            <p className="bg-[#e2010f] text-white font-bold text-2xl md:text-4xl p-2 inline-block skew-x-0">
              100% SCHOLARSHIP
            </p>
            <p className="font-semibold">on</p>
            <p className="font-semibold text-xl">
              JEE(Main+Advanced) & NEET Classroom Courses
            </p>
          </div>
          <p className="text-black font-semibold text-xl">
            For Students Moving to Class 10th, 11th & 12th
          </p>
          <p className="text-3xl text-[#1e3f8d] font-semibold gap-x-1">
            Registration Fee =<del> Rs.500</del>
            <span className="text-[#e2010f]"> FREE!</span>{" "}
          </p>
          <p className="text-black text-xl font-semibold">
            Only for LIMITED students!
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-md mr-5">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
            Register For IAST Now!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <label className="block text-sm font-semibold text-gray-700">
              Your Name *
            </label>
            <input
              type="text"
              placeholder="Enter Student’s Name"
              className="w-full p-2 border rounded-md"
              required
            />

            <label className="block text-sm font-semibold text-gray-700">
              Mobile Number *
            </label>
            <input
              type="text"
              placeholder="Enter your Mobile Number"
              className="w-full p-2 border rounded-md"
              required
            />

            <label className="block text-sm font-semibold text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              placeholder="Enter your Email Id"
              className="w-full p-2 border rounded-md"
            />

            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label className="block text-gray-700 font-semibold mb-2">
                  Stream *
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#206a8c] text-gray-500"
                  required
                >
                  <option>Select option</option>
                  <option>JEE</option>
                  <option>NEET</option>
                  <option>Olympaids</option>
                </select>
              </div>

              <div className="w-1/2">
                <label className="block text-gray-700 font-semibold mb-2">
                  Moving Class *
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#206a8c] text-gray-500"
                  required
                >
                  <option>Select Class</option>
                  <option>10th</option>
                  <option>11th</option>
                  <option>12th</option>
                </select>
              </div>
            </div>
            <button className="w-full bg-red-600 text-white p-2 rounded-md font-bold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
