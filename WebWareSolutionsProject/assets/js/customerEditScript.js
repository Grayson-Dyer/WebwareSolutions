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
		for (const city of countriesData[selectedCountry][selectedProvince]) {
			// Added the Selected Province
			const option = document.createElement("option");
			option.value = city;
			option.textContent = city;
			citySelect.appendChild(option);
		}
	}
}

// Function to validate the form fields
function validateForm() {
	const firstName = document.getElementById("first_name").value;
	const lastName = document.getElementById("last_name").value;
	const contactNumber = document.getElementById("contact_number").value;
	const email = document.getElementById("email").value;
	const countrySelect = document.getElementById("country"); // Grayson Dyer added these 3
	const provinceSelect = document.getElementById("province");
	const citySelect = document.getElementById("city");

	// Validation logic here for each field

	if (
		!firstName ||
		!lastName ||
		!contactNumber ||
		!email ||
		!countrySelect.value ||
		!provinceSelect.value ||
		!citySelect.value
	) {
		alert("Please fill in all required fields.");
		return false;
	}

	/// Regex pattern is /^(\+\d{1,3})?\d{10}$/ which accepts a country code and 10 digits
	/// (\+\d{1,3}) IS FOR THE COUNTRY CODE
	if (!/^(\+\d{1,3})?\d{10}$/.test(contactNumber)) {
		alert("Contact Number is invalid");
		console.log("I didnt work!");
		return false;
	}

	return true;
}

function intializeForm() {
	populateCountryDropdown();
	const countrySelect = document.getElementById("country");
	countrySelect.querySelector("option[value='Canada']").selected = true;
	populateProvinceDropdown();
	populateCityDropdown();
	document
		.getElementById("province")
		.addEventListener("change", populateCityDropdown);
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
	return false;
}

function populateForm() {
	const urlParams = new URLSearchParams(window.location.search);
	const firstName = urlParams.get("firstName");
	const lastName = urlParams.get("lastName");
	let number = urlParams.get("number");
	const address = urlParams.get("address");

	number = number.replaceAll("-", "");
    addressParts = address.split(",");
    newaddress = addressParts[0].trim();

	document.getElementById("first_name").value = firstName;
	document.getElementById("last_name").value = lastName;
    document.getElementById("email").value = `${firstName}${lastName}@gmail.com`;
	document.getElementById("contact_number").value = number;
    document.getElementById("street_address").value = newaddress;
}

intializeForm();
populateForm();
