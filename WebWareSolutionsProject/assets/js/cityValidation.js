function validateForm() {
    const cityName = document.getElementById("cityName").value;
    let cityVerify = document.getElementById("cityVerify");

    if (!cityName) {
        cityVerify.innerHTML = "The city name cannot be blank.";
        return false;
    }

    cityVerify.innerHTML = "";
    return true;
}