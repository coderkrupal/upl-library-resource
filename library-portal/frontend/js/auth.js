// frontend/js/auth.js
import { api } from "./api.js";

const loginBtn = document.getElementById("loginBtn");
const emailInput = document.getElementById("loginEmail");
const passInput = document.getElementById("loginPassword");
const errorP = document.getElementById("loginError");

if (!loginBtn || !emailInput || !passInput) {
  console.error("Auth elements missing from DOM. Check paths and IDs.");
} else {
  loginBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    errorP.innerText = "";
    console.log("Login clicked");

    const email = emailInput.value.trim();
    const password = passInput.value;

    if (!email || !password) {
      errorP.innerText = "Please enter email & password";
      return;
    }

    // show a quick debug log
    console.log("Calling API /auth/login with:", { email });

    const res = await api("/auth/login", "POST", { email, password });

    console.log("API response:", res);

    if (!res.ok) {
      // backend returned non-200, show message if available
      errorP.innerText =
        res.message || res.error || `Error ${res.status || ""}`;
      return;
    }

    // success: token is expected (adjust depending on your backend)
    if (res.token) {
      localStorage.setItem("token", res.token);
      window.location.href = "dashboard.html";
    } else {
      // fallback: show entire response
      errorP.innerText = res.message || "Login succeeded but no token returned";
    }
  });
}
