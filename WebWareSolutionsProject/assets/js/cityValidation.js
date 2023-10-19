

function validateForm() {
    const cityName = document.getElementById("cityName").value;


    if (!cityName) {
        alert("City name cannot be empty");
        return false;
    }

    return true;
}