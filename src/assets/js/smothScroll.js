import $ from 'jquery';

// Smooth scroll on click
$("a").on('click', function (e) {
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    e.preventDefault();
    // Store hash
    var hash = this.hash;
    // Using jQuery's animate() method to add smooth page scroll
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000);
  }
  // End if
});