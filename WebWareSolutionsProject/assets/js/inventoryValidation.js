function validateForm(){
    const itemName = document.getElementById("name").value;
    const itemVerify = document.getElementById("itemVerify");

    if(!itemName ) {
        itemVerify.innerHTML = "The item name cannot be blank.";
        return false;
    } 

    itemVerify.innerHTML = "";
    return true;
}