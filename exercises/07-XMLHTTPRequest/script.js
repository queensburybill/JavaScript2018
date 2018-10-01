/**
 * As a user, I should be greeted with a list of all rick and morty characters
 * As a user, I should be able to select a character from the dropdown and have that user displayed as an image
 * https://rickandmortyapi.com/documentation/
 * Helpful link for populating a dropdown
 *
 */

/**
 * Fix this so that it will populate the drop down with characters returned in the HTTP request
 */
function loadAllCharacters(callback) {
  var XHR = new XMLHttpRequest();
  XHR.open('GET', 'https://rickandmortyapi.com/api/character');
}

function populateDropDown(data) {}

function OnchangeUpdateImage() {
  /*** This fuction should update the image */
  /**This function should make an additional call to the API and render an image based off of the user's selection */
}

/**
 * Modify this below so that it runs the app
 */
