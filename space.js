const planets = [
    { 
        name: "Mercury", 
        info: "The smallest planet in our solar system and closest to the Sun, known for its extreme temperature variations.",
        diameter: "4,879 km",
        distanceFromSun: "57.9 million km",
        gravity: "3.7 m/s²",
        orbitalPeriod: "88 Earth days",
        moons: "None",
        atmosphere: "Trace amounts of oxygen, sodium, and hydrogen.",
        surfaceTemperature: "-173°C to 427°C",
        exploration: "Visited by Mariner 10 and MESSENGER probes.",
        notableFeatures: "Heavily cratered surface similar to Earth's Moon.",
        image: "astro-space.img/mercury.jpg"
    },
    { 
        name: "Venus", 
        info: "The hottest planet in the solar system, with a thick atmosphere of carbon dioxide.",
        diameter: "12,104 km",
        distanceFromSun: "108.2 million km",
        gravity: "8.87 m/s²",
        orbitalPeriod: "225 Earth days",
        moons: "None",
        atmosphere: "96% carbon dioxide, 3.5% nitrogen, with sulfuric acid clouds.",
        surfaceTemperature: "462°C",
        exploration: "Explored by Venera and Magellan missions.",
        notableFeatures: "Volcanoes, vast plains, and craters; retrograde rotation (spins backward).",
        image: "astro-space.img/venus.jpg"
    },
    { 
        name: "Earth", 
        info: "The only planet known to support life, covered 70% by water.",
        diameter: "12,742 km",
        distanceFromSun: "149.6 million km",
        gravity: "9.8 m/s²",
        orbitalPeriod: "365.25 days",
        moons: "1 (The Moon)",
        atmosphere: "78% nitrogen, 21% oxygen, trace gases.",
        surfaceTemperature: "Average 15°C",
        exploration: "Continuously explored by humans and spacecraft like the ISS.",
        notableFeatures: "Oceans, diverse ecosystems, and tectonic plate activity.",
        image: "astro-space.img/earth.jpg"
    },
    { 
        name: "Mars", 
        info: "The Red Planet, home to the largest volcano and canyon in the solar system.",
        diameter: "6,779 km",
        distanceFromSun: "227.9 million km",
        gravity: "3.71 m/s²",
        orbitalPeriod: "687 Earth days",
        moons: "2 (Phobos and Deimos)",
        atmosphere: "95% carbon dioxide, 3% nitrogen, 1.6% argon.",
        surfaceTemperature: "-125°C to 20°C",
        exploration: "Explored by rovers like Perseverance, Curiosity, and Spirit.",
        notableFeatures: "Olympus Mons (largest volcano) and Valles Marineris (largest canyon).",
        image: "astro-space.img/mars.jpg"
    },
    { 
        name: "Jupiter", 
        info: "The largest planet in our solar system, known for its Great Red Spot.",
        diameter: "139,820 km",
        distanceFromSun: "778.5 million km",
        gravity: "24.79 m/s²",
        orbitalPeriod: "11.86 Earth years",
        moons: "79 (including Ganymede, the largest moon in the solar system)",
        atmosphere: "90% hydrogen, 10% helium, traces of methane and ammonia.",
        surfaceTemperature: "-145°C",
        exploration: "Studied by Galileo, Juno, and Voyager probes.",
        notableFeatures: "Great Red Spot (a massive storm) and strong magnetic field.",
        image: "astro-space.img/jupiter.jpg"
    },
    { 
        name: "Saturn", 
        info: "Famous for its extensive ring system made of ice and rock.",
        diameter: "116,460 km",
        distanceFromSun: "1.43 billion km",
        gravity: "10.44 m/s²",
        orbitalPeriod: "29.45 Earth years",
        moons: "83 (including Titan, known for its thick atmosphere)",
        atmosphere: "96% hydrogen, 3% helium, traces of methane and ammonia.",
        surfaceTemperature: "-178°C",
        exploration: "Explored by Cassini and Voyager missions.",
        notableFeatures: "Titan (largest moon) and the most extensive planetary rings.",
        image: "astro-space.img/saturn.jpg"
    },
    { 
        name: "Uranus", 
        info: "An ice giant with a unique blue-green color due to methane in its atmosphere.",
        diameter: "50,724 km",
        distanceFromSun: "2.87 billion km",
        gravity: "8.69 m/s²",
        orbitalPeriod: "84 Earth years",
        moons: "27 (including Titania and Oberon)",
        atmosphere: "82% hydrogen, 15% helium, 2.5% methane.",
        surfaceTemperature: "-224°C",
        exploration: "Visited only by Voyager 2.",
        notableFeatures: "Rotates on its side, with poles facing the Sun.",
        image: "astro-space.img/uranus.jpg"
    },
    { 
        name: "Neptune", 
        info: "The farthest planet from the Sun, known for its deep blue color and supersonic winds.",
        diameter: "49,244 km",
        distanceFromSun: "4.5 billion km",
        gravity: "11.15 m/s²",
        orbitalPeriod: "164.8 Earth years",
        moons: "14 (including Triton, which has geysers)",
        atmosphere: "80% hydrogen, 19% helium, 1.5% methane.",
        surfaceTemperature: "-214°C",
        exploration: "Visited only by Voyager 2.",
        notableFeatures: "Fastest winds in the solar system and a faint ring system.",
        image: "astro-space.img/neptune.jpg"
    }
];

function displayPlanetInfo(planet) {
    const displayDiv = document.getElementById("searchDisplay");
    displayDiv.innerHTML = `
        <img class="planet-image " src="${planet.image}" alt="${planet.name}">
        <h2>${planet.name}</h2>
        <p>${planet.info}</p>
        <p><strong>Diameter:</strong> ${planet.diameter}</p>
        <p><strong>Distance from Sun:</strong> ${planet.distanceFromSun}</p>
        <p><strong>Gravity:</strong> ${planet.gravity}</p>
        <p><strong>Orbital Period:</strong> ${planet.orbitalPeriod}</p>
        <p><strong>Moons:</strong> ${planet.moons}</p>
        <p><strong>Atmosphere:</strong> ${planet.atmosphere}</p>
        <p><strong>Surface Temperature:</strong> ${planet.surfaceTemperature}</p>
        <p><strong>Exploration:</strong> ${planet.exploration}</p>
        <p class="lst-p"><strong>Notable Features:</strong> ${planet.notableFeatures}</p>
    `;
}


document.getElementById("searchbtn").addEventListener("click", () => {
    const searchInput = document.getElementById("inputsearch").value.trim().toLowerCase();
    const displayDiv = document.getElementById("searchDisplay");

    displayDiv.innerHTML = ""; 

    if (searchInput === "") {
        displayDiv.innerHTML = "<p>Please enter a planet name.</p>";
        return;
    }

    const planet = planets.find(p => p.name.toLowerCase() === searchInput);

    if (planet) {
        displayPlanetInfo(planet);
    } else {
        displayDiv.innerHTML = `<p>No information found for "${searchInput}".</p>`;
    }
  
})

document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".stars i");
    let selectedRating = 0;

    stars.forEach((star, index) => {
        star.addEventListener("mouseover", () => {
            highlightStars(index + 1);
        });

        star.addEventListener("mouseout", () => {
            highlightStars(selectedRating);
        });

        star.addEventListener("click", () => {
            selectedRating = index + 1;
            highlightStars(selectedRating);
        });
    });

    function highlightStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add("active");
            } else {
                star.classList.remove("active");
            }
        });
    }

    document.getElementById("submit-btn").addEventListener("click", () => {
        const comments = document.getElementById("comments").value.trim();

        if (selectedRating === 0) {
            document.getElementById("feedback-message").textContent =
                "Please select a star rating.";
            return;
        }

        if (comments === "") {
            document.getElementById("feedback-message").textContent =
                "Please provide feedback in the comment box.";
            return;
        }

        document.getElementById("feedback-message").textContent = `Thank you for your ${selectedRating}-star rating and feedback!`;
        resetFeedback();
    });

    function resetFeedback() {
        selectedRating = 0;
        highlightStars(0);
        document.getElementById("comments").value = "";
    }
});

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

const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        dots[i].classList.remove('active');
    });
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showTestimonial(currentIndex);
    });
});

nextButton.addEventListener('click', nextTestimonial);
prevButton.addEventListener('click', prevTestimonial);

// Auto-slide functionality
setInterval(nextTestimonial, 5000);









