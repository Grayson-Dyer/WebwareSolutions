function validateForm() {
    const equipName = document.getElementById("name").value;
    const equipSerial = document.getElementById("serial_number").value;
    const equipPurchaseDate = document.getElementById("purchase_date").value;
    const equipWarranty = document.getElementById("warranty").value;
    const equipModel = document.getElementById("model").value;
    const equipModel_number = document.getElementById("model_number").value;
    const equipColour = document.getElementById("colour");
    const equipManufacturer = document.getElementById("manufacturer");

    // A series of bools to individually check each element's validity.
    let nameValid = false;
    let serialValid = false;
    let dateValid = false;
    let warrantyValid = false;
    let modelValid = false;
    let modelNumberValid = false;
    let colourValid = false;
    let manufacturerValid = false;

    // Grabbing the error verification label elements so we can change their text on a "false" return.
    const nameVerify = document.getElementById("nameVerify");
    const serialVerify = document.getElementById("serialVerify");
    const dateVerify = document.getElementById("dateVerify");
    const warrantyVerify = document.getElementById("warrantyVerify");
    const modelVerify = document.getElementById("modelVerify");
    const modelNumberVerify = document.getElementById("modelNumberVerify");
    const colourVerify = document.getElementById("colourVerify");
    const manufacturerVerify = document.getElementById("manufacturerVerify");


    function isAllDigits(str) {
        return /^\d+$/.test(str);
    }

    function isWarranty(str) {
        return /^\d+\s+(Year|Month|Day)s?$/i.test(str);
    }


    // Hope y'all are ready, 'cause this is gonna get wacky with a bunch of individual validity checks.
    if (!equipName) {
        nameVerify.innerHTML = "The name cannot be blank.";
        nameValid = false;
    }
    else {
        nameVerify.innerHTML = "";
        nameValid = true;
    }

    if (!equipSerial) {
        serialVerify.innerHTML = "The serial number cannot be blank.";
        serialValid = false;
    }
    else {
        serialVerify.innerHTML = "";
        serialValid = true;
    }

    if (!equipPurchaseDate) {
        dateVerify.innerHTML = "A date must be selected.";
        dateValid = false;
    }
    else {
        dateVerify.innerHTML = "";
        dateValid = true;
    }

    if (!equipWarranty) {
        warrantyVerify.innerHTML = "A warranty must be entered.";
        warrantyValid = false;
    }
    else if (!isWarranty(equipWarranty)) {
        warrantyVerify.innerHTML = "Warranty must be specified as 'years', 'months', or 'days'."
        warrantyValid = false;
    }
    else {
        warrantyVerify.innerHTML = "";
        warrantyValid = true;
    }

    if (!equipModel) {
        modelVerify.innerHTML = "The model cannot be blank.";
        modelValid = false;
    }
    else {
        modelVerify.innerHTML = "";
        modelValid = true;
    }

    if (!equipModel_number) {
        modelNumberVerify.innerHTML = "The model number cannot be blank."
        modelNumberValid = false;
    }
    else if (!isAllDigits(equipModel_number)) {
        modelNumberVerify.innerHTML = "The model number must be only digits."
        modelNumberValid = false;
    }
    else {
        modelNumberVerify.innerHTML = "";
        modelNumberValid = true;
    }

    if (!equipColour) {
        colourVerify.innerHTML = "The colour cannot be blank.";
        colourValid = false;
    }
    else {
        colourVerify.innerHTML = "";
        colourValid = true;
    }

    if (!equipManufacturer) {
        manufacturerVerify.innerHTML = "The manufacturer cannot be blank.";
        manufacturerValid = false;
    }
    else {
        manufacturerVerify.innerHTML = "";
        manufacturerValid = true;
    }

    // The final check that sees if *any* of the above checks were false.
    if (!nameValid ||
        !serialValid ||
        !dateValid ||
        !warrantyValid ||
        !modelValid ||
        !modelNumberValid ||
        !colourValid ||
        !manufacturerValid) 
    {
        return false;
    }

    /*if( !equipName || 
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
    }*/

    return true;
}