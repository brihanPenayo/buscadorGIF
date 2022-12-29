const API_KEY = "insert_API_here";

$('#btnSearch').click(function () {
    // $('#resultado').html("");
    let busqueda = $('#buscar').val().replaceAll(" ", "+");
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${busqueda}&limit=8&offset=0&rating=g&lang=es`;
    if (busqueda == "") {
        random();
    }
    else {
        $.ajax({
            url: url,
        }).done(function (result) {
            for (const img of result.data) {
                $('#resultado').prepend(`<img src="${img.images.fixed_width.url}">`);
            }
        });
    }
    $('#buscar').val('');
});

$('#buscar').keypress(function (e) {
    if (e.which == 13) {
        $('#btnSearch').click();
    }
});

function random() {
    for (let i = 0; i < 8; i++) {
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`,
        }).done(function (result) {
            $('#resultado').prepend(`<img src="${result.data.images.preview_webp.url}" alt="${result.data.title}">`);
        });
    }
}

random();