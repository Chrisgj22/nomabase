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
        console.log('Form submitted successfully!', response); // Log success to console
        alert('Form submitted successfully! Redirecting to thank-you page.');
        window.location.href = "https://nomabase.com/thank-you.html"; // Redirect to thank-you page
      },
      error: function(err) {
        console.error('Form submission error:', err); // Log error to console
        alert("Thank you, We'll let you know when available."); // Show user-friendly error message
      }
    });
  }
  
  // Submit form on button click
  $('#myForm').submit(function(event) {
    event.preventDefault(); // Prevent default form submission
    submitForm(); // Call submitForm function to handle AJAX submission
  });
  