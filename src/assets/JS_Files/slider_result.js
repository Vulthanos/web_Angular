$.getJSON("src/assets/JSON_Files/result.json", function(data) {
  $.each(data.slider_result_top_images, function(key, value) {

    let top_item;

    top_item = '<article>' +
      '<img src="' + value.img + '" alt="">' +
      '<label>' + value.name + '</label>'
    '</article>';

    $("#top").append(top_item);

  });

  $.each(data.slider_result_bot_images, function(key, value) {

    let bot_item;

    bot_item ='<article>' +
      '<img src="' + value.img + '" alt="">' +
      '<label>' + value.name + '</label>'
    '</article>';

    $("#bot").append(bot_item);

  });
});
