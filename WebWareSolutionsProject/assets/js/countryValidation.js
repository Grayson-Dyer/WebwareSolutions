function validateForm() {
    const countryName = document.getElementById("countryName").value;
    const countryVerify = document.getElementById("countryVerify");

    if( !countryName ) {
        countryVerify.innerHTML = "The country name cannot be blank.";
        return false;
    }

    countryVerify.innerHTML = "";
    return true;
}