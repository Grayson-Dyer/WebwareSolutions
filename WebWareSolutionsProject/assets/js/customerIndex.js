let selectedRow = null;

function handleRowClick(row) {
    const editButton = document.getElementById("edit-button")
    editButton.style.display = "block";

    if (selectedRow) {
        selectedRow.classList.remove('selected');
    }

    if( selectedRow != row ) {
        row.classList.add('selected');
        selectedRow = row;
    } 
    else {
        editButton.style.display = "none";
        selectedRow = null;
    }

}

function goToEditPage() {
    
    const cells = selectedRow.cells;

    const firstName = cells[0].textContent;
    const lastName = cells[1].textContent;
    const contactNumber = cells[2].textContent;
    const streetAddress = cells[3].textContent;

    const editCustomerURL = `customerEdit.html?firstName=${firstName}&lastName=${lastName}&number=${contactNumber}&address=${streetAddress}`;
    window.location.href = editCustomerURL;

}