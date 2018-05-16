$(document).ready(function () {

  var windw = this;

  $.fn.followTo = function ( pos ) {
      var $this = this,
          $window = $(windw);
      
      $window.scroll(function(e){
          if ($window.scrollTop() > pos) {
              $this.css({
                  position: 'absolute',
                  top: pos
              });
          } else {
              $this.css({
                  position: 'fixed',
                  top: 0
              });
          }
      });
  };
  
  $('.social-box').followTo(250);


  // $("*", document.body).click(function (event) {
  //   var offset = $(this).offset();
  //   event.stopPropagation();
  //     console.log(this.className +
  //       " coords ( " + offset.left + ", " + offset.top + " )");
  // });

});