import React, { useState } from "react";
import "./Query.css";
// import './queryForm.js'

export const Query = () => {
  // const scriptURL =
  //  "https://script.google.com/macros/s/AKfycbx0c6H0_f-9PoKm2pe1BdleJ3J86eMf3sXcxtBlT3rhPVewbEITn3dOmFzwMItDd1EIDA/exec";

  //use state to handle form data whenever they are changed
  const [formData, setFormData] = useState({
    // Initialize form data here if needed
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    state: "",
    district: "",
    stream: "",
    class: "",
  });

  //handles any input field change of the form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [submissionStatus, setSubmissionStatus] = useState(null);
  //when submit button is pressed
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmissionStatus("waiting");
      alert(`Please wait...${formData.fname}!`);
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx0c6H0_f-9PoKm2pe1BdleJ3J86eMf3sXcxtBlT3rhPVewbEITn3dOmFzwMItDd1EIDA/exec",
        {
          method: "POST",
          body: new FormData(e.target),
          redirect: "follow",
        }
      );

      if (response.ok) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert(
          `Thanks for requesting a call back, ${formData.fname}! We will contact you soon!`
        );
        setFormData({
          name: "",
          mobile: "",
          email: "",
          state: "",
          district: "",
          Stream: "",
          Course: "",
        });
        setSubmissionStatus("success");
      } else {
        console.error("Error!", response.statusText);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert(
          `Thanks for requesting a call back, ${formData.fname}! We will contact you soon!`
        );
        setFormData({
          name: "",
          mobile: "",
          email: "",
          state: "",
          district: "",
          Stream: "",
          Course: "",
        });
        setSubmissionStatus("success");
      }
    } catch (error) {
      console.error("Error!", error.message);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert(
        `Thanks for requesting a call back, ${formData.fname}! We will contact you soon!`
      );
      setFormData({
        name: "",
        mobile: "",
        email: "",
        state: "",
        district: "",
        Stream: "",
        Course: "",
      });
      setSubmissionStatus("success");
    }
  };

  //when any state is selected
  function updateDistricts(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    const stateSelect = document.getElementById("state");
    const districtSelect = document.getElementById("district");

    // Clear existing options
    districtSelect.innerHTML = '<option value="">Select District</option>';

    // Define districts for each state
    const districts = {
      "Andhra Pradesh": [
        "Anantapur",
        "Chittoor",
        "East Godavari",
        "Guntur",
        "Krishna",
        "Kurnool",
        "Nellore",
        "Prakasam",
        "Srikakulam",
        "Visakhapatnam",
        "Vizianagaram",
        "West Godavari",
        "Y.S.R. Kadapa",
      ],
      "Arunachal Pradesh": [
        "Tawang",
        "West Kameng",
        "East Kameng",
        "Papum Pare",
        "Kurung Kumey",
        "Kra Daadi",
        "Lower Subansiri",
        "Upper Subansiri",
        "West Siang",
        "East Siang",
        "Siang",
        "Upper Siang",
        "Lower Siang",
        "Lower Dibang Valley",
        "Dibang Valley",
        "Anjaw",
        "Lohit",
        "Namsai",
        "Changlang",
        "Tirap",
        "Longding",
      ],
      Assam: [
        "Baksa",
        "Barpeta",
        "Biswanath",
        "Bongaigaon",
        "Cachar",
        "Charaideo",
        "Chirang",
        "Darrang",
        "Dhemaji",
        "Dhubri",
        "Dibrugarh",
        "Dima Hasao",
        "Goalpara",
        "Golaghat",
        "Hailakandi",
        "Hojai",
        "Jorhat",
        "Kamrup",
        "Kamrup Metropolitan",
        "Karbi Anglong",
        "Karimganj",
        "Kokrajhar",
        "Lakhimpur",
        "Majuli",
        "Morigaon",
        "Nagaon",
        "Nalbari",
        "Sivasagar",
        "Sonitpur",
        "South Salmara-Mankachar",
        "Tinsukia",
        "Udalguri",
        "West Karbi Anglong",
      ],
      Bihar: [
        "Araria",
        "Arwal",
        "Aurangabad",
        "Banka",
        "Begusarai",
        "Bhagalpur",
        "Bhojpur",
        "Buxar",
        "Darbhanga",
        "East Champaran",
        "Gaya",
        "Gopalganj",
        "Jamui",
        "Jehanabad",
        "Kaimur",
        "Katihar",
        "Khagaria",
        "Kishanganj",
        "Lakhisarai",
        "Madhepura",
        "Madhubani",
        "Munger",
        "Muzaffarpur",
        "Nalanda",
        "Nawada",
        "Patna",
        "Purnia",
        "Rohtas",
        "Saharsa",
        "Samastipur",
        "Saran",
        "Sheikhpura",
        "Sheohar",
        "Sitamarhi",
        "Siwan",
        "Supaul",
        "Vaishali",
        "West Champaran",
      ],
      Chhattisgarh: [
        "Balod",
        "Baloda Bazar",
        "Balrampur",
        "Bastar",
        "Bemetara",
        "Bijapur",
        "Bilaspur",
        "Dantewada",
        "Dhamtari",
        "Durg",
        "Gariaband",
        "Janjgir-Champa",
        "Jashpur",
        "Kabirdham",
        "Kanker",
        "Kondagaon",
        "Korba",
        "Koriya",
        "Mahasamund",
        "Mungeli",
        "Narayanpur",
        "Raigarh",
        "Raipur",
        "Rajnandgaon",
        "Sukma",
        "Surajpur",
        "Surguja",
      ],
      Goa: ["North Goa", "South Goa"],
      Gujarat: [
        "Ahmedabad",
        "Amreli",
        "Anand",
        "Aravalli",
        "Banaskantha",
        "Bharuch",
        "Bhavnagar",
        "Botad",
        "Chhota Udaipur",
        "Dahod",
        "Dang",
        "Devbhoomi Dwarka",
        "Gandhinagar",
        "Gir Somnath",
        "Jamnagar",
        "Junagadh",
        "Kheda",
        "Kutch",
        "Mahisagar",
        "Mehsana",
        "Morbi",
        "Narmada",
        "Navsari",
        "Panchmahal",
        "Patan",
        "Porbandar",
        "Rajkot",
        "Sabarkantha",
        "Surat",
        "Surendranagar",
        "Tapi",
        "Vadodara",
        "Valsad",
      ],
      Haryana: [
        "Ambala",
        "Bhiwani",
        "Charkhi Dadri",
        "Faridabad",
        "Fatehabad",
        "Gurugram",
        "Hisar",
        "Jhajjar",
        "Jind",
        "Kaithal",
        "Karnal",
        "Kurukshetra",
        "Mahendragarh",
        "Nuh",
        "Palwal",
        "Panchkula",
        "Panipat",
        "Rewari",
        "Rohtak",
        "Sirsa",
        "Sonipat",
        "Yamunanagar",
      ],
      "Himachal Pradesh": [
        "Bilaspur",
        "Chamba",
        "Hamirpur",
        "Kangra",
        "Kinnaur",
        "Kullu",
        "Lahaul and Spiti",
        "Mandi",
        "Shimla",
        "Sirmaur",
        "Solan",
        "Una",
      ],
      Jharkhand: [
        "Bokaro",
        "Chatra",
        "Deoghar",
        "Dhanbad",
        "Dumka",
        "East Singhbhum",
        "Garhwa",
        "Giridih",
        "Godda",
        "Gumla",
        "Hazaribagh",
        "Jamtara",
        "Khunti",
        "Koderma",
        "Latehar",
        "Lohardaga",
        "Pakur",
        "Palamu",
        "Ramgarh",
        "Ranchi",
        "Sahebganj",
        "Seraikela Kharsawan",
        "Simdega",
        "West Singhbhum",
      ],
      Karnataka: [
        "Bagalkot",
        "Ballari (Bellary)",
        "Belagavi (Belgaum)",
        "Bengaluru Rural",
        "Bengaluru Urban",
        "Bidar",
        "Chamarajanagar",
        "Chikballapur",
        "Chikkamagaluru",
        "Chitradurga",
        "Dakshina Kannada",
        "Davanagere",
        "Dharwad",
        "Gadag",
        "Hassan",
        "Haveri",
        "Kalaburagi (Gulbarga)",
        "Kodagu",
        "Kolar",
        "Koppal",
        "Mandya",
        "Mysuru (Mysore)",
        "Raichur",
        "Ramanagara",
        "Shivamogga (Shimoga)",
        "Tumakuru (Tumkur)",
        "Udupi",
        "Uttara Kannada",
        "Vijayapura (Bijapur)",
        "Yadgir",
      ],
      Kerala: [
        "Alappuzha",
        "Ernakulam",
        "Idukki",
        "Kannur",
        "Kasaragod",
        "Kollam",
        "Kottayam",
        "Kozhikode",
        "Malappuram",
        "Palakkad",
        "Pathanamthitta",
        "Thiruvananthapuram",
        "Thrissur",
        "Wayanad",
      ],
      "Madhya Pradesh": [
        "Agar Malwa",
        "Alirajpur",
        "Anuppur",
        "Ashoknagar",
        "Balaghat",
        "Barwani",
        "Betul",
        "Bhind",
        "Bhopal",
        "Burhanpur",
        "Chhatarpur",
        "Chhindwara",
        "Damoh",
        "Datia",
        "Dewas",
        "Dhar",
        "Dindori",
        "Guna",
        "Gwalior",
        "Harda",
        "Hoshangabad",
        "Indore",
        "Jabalpur",
        "Jhabua",
        "Katni",
        "Khandwa",
        "Khargone",
        "Mandla",
        "Mandsaur",
        "Morena",
        "Narsinghpur",
        "Neemuch",
        "Panna",
        "Raisen",
        "Rajgarh",
        "Ratlam",
        "Rewa",
        "Sagar",
        "Satna",
        "Sehore",
        "Seoni",
        "Shahdol",
        "Shajapur",
        "Sheopur",
        "Shivpuri",
        "Sidhi",
        "Singrauli",
        "Tikamgarh",
        "Ujjain",
        "Umaria",
        "Vidisha",
      ],
      Maharashtra: [
        "Ahmednagar",
        "Akola",
        "Amravati",
        "Aurangabad",
        "Beed",
        "Bhandara",
        "Buldhana",
        "Chandrapur",
        "Dhule",
        "Gadchiroli",
        "Gondia",
        "Hingoli",
        "Jalgaon",
        "Jalna",
        "Kolhapur",
        "Latur",
        "Mumbai City",
        "Mumbai Suburban",
        "Nagpur",
        "Nanded",
        "Nandurbar",
        "Nashik",
        "Osmanabad",
        "Palghar",
        "Parbhani",
        "Pune",
        "Raigad",
        "Ratnagiri",
        "Sangli",
        "Satara",
        "Sindhudurg",
        "Solapur",
        "Thane",
        "Wardha",
        "Washim",
        "Yavatmal",
      ],
      Manipur: [
        "Bishnupur",
        "Chandel",
        "Churachandpur",
        "Imphal East",
        "Imphal West",
        "Jiribam",
        "Kakching",
        "Kamjong",
        "Kangpokpi",
        "Noney",
        "Pherzawl",
        "Senapati",
        "Tamenglong",
        "Tengnoupal",
        "Thoubal",
        "Ukhrul",
      ],
      Meghalaya: [
        "East Garo Hills",
        "East Jaintia Hills",
        "East Khasi Hills",
        "North Garo Hills",
        "Ri-Bhoi",
        "South Garo Hills",
        "South West Garo Hills",
        "South West Khasi Hills",
        "West Garo Hills",
        "West Jaintia Hills",
        "West Khasi Hills",
      ],
      Mizoram: [
        "Aizawl",
        "Champhai",
        "Hnahthial",
        "Khawzawl",
        "Kolasib",
        "Lawngtlai",
        "Lunglei",
        "Mamit",
        "Saiha",
        "Saitual",
        "Serchhip",
      ],
      Nagaland: [
        "Dimapur",
        "Kiphire",
        "Kohima",
        "Longleng",
        "Mokokchung",
        "Mon",
        "Peren",
        "Phek",
        "Tuensang",
        "Wokha",
        "Zunheboto",
      ],
      Odisha: [
        "Angul",
        "Balangir",
        "Balasore",
        "Bargarh",
        "Bhadrak",
        "Boudh",
        "Cuttack",
        "Deogarh",
        "Dhenkanal",
        "Gajapati",
        "Ganjam",
        "Jagatsinghpur",
        "Jajpur",
        "Jharsuguda",
        "Kalahandi",
        "Kandhamal",
        "Kendrapara",
        "Kendujhar (Keonjhar)",
        "Khordha",
        "Koraput",
        "Malkangiri",
        "Mayurbhanj",
        "Nabarangpur",
        "Nayagarh",
        "Nuapada",
        "Puri",
        "Rayagada",
        "Sambalpur",
        "Subarnapur (Sonepur)",
        "Sundargarh",
      ],
      Punjab: [
        "Amritsar",
        "Barnala",
        "Bathinda",
        "Faridkot",
        "Fatehgarh Sahib",
        "Fazilka",
        "Ferozepur",
        "Gurdaspur",
        "Hoshiarpur",
        "Jalandhar",
        "Kapurthala",
        "Ludhiana",
        "Mansa",
        "Moga",
        "Pathankot",
        "Patiala",
        "Rupnagar",
        "Sahibzada Ajit Singh Nagar",
        "Sangrur",
        "Tarn Taran",
      ],
      Rajasthan: [
        "Ajmer",
        "Alwar",
        "Banswara",
        "Baran",
        "Barmer",
        "Bharatpur",
        "Bhilwara",
        "Bikaner",
        "Bundi",
        "Chittorgarh",
        "Churu",
        "Dausa",
        "Dholpur",
        "Dungarpur",
        "Hanumangarh",
        "Jaipur",
        "Jaisalmer",
        "Jalore",
        "Jhalawar",
        "Jhunjhunu",
        "Jodhpur",
        "Karauli",
        "Kota",
        "Nagaur",
        "Pali",
        "Pratapgarh",
        "Rajsamand",
        "Sawai Madhopur",
        "Sikar",
        "Sirohi",
        "Sri Ganganagar",
        "Tonk",
        "Udaipur",
      ],
      Sikkim: ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
      "Tamil Nadu": [
        "Ariyalur",
        "Chengalpattu",
        "Chennai",
        "Coimbatore",
        "Cuddalore",
        "Dharmapuri",
        "Dindigul",
        "Erode",
        "Kallakurichi",
        "Kancheepuram",
        "Kanyakumari",
        "Karur",
        "Krishnagiri",
        "Madurai",
        "Mayiladuthurai",
        "Nagapattinam",
        "Namakkal",
        "Nilgiris",
        "Perambalur",
        "Pudukkottai",
        "Ramanathapuram",
        "Ranipet",
        "Salem",
        "Sivaganga",
        "Tenkasi",
        "Thanjavur",
        "Theni",
        "Thoothukudi",
        "Tiruchirappalli",
        "Tirunelveli",
        "Tirupathur",
        "Tiruppur",
        "Tiruvallur",
        "Tiruvannamalai",
        "Tiruvarur",
        "Vellore",
        "Viluppuram",
        "Virudhunagar",
      ],
      Telangana: [
        "Adilabad",
        "Bhadradri Kothagudem",
        "Hyderabad",
        "Jagtial",
        "Jangaon",
        "Jayashankar Bhupalpally",
        "Jogulamba Gadwal",
        "Kamareddy",
        "Karimnagar",
        "Khammam",
        "Kumuram Bheem",
        "Mahabubabad",
        "Mahbubnagar",
        "Mancherial",
        "Medak",
        "Medchal–Malkajgiri",
        "Nagarkurnool",
        "Nalgonda",
        "Nirmal",
        "Nizamabad",
        "Peddapalli",
        "Rajanna Sircilla",
        "Rangareddy",
        "Sangareddy",
        "Siddipet",
        "Suryapet",
        "Vikarabad",
        "Wanaparthy",
        "Warangal Rural",
        "Warangal Urban",
        "Yadadri Bhuvanagiri",
      ],
      Tripura: [
        "Dhalai",
        "Gomati",
        "Khowai",
        "North Tripura",
        "Sepahijala",
        "South Tripura",
        "Unakoti",
        "West Tripura",
      ],
      "Uttar Pradesh": [
        "Agra",
        "Aligarh",
        "Ambedkar Nagar",
        "Amethi",
        "Amroha",
        "Auraiya",
        "Ayodhya",
        "Azamgarh",
        "Baghpat",
        "Bahraich",
        "Ballia",
        "Balrampur",
        "Banda",
        "Barabanki",
        "Bareilly",
        "Basti",
        "Bhadohi",
        "Bijnor",
        "Budaun",
        "Bulandshahr",
        "Chandauli",
        "Chitrakoot",
        "Deoria",
        "Etah",
        "Etawah",
        "Farrukhabad",
        "Fatehpur",
        "Firozabad",
        "Gautam Buddh Nagar",
        "Ghaziabad",
        "Ghazipur",
        "Gonda",
        "Gorakhpur",
        "Hamirpur",
        "Hapur",
        "Hardoi",
        "Hathras",
        "Jalaun",
        "Jaunpur",
        "Jhansi",
        "Kannauj",
        "Kanpur Dehat",
        "Kanpur Nagar",
        "Kasganj",
        "Kaushambi",
        "Kheri",
        "Kushinagar",
        "Lakhimpur Kheri",
        "Lalitpur",
        "Lucknow",
        "Maharajganj",
        "Mahoba",
        "Mainpuri",
        "Mathura",
        "Mau",
        "Meerut",
        "Mirzapur",
        "Moradabad",
        "Muzaffarnagar",
        "Pilibhit",
        "Pratapgarh",
        "Prayagraj",
        "Raebareli",
        "Rampur",
        "Saharanpur",
        "Sambhal",
        "Sant Kabir Nagar",
        "Shahjahanpur",
        "Shamli",
        "Shrawasti",
        "Siddharthnagar",
        "Sitapur",
        "Sonbhadra",
        "Sultanpur",
        "Unnao",
        "Varanasi",
      ],
      Uttarakhand: [
        "Almora",
        "Bageshwar",
        "Chamoli",
        "Champawat",
        "Dehradun",
        "Haridwar",
        "Nainital",
        "Pauri Garhwal",
        "Pithoragarh",
        "Rudraprayag",
        "Tehri Garhwal",
        "Udham Singh Nagar",
        "Uttarkashi",
      ],
      "West Bengal": [
        "Alipurduar",
        "Bankura",
        "Birbhum",
        "Cooch Behar",
        "Dakshin Dinajpur (South Dinajpur)",
        "Darjeeling",
        "Hooghly",
        "Howrah",
        "Jalpaiguri",
        "Jhargram",
        "Kalimpong",
        "Kolkata",
        "Malda",
        "Murshidabad",
        "Nadia",
        "North 24 Parganas",
        "Paschim Medinipur (West Medinipur)",
        "Purba Medinipur (East Medinipur)",
        "Purulia",
        "South 24 Parganas",
        "Uttar Dinajpur (North Dinajpur)",
      ],
      "Andaman and Nicobar Islands": [
        "Nicobar",
        "North and Middle Andaman",
        "South Andaman",
      ],
      Chandigarh: ["Chandigarh"],
      "Dadra and Nagar Haveli": ["Dadra and Nagar Haveli", "Daman and Diu"],
      "Daman and Diu": ["Daman", "Diu"],
      Lakshadweep: ["Lakshadweep"],
      Delhi: [
        "Central Delhi",
        "East Delhi",
        "New Delhi",
        "North Delhi",
        "North East Delhi",
        "North West Delhi",
        "South Delhi",
        "South East Delhi",
        "South West Delhi",
        "West Delhi",
      ],
      Puducherry: ["Karaikal", "Mahe", "Puducherry", "Yanam"],
    };

    const selectedState = stateSelect.value;

    // Populate districts for the selected state
    if (districts[selectedState]) {
      districts[selectedState].forEach((district) => {
        const option = document.createElement("option");
        option.value = district;
        option.text = district;
        districtSelect.add(option);
      });
    }
  }

  //for updating corresponding courses
  function updateCourse(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    const streamSelect = document.getElementById("Stream");
    const courseSelect = document.getElementById("Course");

    // Clear existing options
    courseSelect.innerHTML = '<option value="">Select Course</option>';

    // Define districts for each state
    const Course = {
      Engineering: ["Arjuna", "Chaitanya", "Eklavya"],
      Medical: ["Ananta", "Sudarshan", "Swadhyaya"],
      Foundation: ["Aadhya", "Abhinav", "Abhyas", "Aarohan", "Atal"],
      DLP: [
        "Sankalp",
        "Utkarsh",
        "Lakshya",
        "Abhiyaan",
        "Yukti",
        "Sarthak",
        "Pragya",
      ],
      Boards: ["Sammarsa", "Vikash", "Daksh", "Samridhi"],
    };

    const selectedStream = streamSelect.value;

    // Populate districts for the selected state
    if (Course[selectedStream]) {
      Course[selectedStream].forEach((Course) => {
        const option = document.createElement("option");
        option.value = Course;
        option.text = Course;
        courseSelect.add(option);
      });
    }
  }

  //hover effect
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="container21">
        <h2>Talk to Our Expert</h2>
        <button
          type="button"
          id="callbtn"
          className="call1"
          style={{
            backgroundColor: "orange",
            padding: "10px",
            fontSize: "20px",
            border: "none",
            cursor: "pointer",
            borderRadius: "8px",
            marginTop: "20px",
          }}
        >
          <a
            href="tel:9205704041"
            style={{
              color: "black",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            <i className="fa fa-phone"></i> Call now for free
          </a>
        </button>

        <h1>or</h1>

        <h2>Request call back</h2>
        <form
          method="post"
          onSubmit={handleSubmit}
          id="queryForm"
          name="queryForm"
        >
          <div className="form1-group">
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="First Name*"
              onChange={handleChange}
              value={formData.name}
              className="input-half"
              required
            />
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Last Name*"
              onChange={handleChange}
              value={formData.name}
              className="input-half"
              required
            />
          </div>

          <div className="form1-group">
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Mobile No*"
              onChange={handleChange}
              value={formData.mobile}
              className="input-half"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Id*"
              onChange={handleChange}
              value={formData.email}
              className="input-half"
              required
            />
          </div>

          <div className="form1-group">
            <select
              id="state"
              name="state"
              onChange={updateDistricts}
              value={formData.state}
              className="input-half"
              required
            >
              <option value="">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadra and Nagar Haveli">
                Dadra and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Delhi">Delhi</option>
              <option value="Puducherry">Puducherry</option>
            </select>

            <select
              id="district"
              name="district"
              onChange={handleChange}
              value={formData.district}
              className="input-half"
              required
            >
              <option value="">Select District</option>
              {/* <!-- Options will be dynamically populated using JavaScript --> */}
            </select>
          </div>

          <div className="form1-group">
            <select
              placeholder="Stream"
              id="Stream"
              name="Stream"
              onChange={updateCourse}
              value={formData.Stream}
              className="input-half"
              required
            >
              <option value="">Select Stream</option>
              <option value="Engineering">Engineering</option>
              <option value="Medical">Medical</option>
              <option value="Foundation">Foundation</option>
              <option value="DLP">DLP</option>
              <option value="Boards">Boards</option>
            </select>
            <select
              placeholder="Course"
              id="Course"
              name="Course"
              onChange={handleChange}
              value={formData.Course}
              className="input-half"
              required
            >
              <option value="">Select Course</option>
            </select>
          </div>

          <label>
            <input
              type="checkbox"
              id="agree"
              name="agree"
              placeholder="hgcfjf"
              required
            />
            I agree
          </label>
          <p className="agreeMsg">
            By submitting this form, I agree to receive all the whatsapp
            communication on my registered mobile number and agreeing to terms
            of Use and Privacy Policy.
          </p>

          <button
            type="submit"
            style={{
              backgroundColor: isHovered ? "green" : "orange",
              color: "white",
              fontSize: "20px",
              fontWeight: isHovered ? "bold" : "normal",
              padding: "10px",
              border: "none",
              cursor: "pointer",
              borderRadius: "8px",
              marginTop: "20px",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Submit Now
          </button>
          {submissionStatus === "waiting" && (
            <div
              style={{
                marginTop: "10px",
                textAlign: "center",
                color: "blue",
              }}
            >
              Please wait! We are submitting your details...
            </div>
          )}

          {submissionStatus === "success" && (
            <div
              style={{
                marginTop: "10px",
                textAlign: "center",
                color: "blue",
              }}
            >
              Thanks! We will contact you soon to resolve your query.
            </div>
          )}
        </form>
      </div>
    </>
  );
};
