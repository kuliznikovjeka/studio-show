const modalOverlay = document.querySelector(".modal-overlay");
const btnCloseModal = document.querySelector(".party-modal__button-close");
const openBtnModal = document.querySelector(
  ".item-types-of-holidays__link-about"
);
const modal = document.querySelector(".modal");

openBtnModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

function openModal(e) {
  const path = e.target.getAttribute("data-path");
  const currentModal = document.querySelector(`[data-target='${path}']`);
  currentModal.classList.add("modal__visible");
  modalOverlay.classList.add("modal-overlay__visible");
}

function closeModal(e) {
  const isOverlay = e.target === modalOverlay;
  const isCloseBtn =
    e.target.closest(".party-modal__button-close") === btnCloseModal;

  if (isOverlay || isCloseBtn) {
    modalOverlay.classList.remove("modal-overlay__visible");
  }
}
