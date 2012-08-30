$(function() {
  $(".scramble").sortable();
  $(".scramble img").disableSelection();
  $('.scramble').balloon({ 
    offsetX: -340,
    showAnimation: function(d) { this.fadeIn(d); },
    classname: 'tip'
  });

  $('.scramble').mouseenter();
});