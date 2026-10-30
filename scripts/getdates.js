
"use strict";

// Get the current year dynamically.
const currentYear = new Date().getFullYear();

// Display the current year in the footer.
document.getElementById("currentyear").textContent = currentYear;

// Display the document's last modification date and time.
document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;
