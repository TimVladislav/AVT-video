var active = 2;
var preactive = 1;
$(document).ready(function () {
    setInterval(function () {
        var slideract = '.slider' + active;
        var sliderpre = '.slider' + preactive;
        //$(slideract).css('z-index', '1');
        //$(sliderpre).css('z-index', '0');
        $(slideract).css('opacity', '0.6');
        $(sliderpre).css('opacity', '0');
        /*$(slideract).fadeTo(2000, 0.6);
        $(sliderpre).animate({
            opacity: 0
        }, 2000);*/
        if (active == 4) {
            active = 1;
        } else {
            active++;
        }
        if (preactive == 4) {
            preactive = 1;
        } else {
            preactive++;
        }
    }, 10000);
});
