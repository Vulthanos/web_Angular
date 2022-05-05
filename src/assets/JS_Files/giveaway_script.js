$.getJSON("./assets/JSON_Files/giveaway.json", function(data) {
    $.each(data.imgLottery, function(key, value) {
        let item;

        item = '<section class="sorteo'+value.id+'">' +
            '<div class="txt-sorteo'+value.id+'">' + value.title + '</div>' +
            '<img class="img-sorteo'+value.id+'" src="' + value.img + '" alt="sorteo '+value.id+'"><br>' +
            '<button class="unir-sorteo'+value.id+'" id="unir-sorteo'+value.id+'">' +
            '<a routerLink="/giveaway" class="entrar-sorteo" style="text-decoration: none">Haz click aqui para participar</a>' +
            '</button>' +
            '</section>';

        $("#sorteos").append(item);
    });
});
