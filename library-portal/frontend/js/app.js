// frontend/js/app.js

// Check login
export function requireLogin() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "login.html";
  }
  return token;
}

// Logout function
export function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}

// Show user info
export function loadUserInfo() {
  const token = localStorage.getItem("token");

  if (!token) {
    document.getElementById("userEmail").innerText = "Not logged in";
    return;
  }

  // Decode JWT (frontend safe decode — no verification)
  const payload = JSON.parse(atob(token.split(".")[1]));

  document.getElementById("userEmail").innerText = payload.email;
  document.getElementById("userRole").innerText = payload.role;
}

// Add logout button handler (optional)
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.onclick = logout;
  }

  loadUserInfo();
});
