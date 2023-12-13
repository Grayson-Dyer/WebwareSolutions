const countriesData = {
  "United States": {
    "California": ["Los Angeles", "San Francisco"],
    "Texas": ["Houston", "Austin"],
    "New York": ["New York City", "Buffalo"],
  },
  "Canada": {
    "Ontario": ["Toronto", "Ottawa"],
    "Quebec": ["Montreal", "Quebec City"],
  },
};

// Function to populate the Country drop-down list
function populateCountryDropdown() {
  const countrySelect = document.getElementById("country");
  for (const country in countriesData) {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  }
  countrySelect.addEventListener("change", populateProvinceDropdown);
}
  
// Function to populate the Province drop-down list based on the selected country
function populateProvinceDropdown() {
  const countrySelect = document.getElementById("country");
  const provinceSelect = document.getElementById("province");
  provinceSelect.innerHTML = ""; // Clear previous options
  const selectedCountry = countrySelect.value;
  
  if (selectedCountry in countriesData) {
    for (const province in countriesData[selectedCountry]) {
      const option = document.createElement("option");
      option.value = province;
      option.textContent = province;
      provinceSelect.appendChild(option);
    }
    populateCityDropdown();

  }
}

function populateCityDropdown() {
  const countrySelect = document.getElementById("country");
  const provinceSelect = document.getElementById("province"); // Grayson Dyer added this
  const citySelect = document.getElementById("city");
  citySelect.innerHTML = ""; // Clear previous options
  const selectedCountry = countrySelect.value;
  const selectedProvince = provinceSelect.value; // Grayson Dyer added this.
  // Had to remove foreach loop to make this work - Grayson Dyer
  if (selectedCountry in countriesData) {
    for (const city of countriesData[selectedCountry][selectedProvince]) { // Added the Selected Province
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    }
  }
}

// Function for validating the contact number.
// Thanks to whoever made the original; I just wanted to keep it separate from the rest,
// not to mention get rid of the alerts.
// Side note, maybe we should make the country code optional. Don't think we'll be taking foreign numbers. ~ Cheryl Dautermann
function validateContact(str) {
	if (!/^(\+\d{1,3})?\d{10}$/.test(str)) {
		return false;
	}
	else {
		return true;
	}
}

// Function to validate the form fields
function validateForm() {
  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const contactNumber = document.getElementById("contact_number").value;
  const email = document.getElementById("email").value;
  const streetAddress = document.getElementById("street_address").value;
  const countrySelect = document.getElementById("country"); // Grayson Dyer added these 3 
  const provinceSelect = document.getElementById("province"); 
  const citySelect = document.getElementById("city");

  // Validity bools; Country, Province, and City are not required as far as I could tell.
	// They weren't marked required before I went through and purged those tags, and they didn't have an asterisk.
	// If I'm wrong, please let me know so I can add them to this. ~ Cheryl Dautermann
	let firstNameValid = false;
	let lastNameValid = false;
	let contactValid = false;
	let emailValid = false;
	let addressValid = false;

	// Error verification label elements.
	const firstNameVerify = document.getElementById("firstNameVerify");
	const lastNameVerify = document.getElementById("lastNameVerify");
	const contactVerify = document.getElementById("contactVerify");
	const emailVerify = document.getElementById("emailVerify");
	const addressVerify = document.getElementById("addressVerify");

	// Wacky parade of individual validation checks and labels.
	if (!firstName) {
		firstNameVerify.innerHTML = "The first name cannot be blank.";
		firstNameValid = false;
	}
	else {
		firstNameVerify.innerHTML = "";
		firstNameValid = true;
	}

	if (!lastName) {
		lastNameVerify.innerHTML = "The last name cannot be blank.";
		lastNameValid = false;
	}
	else {
		lastNameVerify.innerHTML = "";
		lastNameValid = true;
	}

	if (!contactNumber) {
		contactVerify.innerHTML = "The contact number cannot be blank.";
		contactValid = false;
	}
	else if (!validateContact(contactNumber))
	{
		contactVerify.innerHTML = "The contact number must be a country code and ten digits.";
		contactValid = false;
	}
	else {
		contactVerify.innerHTML = "";
		contactValid = true;
	}

	if (!email) {
		emailVerify.innerHTML = "The email cannot be blank.";
		emailValid = false;
	}
	else {
		emailVerify.innerHTML = "";
		emailValid = true;
	}

	if (!streetAddress) {
		addressVerify.innerHTML = "The street address cannot be blank.";
		addressValid = false;
	}
	else {
		addressVerify.innerHTML = "";
		addressValid = true;
	}

	// The final check that sees if *any* of the above checks were false.
	if (!firstNameValid ||
		!lastNameValid ||
		!contactValid ||
		!emailValid ||
		!addressValid) {
			return false;
		}

  // Dated; replaced with above.
  // Validation logic here for each field

  /*if (!firstName || !lastName || !contactNumber || !email || !countrySelect.value || !provinceSelect.value || !citySelect.value ) {
    alert("Please fill in all required fields.");
    return false;
  }

  /// Regex pattern is /^(\+\d{1,3})?\d{10}$/ which accepts a country code and 10 digits
  /// (\+\d{1,3}) IS FOR THE COUNTRY CODE
  if(!((/^(\+\d{1,3})?\d{10}$/).test(contactNumber))) {
    alert("Contact Number is invalid");
    console.log("I didnt work!");
    return false;
  }*/

  return true;
}


function intializeForm() {
  populateCountryDropdown()
  const countrySelect = document.getElementById("country");
  countrySelect.querySelector("option[value='Canada']").selected = true;
  populateProvinceDropdown();
  populateCityDropdown();
  document.getElementById("province").addEventListener("change", populateCityDropdown);
}

function customClear() {
  document.getElementById("first_name").value = "";
  document.getElementById("last_name").value = "";
  document.getElementById("contact_number").value = "";
  document.getElementById("email").value = "";
  document.getElementById("country").innerHTML = "";
  document.getElementById("province").innerHTML = "";
  document.getElementById("city").innerHTML = "";
  intializeForm();
  return false
}


intializeForm();

