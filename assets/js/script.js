// animacion anclas
$(function() {
  $('a').click(function(event){
    if (this.hash !=='') {
      event.preventDefault();

      var miscroll = this.hash;

      $("html, body").animate({
        scrollTop: $(miscroll).offset().top
      }, 800, function(){
        window.location.hash = miscroll;
      });
    }
  });
});

// funcion tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// funcion popover
$('[data-toggle="popover"]').popover();
