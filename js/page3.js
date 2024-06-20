function toggleShowcase() {
  const content = document.querySelector(".content");
  const button = document.querySelector(".showcase-btn");

  button.classList.add("animate");
  setTimeout(() => button.classList.remove("animate"), 200);

  content.style.display = content.style.display === "block" ? "none" : "block";
}

document.querySelectorAll(".hardware img").forEach((img) => {
  img.addEventListener("click", function () {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    this.classList.add("enlarged");

    overlay.style.display = "block";

    overlay.addEventListener("click", function () {
      img.classList.remove("enlarged");
      document.body.removeChild(overlay);
    });
  });
});
