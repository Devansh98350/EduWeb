import React, { useState } from "react";
import "./Internship.css";
import pay from "../../../../assets/home_page/pay.png";
import bg from "../../../../assets/home_page/Admission_bg.png";

function Internshipform() {
  const containerStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    justifyContent: "center",
    alignItems: "center",
  };
  // FOR LINKING WITH SPREADSHEET--------------------------------------------------------------------------------------------

  //use state to handle form data whenever they are changed
  const [formData, setFormData] = useState({
    // Initialize form data here if needed
    Name: "",
    emailid: "",
    Mobile: "",
    Address: "",
    Country: "",
    Pincode: "",
    State: "",
    District: "",
    Resume: "",
    College: "",
    PassingYear: "",
    Degree: "",
    Branch: "",
    Domain: "",
    source: "",
    paymentReceipt: "",
    query: "",
  });

  //handles any input field change of the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    const isValidEmail = (email) => {
      // Regular expression for basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    // Validate for numeric input only
    if (name === "Mobile" && !/^\d*$/.test(value)) {
      // Display an error message or handle the validation error
      alert("Please enter only numeric characters.");
      return;
    }
    // Validate for 10 digits or 13 digits (including +91 at the beginning) when a complete number is entered
    if (name === "Mobile" && (value.length === 10 || value.length === 13)) {
      const isValidMobile = /^[0-9]{10}$|^\+91[0-9]{12}$/.test(value);

      if (!isValidMobile) {
        // Display an error message or handle the validation error
        alert("Invalid mobile number format.");
        return;
      }
    }
    //Valid for Percentage
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
  const [submissionStatus, setSubmissionStatus] = useState(null);
  //when submit button is pressed
  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwLZLtNPHDeqFtcssB2ldONKlX7W_PLo41aakI1p6oGboNjfgpiMNoeBNrqad-9u6MtLw/exec";
    const formData = new FormData(e.target);
    const isFormValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );

    if (isFormValid) {
      let obj = {};

      // This block checks if there's a file in the "studentPhoto" input
      let file = formData.get("Resume");
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
      let file2 = formData.get("paymentReceipt");
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
      const resumeBase64 = await getBase64(formData.get("Resume"));
      const paymentBase64 = await getBase64(formData.get("paymentReceipt"));
      const payload = {
        Name: formData.get("Name"),
        emailid: formData.get("emailid"),
        Mobile: formData.get("Mobile"),
        Address: formData.get("Address"),
        Country: formData.get("Country"),
        Pincode: formData.get("Pincode"),
        State: formData.get("State"),
        District: formData.get("District"),
        Resume: resumeBase64,
        College: formData.get("College"),
        PassingYear: formData.get("PassingYear"),
        Degree: formData.get("Degree"),
        Branch: formData.get("Branch"),
        Domain: formData.get("Domain"),
        source: formData.get("source"),
        paymentReceipt: paymentBase64,
        query: formData.get("query"),
      };
      try {
        setSubmissionStatus("waiting");
        alert(`Please wait.. ${formData.get("Name")}..!`);
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbwLZLtNPHDeqFtcssB2ldONKlX7W_PLo41aakI1p6oGboNjfgpiMNoeBNrqad-9u6MtLw/exec",
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
          alert(
            `Congratulations ${formData.get(
              "Name"
            )}!, Your Application has been successfully submitted.Check your email for further updates.`
          );
          setFormData({
            Name: "",
            emailid: "",
            Mobile: "",
            Address: "",
            Country: "",
            Pincode: "",
            State: "",
            District: "",
            Resume: "",
            College: "",
            PassingYear: "",
            Degree: "",
            Branch: "",
            Domain: "",
            source: "",
            paymentReceipt: "",
            query: "",
          });
          setSubmissionStatus("success");
        } else {
          console.error("Error!", response.statusText);
          await new Promise((resolve) => setTimeout(resolve, 2000));
          alert(
            `Congratulations ${formData.get(
              "Name"
            )}!, Your Application has been successfully submitted.Check your email for further updates.`
          );
          setSubmissionStatus("success");
          setFormData({
            Name: "",
            emailid: "",
            Mobile: "",
            Address: "",
            Country: "",
            Pincode: "",
            State: "",
            District: "",
            Resume: "",
            College: "",
            PassingYear: "",
            Degree: "",
            Branch: "",
            Domain: "",
            source: "",
            paymentReceipt: "",
            query: "",
          });
        }
      } catch (error) {
        console.error("Error!", error.message);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert(
          `Congratulations ${formData.get(
            "Name"
          )}!, Your Application has been successfully submitted.Check your email for further updates.`
        );
        setSubmissionStatus("success");
        setFormData({
          Name: "",
          emailid: "",
          Mobile: "",
          Address: "",
          Country: "",
          Pincode: "",
          State: "",
          District: "",
          Resume: "",
          College: "",
          PassingYear: "",
          Degree: "",
          Branch: "",
          Domain: "",
          source: "",
          paymentReceipt: "",
          query: "",
        });
      }
    } else {
      alert("Please fill all the required fields!");
      setSubmissionStatus("error");
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

  // FOR STREAM AND CORRESPONDING COURSES OPTION----------------------------------------------------------------------------------

  //IMAGE SIZE ERROR
  function imageSize() {
    // document.getElementsByClassName("file-upload-message").style.color = "red";
    alert("Please upload an image of size less than 500KB");
    document.getElementById("paymentReceipt").value = "";
  }
  function pdfSize() {
    // document.getElementsByClassName("file-upload-message").style.color = "red";
    alert("Please upload an image of size less than 5MB");
    document.getElementById("Resume").value = "";
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
        <div className="container23">
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
                placeholder="Full Name*"
                onChange={handleChange}
                value={formData.Name}
                className="input-two"
                required
              />
              <input
                type="text"
                id="emailid"
                name="emailid"
                placeholder="Email Id*"
                onChange={handleChange}
                value={formData.emailid}
                className="input-two"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                id="Mobile"
                name="Mobile"
                placeholder="Contact No. (Whatsapp)*"
                onChange={handleChange}
                value={formData.Mobile}
                className="input-two"
                required
              />
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
                type="number"
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
              <div className="file-upload">
                <label htmlFor="Resume">Upload Your Resume:&nbsp;</label>
                <input
                  type="file"
                  id="Resume"
                  name="Resume"
                  accept=".pdf"
                  onChange={(event) => {
                    if (event.target.files && event.target.files[0]) {
                      if (event.target.files[0].size > 5 * 1024 * 1024) {
                        pdfSize();
                        return false;
                      }
                    }
                  }}
                  required
                />
                <img id="Resume" src="" alt="" />
              </div>
            </div>

            <h201 style={{ textAlign: "left" }}>
              Section-02: Academic Information
            </h201>
            <div className="form-group">
              <input
                type="text"
                id="College"
                name="College"
                placeholder="College Name*"
                onChange={handleChange}
                value={formData.College}
                className="input-two"
                required
              />
              <select
                placeholder="PassingYear"
                name="PassingYear"
                onChange={handleChange}
                value={formData.PassingYear}
                className="input-half"
                required
              >
                <option value="">Passing Year</option>
                <option value="2025">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="Degree"
                name="Degree"
                placeholder="Degree (Currently Pursuing/Last Pursued)*"
                onChange={handleChange}
                value={formData.Degree}
                className="input-two"
                required
              />
              <input
                type="text"
                id="Branch"
                name="Branch"
                placeholder="Branch (Currently Pursuing/Last Pursued)*"
                onChange={handleChange}
                value={formData.Branch}
                className="input-two"
                required
              />
            </div>

            <h201 style={{ textAlign: "left" }}>
              Section-03: Internship Information
            </h201>
            <div className="form-group">
              <select
                placeholder="InternshipDomain"
                id="Domain"
                name="Domain"
                onChange={handleChange}
                value={formData.Domain}
                className="input-two"
                required
              >
                <option value="">Select Internship Domain</option>
                <option value="Web Development">Web Development</option>
                <option value="DSA using C/C++">DSA using C/C++</option>
                <option value="OOP's using C++">OOP's using C++</option>
                <option value="Introduction to SQL Database">
                  Introduction to SQL Database
                </option>
                <option value="Python Programming">Python Programming</option>
              </select>
              <select
                placeholder="How did you hear about us?*"
                name="source"
                onChange={handleChange}
                value={formData.source}
                className="input-half"
                required
              >
                <option value="">How did you hear about us?</option>
                <option value="2025">IIT Academy Website</option>
                <option value="2026">LinkedIn</option>
                <option value="2027">University/College</option>
                <option value="2028">Friends</option>
                <option value="2029">Whatsapp</option>
                <option value="2030">Others</option>
              </select>
            </div>
            <h201 style={{ textAlign: "left" }}>Section-04: Payment</h201>
            <div className="image-preview">
              <img id="uploadedImage" src={pay} alt="Uploaded Receipt" />
            </div>
            <div className="pay-details">
              <p>
                <strong>UPI No:</strong> 9262676870
              </p>{" "}
              <p>
                <strong>UPI Id:</strong> iitacademy@axl
              </p>
            </div>
            <div className="form-group">
              <div className="file-upload">
                <label htmlFor="paymentReceipt">
                  Upload Payment Receipt (₹1999):&nbsp;
                </label>
                <input
                  type="file"
                  id="paymentReceipt"
                  name="paymentReceipt"
                  accept=".jpg"
                  className="input-four"
                  onChange={(event) => {
                    if (event.target.files && event.target.files[0]) {
                      if (event.target.files[0].size > 500 * 1024) {
                        imageSize();
                        return false;
                      }
                    }
                  }}
                  required
                />
                <img id="paymentReceipt" src="" alt="" />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="query"
                name="query"
                placeholder="Query (If Any)"
                onChange={handleChange}
                value={formData.query}
                className="input-two"
              />
            </div>
            <label>
              <input type="checkbox" id="agree" name="agree" required />
              &nbsp; &nbsp;I agree
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

            {submissionStatus === "waiting" && (
              <div
                style={{
                  marginTop: "10px",
                  textAlign: "center",
                  color: "blue",
                }}
              >
                Please wait, submitting...
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
                Congratulations! Your Application has been submitted
                successfully. Do check our Email for further updates.
              </div>
            )}

            {submissionStatus === "error" && (
              <div
                style={{
                  marginTop: "10px",
                  color: "red",
                  textAlign: "center",
                }}
              >
                Oops! There was an error submitting the form. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Internshipform;
