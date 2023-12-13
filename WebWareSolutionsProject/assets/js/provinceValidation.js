function validateForm(){
    const provinceName = document.getElementById("provinceName").value;
    const provinceVerify = document.getElementById("provinceVerify");

    if(!provinceName) {
        provinceVerify.innerHTML = "The province name cannot be blank.";
        return false;
    }

    provinceVerify.innerHTML = "";
    return true;
}