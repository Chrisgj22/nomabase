let hamburger = document.getElementById("toggleMenu")
let mobileMenu = document.getElementById("menuToggle")
let closeMenu = document.getElementById("closeMenu")


hamburger.addEventListener("click",function() {
    mobileMenu.style.display = "flex"
    })


closeMenu.addEventListener("click",function() {
    mobileMenu.style.display = "none"
    })

'https://script.google.com/macros/s/AKfycbzfb3gM8rmc3usKQwUiCJqxEd7Yiou71SZvNb0U0vdIWIPrCjV7GTxYIF_OULnq072S6Q/exec'

function submitForm() {
    const url = 'https://script.google.com/macros/s/AKfycbzfb3gM8rmc3usKQwUiCJqxEd7Yiou71SZvNb0U0vdIWIPrCjV7GTxYIF_OULnq072S6Q/exec'; // Replace with your script URL

    $.ajax({
      url: url,
      method: 'POST',
      data: $('#myForm').serialize(),
      dataType: 'json',
      success: function(response) {
        if (response.result === 'success') {
          // Redirect to thank-you page on successful response
          window.location.href = "https://nomabase.com/thank-you.html";
        } else {
          console.error('Error:', response.error);
        }
      },
      error: function(err) {
        console.error('AJAX error:', err);
      }
    });
  }