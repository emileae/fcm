$(window).load(function(){
    // Set height of all images after loaded
    $('img').load( function() {
        setTimeout(function(){
            $(this).css('height', $(this).height+'px');
        }, 0);
    });
    
});