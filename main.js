$(document).ready(function(e){
    $('#modalPop').css('display','none');
    $('#clickable').click(function(event){
        console.log('hi', event);
        $('#modalPop').css('display','block');
        $('body').css("overflow","hidden");
    })

    $('.close').click(function(){
        $('#modalPop').hide();
        $('body').css('overflow','initial');
    })
    // 
    // $( window ).resize(function() {
        if ($(window).width() > 667)
        {
           alert('sorry this is a mobile-only website, because I am very lazy hahaha');
            
        }
    // });
})

document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('myAudio').play();
    // document.removeEventListener('click', musicPlay);
}
// function myFunction() {
//     var x = document.getElementById("myAudio").autoplay;
//     document.getElementById("demo").innerHTML = x;
//   }