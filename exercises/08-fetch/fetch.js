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

let el = document.getElementById('button');

const loadImage = url => {
  url = 'https://dog.ceo/api/breeds/image/random'
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('The server is in the doghouse!');
      }
     return response.json();
    })
    .then(img => {
      return renderImageToPage(img.message);
    });
}

/** This function should render an image to the page */
const renderImageToPage = src => {
  $("#image").prop("src", src);
};

el.addEventListener("click", loadImage);
