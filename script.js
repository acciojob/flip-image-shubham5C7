
    const flipImage = document.getElementById("flip");

    flipImage.addEventListener("mouseover", () => {
      flipImage.src = "https://live.staticflickr.com/8138/29099429912_0659caf55b_b.jpg";
    });

    flipImage.addEventListener("mouseout", () => {
      flipImage.src = "https://images.pexels.com/photos/6785279/pexels-photo-6785279.jpeg";
    });