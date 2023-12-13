
function validateForm() {
    const colorName = document.getElementById("colorName").value;

    if( !colorName ) {
        alert("Color name cannot be empty");
        return false;
    }

    return true;
}