// sidebar toggle js 
$(document).ready(function () {
    $(".toggle-bar").click(function () {
      $(".sidebar").toggleClass("show");
    });
  });
// sidebar icon toggle 
$(document).ready(function () {
  $('.user-select-input').hide();
  $('.select-manage').click(function (event) {
    event.preventDefault();
    $(this).closest(".nav-item").find(".user-select-input").fadeToggle('fast');
  });
});

// previous date disabled all pages 

function setMinDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0'); 
  const month = String(today.getMonth() + 1).padStart(2, '0'); 
  const year = today.getFullYear();

  const formattedDate = `${year}-${month}-${day}`; 
  document.getElementById('dateRange').setAttribute('min', formattedDate);
  document.getElementById('filterRange').setAttribute('min', formattedDate);
}
window.onload = setMinDate;

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

// table manage blogs 
$(document).ready(function () {
  $('#myTable-B').DataTable({
    "paging": false,
    "searching": false,
    "info": true,
    // "pageLength": 2, 
    "destroy": true,
    "lengthChange": false
  });
});

// new js manage blogs 

document.addEventListener("DOMContentLoaded", function () {

  const fileSelector = document.getElementById("fileSelector");
  const displayFile = document.getElementById("displayFile");

  fileSelector.addEventListener("change", function () {
    if (fileSelector.files.length > 0) {
      displayFile.textContent = fileSelector.files[0].name;
    } else {
      displayFile.textContent = "No File Chosen";
    }
  });


  const galleryUploader = document.getElementById("galleryUploader");
  const selectedImages = document.getElementById("selectedImages");

  galleryUploader.addEventListener("change", function () {
    if (galleryUploader.files.length > 0) {
      let fileNames = [];
      for (let i = 0; i < galleryUploader.files.length; i++) {
        fileNames.push(galleryUploader.files[i].name);
      }
      selectedImages.textContent = fileNames.join(", ");
    } else {
      selectedImages.textContent = "No file chosen";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("fileSelector");
  const uploadTrigger = document.getElementById("load-image");


  uploadTrigger.addEventListener("click", function () {
    fileInput.click();
  });
});

// manage blogs validation 
document.getElementById('ManageBlog')
  .addEventListener('click', function (event) {
    event.preventDefault();
  });

document.getElementById('addBlog')
  .addEventListener('click', function () {
    let isValid = true;

    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    const titleA = document.getElementById('titleA');
    const somethingMsssage = document.getElementById('somethingMsssage');
    const metaTitle = document.getElementById('metaTitle');
    const someKeywords = document.getElementById('someKeywords');
    const descriptionA = document.getElementById('descriptionA');
    const descriptionB = document.getElementById('descriptionB');


    if (!titleA.value.trim()) {
      showError(titleA, 'Please enter your title.');
      isValid = false;
    }

    if (!somethingMsssage.value.trim() || !validateSomethingMsssage(somethingMsssage.value)) {
      showError(somethingMsssage, 'Please enter a valid message.');
      isValid = false;
    }

    if (!metaTitle.value.trim()) {
      showError(metaTitle, 'Please enter your meta title.');
      isValid = false;
    }

    if (!someKeywords.value.trim() || !validateSomeKeywords(someKeywords.value)) {
      showError(someKeywords, 'Please enter valid keywords.');
      isValid = false;
    }

    if (!descriptionA.value.trim()) {
      showError(descriptionA, 'Please enter your description.');
      isValid = false;
    }

    if (!descriptionB.value.trim() || !validateDescriptionB(descriptionB.value)) {
      showError(descriptionB, 'Please enter a valid description.');
      isValid = false;
    }

    if (isValid) {
      console.log("Form submitted successfully!");
    }
  });

function showError(input, message) {
  let errorSpan = input.nextElementSibling;

  if (!errorSpan || !errorSpan.classList.contains('error-message')) {
    errorSpan = document.createElement('span');
    errorSpan.classList.add('error-message');
    input.parentNode.appendChild(errorSpan);
  }

  errorSpan.textContent = message;
  errorSpan.style.color = 'red';
}

// Placeholder validation functions
function validateSomethingMsssage(value) {
  return value.length > 5; // Example condition
}

function validateSomeKeywords(value) {
  return value.split(',').length > 0; // Example condition
}

function validateDescriptionB(value) {
  return value.length > 10; // Example condition
}

// manage cuisine table
$(document).ready(function () {
  $('#myTable-A').DataTable({
    paging: true,
    searching: false,
    info: true,
    pageLength: 2,
    destroy: true,
    lengthChange: false,
  });
});

// create chef validation 

document.getElementById("createBooking").addEventListener("click", function (event) {
  event.preventDefault();
  let isValid = true;

  function showError(input, message) {
    let errorSpan = input.parentNode.querySelector(".error-message");
    errorSpan.textContent = message;
    errorSpan.style.color = "red";
  }

  function clearError(input) {
    let errorSpan = input.parentNode.querySelector(".error-message");
    errorSpan.textContent = "";
  }

  const chefName = document.getElementById("chefName");
  if (chefName.value.trim() === "") {
    showError(chefName, "Chef Name is required");
    isValid = false;
  } else {
    clearError(chefName);
  }

  const chefEmail = document.getElementById("chefEmail");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(chefEmail.value.trim())) {
    showError(chefEmail, "Enter a valid email");
    isValid = false;
  } else {
    clearError(chefEmail);
  }

  const chefMobile = document.getElementById("chefMobile");
  const mobilePattern = /^[0-9]{10}$/;
  if (!mobilePattern.test(chefMobile.value.trim())) {
    showError(chefMobile, "Enter a valid 10-digit mobile number");
    isValid = false;
  } else {
    clearError(chefMobile);
  }

  const country = document.getElementById("country");
  if (country.value === "") {
    showError(country, "Please select a country");
    isValid = false;
  } else {
    clearError(country);
  }

  const joinDate = document.getElementById("joinDate");
  const datePattern = /^\d{2}-\d{2}-\d{4}$/;
  if (!datePattern.test(joinDate.value.trim())) {
    showError(joinDate, "Enter date in DD-MM-YYYY format");
    isValid = false;
  } else {
    clearError(joinDate);
  }

  const endDate = document.getElementById("endDate");
  if (!datePattern.test(endDate.value.trim())) {
    showError(endDate, "Enter date in DD-MM-YYYY format");
    isValid = false;
  } else {
    clearError(endDate);
  }

  const chefAddress = document.getElementById("chefAddress");
  if (chefAddress.value.trim() === "") {
    showError(chefAddress, "Chef Address is required");
    isValid = false;
  } else {
    clearError(chefAddress);
  }

  const qualification = document.getElementById("qualification");
  if (qualification.value.trim() === "") {
    showError(qualification, "Qualification is required");
    isValid = false;
  } else {
    clearError(qualification);
  }

  const experience = document.getElementById("experience");
  if (experience.value.trim() === "") {
    showError(experience, "Work Experience is required");
    isValid = false;
  } else {
    clearError(experience);
  }

  const cuisines = document.getElementById("cuisines");
  if (cuisines.value.trim() === "") {
    showError(cuisines, "Cuisines Known is required");
    isValid = false;
  } else {
    clearError(cuisines);
  }

  const gender = document.querySelector('input[name="gender"]:checked');
  const genderField = document.querySelector('input[name="gender"]').parentNode;
  if (!gender) {
    showError(genderField, "Select a gender");
    isValid = false;
  } else {
    clearError(genderField);
  }

  // If all validations pass, submit the form
  if (isValid) {
    document.getElementById("createchef").submit();
  }
});

// create user validation 

document.getElementById('profileForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
  });

document.getElementById('updateProfileBtnA')
  .addEventListener('click', function () {
    let isValid = true;

    document.querySelectorAll('#profileForm .error-message')
      .forEach((el) => (el.textContent = ''));

    const username = document.getElementById('username');
    const email = document.getElementById('email');

    if (!username.value.trim()) {
      showError(username, ' Please Enter your name.');
      isValid = false;
    }
    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    if (!email.value.trim() || !validateEmail(email.value)) {
      showError(email, 'Please enter a valid email.');
      isValid = false;
    }

    if (!lastname.value.trim() || !validateEmail(email.value)) {
      showError(lastname, 'Please enter your last name.');
      isValid = false;
    }

    if (!contact.value.trim()) {
      showError(contact, 'Please enter your your phone number.');
      isValid = false;
    }

    if (!address.value.trim()) {
      showError(address, 'Please enter your address');
      isValid = false;
    }

    if (!building.value.trim()) {
      showError(building, 'Please enter your building.');
      isValid = false;
    }
    if (!area.value.trim()) {
      showError(area, 'Please enter your area');
      isValid = flase;
    }
    if (!usernameA.value.trim()) {
      showError(usernameA, 'Fill the latitude.');
      isValid = false;
    }
    if (!usernameA.value.trim()) {
      showError(usernameA, 'Fill the section.');
      isValid = false;
    }
  });

function showError(input, message) {
  const errorSpan = input.nextElementSibling;
  if (errorSpan) {
    errorSpan.textContent = message;
    errorSpan.style.color = 'red';
  }
}
