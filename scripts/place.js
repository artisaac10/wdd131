
// STATIC WEATHER VALUES
const temperature = 28;
const windSpeed = 12;

// WIND CHILL FUNCTION
function calculateWindChill(temp, speed) {
    return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
}

// CHECK IF WIND CHILL CONDITIONS ARE MET
let windChill = "N/A";

if (temperature <= 50 && windSpeed > 3) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °F";
}

// DISPLAY WIND CHILL
document.querySelector("#wind-chill").textContent = windChill;

// DISPLAY CURRENT YEAR
document.querySelector("#current-year").textContent =
    new Date().getFullYear();

// DISPLAY LAST MODIFIED DATE
document.querySelector("#last-modified").textContent =
    document.lastModified;
