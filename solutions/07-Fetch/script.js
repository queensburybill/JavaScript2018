/**
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
  return new Promise((resolve, reject) => {
    fetch(url).then(response => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject('did not work');
      }
    });
  });
};
const createImage = data => {
  console.log(data.message);
};

/** Do not edit this code  */

var image = loadImage('https://dog.ceo/api/breeds/image/random');
image.then(data => console.log(data));
