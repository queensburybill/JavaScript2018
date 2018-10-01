/**
 * Validate the form when:
 * 1.) When a form input loses focus (blur)
 * 2.) When the form is submitted
 *
 * Be sure to use event delegation
 */

function handleError(input) {
  if (!input.validity.valid) input.classList.add("is-invalid");
  else if (input.classList.contains("is-invalid"))
    input.classList.remove("is-invalid");
}

// Change this to event delegation and get this to work
document.getElementById("codeName").addEventListener("blur", function(e) {
  // Show / hide validation errors
});

// Change this to event delegation and get this to work
document.getElementById("form").addEventListener("submit", function(e) {
  const form = e.target;
  const inputs = Array.prototype.slice.call(form.elements); // Converts to an array
  let isValid = inputs
    .map(function(input) {
      return input.validity.valid;
    })
    .every(function(validity) {
      return validity;
    });

  if (isValid) {
    // Submit form if valid
  } else {
    // Show errors if invalid
  }
});
