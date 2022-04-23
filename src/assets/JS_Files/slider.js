window.addEventListener('load', function(){
  new Glider(document.querySelector('.slider_list'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.slider_idicators',
    arrows: {
      prev: '.slider_back',
      next: '.slider_next'
    }
  });
});

$.getJSON("src/assets/JSON_Files/slider.json", function(data) {
  $.each(data.slider_images, function(key, value) {

    let slider_item;

    slider_item = '<div class="slider_element">' +
      '<a href="' + value.link + '"><img src="' +  value.img + '" alt=""/></a>' +
      '</div>';

    $("#slider_list").append(slider_item);

  });
});
