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
    .then(response => {
      //console.log(response.json());
      /*
      if (!response.ok) {
        throw new Error('The server screwed the pooch!');
      }*/
     return response.json();
    })
    .then(img => {
      console.log("hey");
      return renderImageToPage(img);
    });
}

/** This function should render an image to the page */
const renderImageToPage = src => {
  $("#image").prop("src", src);
};

loadImage('https://dog.ceo/api/breeds/image/random');
