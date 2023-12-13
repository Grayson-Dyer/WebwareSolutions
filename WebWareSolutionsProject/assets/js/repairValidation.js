

document.addEventListener("DOMContentLoaded", function() {
    let warrantySelect = document.getElementById("Warranty");

    warrantySelect.addEventListener("change", function(){
        const warrantyStart = document.getElementById("warrantyStart");
        const warrantyEnd = document.getElementById("warrantyEnd");
        if(this.value == "YES")  {
            warrantyStart.disabled = false;
            warrantyEnd.disabled = false;
        } else {
            warrantyStart.disabled = true;
            warrantyEnd.disabled = true;
        }
    });
});

function validateForm(){
    const fullName = document.getElementById("FullName").value;
    const warranty = document.getElementById("Warranty").value;
    const warrantyStart = document.getElementById("warrantyStart").value;
    const warrantyEnd = document.getElementById("warrantyEnd").value;
    const startDate = document.getElementById("RepairDate").value;
    
    // Validation bools.
    let fullNameValid = false;
    let warrantyStartValid = false;
    let warrantyEndValid = false;
    let dateValid = false;

    // Error verification label elements.
    const fullNameVerify = document.getElementById("fullNameVerify");
    const warrantyVerify = document.getElementById("warrantyVerify");
    const warrantyDateStartVerify = document.getElementById("warrantyDateStartVerify");
    const warrantyDateEndVerify = document.getElementById("warrantyDateEndVerify");
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


    if(!warrantyStart && warranty == "YES"){
        warrantyDateStartVerify.innerHTML = "Start date is required with Warranty";
        warrantyStartValid = false;
    } else {
        warrantyDateStartVerify.innerHTML = "";
        warrantyStartValid = true;
    }

    if(!warrantyEnd && warranty == "YES"){
        warrantyDateEndVerify.innerHTML = "Start date is required with Warranty";
        warrantyEndValid = false;
    } else {
        warrantyDateEndVerify.innerHTML = "";
        warrantyEndValid = true;
    }
    
    if((new Date(warrantyStart) > (new Date(warrantyEnd))) && warranty == "YES" ) {
        warrantyDateStartVerify.innerHTML = "Start Date is newer then End date";
        warrantyDateEndVerify.innerHTML = "End date is older then Start date";
        warrantyEndValid = false;
        warrantyStartValid = false;
    } 



    

    if (!startDate) {
        dateVerify.innerHTML = "The start date cannot be blank.";
        dateValid = false
    }
    else {
        dateVerify.innerHTML = "";
        dateValid = true;
    }

    if(warranty == "YES") {

        if(!warrantyEndValid || !warrantyStartValid || !fullNameValid || !dateValid ) {
            console.log("Fired")
            return false;
        }
    }
    // The final check that sees if *any* of the above checks were false.
    if (warranty == "NO") {
        if (!fullNameValid ||
            !dateValid) {
                return false;
        }
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