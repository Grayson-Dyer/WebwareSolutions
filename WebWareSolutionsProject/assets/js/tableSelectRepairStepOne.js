let selectedRow = null;
let selectedRows = [];


function handleRowClick(row) {

    selectedRow = row;
    selectedRow.classList.toggle("selected");
    if(selectedRows.includes(row)) {
        selectedRows.splice(selectedRows.indexOf(row), 1);
    } else {
        selectedRows.push(row);
    }

}


function clearForm() {
    selectedRows.forEach(row => {
        row.classList.toggle("selected");
    });
    selectedRows = [];   
}

function validateForm() {
    const errorMesssage = document.getElementById("errorOutput");
    const endDate = document.getElementById("repairDate").value;
    if(selectedRows.length < 1 ) {
        errorMesssage.style.display = "block";
        errorMesssage.innerText = "Must choose at least one part";
        return false;
    }
    else if(!endDate) {
        errorMesssage.style.display = "block";
        errorMesssage.innerText = "Must choose an end date";
        return false
    } else if (new Date(endDate) < new Date("2021-10-13")) {
        errorMesssage.style.display = "block";
        errorMesssage.innerText = "End date must be after or equal to Start date";
        return false;
    } else {
        return true;
    }

    
}

