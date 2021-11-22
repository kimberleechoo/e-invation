// var hiText =document.getElementsByClassName('what');
$(document).ready(function(){
    $('#modalPop').hide();
    $('#clickable').click(function(event){
        console.log('hi', event);
        $('#modalPop').show();
        $('body').css("overflow","hidden");
    })

    $('.close').click(function(){
        $('#modalPop').hide();
        $('body').css('overflow','initial');
    })
})

