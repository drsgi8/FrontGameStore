export function loadProducts(products){
  $(function(){
    $('#products').html('');
    for(let product of products){
      var container = $('<div/>');
      container.css({
        "width": "calc(100% / 3)",
        "display": "inline-block",
      });
      var image = $('<img/>').css({
        "width": "100%",
        "height": "75%"
      }).hover(function(){
        $(this).animate({
        opacity: '0.5'
    }, 'fast');
      }, function(){
        $(this).animate({
          opacity: '1'
        }, 100);
      });
      container.append(image);
      image.attr('src', product.pictureUrl);
      var text = $('<div/>').css({
        "height": "25%",
        "width": "80%",
        "margin": "0 auto",
      });
      $('<h4/>').text(product.name).css({
        "width": "80%",
        "height": "50%",
        "margin": "0 auto",
        "color": "white",
      }).appendTo(text);
      var info = $('<div/>').css({
        "width": "100%",
        "height": "50%",
        "display": "flex",
        "align-items": "center",
        "justify-content": "center"
      });
      $('<p/>').text('price: $'+ product.price).css({
        "width": "40%",
        "float": "left",
        "color": "white",
      }).appendTo(info);
      $('<button/>').text('order').appendTo(info);
      text.append(info);
      container.append(text);
      $('#products').append(container);
    }
  });
}
