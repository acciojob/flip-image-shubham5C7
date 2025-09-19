
const img = document.getElementById("flip");

  img.addEventListener("mouseover", () => {
    img.src = "https://live.staticflickr.com/8138/29099429912_0659caf55b_b.jpg";
  });

  img.addEventListener("mouseout", () => {
    img.src = "https://images.pexels.com/photos/6785279/pexels-photo-6785279.jpeg";
  });