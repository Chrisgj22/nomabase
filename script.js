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
            // Handle success response
            console.log(response);
            // Redirect on success
            window.location = "https://nomabase.com/thank-you.html";
        },
        error: function(err) {
            // Handle error response
            console.log(err);
        }
    });
}