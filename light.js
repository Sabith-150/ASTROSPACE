function conversion(lightyear) {
    let out = 0;

    if (lightyear === "") {
        out = "Please enter a valid positive light-year.";
    } else {
        out = parseFloat(lightyear) * 9.46; 
    }

    return typeof out === "string" ? out : `${lightyear} Light Year(s) is  ${out.toFixed(2)} Trillion Kilometers.`;
}

document.getElementById("year-btn").addEventListener("click", () => {
    const yearInput = document.getElementById("year-input").value.trim();
    const yearDisplay = document.getElementById("year-display");

    const result = conversion(yearInput); 
    yearDisplay.textContent = result; 
});