/**
 * As a user, I should be greeted with a list of all rick and morty characters
 * As a user, I should be able to select a character from the dropdown and have that user displayed as an image
 * Helpful link for populating a dropdown
 * https://rickandmortyapi.com/documentation/
 * https://rickandmortyapi.com/api/character
 * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 * https://slides.com/jamaltaylor/test#/29
 */

/**
 * Fix this so that it will populate the drop down with characters returned in the HTTP request
 *
 * clue you can use this for
 */
function loadAllCharacters(callback) {
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {};
}

function populateDropDown(data) {
  $('#dropdown').empty();
  $.each(data.results, function(i, p) {
    $('#dropdown').append(
      $('<option></option>')
        .val(p.name)
        .html(p.name)
    );
  });
}
