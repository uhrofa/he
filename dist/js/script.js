// Config Slider text
var linkButtonPrimary = "";
var linkButtonSecondary = "";

var textRotate = '["qurano.com - Qur\'an Terjemah 3 Bahasa by apaCara.com","Quran Terjemah Perkata (Word By Word)"]';     // array
linkTextRotate = "https://qurano.com";  // string

setLinkButtonPrimaryText = "qurano.com";
setLinkButtonSecondaryText = "sholat.org";
setLinkButtonPrimary = "https://qurano.com/";
setLinkButtonSecondary = "https://sholat.org/";

linkButtonPrimary = "<a class=\"btn btn-sm btn-gradient ml-auto mt-4 mt-md-0 d-block\" href=" + '"' + setLinkButtonPrimary + '"' + " target=\"_blank\">" + setLinkButtonPrimaryText  + "</a>";

linkButtonSecondary = "<a class=\"btn btn-sm btn-transparent d-none d-md-block\" href=" + '"' + setLinkButtonSecondary + '"' + " target=\"_blank\">" + setLinkButtonSecondaryText  + "</a>";

// off-canvas
(function($) {
  'use strict';
  $(function() {
    $('[data-toggle="offcanvas"]').on("click", function() {
      $('.sidebar-offcanvas').toggleClass('active')
    });
  });
})(jQuery);
// Sidebar
(function($) {
  'use strict';
  $(function() {
    var sidebar = $('.sidebar');

    //Close other submenu in sidebar on opening any

    sidebar.on('show.bs.collapse', '.collapse', function() {
      sidebar.find('.collapse.show').collapse('hide');
    });


    //Change sidebar and content-wrapper height
    applyStyles();

    function applyStyles() {
      //Applying perfect scrollbar
      if ($('.scroll-container').length) {
        const ScrollContainer = new PerfectScrollbar('.scroll-container');
      }
    }

  });
})(jQuery);
// Slider text
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 200;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = "<a  class=\"info-header-text text-black\" href=" + '"' + linkTextRotate  + '"> ' + '<span class="wrap">'+this.txt+'</span>'  + "</a>" + linkButtonPrimary + linkButtonSecondary;

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);

    $(".featured-block .x-dismiss").on("click",function(){
      $(".featured-block").slideToggle();
    });
        // this.el.setAttribute("href", linkTextRotate);     // edit this
    };

    window.onload = function() {
        var spanTag = document.createElement("span");
            spanTag.setAttribute("class", "wrap") ;
        var infoHeader = document.getElementsByClassName('featured-wrapper');
            infoHeader.innerHTML = spanTag;
      var elements = infoHeader;
        for (var i=0; i<elements.length; i++) {
            var toRotate = textRotate;                 // edit this
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), 10000);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
        document.body.appendChild(css);
    };

var curYear = new Date().getFullYear();$( "#copyright-year" ).text( curYear );