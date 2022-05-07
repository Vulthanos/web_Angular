import { getUserCart } from './firebase_logs.mjs';

$.getJSON("./assets/JSON_Files/result.json", function(data) {
  $.each(data.slider_result_top_images, function(key, value) {

    let top_item;

    top_item = '<article class="article_slider">' +
      '<img class="img_slider" src="' + value.img + '" alt="">' +
      '<label>' + value.name + '</label>' +
        '<input type="button" class="buy_button" value="Comprar" onclick="buyProduct()"/>' +
    '</article>';

    $("#top").append(top_item);

  });

  $.each(data.slider_result_bot_images, function(key, value) {

    let bot_item;

    bot_item ='<article class="article_slider">' +
      '<img class="img_slider" src="' + value.img + '" alt="">' +
      '<label>' + value.name + '</label>' +
        '<input type="button" class="buy_button" value="Comprar" onclick="buyProduct()"/>' +
    '</article>';

    $("#bot").append(bot_item);

  });
});

function buyProduct() {
    console.log("funciona el boton");
}
