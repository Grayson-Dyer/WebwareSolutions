
function validateForm() {
    const colorName = document.getElementById("ColorName").value;

    if( !colorName ) {
        alert("Color name cannot be empty");
        return false;
    }

    return true;
}