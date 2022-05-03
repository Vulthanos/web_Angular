$.getJSON("./assets/JSON_Files/giveaway.json", function(data) {
    $.each(data.imgLottery, function(key, value) {
        let item;

        item = '<section class="sorteo'+value.id+'">' +
            '<label class="txt-sorteo'+value.id+'">' + value.title + '</label>' +
            '<img class="img-sorteo'+value.id+'" src="' + value.img + '" alt="sorteo '+value.id+'"><br>' +
            '<a href="../giveaway" class="unir-sorteo'+value.id+'" id="unir-sorteo'+value.id+'" style="text-decoration: none"><button>Haz click aqui para participar</button></a>' +
            '</section>';

        $("#sorteos").append(item);
    });
});
