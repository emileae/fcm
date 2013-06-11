$(document).ready(function(){
    
    $('body').on('tap click', '.toc_marker', function(){
       show_tab();
    });
    
    $('body').on('tap click', '.toc_marker_slidein', function(){
       hide_tab();
    });
    
    function show_tab(){
       $('#toc_tab').css('top', '0px');
       $('#toc_tab').css('-moz-transition', 'top 0.5s ease-in-out');
       $('#toc_tab').css('-webkit-transition', 'top 0.5s ease-in-out');
       $('#toc_tab').css('-o-transition', 'top 0.5s ease-in-out');
       $('#toc_tab').css('transition', 'top 0.5s ease-in-out');
       $('.toc_marker').addClass('toc_marker_slidein');
       $('.toc_marker').removeClass('toc_marker');
       $('.toc_marker_slidein').html('HIDE');
    };
    
    function hide_tab(){
        $('#toc_tab').css('top', '-90px');
       $('#toc_tab').css('-moz-transition', 'top 0.5s ease-in-out');
       $('#toc_tab').css('-webkit-transition', 'top 0.5s ease-in-out');
       $('#toc_tab').css('-o-transition', 'top 0.5s ease-in-out');
       $('#toc_tab').css('transition', 'top 0.5s ease-in-out');
       $('.toc_marker_slidein').addClass('toc_marker');
       $('.toc_marker_slidein').removeClass('toc_marker_slidein');
       $('.toc_marker').html('TOC');
    };
    
    
    $('#toc_link').on('tap click', function(){
        
        setTimeout(function () {
        myScroll.scrollToElement('#pg1', 100);
        }, 100);
        
        hide_tab();
        
    });
    
    
    $('#toc_1').on('tap click', function(){
        setTimeout(function () {
        myScroll.scrollToElement('#pg2', 100);
        }, 100);
    });
    $('#toc_2').on('tap click', function(){
        setTimeout(function () {
        myScroll.scrollToElement('#pg4', 100);
        }, 100);
    });
    $('#toc_3').on('tap click', function(){
        setTimeout(function () {
        myScroll.scrollToElement('#pg5', 100);
        }, 100);
    });
    $('#toc_4').on('tap click', function(){
        setTimeout(function () {
        myScroll.scrollToElement('#pg7', 100);
        }, 100);
    });
    $('#toc_5').on('tap click', function(){
        setTimeout(function () {
        myScroll.scrollToElement('#pg8', 100);
        }, 100);
    });
    $('#toc_6').on('tap click', function(){
        setTimeout(function () {
        myScroll.scrollToElement('#pg9', 100);
        }, 100);
    });
    $('#toc_7').on('tap click', function(){
        setTimeout(function () {
        myScroll.scrollToElement('#pg10', 100);
        }, 100);
    });
    $('#toc_8').on('tap click', function(){
        setTimeout(function () {
        myScroll.scrollToElement('#pg11', 100);
        }, 100);
    });
    $('#toc_9').on('tap click', function(){
        setTimeout(function () {
        myScroll.scrollToElement('#pg12', 100);
        }, 100);
    });


});