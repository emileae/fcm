$(document).ready(function(){
    
    $('body').on('touchend mouseup', '.popup_trigger', function(){
        var content = $(this).children('.popup').html();
        $('body').append('<div id="full_overlay"></div>\
            <div id="overlay_content"><div class="close_x_wrapper"><button class="close_x">X</button></div>\
            '+content+'\
        ');
    });
    
});



