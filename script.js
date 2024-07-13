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
  
  

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyEyLxV1Aw0_tvlpNjNplaoxepJq0KOFLiz2YVVxrxzLCZKNPvQCQ4u2axdFoIhujph/exec';
    const form = document.forms['submit-to-google-sheet'];
    
    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          if (response.ok) {
            console.log('Form submission successful!');
            thanksSub.innerHTML="Thanks for subscribing!🎊"
            setTimeout(function(){
            thanksSub.innerHTML=""  
            },5000)
            form.reset()
          } else {
            console.error('Form submission failed with status ' + response.status);
          }
        })
        .catch(error => console.error('Error!', error.message));
    });

    //calculator//
    
    function calculateRevenue() {
      const propertyRange = document.getElementById('propertyRange');
      const propertyCount = document.getElementById('propertyCount');
      const totalRevenue = document.getElementById('totalRevenue');
      const fivePercentRevenue = document.getElementById('fivePercentRevenue');
  
      const properties = propertyRange.value;
      const revenue = properties * 5000;
      const fivePercent = revenue * 0.05;
  
      propertyCount.textContent = properties;
      totalRevenue.textContent = revenue.toFixed(2);
      fivePercentRevenue.textContent = "$"+fivePercent.toFixed(2);
  }
  