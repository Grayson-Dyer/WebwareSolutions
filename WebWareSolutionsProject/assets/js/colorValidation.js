
function validateForm() {
    const colorName = document.getElementById("ColorName").value;
    let colorVerify = document.getElementById("colorVerify");

    if (!colorName) {
        colorVerify.innerHTML = "The colour cannot be blank.";
        return false;
    }

    colorVerify.innerHTML = "";
    return true;
}