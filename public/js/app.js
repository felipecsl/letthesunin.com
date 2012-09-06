var isAnimating = false;

$(function() {
  $(".scramble").sortable({
     update: onWordSorted
  });
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

function onWordSorted(event, ui) {
  var scramble = $(this);
  var images = scramble.find("img");
  var indexes = _.map(images, function(img) {
    var indxs = $(img).data("index").toString().split(',');
    
    return _.map(indxs, function(i) { return parseInt(i); });
  });

  if(isOrdered(indexes)) {
    $('#' + scramble.data('message')).show();
  }
  else {
   $('#' + scramble.data('message')).hide(); 
  }
}

function isOrdered(array) {
  for(var i = 0; i < array.length; i++) {
    if(_.all(array[i], function(itm) { return itm != i; })) {
      return false;
    }
  }
  return true;
}

function userScrolledThePage() {
  var scrollTop = $('body').scrollTop() + $('#topmsg').height();
  var targetIndex = 0;
  var isLastImage = false;

  $('.circle').removeClass('full');

  if(scrollTop > $('.form').offset().top) {
    targetIndex = 7;
    isLastImage = true;
  }
  else if(scrollTop > $('.time').offset().top) {
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

  if(!isAnimating) {
    isAnimating = true;

    var bottomDistance;
    if(isLastImage) {
      bottomDistance = '-300px';
    }
    else {
      bottomDistance = '0px';
    }

    $('#footer').stop().animate(
        { bottom: bottomDistance }, 
        200, 
        function() {
          isAnimating = false;
        });
  }

  var target = $('.circle')[targetIndex];

  $(target).addClass('full');
}