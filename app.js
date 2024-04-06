document.addEventListener('DOMContentLoaded', function () {
  // Retrieve dark mode status from localStorage
  var isDarkMode = localStorage.getItem('darkMode') === 'true';
  var icon = document.getElementById("icon");

  // Function to toggle dark mode
  function toggleDarkMode() {
    document.body.classList.toggle("dark-theme");
    // Update icon based on dark mode status
    if (document.body.classList.contains("dark-theme")) {
      icon.src = "Asset/sun.png";
      // Store dark mode status in localStorage
      localStorage.setItem('darkMode', 'true');
    } else {
      icon.src = "Asset/moon.png";
      // Store dark mode status in localStorage
      localStorage.setItem('darkMode', 'false');
    }
  }

  // Apply dark mode status on page load
  if (isDarkMode) {
    toggleDarkMode();
  }

  // Toggle dark mode on button click
  icon.onclick = toggleDarkMode;

  //for chaging the color of nav bar
  const button = document.getElementById('btn');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  let colorToggle = localStorage.getItem('colorToggle') === 'true';

  function updateColors() {
    if (colorToggle) {
      button.style.backgroundColor = '#40A2D4'; // Second color for button
      header.style.backgroundColor = '#012232'; // First color for header
      footer.style.backgroundColor = '#012232'; // First color for footer
    } else {
      button.style.backgroundColor = '#012232'; // First color for button
      header.style.backgroundColor = '#40A2D4'; // Second color for header
      footer.style.backgroundColor = '#40A2D4'; // Second color for footer
    }
  }

  updateColors();

  button.addEventListener('click', function() {
    colorToggle = !colorToggle;
    updateColors();
    localStorage.setItem('colorToggle', colorToggle);
  });


  // form
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate inputs
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const age = form.querySelector('#age').value;
    const gender = form.querySelector('#gender').value;
    const feedback = form.querySelector('#feedback').value;

    if (name.trim() === '' || email.trim() === '' || age.trim() === '' || gender === '' || feedback.trim() === '') {
      alert('Please fill out all fields.');
      return;
    }

    // Email validation using regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Age validation
    if (isNaN(age) || age <= 0) {
      alert('Please enter a valid age.');
      return;
    }

    // Additional validations can be added here as needed

    // If all validations pass, submit the form
    form.submit();
  });
});
