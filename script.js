const image = document.getElementById("flip");

  image.addEventListener("mouseover",()=>{
     image.src = "https://live.staticflickr.com/8138/29099429912_0659caf55b_b.jpg";
  });

   image.addEventListener("mouseout", () => {
       image.src = "https://images.pexels.com/photos/6785279/pexels-photo-6785279.jpeg";
    });
    