let hamburger = document.getElementById("toggleMenu")
let mobileMenu = document.getElementById("menuToggle")
let closeMenu = document.getElementById("closeMenu")


hamburger.addEventListener("click",function() {
    mobileMenu.style.display = "flex"
    })

closeMenu.addEventListener("click",function() {
      mobileMenu.style.display = "none"
      })
  
  

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyEyLxV1Aw0_tvlpNjNplaoxepJq0KOFLiz2YVVxrxzLCZKNPvQCQ4u2axdFoIhujph/exec';
    const form = document.forms['submit-to-google-sheet'];
    
    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          if (response.ok) {
            console.log('Form submission successful! Redirecting to thank you page...');
            window.location.href = "https://nomabase.com/thank-you.html";
          } else {
            console.error('Form submission failed with status ' + response.status);
          }
        })
        .catch(error => console.error('Error!', error.message));
    });
    