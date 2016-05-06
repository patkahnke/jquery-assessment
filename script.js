$(document).ready( function() {

var counter = 0;

$('.generate-button').on('click', function() {
  createContainerButtonsAndCounter();
  counter++;
});


$('#container-goes-here').on('click', '.delete-button', function() {
  removeContainer();

});

$('#container-goes-here').on('click', '.change-color-button', function() {
  $('.button-holder').css('background-color', 'red');
});


  //all functions declared below
  function createContainerButtonsAndCounter() {//creates the yellow container
    removeContainer();
    createContainer();
    createButtons();
    createCounter();
  }

  function createContainer() {
  $('#container-goes-here').append('<div class="button-holder"></div>');
  $('.button-holder').append('<div class="delete-button-goes-here"></div>');
  $('.button-holder').append('<div class="change-color-button-goes-here"></div>');
  $('.button-holder').append('<div class="counter-text-goes-here"></div>');
  }

  function createButtons() {
   $('.delete-button-goes-here').append('<button class="delete-button" type="button">Delete</button>');
   $('.change-color-button-goes-here').append('<button class="change-color-button" type="button">Change Color</button>');
  }

  function createCounter() {
    $('.counter-text-goes-here').text(counter);
  }

  function removeContainer() {
      $('#container-goes-here').find('.button-holder').remove();
    }

});
  //var $el = ('#container-goes-here').children().last();
