$(document).ready(function(){

    $('.about-speaker').on('click', function(e){
      e.preventDefault();
      name = $(this).attr('data-name');
      bio = $(this).attr('data-bio');
      $('.speaker-name').text('About ' + name);
      $('.speaker-bio').text(bio);
      $('#about-speaker').modal('show');
    })
});