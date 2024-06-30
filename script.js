let hamburger = document.getElementById("toggleMenu")
let mobileMenu = document.getElementById("menuToggle")
let closeMenu = document.getElementById("closeMenu")


hamburger.addEventListener("click",function() {
    mobileMenu.style.display = "flex"
    })


closeMenu.addEventListener("click",function() {
    mobileMenu.style.display = "none"
    })



    function submitForm() {
        const url = 'https://script.google.com/macros/s/AKfycbzfb3gM8rmc3usKQwUiCJqxEd7Yiou71SZvNb0U0vdIWIPrCjV7GTxYIF_OULnq072S6Q/exec'; // Replace with your script URL
    
        $.ajax({
            url: url,
            method: 'POST',
            data: $('#myForm').serialize(),
            success: function(response) {
                console.log('Form submitted successfully:', response);
                // Handle success response and redirect
                window.location.href = "https://nomabase.com/thank-you.html";
            },
            error: function(err) {
                console.log('Error submitting form:', err);
            }
        });
    }
    
    $(document).ready(function() {
        $('#myForm').submit(function(event) {
            event.preventDefault(); // Prevent default form submission
            submitForm(); // Call the AJAX form submission function
        });
    });
    