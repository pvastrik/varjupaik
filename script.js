// https://codepen.io/firestar300/pen/zLKZVZ
// inspiratsioon ja animation sellelt lingilt, iseseisvalt täiendatud

var $loader = document.querySelector('.loader')
var Nupud = document.querySelectorAll(".nupp")
// lehe laadimisel animatsioon
window.onload = function() {
  $loader.classList.remove('loader--active')
};

// linkidele delay, et animatsioon jõuaks toimuda
function delay (URL) {
    setTimeout( function() { window.location = URL }, 1600);
}
// lingivajutusel algab animatsioon
for (var i = 0; i < Nupud.length ; i++)
{
  Nupud[i].addEventListener('click', function () {
    $loader.classList.add('loader--active')
  
  })
}