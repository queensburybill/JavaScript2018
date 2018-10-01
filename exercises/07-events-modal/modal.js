/**
 * The modal should close when the user:
 * 1.) Clicks on the "x"
 * 2.) Clicks outside the modal
 *
 * Right now, there is a bug. When you click anything on the page, including the modal dialog, it closes the modal.
 * Without changing the HTML or CSS, fix this.
 */
const body = document.getElementsByTagName("body")[0];
const modalOverlay = document.getElementById("modalOverlay");
const modalDialog = document.getElementById("modalDialog");
const closeButton = document.getElementById("closeButton");

function closeModal() {
  body.classList.remove("modal-lock");
  modalOverlay.classList.remove("open");
}

closeButton.addEventListener("click", closeModal);
body.addEventListener("click", closeModal);
