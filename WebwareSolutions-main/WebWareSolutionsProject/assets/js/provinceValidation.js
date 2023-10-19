function validateForm(){
    const provinceName = document.getElementById("provinceName").value;

    if(!provinceName) {
        alert("Province Name cannot be empty!");
        return false;
    }

    return true;
}