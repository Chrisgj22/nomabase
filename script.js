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
    const url = 'https://script.google.com/macros/s/AKfycbzfb3gM8rmc3usKQwUiCJqxEd7Yiou71SZvNb0U0vdIWIPrCjV7GTxYIF_OULnq072S6Q/exec'; // Replace with your form submission endpoint

    fetch(url, {
        method: 'POST',
        body: new FormData(document.getElementById('myForm'))
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Form submission successful:', data);
        // Redirect or handle success scenario here
        window.location.href = 'https://nomabase.com/thank-you.html';
    })
    .catch(error => {
        console.error('Error during form submission:', error);
        // Handle error scenario here
        alert('There was an error submitting the form. Please try again later.');
    });
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    submitForm();
});
