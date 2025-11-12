const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg"
];

let current = 0;

const photo = document.getElementById("photo");
const counter = document.getElementById("counter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateImage() {
  photo.src = images[current];
  counter.textContent = `Image ${current + 1} of ${images.length}`;
}

prevBtn.addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  updateImage();
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % images.length;
  updateImage();
});

updateImage();
