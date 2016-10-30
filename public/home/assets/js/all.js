$(document).ready(function(){  
    $('.slider1').parallax();
    $('.slider2').parallax();
    $('.slider3').parallax();
    $('.slider4').parallax();
    $('.modal-trigger').leanModal();
    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
});
