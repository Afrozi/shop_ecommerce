// JavaScript for Star Rating
document.addEventListener("DOMContentLoaded", function() {
  var starRatingElements = document.querySelectorAll('.star-rating');
  starRatingElements.forEach(function(starRatingElement) {
    var rating = parseFloat(starRatingElement.getAttribute('data-rating'));
    var stars = starRatingElement.querySelectorAll('.star');
    
    stars.forEach(function(star, index) {
      if (index < rating) {
        star.classList.add('filled');
      } else {
        star.classList.remove('filled');
      }
    });
  });
});
  
console.log("hello");