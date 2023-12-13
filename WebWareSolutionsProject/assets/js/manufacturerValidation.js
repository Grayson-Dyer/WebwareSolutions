function validateForm(){
    const manufacturerName = document.getElementById("manufacturerName").value;
    const manufacturerVerify = document.getElementById("manufacturerVerify");

    if(!manufacturerName) {
        manufacturerVerify.innerHTML = "The manufacturer name cannot be blank.";
        return false;
    }

    manufacturerVerify.innerHTML = "";
    return true;
}