let hamburger = document.getElementById("toggleMenu")
let mobileMenu = document.getElementById("menuToggle")
let closeMenu = document.getElementById("closeMenu")


hamburger.addEventListener("click",function() {
    mobileMenu.style.display = "flex"
    })


closeMenu.addEventListener("click",function() {
    mobileMenu.style.display = "none"
    })




  
   const scriptURL = 'https://script.google.com/macros/s/AKfycby_vAtWABVl7fP_kviUC5513AA8asbWNlVm9KxTgymB03Snw75LJFr3SR15vk7h6ulr/exec'
   
   const form = document.forms['subscriber']
   
   form.addEventListener('submit', e => {
     e.preventDefault()
     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
     .then(response => alert("Thank you! your form is submitted successfully." ))
     .then(() => { window.location.reload(); })
     .catch(error => console.error('Error!', error.message))
   })