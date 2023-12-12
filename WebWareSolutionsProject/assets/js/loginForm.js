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
                        <a href="repairsAndInventory.html" tabindex="2">Repair, Inventory</a>
                    </li>
                    <li class="navbar-item-1">
                        <a tabindex="3" href="equipment.html">Customer, Equipment</a>
                    </li>
                    <li class="navbar-item-2">
                        <a href="province.html" tabindex="4">Province</a>
                    </li>
                    <li class="navbar-item-3">
                        <a href="country.html" tabindex="5">Country</a>
                    </li>
                    <li class="navbar-item-4">
                        <a href="city.html" tabindex="6">City</a>
                    </li>
                    <li class="navbar-item-5">
                        <a href="manufacturer.html" tabindex="7">Manufacturer</a>
                    </li>
                    <li>
                        <a href="color.html" tabindex="8">Colour</a>
                    </li>
                    <li>
                        <button onclick="logout()">Logout</button>
                    </li>
                `;
            } else if (userRole === "salesrep") {
                navbarItems.innerHTML = `
                    <li class="navbar-item-1">
                        <a tabindex="3" href="equipment.html">Customer, Equipment</a>
                    </li>
                    <li>
                        <button onclick="logout()">Logout</button>
                    </li>
                `;
            } else if (userRole === "technician") {
                navbarItems.innerHTML = `
                    <li>
                        <a href="repairsAndInventory.html" tabindex="2">Repair, Inventory</a>
                    </li>
                    <li>
                        <button onclick="logout()">Logout</button>
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