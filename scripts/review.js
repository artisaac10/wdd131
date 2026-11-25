
const reviewCountElement = document.querySelector("#review-count");

const submittedProduct = new URLSearchParams(window.location.search)
    .get("product");

if (submittedProduct) {
    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

    reviewCount++;

    localStorage.setItem("reviewCount", reviewCount);

    reviewCountElement.textContent = reviewCount;
} else {
    reviewCountElement.textContent =
        localStorage.getItem("reviewCount") || 0;
}
