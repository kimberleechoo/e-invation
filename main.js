$(document).ready(function(){
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
})

