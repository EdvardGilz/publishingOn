$.fn.publishingB = function() {
    var id = $(this).attr('id');

    $.getJSON("http://bixnia.com/" + id + ".json", function(data) {
        var html = '<div style="background-color:' + data.background + '; text-align: ' + data.align + '; font-family: arial; padding: ' + data.padding + '; max-width: ' + data.width + '; min-height: ' + data.height + '; color: ' + data.color + ';">'
        + '<img src="' + data.img + '" alt="' + data.alt + '" style="width:' + data.imgWidth + ';"/>'
        + '<h3 style="margin: ' + data.tituloMargin + '; line-height: ' + data.tituloHeight + ';">' + data.titulo + '</h3>'
        + '<p style="margin: ' + data.textoMargin + '; line-height: ' + data.textoHeight + ';">' + data.texto + '</p>'
        + '</div>'
        
        $("#" + id).append(html);
    });
};