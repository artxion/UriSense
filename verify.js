// public/verify.js
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
  
    if (token) {
      // Verify token with server
      fetch(`/auth/verify-email?token=${token}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            // Save token in localStorage and update UI
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(data.user));
            updateUI();
          } else {
            alert("Verification failed or link expired.");
          }
        })
        .catch((err) => console.log(err));
    } else {
      updateUI(); // No token, just update based on existing session
    }
  
    function updateUI() {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("registerBtn").style.display = "none";
        document.getElementById("profileBtn").style.display = "inline-block";
      }
    }
  });
  