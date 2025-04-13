document.addEventListener("DOMContentLoaded", function () {
    // Show loading screen for 2.5 seconds
    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("hide-loading");
        document.body.classList.add("dark-mode"); // Default dark mode
    }, 2500);
});

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const sunIcon = "☀️";
const moonIcon = "🌙";

// Set default dark mode
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = sunIcon;
} else {
    themeToggle.textContent = moonIcon;
}

// Toggle between themes
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark);
    themeToggle.textContent = isDark ? sunIcon : moonIcon;
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");

    menuToggle.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show-menu");
    });

    // Close menu if clicked outside
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show-menu");
        }
    });
});
window.onload = function () {
    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("fade-out");
        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("main-content").style.display = "block";
        }, 1000); // 1s fade-out effect
    }, 2500); // Show for 2.5s
};
window.onload = function () {
    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("fade-out");
        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("main-content").style.display = "block";
        }, 1000); // 1s fade-out effect
    }, 2500); // Show for 2.5s
};

 
  const menuBtn = document.getElementById('menu-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('show');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  }

  // Toggle sidebar
  menuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (sidebar.classList.contains('open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  // Close sidebar on clicking outside
  document.addEventListener('click', function (e) {
    if (
      sidebar.classList.contains('open') &&
      !sidebar.contains(e.target) &&
      e.target !== menuBtn
    ) {
      closeSidebar();
    }
  });

  // Close sidebar on scroll
  window.addEventListener('scroll', function () {
    if (sidebar.classList.contains('open')) {
      closeSidebar();
    }
  });

  // Swipe gesture (mobile)
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener('touchend', function (e) {
    touchEndX = e.changedTouches[0].screenX;

    // Detect swipe left to close
    if (touchStartX > touchEndX + 50 && sidebar.classList.contains('open')) {
      closeSidebar();
    }
  });

  // Also close when clicking overlay
  overlay.addEventListener('click', closeSidebar);



