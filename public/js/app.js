$(function() {
  $(".scramble").sortable();
  $(".scramble img").disableSelection();
  
  $('.mobility_scramble, .cloud_scramble').balloon({ 
    offsetX: -340,
    showAnimation: function(d) { this.fadeIn(d); },
    classname: 'tip'
  });
  $('.context_scramble').balloon({ 
    offsetX: -285,
    showAnimation: function(d) { this.fadeIn(d); },
    classname: 'tip'
  });
  $('.social_scramble').balloon({ 
    offsetX: -235,
    showAnimation: function(d) { this.fadeIn(d); },
    classname: 'tip'
  });
  $('.collaboration_scramble').balloon({ 
    offsetX: -405,
    showAnimation: function(d) { this.fadeIn(d); },
    classname: 'tip'
  });
  $('.optimized_scramble').balloon({ 
    offsetX: -385,
    showAnimation: function(d) { this.fadeIn(d); },
    classname: 'tip'
  });

  $('.scramble').mouseenter();
});