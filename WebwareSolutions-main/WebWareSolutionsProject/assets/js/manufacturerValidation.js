function validateForm(){
    const manufacturerName = document.getElementById("manufacturerName").value;

    if(!manufacturerName) {
        alert("Manufacturer Name cannot be empty!");
        return false;
    }

    return true;
}