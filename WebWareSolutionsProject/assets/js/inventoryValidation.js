function validateForm(){
    const itemName = document.getElementById("name").value;


    if(!itemName ) {
        alert("Inventory name cannot be blank")
        return false;
    } 
    return true;
}