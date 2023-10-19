
function validateForm() {
    const countryName = document.getElementById("countryName");

    if( !countryName ) {
        alert("Color name cannot be empty");
        return false;
    }

    return true;
}