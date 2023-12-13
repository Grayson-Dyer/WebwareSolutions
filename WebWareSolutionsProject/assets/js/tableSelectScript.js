let selectedRow = null;

function handleRowClick(row) {
    const editButton = document.getElementById("defaultEditButton");
    editButton.style.display = "block";

    if (selectedRow) {
        selectedRow.classList.remove("selected");
    }
    if (selectedRow != row) {
        row.classList.add("selected");
        selectedRow = row;
    } else {
        editButton.style.display = "none";
        selectedRow = null;
    }

    const completeRepair = document.getElementById("completeRepair");
    if(completeRepair != null) {
        completeRepair.style.display = "block";
        if(selectedRow == null) {
            completeRepair.style.display = "none";
        }
        
    }
}