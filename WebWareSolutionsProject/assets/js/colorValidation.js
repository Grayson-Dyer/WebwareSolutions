
function validateForm() {
    const colorName = document.getElementById("colorName").value;
    const colorVerify = document.getElementById("colorVerify");

    if (!colorName) {
        colorVerify.innerHTML = "The colour cannot be blank.";
        return false;
    }

    colorVerify.innerHTML = "";
    return true;
}