
let time = 10;
let initialOffset = '240';
let i = 1
let slider = setInterval(function(){
    $('.slider').addClass('current', initialOffset-(i*(initialOffset/time))).removeClass('nonActive');
    if (i == time) { clearInterval(interval); }
    i++;  
}, 1000);


// Pie slider
var interval = setInterval(function() {
    $('.timer-circle').css('stroke-dashoffset', initialOffset-(i*(initialOffset/time)));
    if (i == time) { clearInterval(interval); }
    i++;  
}, 1000);

