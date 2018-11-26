$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 700);
                return false;
            }
        }
    });
});



var jump=function(e) {
   if (e) {
       e.preventDefault();
       var target = $(this).attr("href");
   }
   else {
       var target = location.hash;
   }

   $('html,body').animate(
   {
       scrollTop: $(target).offset().top
   },2000,function() {
       location.hash = target;
   });
}

$('html, body').hide();

$(document).ready(function() {
    $('a[href^=#]').bind("click", jump);
    if (location.hash) {
        setTimeout(function() {
            $('html, body').scrollTop(0).show();
            jump();
        }, 0);
    }
    else {
        $('html, body').show();
    }
});
