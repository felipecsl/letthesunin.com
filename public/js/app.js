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

  $(window).scroll(userScrolledThePage);

  $('.scramble').mouseenter();
});

function userScrolledThePage() {
  var scrollTop = $('body').scrollTop() + $('#topmsg').height();
  var targetIndex = 0;

  $('.circle').removeClass('full');

  if(scrollTop > $('.time').offset().top) {
    targetIndex = 6;
  }
  else if(scrollTop > $('.cloud').offset().top) {
    targetIndex = 5;
  }
  else if(scrollTop > $('.optimized').offset().top) {
    targetIndex = 4;
  }
  else if(scrollTop > $('.collaboration').offset().top) {
    targetIndex = 3;
  }
  else if(scrollTop > $('.social').offset().top) {
    targetIndex = 2;
  }
  else if(scrollTop > $('.context').offset().top) {
    targetIndex = 1;
  }
  else if(scrollTop > $('.mobility').offset().top) {
    targetIndex = 0;
  }

  var target = $('.circle')[targetIndex];

  $(target).addClass('full');
}