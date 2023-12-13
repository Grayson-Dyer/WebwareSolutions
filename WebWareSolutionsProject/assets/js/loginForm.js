
window.onload = function() {
    // Get user role from local storage
    const userRole = localStorage.getItem("userRole");

    // If user role exists, change navbar
    if (userRole) {
        const navbar = document.getElementById("navbar");
        const navbarItems = document.createElement("ul");

        if (userRole === "admin") {
            navbarItems.innerHTML = `
                <li>
                    <a href="repairsAndInventory.html" tabindex="1">Active Repair</a>
                </li>
                <li class="navbar-item-1">
                    <a tabindex="2" href="equipment.html">Customer & Equipment</a>
                </li>
                <li class="dropdown">
                    <a tabindex="3" href="#" class="dropbtn">Maintenance</a>
                    <div class="dropdown-content">
                        <a href="province.html">Province</a>
                        <a href="country.html">Country</a>
                        <a href="city.html">City</a>
                        <a href="manufacturer.html">Manufacturer</a>
                        <a href="color.html">Colour</a>
                        <a href="CompletedRepairs.html">Completed Repairs</a>
                        <a href="Report1Sales.html">Create Sales Report</a>
                    </div>
                </li>
                <li>
                    <button tabindex="4" onclick="logout()">Logout</button>
                </li>
            `;
        } else if (userRole === "salesrep") {
            navbarItems.innerHTML = `
                <li class="navbar-item-1">
                    <a tabindex="1" href="equipment.html">Customer & Equipment</a>
                </li>
                <li class="navbar-item-1">
                    <a tabindex="2" href="CompletedRepairs.html">Completed Repairs</a>
                </li>
                <li>
                    <button tabindex="3" onclick="logout()">Logout</button>
                </li>
            `;
        } else if (userRole === "technician") {
            navbarItems.innerHTML = `
                <li>
                    <a href="repairsAndInventory.html" tabindex="1">Active Repair</a>
                </li>
                <li>
                <a href="CompletedRepairs.html" tabindex="2">Completed Repairs</a>
                </li>
                <li>
                    <button tabindex="3" onclick="logout()">Logout</button>
                </li>
            `;
        }

        navbar.appendChild(navbarItems);
    }
};

function logout() {
    // Clear the user's role from local storage
    localStorage.removeItem("userRole");

    // Redirect to index.html
    window.location.href = "index.html";
}