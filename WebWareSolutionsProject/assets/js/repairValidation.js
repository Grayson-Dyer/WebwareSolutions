function validateForm(){
    const fullName = document.getElementById("FullName").value;
    const warranty = document.getElementById("Warranty").value;
    const startDate = document.getElementById("RepairDate").value;

    // Validation bools.
    let fullNameValid = false;
    let warrantyValid = false;
    let dateValid = false;

    // Error verification label elements.
    const fullNameVerify = document.getElementById("fullNameVerify");
    const warrantyVerify = document.getElementById("warrantyVerify");
    const dateVerify = document.getElementById("dateVerify");

    // Individual validation checks.
    if (!fullName) {
        fullNameVerify.innerHTML = "The name cannot be blank.";
        fullNameValid = false;
    }
    else {
        fullNameVerify.innerHTML = "";
        fullNameValid = true;
    }

    if (warranty.toUpperCase() != "YES" && warranty.toUpperCase() != "NO") {
        warrantyVerify.innerHTML = "Warranty must be either 'Yes' or 'No'.";
        warrantyValid = false;
    }
    else {
        warrantyVerify.innerHTML = "";
        warrantyValid = true;
    }

    if (!startDate) {
        dateVerify.innerHTML = "The start date cannot be blank.";
        dateValid = false
    }
    else {
        dateVerify.innerHTML = "";
        dateValid = true;
    }

    // The final check that sees if *any* of the above checks were false.
    if (!fullNameValid ||
        !warrantyValid ||
        !dateValid) {
            return false;
        }

    /*if(!fullName || !warranty || !startDate) {
        if(!fullName) {
            alert("Full name cannot be blank")
        } else if (!warranty) {
            alert("Warranty cannot be blank")
        } else if (!startDate) {
            alert("Start Date cannot be blank")
        }
        return false;
    } 

    if (warranty.toUpperCase() != "YES" && warranty.toUpperCase() != "NO" ) {
        alert("Warranty input is invalid")
        return false;
    }*/

    return true;
}