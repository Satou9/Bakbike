// menu open close
//let menu = document.querySelector('.menu-icon')

//menu.onclick = () =>{
   // menu.classList.toggle('move');
//}

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });