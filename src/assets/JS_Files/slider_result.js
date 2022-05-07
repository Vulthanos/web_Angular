
async function buy() {
    const cart = await getUserCart();
    console.log(cart);
}

$.getJSON("./assets/JSON_Files/result.json", function(data) {
  $.each(data.slider_result_top_images, function(key, value) {

    let top_item;

    top_item = '<article class="article_slider">' +
      '<img class="img_slider" src="' + value.img + '" alt="">' +
      '<label>' + value.name + '</label>' +
        '<input type="button" class="buy_button" value="Comprar" onclick="buy().finally()"/>' +
    '</article>';

    $("#top").append(top_item);

  });

  $.each(data.slider_result_bot_images, function(key, value) {

    let bot_item;

    bot_item ='<article class="article_slider">' +
      '<img class="img_slider" src="' + value.img + '" alt="">' +
      '<label>' + value.name + '</label>' +
        '<input type="button" class="buy_button" value="Comprar" onclick="buy().then()"/>' +
    '</article>';

    $("#bot").append(bot_item);

  });
});

import { getUserCart } from './firebase_logs.mjs';

const btns = document.getElementsByClassName("buy_button");
let i = 0
while (i < btns.length) {
    console.log(btns[i]);
    console.log(i);
    i = i + 1;
}
