const fullscreenBtn = document.getElementById("fullscreen-btn");

fullscreenBtn.addEventListener("click", function () {
  if (!document.fullscreenElement) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      // Chrome, Safari, and Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
    fullscreenBtn.textContent = "Exit Fullscreen";
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      // Chrome, Safari, and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // IE/Edge
      document.msExitFullscreen();
    }
    fullscreenBtn.textContent = "Enter Fullscreen";
  }
});

document.addEventListener("fullscreenchange", function () {
  if (!document.fullscreenElement) {
    fullscreenBtn.textContent = "Enter Fullscreen";
  }
});

function showMore() {
  const moreContent = document.querySelector(".more-content");
  moreContent.style.display =
    moreContent.style.display === "block" ? "none" : "block";
  launchConfetti();
}

function launchConfetti() {
  const confettiContainer = document.getElementById("confetti-container");

  // Remove any existing confetti elements
  confettiContainer.innerHTML = "";

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confettiContainer.appendChild(confetti);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  launchConfetti();
});
