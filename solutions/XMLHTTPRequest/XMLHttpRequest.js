/**
 * As a user, I should be greeted with a list of all rick and morty characters
 * As a user, I should be able to select a character from the dropdown and have that user displayed as an image
 * https://rickandmortyapi.com/documentation/
 * Helpful link for populating a dropdown
 *
 */

/**
 * Fix this so that it will populate the drop down with characters returned in the HTTP request
 *
 * clue you can use this for
 */
function loadAllCharacters(callback) {
  var XHR = new XMLHttpRequest();
  XHR.open('GET', 'https://rickandmortyapi.com/api/character');
  XHR.send();
  XHR.onreadystatechange = function() {
    if (XHR.readyState === 4 && XHR.status === 200) {
      callback(JSON.parse(XHR.responseText));
    }
  };
}

function populateDropDown(data) {
  console.log(data);
  $('#dropdown').empty();
  $.each(data.results, function(i, p) {
    console.log(p);
    $('#dropdown').append(
      $('<option></option>')
        .val(p.name)
        .html(p.name)
    );
  });
}

/**
 * Modify this below so that it runs the app
 */

loadAllCharacters(populateDropDown);
