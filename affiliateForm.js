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
  







  const scriptURL = 'https://script.google.com/macros/s/AKfycbxl0g29d2dNzeNNOG90Gtrczy8-uJl8d3UVd2VK-vzDZYajpjXrh2BRnnmHH6ZkCfOAGQ/exec'
  const form = document.forms['affiliate']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
