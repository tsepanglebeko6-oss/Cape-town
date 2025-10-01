/* ========== HOME PAGE ========== */

// Welcome Message with Current Date & Time
document.addEventListener("DOMContentLoaded", () => {
  const welcomeSection = document.getElementById("welcomeMessage");
  if (welcomeSection) {
    const now = new Date();
    const formattedDate = now.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
    welcomeSection.innerHTML = `<p style="text-align:center; font-weight:bold;">Welcome! Today is ${formattedDate}</p>`;
  }

  // Random Fun Fact (About Page)
  const factBox = document.getElementById("randomFact");
  if (factBox) {
    const funFacts = [
      "Cape Town is home to one of the world's smallest floristic regions – the Cape Floral Kingdom.",
      "Boulders Beach near Cape Town is home to endangered African penguins.",
      "Cape Town was the first city in Africa to host the FIFA World Cup (2010).",
      "Table Mountain is over 260 million years old — older than the Himalayas.",
      "Cape Town's Robben Island held Nelson Mandela for 18 of his 27 years in prison.",
    ];
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    factBox.textContent = funFacts[randomIndex];
  }

  // Insert About Page Content Dynamically (if applicable)
  const aboutContent = document.getElementById("aboutDynamic");
  if (aboutContent) {
    const capeTownData = {
      history: `Cape Town's history began in 1652 when the Dutch established a refreshment station. Over time, it became a hub of colonial trade and played a pivotal role during apartheid.`,
      culture: `Cape Town's cultural scene blends indigenous traditions, colonial influences, and modern creativity. It’s reflected in its food, music, and festivals.`,
      attractions: [
        "Table Mountain National Park",
        "Cape of Good Hope",
        "Robben Island Museum",
        "Victoria & Alfred Waterfront",
      ],
    };

    aboutContent.innerHTML = `
      <h3>History</h3>
      <p>${capeTownData.history}</p>
      <h3>Culture</h3>
      <p>${capeTownData.culture}</p>
      <h3>Top Attractions</h3>
      <ul>
        ${capeTownData.attractions.map(item => `<li>${item}</li>`).join("")}
      </ul>
    `;
  }
});

// Random Background Color Button
const colorBtn = document.getElementById("colorBtn");
if (colorBtn) {
  colorBtn.addEventListener("click", () => {
    const colors = ["#fce4ec", "#e3f2fd", "#e8f5e9", "#fff3e0", "#ede7f6"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
  });
}

// Image Slideshow
const slides = [
  "images/slide1.jpg",
  "images/slide2.jpg",
  "images/slide3.jpg"
];
let currentSlide = 0;

function showSlide(index) {
  const slideImage = document.getElementById("slideImage");
  if (slideImage) {
    slideImage.src = slides[index];
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}


/* ========== ABOUT PAGE: Toggle Extra Fact ========== */
function toggleExtraFact() {
  const extraFact = document.getElementById("extraFact");
  const toggleBtn = document.getElementById("toggleBtn");

  if (extraFact.style.display === "none" || extraFact.style.display === "") {
    extraFact.style.display = "block";
    toggleBtn.textContent = "Show Less";
  } else {
    extraFact.style.display = "none";
    toggleBtn.textContent = "Show More";
  }
}


/* ========== GALLERY PAGE: Lightbox ========== */
function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (lightbox && lightboxImg) {
    lightbox.style.display = "flex";
    lightboxImg.src = imgElement.src;
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.style.display = "none";
  }
}


/* ========== GALLERY PAGE: Filter Images by Category ========== */
function filterGallery(category) {
  const items = document.querySelectorAll(".gallery-item");

  items.forEach(item => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
