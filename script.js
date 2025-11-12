const photo = document.getElementById("photo");
if (photo) {  
  const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg"
  ];

  let current = 0;
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
}


const table = document.getElementById("scoreTable");

function changeWidth(width) {
  table.style.width = width + "px";
}

function changeBorder(spacing) {
  table.style.borderSpacing = spacing + "px"; 
  table.style.border = `${Math.max(spacing / 2, 1)}px solid #555`;
}

function changeColor(color) {
  table.style.backgroundColor = color;
}

function resetTable() {
  table.style.width = "350px";
  table.style.borderSpacing = "2px";
  table.style.border = "2px solid #555";
  table.style.backgroundColor = "#ffffb3";
}

