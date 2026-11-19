// Temple array

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2a/LDS_Rome_Temple_2.jpg"
    },
    {
        templeName: "Nauvoo Illinois",
        location: "Nauvoo, Illinois, United States",
        dedicated: "2002, June, 27",
        area: 54000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/1490bdca1acee69e947c5225f1dac282908c0ac2/full/800%2C/0/default"
    },
    {
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/c8f9e392284fb5ab45815e69507af83d668097bd/full/%2C500/0/default"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    }
];


// Select HTML elements

const templeContainer = document.querySelector("#temple-container");
const pageTitle = document.querySelector("#page-title");


// Function to create temple cards

function displayTemples(templeList) {

    templeContainer.innerHTML = "";

    templeList.forEach(temple => {

        const card = document.createElement("section");
        card.classList.add("temple-card");

        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Size:</strong> ${temple.area.toLocaleString()} square feet`;

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);

        templeContainer.appendChild(card);

    });
}


// Filter functions

function filterTemples(filter) {

    pageTitle.textContent =
        filter.charAt(0).toUpperCase() + filter.slice(1);

    let filteredTemples = [];

    switch (filter) {

        case "old":
            filteredTemples = temples.filter(temple => {
                const year = Number(temple.dedicated.split(",")[0]);
                return year < 1900;
            });
            break;

        case "new":
            filteredTemples = temples.filter(temple => {
                const year = Number(temple.dedicated.split(",")[0]);
                return year > 2000;
            });
            break;

        case "large":
            filteredTemples = temples.filter(temple => {
                return temple.area > 90000;
            });
            break;

        case "small":
            filteredTemples = temples.filter(temple => {
                return temple.area < 10000;
            });
            break;

        default:
            filteredTemples = temples;
    }

    displayTemples(filteredTemples);
}


// Navigation filtering

const navLinks = document.querySelectorAll("#navigation a");

navLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const filter = link.dataset.filter;

        filterTemples(filter);

        // Highlight selected navigation link

        navLinks.forEach(navLink => {
            navLink.classList.remove("active");
        });

        link.classList.add("active");

        // Close mobile menu

        navigation.classList.remove("open");

        menuButton.textContent = "☰";

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


// Hamburger menu

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.textContent = isOpen ? "✕" : "☰";

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});


// Dynamic copyright year

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();


// Last modified date

document.querySelector("#lastModified").textContent =
    "Last Modification: " + document.lastModified;


// Display all temples when page loads

displayTemples(temples);
