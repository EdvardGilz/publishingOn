$.fn.publishingB = function(options) {
    var id = $(this).attr('id');
    var settings = $.extend({
        type: "static"
    }, options);

    $.getJSON("http://bixnia.com/" + id + ".json", function(data) {
        if (settings.type == "static") {
            var html = '<div style="background-color:' + data.background + '; text-align: ' + data.align + '; font-family: arial; padding: ' + data.padding + '; max-width: ' + data.width + '; min-height: ' + data.height + '; color: ' + data.color + ';">'
                + '<img src="' + data.img + '" alt="' + data.alt + '" style="width:' + data.imgWidth + ';"/>'
                + '<h3 style="margin: ' + data.tituloMargin + '; line-height: ' + data.tituloHeight + ';">' + data.titulo + '</h3>'
                + '<p style="margin: ' + data.textoMargin + '; line-height: ' + data.textoHeight + ';">' + data.texto + '</p>'
                + '</div>'
            
            $("#" + id).append(html);
        }
        else if (settings.type == "rich") {
            var html = '<div class="swiper-container" style="background-color:' + data.background + '; text-align: ' + data.align + '; font-family: arial; padding: ' + data.padding + '; max-width: ' + data.width + '; max-height: ' + data.height + '; color: ' + data.color + ';">'
                + '<div class="swiper-wrapper">'
                + '<div class="swiper-slide">Real time ads</div>'
                + '<div class="swiper-slide">Publishing On</div>'
                + '<div class="swiper-slide">By <br> <img src="' + data.img + '" alt="' + data.alt + '" style="width:' + data.imgWidth + ';"/> </div>'
                + '</div>'
                + '<div class="swiper-button-prev"></div>'
                + '<div class="swiper-button-next"></div>'
                + '</div>'
            
            $("#" + id).append(html);

            // http://idangero.us/swiper/api/#.WVu844q23EY
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true,
                autoplay: true,
                speed: 1000,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
            })
        }
    });
};