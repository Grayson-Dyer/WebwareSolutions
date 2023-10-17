let selectedRow = null;
let selectedRowEquip = null;

function handleRowClick(row) {
    const editButton = document.getElementById("edit-button");
    editButton.style.display = "block";
    const equipmenteditButton = document.getElementById("Equipment-edit-button");
    const equipmentcreateButton = document.getElementById("Equipment-create-button");
    equipmentcreateButton.style.display = "block";
    const customerId = row.getAttribute("data-customer-id");
    console.log(`Clicked on customer with ID: ${customerId}`);

    if (selectedRow) {
        selectedRow.classList.remove("selected");
        clearEquipmentTable();
    }
    if (selectedRow != row) {
        row.classList.add("selected");
        selectedRow = row;
        populateEquipmentTable(customerId); // Pass the customer ID
    } else {
        editButton.style.display = "none";
        equipmenteditButton.style.display = "none";
        equipmentcreateButton.style.display = "none";
        selectedRow = null;
        clearEquipmentTable();
    }
}


function handleRowClickTwo(row) {
    const equipmenteditButton = document.getElementById("Equipment-edit-button");
    equipmenteditButton.style.display = "block";

    if(selectedRowEquip) {
        selectedRowEquip.classList.remove("selected");
    }
    if(selectedRowEquip != row) {
        row.classList.add("selected");
        selectedRowEquip = row;
    } else {
        equipmenteditButton.style.display = "none";
        selectedRowEquip = null;
    }
}

function populateEquipmentTable(customerId) { 
    const EquipmentTableBody = document.getElementById("EquipmentTableBody");
    let EquipmentItems = [];

    if (customerId == "1") {
        EquipmentItems = [
            { id: 1, name: "Lawnmaster22", serial: "GA251", purchaseDate: "2022-07-16" },
            { id: 2, name: "Bushmaster23", serial: "HJS66", purchaseDate: "2023-06-23" },
            { id: 3, name: "Weedmaster02", serial: "GSD42", purchaseDate: "2002-08-18" },
        ]
    }   else if (customerId == "2") {
        EquipmentItems = [
            { id: 11, name: "Yardbeast", serial: "IUV32", purchaseDate: "1999-07-29" },
            { id: 12, name: "Bushmaster21", serial: "HJS64", purchaseDate: "2021-02-20" },
        ]
    } else if (customerId == "3") {
        EquipmentItems = [
            { id: 21, name: "YardWorker", serial: "YWCC3", purchaseDate: "2008-06-18" },
            { id: 22, name: "YardWacker", serial: "YWC22", purchaseDate: "2008-06-18" },
            { id: 23, name: "YardrRelaxer", serial: "YRC22", purchaseDate: "2008-06-18" },
        ]
    }else if (customerId == "4") {
        EquipmentItems = [
            { id: 21, name: "YardWorker", serial: "YWCC3", purchaseDate: "2008-06-18" },
            { id: 22, name: "YardWacker", serial: "YWC22", purchaseDate: "2008-06-18" },
            { id: 23, name: "YardrRelaxer", serial: "YRC22", purchaseDate: "2008-06-18" },
        ]
    }

    // Clear existing rows in the Equipment table
    EquipmentTableBody.innerHTML = "";

    // Populate the Equipment table with the sample data
    EquipmentItems.forEach(item => {
        const row = EquipmentTableBody.insertRow();
        const idCell = row.insertCell(0);
        const nameCell = row.insertCell(1);
        const serialCell = row.insertCell(2);
        const purchaseDateCell = row.insertCell(3);
        

        idCell.textContent = item.id;
        nameCell.textContent = item.name;
        serialCell.textContent = item.serial;
        purchaseDateCell.textContent = item.purchaseDate;

        row.setAttribute("onclick", "handleRowClickTwo(this)");
    });
}

function clearEquipmentTable() {
    const EquipmentTableBody = document.getElementById("EquipmentTableBody");
    EquipmentTableBody.innerHTML = ""; // Clear the Equipment table
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