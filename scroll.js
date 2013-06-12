var myScroll = "";

$(document).ready(function(){//replaced with deviceready phonegap function

$('.page').on('backbutton',
     function(e){
         e.preventDefault();
});

// The wrapperWidth before orientationChange. Used to identify the current page number in updateLayout();
wrapperWidth = 0;

myScroll = new iScroll('pageWrapper', {
	snap: true,
	momentum: false,
	hScrollbar: false,
	vScrollbar: false,
    lockDirection: true
});
    
updateLayout();

function updateLayout() {

    var currentPage = 0;

    if (wrapperWidth > 0) {
        currentPage = - Math.ceil( $('#pageScroller').position().left / wrapperWidth);
    }//this just works out the current page so that on a layout change the user won't be scrolled somewhere else

    wrapperWidth = $('#pageWrapper').width();

    $('#pageScroller').css('width', wrapperWidth * 13);//include number of pages
    $('.page').css('width', wrapperWidth - 0);
    myScroll.refresh();
    myScroll.scrollToPage(currentPage, 0, 0);

};

page1Scroll = new iScroll('wrapper_pg1', {hScrollbar: false, vScrollbar: true, lockDirection: true });
page2Scroll = new iScroll('wrapper_pg2', {hScrollbar: false, vScrollbar: true, lockDirection: true });
page3Scroll = new iScroll('wrapper_pg3', {hScrollbar: false, vScrollbar: true, lockDirection: true });
page4Scroll = new iScroll('wrapper_pg4', {hScrollbar: false, vScrollbar: true, lockDirection: true });
page5Scroll = new iScroll('wrapper_pg5', {hScrollbar: false, vScrollbar: true, lockDirection: true });
page6Scroll = new iScroll('wrapper_pg6', {hScrollbar: false, vScrollbar: true, lockDirection: true });
page7Scroll = new iScroll('wrapper_pg7', {hScrollbar: false, vScrollbar: true, lockDirection: true });
page8Scroll = new iScroll('wrapper_pg8', {hScrollbar: false, vScrollbar: true, lockDirection: true });
page9Scroll = new iScroll('wrapper_pg9', {hScrollbar: false, vScrollbar: true, lockDirection: true });
page10Scroll = new iScroll('wrapper_pg10', {hScrollbar: false, vScrollbar: true, lockDirection: true });
page11Scroll = new iScroll('wrapper_pg11', {hScrollbar: false, vScrollbar: true, lockDirection: true });
page12Scroll = new iScroll('wrapper_pg12', {hScrollbar: false, vScrollbar: true, lockDirection: true });

/*SPRITESPIN*/
    
});


