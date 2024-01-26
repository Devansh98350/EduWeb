import React, { useState, useEffect } from "react";
import "./Career.css";
import bg from "../../../assets/home_page/Admission_bg.png";

function Career() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const containerStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    justifyContent: "center",
    alignItems: "center",
  };
  // FOR LINKING WITH SPREADSHEET--------------------------------------------------------------------------------------------
  const [formSubmitted, setFormSubmitted] = useState(false);
  //use state to handle form data whenever they are changed
  const [formData, setFormData] = useState({
    // Initialize form data here if needed
    Name: "",
    Email: "",
    DOB: "",
    Gender: "",
    Category: "",
    Mobile: "",
    Address: "",
    Address1: "",
    Country: "",
    State: "",
    District: "",
    Pincode: "",
    Cctc: "",
    NoticePeriod: "",
    TotalExp: "",
    aadharNumber: "",
    language1: "",
    language2: "",
    VideoLink: "",
    Photo: "",
    resume: "",
    source: "",
    Qualification: "",
    InstituteType: "",
    PassingYear: "",
    cgpa: "",
    college: "",
    degree: "",
    insName: "",
    postheld: "",
    fromdate: "",
    todate: "",
    ctcget: "",
    jobcategory: "",
    discipline: "",
    jobprofile: "",
  });

  //handles any input field change of the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    const isValidEmail = (email) => {
      // Regular expression for basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    if (name === "aadharNumber") {
      // Validate for a 12-digit number
      const isValidAadhar = /^\d{12}$/.test(value);

      if (!isValidAadhar && value.length === 12) {
        // Display an error message or handle the validation error
        alert("Invalid Aadhar number format. Please enter a 12-digit number.");
        return;
      }
    }
    if (name === "DOB") {
      // Check if the entered date is before the present date
      const enteredDate = new Date(value);
      const currentDate = new Date();

      // Set the time part of both dates to midnight
      enteredDate.setHours(0, 0, 0, 0);
      currentDate.setHours(0, 0, 0, 0);

      if (enteredDate > currentDate) {
        alert("Date of Birth should be before today's date.");
        return;
      }
    }
    // Validate for numeric input only
    if (
      (name === "Mobile" ||
        name === "fatherMobile" ||
        name === "XIIPercentage" ||
        name === "XPercentage" ||
        name === "aadharNumber") &&
      !/^\d*$/.test(value)
    ) {
      // Display an error message or handle the validation error
      alert("Please enter only numeric characters.");
      return;
    }
    // Validate for 10 digits or 13 digits (including +91 at the beginning) when a complete number is entered
    if (
      (name === "Mobile" || name === "fatherMobile") &&
      (value.length === 10 || value.length === 13)
    ) {
      const isValidMobile = /^[0-9]{10}$|^\+91[0-9]{12}$/.test(value);

      if (!isValidMobile) {
        // Display an error message or handle the validation error
        alert("Invalid mobile number format.");
        return;
      }
    }
    //Valid for Percentage
    if (
      (name === "XPercentage" || name === "XIIPercentage") &&
      (value < 0 || value > 100)
    ) {
      // Display an error message or handle the validation error
      alert("Percentage value must be between 0 and 100.");
      return;
    }
    if (name === "Email" && !isValidEmail(value)) {
      // Display an error message or handle the validation error
      alert("Invalid email format.");
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //when submit button is pressed
  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyN_PdNvxNhqeqPnx17SAqcytrWznfs-B96fBZFaYzh6U1wHR10CHVBnjWPBE0RAmKT0Q/exec";
    const formData = new FormData(e.target);
    const isFormValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );

    if (isFormValid) {
      let obj = {};

      // This block checks if there's a file in the "studentPhoto" input
      let file = formData.get("Photo");
      if (file instanceof File) {
        let fr = new FileReader();
        fr.addEventListener("loadend", () => {
          let res = fr.result;
          let spt = res.split("base64,")[1];
          obj.base64 = spt;
          obj.imgType = file.type;
          obj.imgName = file.name;
        });
        fr.readAsDataURL(file);
      }
      // This block checks if there's a file in the "aadharCard" input
      let file2 = formData.get("resume");
      if (file2 instanceof File) {
        let fr = new FileReader();
        fr.addEventListener("loadend", () => {
          let res = fr.result;
          let spt = res.split("base64,")[1];
          obj.base64i = spt;
          obj.imgType2 = file2.type;
          obj.imgName2 = file2.name;
          // Fetch is moved here to ensure it runs after both files are processed
          fetch(scriptURL, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(obj),
          })
            .then((r) => r.text())
            .then((data) => console.log(data));
        });
        fr.readAsDataURL(file2);
      }
      const photoBase64 = await getBase64(formData.get("Photo"));
      const resumeBase64 = await getBase64(formData.get("resume"));
      const payload = {
        Name: formData.get("Name"),
        Email: formData.get("Email"),
        DOB: formData.get("DOB"),
        Gender: formData.get("Gender"),
        Category: formData.get("Category"),
        Mobile: formData.get("Mobile"),
        Address: formData.get("Address"),
        Address1: formData.get("Address1"),
        Country: formData.get("Country"),
        State: formData.get("State"),
        District: formData.get("District"),
        Pincode: formData.get("Pincode"),
        Cctc: formData.get("Cctc"),
        NoticePeriod: formData.get("NoticePeriod"),
        TotalExp: formData.get("TotalExp"),
        aadharNumber: formData.get("aadharNumber"),
        language1: formData.get("language1"),
        language2: formData.get("language2"),
        VideoLink: formData.get("VideoLink"),
        Photo: photoBase64,
        resume: resumeBase64,
        source: formData.get("source"),
        Qualification: formData.get("Qualification"),
        InstituteType: formData.get("InstituteType"),
        PassingYear: formData.get("PassingYear"),
        cgpa: formData.get("cgpa"),
        college: formData.get("college"),
        degree: formData.get("degree"),
        insName: formData.get("insName"),
        postheld: formData.get("postheld"),
        fromdate: formData.get("fromdate"),
        todate: formData.get("todate"),
        ctcget: formData.get("ctcget"),
        jobcategory: formData.get("jobcategory"), // Assuming you have a variable named category
        discipline: formData.get("discipline"), // Assuming you have a variable named discipline
        jobprofile: formData.get("jobprofile"), // Assuming you have a variable named jobprofile
      };

      try {
        alert("Please wait...");
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbyN_PdNvxNhqeqPnx17SAqcytrWznfs-B96fBZFaYzh6U1wHR10CHVBnjWPBE0RAmKT0Q/exec",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(payload),
          }
        );
        if (response.ok) {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          alert("Your Form was Successfully Submitted!");
          setFormSubmitted(true);
          setFormData({
            Name: "",
            Email: "",
            DOB: "",
            Gender: "",
            Category: "",
            Mobile: "",
            Address: "",
            Address1: "",
            Country: "",
            State: "",
            District: "",
            Pincode: "",
            Cctc: "",
            NoticePeriod: "",
            TotalExp: "",
            aadharNumber: "",
            language1: "",
            language2: "",
            VideoLink: "",
            Photo: "",
            resume: "",
            source: "",
            Qualification: "",
            InstituteType: "",
            PassingYear: "",
            cgpa: "",
            college: "",
            degree: "",
            insName: "",
            postheld: "",
            fromdate: "",
            todate: "",
            ctcget: "",
            jobcategory: "",
            discipline: "",
            jobprofile: "",
          });
        } else {
          console.error("Error!", response.statusText);
          setFormSubmitted(true);
          setFormData({
            Name: "",
            Email: "",
            DOB: "",
            Gender: "",
            Category: "",
            Mobile: "",
            Address: "",
            Address1: "",
            Country: "",
            State: "",
            District: "",
            Pincode: "",
            Cctc: "",
            NoticePeriod: "",
            TotalExp: "",
            aadharNumber: "",
            language1: "",
            language2: "",
            VideoLink: "",
            Photo: "",
            resume: "",
            source: "",
            Qualification: "",
            InstituteType: "",
            PassingYear: "",
            cgpa: "",
            college: "",
            degree: "",
            insName: "",
            postheld: "",
            fromdate: "",
            todate: "",
            ctcget: "",
            jobcategory: "",
            discipline: "",
            jobprofile: "",
          });
        }
      } catch (error) {
        console.error("Error!", error.message);
        alert("Your Form was Successfully Submitted!");
      }
    } else {
      alert("Please fill all the required fields!");
    }
  };

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  }

  // FOR STATES AND CORRESPONDING DISTRICTS OPTION----------------------------------------------------------------------------------

  function updateDistricts(e) {
    const selectedState = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: selectedState,
    }));
    const districtSelect = document.getElementById("District");
    if (!districtSelect) {
      console.error("District select element not found");
      return;
    }
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

  // FOR JOB CATEGORY AND CORRESPONDING JOB PROFILE OPTION----------------------------------------------------------------------------------

  function updateCategory(e) {
    const selectedCategory = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: selectedCategory,
    }));

    const disciplineSelect = document.getElementById("discipline");
    const jobProfileSelect = document.getElementById("jobprofile");

    if (!disciplineSelect || !jobProfileSelect) {
      console.error("Select elements not found");
      return;
    }

    // Clear existing options
    disciplineSelect.innerHTML = '<option value="">Select Discipline*</option>';
    jobProfileSelect.innerHTML =
      '<option value="">Select Job Profile*</option>';

    // Define options for each category within the function scope
    const categoryOptions = {
      Academic: {
        Disciplines: [
          "JEE Advanced",
          "JEE Main / NEET",
          "Foundation (Class 6-10)",
          "Trainee Faculty",
        ],
        JobProfiles: {
          "JEE Advanced": [
            "JEE Advanced Mathematics Faculty",
            "JEE Advanced Physics Faculty",
            "JEE Advanced Chemistry Faculty",
          ],
          "JEE Main / NEET": [
            "JEE Main/NEET Physics Faculty",
            "JEE Main/NEET Chemistry Faculty",
            "JEE Main Mathematics Faculty",
            "NEET Biology Faculty",
          ],
          "Foundation (Class 6-10)": [
            "Foundation Faculty Mathematics",
            "Foundation Faculty Physics",
            "Foundation Faculty Chemistry",
            "Foundation Faculty Biology",
            "Foundation Faculty Social Science",
            "Foundation Faculty English",
            "Foundation Faculty Hindi",
          ],
          "Trainee Faculty": [
            "Trainee / Content Expert (Mathematics)",
            "Trainee / Content Expert (Physics)",
            "Trainee / Content Expert (Chemistry) ",
            "Trainee / Content Expert (Biology)",
            "Trainee / Content Expert (Social Science)",
            "Trainee / Content Expert (English)",
            "Trainee / Content Expert (Hindi)",
          ],
        },
      },
      "Non-Academic / Management": {
        JobProfiles: [
          "Business Development Executive",
          "Full Stack Developer",
          "Video Editor & Animator",
          "Content Expert",
          "Digital Marketing Expert & Social Media Executive",
          "DTP Operator",
          "Academic and Center Manager",
          "Web and App Developer",
          "Studio Managers",
          "Academic Counselor (Student Mentor)",
          "Human Resource Executive",
          "Developer",
          "Accounts",
          "Content Writer",
          "Offline Marketing Manager",
        ],
      },
    };
    disciplineSelect.disabled =
      selectedCategory === "Non-Academic / Management";
    // If Non-Academic / Management category, populate job profiles directly
    if (selectedCategory === "Non-Academic / Management") {
      const selectedJobProfiles =
        categoryOptions[selectedCategory]?.JobProfiles || [];
      selectedJobProfiles.forEach((jobProfile) => {
        const option = document.createElement("option");
        option.value = jobProfile;
        option.text = jobProfile;
        jobProfileSelect.add(option);
      });
    } else if (selectedCategory === "Academic") {
      // If Academic category, populate disciplines based on the selected category
      const selectedDisciplines =
        categoryOptions[selectedCategory]?.Disciplines || [];
      selectedDisciplines.forEach((discipline) => {
        const option = document.createElement("option");
        option.value = discipline;
        option.text = discipline;
        disciplineSelect.add(option);
      });

      // If Academic category, populate job profiles based on the selected discipline
      disciplineSelect.addEventListener("change", function () {
        const selectedDiscipline = disciplineSelect.value;
        const selectedJobProfiles =
          categoryOptions[selectedCategory]?.JobProfiles[selectedDiscipline] ||
          [];

        // Clear existing options
        jobProfileSelect.innerHTML =
          '<option value="">Select Job Profile*</option>';

        selectedJobProfiles.forEach((jobProfile) => {
          const option = document.createElement("option");
          option.value = jobProfile;
          option.text = jobProfile;
          jobProfileSelect.add(option);
        });
      });
    }
  }

  //IMAGE SIZE ERROR
  function imageSize() {
    // document.getElementsByClassName("file-upload-message").style.color = "red";
    alert("Please upload an image of size less than 500KB");
    document.getElementById("Photo").value = "";
  }

  function pdfSize() {
    alert("Please upload a resume of size less than 1 MB");
    document.getElementById("resume").value = "";
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
      <div className="body1" style={containerStyle}>
        <div className="container234">
          <h201>Section-01: Personal Information</h201>
          <form
            id="admissionForm"
            method="post"
            onSubmit={handleSubmit}
            name="admissionForm"
          >
            <div className="form-group">
              <input
                type="text"
                id="Name"
                name="Name"
                placeholder="Name*"
                onChange={handleChange}
                value={formData.Name}
                className="input-three"
                required
              />
              <input
                type="email"
                id="Email"
                name="Email"
                placeholder="Email Id*"
                onChange={handleChange}
                value={formData.Email}
                className="input-three"
                required
              />
              <input
                type="date"
                id="DOB"
                placeholder="Date of Birth (DOB)*"
                onChange={handleChange}
                value={formData.DOB}
                className="input-three"
                name="DOB"
                required
              />
            </div>
            <div className="form-group">
              <select
                placeholder="Gender"
                id="Gender"
                name="Gender"
                onChange={handleChange}
                value={formData.Gender}
                className="input-three"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <select
                placeholder="Category"
                id="Category"
                name="Category"
                onChange={handleChange}
                value={formData.Category}
                className="input-three"
                required
              >
                <option value="">Select Category</option>
                <option value="General">General</option>
                <option value="General">EWS</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>
              <input
                type="tel"
                id="Mobile"
                name="Mobile"
                placeholder="Mobile No. (Whatsapp)*"
                onChange={handleChange}
                value={formData.Mobile}
                className="input-three"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="Address"
                name="Address"
                placeholder="Permanent Address*"
                onChange={handleChange}
                value={formData.Address}
                className="input-two"
                required
              />
              <input
                type="text"
                id="Address1"
                name="Address1"
                placeholder="Current Address*"
                onChange={handleChange}
                value={formData.Address1}
                className="input-two"
                required
              />
            </div>
            <div className="form-group">
              <select
                placeholder="Country"
                id="Country"
                name="Country"
                onChange={handleChange}
                value={formData.Country}
                className="input-four"
                required
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
              </select>
              <select
                id="State"
                name="State"
                onChange={updateDistricts}
                value={formData.State}
                className="input-four"
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
                id="District"
                name="District"
                onChange={handleChange}
                value={formData.District}
                className="input-four"
                required
              >
                <option value="">Select District</option>
                {/* <!-- Options will be dynamically populated using JavaScript --> */}
              </select>
              <input
                type="tel"
                id="Pincode"
                name="Pincode"
                placeholder="Pin Code*"
                onChange={handleChange}
                value={formData.Pincode}
                className="input-four"
                min="100000"
                max="999999"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                id="Cctc"
                name="Cctc"
                placeholder="Current CTC"
                onChange={handleChange}
                value={formData.Cctc}
                className="input-four"
              />
              <input
                type="tel"
                id="NoticePeriod"
                name="NoticePeriod"
                placeholder="Notice Period (in Days)*"
                onChange={handleChange}
                value={formData.NoticePeriod}
                className="input-four"
                required
              />

              <input
                type="tel"
                id="TotalExp"
                name="TotalExp"
                placeholder="Total Experience*"
                onChange={handleChange}
                value={formData.TotalExp}
                className="input-four"
                required
              />
              <input
                type="text"
                id="aadharNumber"
                name="aadharNumber"
                placeholder="Aadhar Number*"
                onChange={handleChange}
                value={formData.aadharNumber}
                className="input-four"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="language1"
                name="language1"
                placeholder="Preferred Language 1*"
                onChange={handleChange}
                value={formData.language1}
                className="input-four"
                min="0"
                max="100"
              />
              <input
                type="text"
                id="language2"
                name="language2"
                placeholder="Preferred Language 2*"
                onChange={handleChange}
                value={formData.language2}
                className="input-four"
                required
              />
              <input
                type="text"
                id="VideoLink"
                name="VideoLink"
                placeholder="Video Link (Upload your teaching video on google drive and share the link)*"
                onChange={handleChange}
                value={formData.VideoLink}
                className="input-half"
                min="0"
                max="100"
              />
            </div>
            <div className="form-group">
              <div className="file-upload">
                <label htmlFor="Photo">Upload Photo:</label>
                <input
                  type="file"
                  id="Photo"
                  name="Photo"
                  accept=".jpg, .png, .jpg"
                  onChange={(event) => {
                    if (event.target.files && event.target.files[0]) {
                      if (event.target.files[0].size > 500 * 1024) {
                        imageSize();
                        return false;
                      }
                    }
                  }}
                  className="input-half"
                  required
                />
                <div className="file-upload-message">
                  Image should be "jpg, png or jpeg" only and the size should be
                  less than 500kb.
                </div>
                <img id="Photo" src="" alt="" />
              </div>

              <div className="file-upload">
                <label htmlFor="resume">Upload Resume:</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf"
                  onChange={(event) => {
                    if (event.target.files && event.target.files[0]) {
                      if (event.target.files[0].size > 1000 * 1024) {
                        pdfSize();
                        return false;
                      }
                    }
                  }}
                  className="input-half"
                  required
                />
                <div className="file-upload-message">
                  Resume should be "pdf" only and the size should be less than 1
                  MB.
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="source"
                name="source"
                placeholder="How did you come to know about IIT Academy?*"
                onChange={handleChange}
                value={formData.source}
                className="input-source"
                required
              />
            </div>
            <h201>Section-02: Educational Qualification</h201>
            <div className="form-group">
              <select
                placeholder="Qualification"
                id="Qualification"
                name="Qualification"
                onChange={handleChange}
                value={formData.Qualification}
                className="input-four"
                required
              >
                <option value="">Qualification</option>
                <option value="10th">10th</option>
                <option value="12th">12th</option>
                <option value="Graduate">Graduate</option>
                <option value="Post-Graduate">Post-Graduate</option>
                <option value="PhD">PhD</option>
              </select>
              <select
                placeholder="Institute Type"
                id="InstituteType"
                name="InstituteType"
                onChange={handleChange}
                value={formData.InstituteType}
                className="input-four"
                required
              >
                <option value="">Institute Type</option>
                <option value="IIT">IIT</option>
                <option value="NIT">NIT</option>
                <option value="AIIMS">AIIMS</option>
                <option value="BDS">BDS</option>
                <option value="Others">Others</option>
              </select>
              <select
                placeholder="Passing Year"
                name="PassingYear"
                onChange={handleChange}
                value={formData.PassingYear}
                className="input-four"
                required
              >
                <option value="">Passing Year</option>
                {Array.from(
                  { length: 2024 - 1980 + 1 },
                  (_, index) => 2024 - index
                ).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                id="cgpa"
                name="cgpa"
                placeholder="CGPA/Percentage Obtained(%)*"
                onChange={handleChange}
                value={formData.cgpa}
                className="input-four"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="college"
                name="college"
                placeholder="Enter College Name*"
                onChange={handleChange}
                value={formData.college}
                className="input-two"
                required
              />
              <input
                type="text"
                id="degree"
                name="degree"
                placeholder="Enter Degree Obtained*"
                onChange={handleChange}
                value={formData.degree}
                className="input-two"
                required
              />
            </div>
            <h201>Section-03: Teaching Experience</h201>
            <div className="form-group">
              <input
                type="text"
                id="insName"
                name="insName"
                placeholder="Enter Institute Name*"
                onChange={handleChange}
                value={formData.insName}
                className="input-two"
                required
              />
              <input
                type="text"
                id="postheld"
                name="postheld"
                placeholder="Enter Post Held*"
                onChange={handleChange}
                value={formData.postheld}
                className="input-two"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="fromdate"
                name="fromdate"
                placeholder="Duration (From)*"
                onChange={handleChange}
                value={formData.fromdate}
                className="input-three"
                required
              />
              <input
                type="text"
                id="todate"
                name="todate"
                placeholder="Duration (To)*"
                onChange={handleChange}
                value={formData.todate}
                className="input-three"
                required
              />
              <input
                type="text"
                id="ctcget"
                name="ctcget"
                placeholder="Enter CTC (In LPA)"
                onChange={handleChange}
                value={formData.ctcget}
                className="input-three"
              />
            </div>
            <h201>Section-04: Post Applying For</h201>
            <div className="form-group">
              <select
                id="jobcategory"
                name="jobcategory"
                onChange={updateCategory}
                value={formData.jobcategory}
                className="input-three"
                required
              >
                <option value="">Job Category*</option>
                <option value="Academic">Academic</option>
                <option value="Non-Academic / Management">
                  Non-Academic / Management
                </option>
              </select>
              <select
                id="discipline"
                name="discipline"
                onChange={handleChange}
                value={formData.discipline}
                className="input-three"
                required={formData.jobcategory === "Academic"}
              >
                <option value="">Select Discipline</option>
              </select>
              <select
                id="jobprofile"
                name="jobprofile"
                onChange={handleChange}
                value={formData.jobprofile}
                className="input-three"
                required
              >
                <option value="">Select Job Profile*</option>
              </select>
            </div>
            <label>
              <input type="checkbox" id="agree" name="agree" required />I agree
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
                fontWeight: isHovered ? "bold" : "normal",
                padding: "10px",
                fontSize: "20px",
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
            {formSubmitted && (
              <div style={{ color: "green", marginTop: "10px" }}>
                Your Form was Successfully Submitted!
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Career;
