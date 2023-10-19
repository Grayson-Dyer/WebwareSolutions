function validateForm() {
    const equipName = document.getElementById("name").value;
    const equipSerial = document.getElementById("serial_number").value;
    const equipPurchaseDate = document.getElementById("purchase_date").value;
    const equipWarranty = document.getElementById("warranty").value;
    const equipModel = document.getElementById("model").value;
    const equipModel_number = document.getElementById("model_number").value;
    const equipColour = document.getElementById("colour");
    const equipManufacturer = document.getElementById("manufacturer");


    function isAllDigits(str) {
        return /^\d+$/.test(str);
    }

    function isWarranty(str) {
        return /^\d+\s+(Year|Month|Day)s?$/i.test(str);
    }


    if( !equipName || 
        !equipSerial ||
        !equipPurchaseDate ||
        !equipWarranty ||
        !equipModel ||
        !equipModel_number ||
        !equipColour.value ||
        !equipManufacturer.value ) {
        alert("No field can be blank");
        return false;
    } else if (!isWarranty(equipWarranty)) {
        alert("Warranty is incorrect");
        return false;
    } else if (!isAllDigits(equipModel_number)){
        alert("Model number is incorrect")
        return false;
    }
    return true;
}