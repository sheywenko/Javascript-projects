const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpen = document.querySelector(".btn--open");
const btnClose = document.querySelector(".btn--close");
//ANONYMOUS FUNCTION TO OPEN THE MODAL AND THE OVERLAY, IT WILL BE PASSED AS SECOND ARGUMENT IN THE EVENT LISTENER WHERE NECESSARY.
const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
//ANONYMOUS FUNCTION TO CLOSE THE MODAL AND THE OVERLAY, IT WILL BE PASSED AS SECOND ARGUMENT IN THE EVENT LISTENER WHERE NECESSARY.
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
//TO OPEN THE MODAL WHEN THE OPEN MODAL BUTTON IS CLICKED
btnOpen.addEventListener("click", openModal);
//TO CLOSE THE MODAL WHEN THE CLOSE MODAL BUTTON IS CLICKED
btnClose.addEventListener("click", closeModal);
//TO MAKE THE MODAL CLOSES WHEN ANY PART OF THE OVERLAY IS CLICKED
overlay.addEventListener("click", closeModal);
// TO MAKE THE MODAL CLOSES WHEN ESCAPE KEY IS PRESSED
document.addEventListener("keydown", (event) => {
  if (event.key == "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
