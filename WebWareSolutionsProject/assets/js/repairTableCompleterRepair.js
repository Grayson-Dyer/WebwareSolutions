function completeRepairPage() {
    // Get the selected row
    var selectedRow = document.querySelector('.selected');
    

    if (selectedRow) {
        // Extract data from the selected row
        var customerName = selectedRow.cells[0].textContent;
        var phoneNumber = selectedRow.cells[1].textContent;
        var warranty = selectedRow.cells[2].textContent;
        var repairStartDate = selectedRow.cells[3].textContent;

        // Construct the URL with parameters
        var url = 'repairStepOne.html' +
            '?customerName=' + encodeURIComponent(customerName) +
            '&phoneNumber=' + encodeURIComponent(phoneNumber) +
            '&warranty=' + encodeURIComponent(warranty) +
            '&repairStartDate=' + encodeURIComponent(repairStartDate);

        // Redirect to the new page
        window.location.href = url;
    } 
}