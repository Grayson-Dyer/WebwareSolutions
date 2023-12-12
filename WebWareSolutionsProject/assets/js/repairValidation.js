function validateForm(){
    const fullName = document.getElementById("FullName").value;
    const warranty = document.getElementById("Warranty").value
    const startDate = document.getElementById("RepairDate").value

    if(!fullName || !warranty || !startDate) {
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
    }
    return true;
}