$(document).ready(function(){
    $('.carousel').carousel({
        dist: 10,
        padding: 10,
        fullWidth:true,
        indicators: false,
        duration: 200
    });

    $('#right').click(function(){
      right();
    });

    $('#left').click(function(){
      left();
    });

    right();

});

function right () {
  $('.carousel').carousel('next');
}

function left () {
  $('.carousel').carousel('prev');
}
