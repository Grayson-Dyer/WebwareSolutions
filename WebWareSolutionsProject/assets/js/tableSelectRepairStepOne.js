let selectedRow = null;
let selectedRows = [];
document.addEventListener('DOMContentLoaded', function () {
    LoadState();
    Array.from(document.querySelectorAll(".selected")).forEach(element => {
        selectedRows.push(element);
    });
});





function handleRowClick(row) {

    selectedRow = row;
    selectedRow.classList.toggle("selected");
    if(selectedRows.includes(row)) {
        selectedRows.splice(selectedRows.indexOf(row), 1);
    } else {
        selectedRows.push(row);
    }



}

function SaveState() {
    var selectedRows = document.querySelectorAll('.selected');

    var selectedRowIndices = Array.from(selectedRows).map(function (row) {
        return row.rowIndex; 
    });

    var currentUrl = window.location.href;

    localStorage.setItem(currentUrl, JSON.stringify(selectedRowIndices));

    window.location.href = 'repairsAndInventory.html';
}

function LoadState() {

    var currentUrl = window.location.href;
    var savedState = localStorage.getItem(currentUrl);

    if (savedState) {
        var selectedRowIndices = JSON.parse(savedState);

        // Apply the 'selected' class to the previously selected rows
        selectedRowIndices.forEach(function (index) {
        var row = document.querySelector('table tbody').rows[index - 1];
        if (row) {
            row.classList.add('selected');
        }
        });
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

