//var isAnimating = false;

$(function() {
  $(".scramble").sortable({
     update: onWordSorted
  });

  setInterval(countDown, 1000);

  $('.circle').click(function() {
    var targetSelector = $(this).data('target');
    var offset = $(targetSelector).offset().top;
    $('body,html').animate({ scrollTop: offset }, 300); // workaround for Firefox http://stackoverflow.com/questions/8149155/animate-scrolltop-not-working-in-firefox
  });

  $(".btnWakeUp").click(function() {
    $('.circle:last').click();
  });

  $(".arrow").click(function() {
    $('.circle.full').next().click();
  });

  $(".scramble img").disableSelection();
  
  $('.mobility_scramble').balloon({ 
    offsetX: -340,
    showAnimation: function(d) { this.fadeIn(d); },
    classname: 'tip mobility_tip',
    hideAnimation: function(d) { }
  });
  $('.cloud_scramble').balloon({ 
    offsetX: -340,
    showAnimation: function(d) { this.fadeIn(d); },
    classname: 'tip cloud_tip',
    hideAnimation: function(d) { }
  });
  $('.context_scramble').balloon({ 
    offsetX: -285,
    showAnimation: function(d) { this.fadeIn(d); },
    classname: 'tip context_tip',
    hideAnimation: function(d) { }
  });
  $('.social_scramble').balloon({ 
    offsetX: -235,
    showAnimation: function(d) { this.fadeIn(d); },
    classname: 'tip social_tip',
    hideAnimation: function(d) { }
  });
  $('.collaboration_scramble').balloon({ 
    offsetX: -405,
    showAnimation: function(d) { this.fadeIn(d); },
    classname: 'tip collaboration_tip',
    hideAnimation: function(d) { }
  });
  $('.optimized_scramble').balloon({ 
    offsetX: -385,
    showAnimation: function(d) { this.fadeIn(d); },
    classname: 'tip optimized_tip',
    hideAnimation: function(d) { }
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
    $('#' + scramble.data('message')).fadeIn();
    $('.' + scramble.data('tip')).fadeOut('normal', function() { $(this).remove(); });
  }
  else {
   $('#' + scramble.data('message')).fadeOut(); 
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
  var pageBottom = 5500;
  var scrollTop = $(document).scrollTop() + $('#topmsg').height();
  var targetIndex = 0;
  var isLastImage = false;
  var headerMessage = 'When the sun rises, desks and wires<br/> will give way to worldwide...';

  $('.circle').removeClass('full');

  if($(document).scrollTop() > pageBottom || scrollTop > $('.form').offset().top) {
    targetIndex = 7;
    isLastImage = true;
    headerMessage = '<p style="margin-top: 18px;">Wake me up for the sunrise</p>';
  }
  else if(scrollTop > $('.time').offset().top) {
    targetIndex = 6;
    headerMessage = 'When will the sun rise on your<br/> business? We say...';
  }
  else if(scrollTop > $('.cloud').offset().top) {
    targetIndex = 5;
    headerMessage = "<p style=\"margin-top: 18px;\">When the sun rises, you'll see the power of...</p>";
  }
  else if(scrollTop > $('.optimized').offset().top) {
    targetIndex = 4;
    headerMessage = "When the sun rises, profitability and customer<br/> satisfaction will soar, thanks to workforces that are...";
  }
  else if(scrollTop > $('.collaboration').offset().top) {
    targetIndex = 3;
    headerMessage = "When the sun rises, the insight to perform<br/> better will come from peer-to-peer...";
  }
  else if(scrollTop > $('.social').offset().top) {
    targetIndex = 2;
    headerMessage = "When the sun rises, everyone will<br/>  connect through networks that are...";
  }
  else if(scrollTop > $('.context').offset().top) {
    targetIndex = 1;
    headerMessage = "When the sun rises, technology will<br/>  heighten your awareness of...";
  }
  else if(scrollTop > $('.mobility').offset().top) {
    targetIndex = 0;
    headerMessage = "When the sun rises, desks and wires<br/> will give way to worldwide...";
  }

  // if(!isAnimating) {
  //   isAnimating = true;

  //   var bottomDistance;
  //   if(isLastImage) {
  //     bottomDistance = '-400px';
  //   }
  //   else {
  //     bottomDistance = '0px';
  //   }

  //   $('#footer').stop().animate(
  //       { bottom: bottomDistance }, 
  //       200, 
  //       function() {
  //         isAnimating = false;
  //       });
  // }

  var target = $('.circle')[targetIndex];

  $(target).addClass('full');
  $('#topmsg').html(headerMessage);
}

function countDown() {
  var eventDate = new Date(2012, 08, 18, 9, 0, 0).getTime();
  var now = new Date().getTime();
  var secsLeft = Math.floor(eventDate - now) / 1000;
  var daysLeft = Math.floor(secsLeft / 86400);
  var hoursLeft = Math.floor((secsLeft % 86400) / 3600);
  var minutesLeft = Math.floor(Math.floor(Math.floor(secsLeft % 86400) % 3600) / 60);
  var secondsLeft = Math.floor(Math.floor(Math.floor(secsLeft % 86400) % 3600) % 60);

  $('.days span').text(daysLeft + " ");
  $('.hours span').text(hoursLeft + " ");
  $('.min span').text(minutesLeft + " ");
  $('.sec span').text(secondsLeft + " ");
}