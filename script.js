let hamburger = document.getElementById("toggleMenu")
let mobileMenu = document.getElementById("menuToggle")
let closeMenu = document.getElementById("closeMenu")


hamburger.addEventListener("click",function() {
    mobileMenu.style.display = "flex"
    })


closeMenu.addEventListener("click",function() {
    mobileMenu.style.display = "none"
    })

//'https://script.google.com/macros/s/AKfycbzfb3gM8rmc3usKQwUiCJqxEd7Yiou71SZvNb0U0vdIWIPrCjV7GTxYIF_OULnq072S6Q/exec'//


function submitForm() {
    const url = 'https://script.google.com/macros/s/AKfycbzfb3gM8rmc3usKQwUiCJqxEd7Yiou71SZvNb0U0vdIWIPrCjV7GTxYIF_OULnq072S6Q/exec'; // Replace with your form submission URL

    $.ajax({
      url: url,
      method: 'POST',
      data: $('#myForm').serialize(),
      success: function(response) {
        alert('Form submitted successfully! Redirecting to thank-you page.');
        window.location.href = "https://nomabase.com/thank-you.html"; // Replace with your thank-you page URL
      },
      error: function(err) {
        console.error('Form submission error:', err);
        alert('Error submitting form. Please try again later.');
      }
    });
  }

  // Submit form on button click
  $('#myForm').submit(function(event) {
    event.preventDefault();
    submitForm();
  });