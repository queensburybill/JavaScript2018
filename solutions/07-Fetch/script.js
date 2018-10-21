/** An Example of the response you will receive when making an Http request
 * https://dog.ceo/api/breeds/image/random
 *
 * {
    "status": "success",
    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
    }
 *
 * 
 * 
 */

/**
 * As a user, I should be able to click on the a button to see random dog images
 * Please use Fetch in this Example
 *
 */

const loadImage = url => {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      renderImageToPage(data.message);
    })
    .catch(function(error) {
      renderImageToPage(
        "https://www.123rf.com/photo_44185374_404-error-page-not-found-concept-and-a-broken-or-dead-link-symbol-as-a-dog-emerging-from-a-hole-hold.html"
      );
    });
};

/** This function should render an image to the page */
const renderImageToPage = src => {
  $("#image").prop("src", src);
};

renderImageToPage();

document.addEventListener(
  "click",
  loadImage.bind(null, "https://dog.ceo/api/breeds/image/random")
);
