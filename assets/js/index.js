// sidebar toggle js 
$(document).ready(function () {
    $(".toggle-bar").click(function () {
      $(".sidebar").toggleClass("show");
    });
  });
// sidebar icon toggle 
$(document).ready(function () {
    $('.user-select-input').hide();
    $('.fa-caret-down').click(function (event) {
      event.preventDefault();
      $(this).closest(".nav-item").find(".user-select-input").fadeToggle('fast');
    });
  });
// dahboard review icon toggle 
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function () {
      let content = this.querySelector('.dropdown-content');
      let icon = this.querySelector('.dropdownicon');

      // Toggle the dropdown content
      content.style.display = content.style.display === "block" ? "none" : "block";
      icon.classList.toggle("rotated");
    });
  });
// ----------------------validation in managaeprfile form 
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

//---------------------- manage profile inpit upload 
const documentA = document.getElementById("uploadDocument");
const fileInput = document.getElementById("file1");

documentA.addEventListener("click", () => {
  fileInput.click()
});

fileInput.addEventListener("change", (event) => {
  const files = event.target.files;
});


