// https://codepen.io/firestar300/pen/zLKZVZ
// inspiratsioon ja animatsioon sellelt lingilt, veidi täiendatud erinevate allikate kombineerimisel
//(https://towardsdatascience.com/quickly-extract-all-links-from-a-web-page-using-javascript-and-the-browser-console-49bb6f48127b)


// https://stackoverflow.com/questions/6414384/how-do-i-use-css-to-position-a-fixed-variable-height-header-and-a-scrollable-con/30240682
// headeri kõrguse muutumisel keha margini muutmine

var $loader = document.querySelector('.loader')
var Nupud = document.querySelectorAll(".nupp")

// lehe laadimisel
window.onload = function() {
  //animatsioon
  $loader.classList.remove('loader--active')
  //headeri suurus
  document.getElementsByClassName('taustapilt')[0].style.marginTop = document.getElementById('banner').offsetHeight + "px";

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
// akna suuruse muutumisel margini muutmine vastavalt headeri suurusele
window.addEventListener('resize', function(event) {
  document.getElementById('main-content').style.marginTop = document.getElementById('banner').offsetHeight + "px";
});