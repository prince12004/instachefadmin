
document.addEventListener("DOMContentLoaded", function () {
  function showError(input, message) {
    const errorSpan = input.parentElement.nextElementSibling;
    errorSpan.textContent = message;
    errorSpan.style.color = "red";
  }

  function clearError(input) {
    const errorSpan = input.parentElement.nextElementSibling;
    errorSpan.textContent = "";
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePassword(password) {
    return password.length >= 6;
  }

  document.getElementById("updateProfileBtn").addEventListener("click", function () {
    let valid = true;
    const username = document.getElementById("username");
    const email = document.getElementById("email");

    if (username.value.trim() === "") {
      showError(username, "Username is required");
      valid = false;
    } else {
      clearError(username);
    }

    if (email.value.trim() === "") {
      showError(email, "Email is required");
      valid = false;
    } else if (!validateEmail(email.value)) {
      showError(email, "Invalid email format");
      valid = false;
    } else {
      clearError(email);
    }

    if (valid) {
      alert("Profile updated successfully!");
    }
  });

  document.getElementById("passwordForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;
    const oldPassword = document.getElementById("old-password");
    const newPassword = document.getElementById("new-password");
    const confirmPassword = document.getElementById("confirm-password");

    if (oldPassword.value.trim() === "") {
      showError(oldPassword, "Old password is required");
      valid = false;
    } else {
      clearError(oldPassword);
    }

    if (!validatePassword(newPassword.value)) {
      showError(newPassword, "Password must be at least 6 characters");
      valid = false;
    } else {
      clearError(newPassword);
    }

    if (confirmPassword.value !== newPassword.value) {
      showError(confirmPassword, "Passwords do not match");
      valid = false;
    } else {
      clearError(confirmPassword);
    }

    if (valid) {
      alert("Password changed successfully!");
    }
  });
});


