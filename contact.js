let hamburger = document.getElementById("toggleMenu")
let mobileMenu = document.getElementById("menuToggle")
let closeMenu = document.getElementById("closeMenu")
let thanksSub = document.getElementById("thankSub")
let contactBtn = document.getElementById("contactBtn")

hamburger.addEventListener("click",function() {
    mobileMenu.style.display = "flex"
    })

closeMenu.addEventListener("click",function() {
      mobileMenu.style.display = "none"
      })
  






const scriptURL = 'https://script.google.com/macros/s/AKfycbxS4T2ogB1W3mHEhyBwhp-2ay_MCs8so_V2LLYUHdsq26EXYsePsmUUnooRVG57Zw0Q/exec'
const form = document.forms['contactForm']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
    if (response.ok) {
        console.log('Form submission successful!');
        contactBtn.innerHTML="We'll be in touch soon, thank you"
        setTimeout(function(){
        contactBtn.innerHTML="Send"  
        },5000)
        form.reset()
      } else {
        console.error('Form submission failed with status ' + response.status);
      }
    })
    .catch(error => console.error('Error!', error.message))
})