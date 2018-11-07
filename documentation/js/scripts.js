/*!
 * AMPBlogger Documentation for:
 * Item: HTMLEdito v1.0
 * URL:
 * Based on Bootstrap (https://bootswatch.com/sandstone/)
*/
$(document).ready(function(){

/* Sidebar Affix*/
$('#sidebar').affix({
  offset: {
    top: 421
  }
});

/* Bootstrap scrollspy menu */
var navbarHeight = $('.navbar').outerHeight(true) + 10;

$(document.body).scrollspy({
	target: '#col-left',
	offset: navbarHeight + 40
});

/* Smooth Scroll with jQuery
  from: https://css-tricks.com/snippets/jquery/smooth-scrolling/
   by commenter: Devin Sturgeon
*/
// Select all links with hashes
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top -90 // custom
            }, 1000);
            return false;
        }
    }
});

});