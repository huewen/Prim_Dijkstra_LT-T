var rangeSlider = function(){
    var slider = $('.animation-slider'),
        range = $('.animation-slider-range'),
        value = $('.animation-slider-value');
      
    slider.each(function(){
  
        value.each(function(){
            var value = $(this).prev().attr('value');
            $(this).html(value);
        });
  
        range.on('input', function(){
            value.html(this.value);
        });
    });
};
  
rangeSlider();