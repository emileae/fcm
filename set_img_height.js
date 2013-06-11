$(document).ready(function(){
    // Set height of all images after loaded
    $('img').load( function() {
        //console.log($(this).height());
        $(this).css('height', $(this).height+'px');
    });
});