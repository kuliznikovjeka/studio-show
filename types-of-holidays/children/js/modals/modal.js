import { modalElements } from "./constants.js";

const { modalOverlay, modals } = modalElements;

function openModal(event) {
  const path = event.currentTarget.getAttribute("data-path");

  modals.forEach((modal) => {
    modal.classList.remove("modal__visible");
  });

  const currentModal = document
    .querySelector(`[data-target="${path}"]`)
    .classList.add("modal__visible");

  modalOverlay.classList.add("modal-overlay__visible");
}

function closeModal(event) {
  const closeButton = event.target.closest(".party-modal__button-close");
  if (event.target === modalOverlay || closeButton) {
    modalOverlay.classList.remove("modal-overlay__visible");

    modals.forEach((modal) => {
      modal.classList.remove("modal__visible");
    });
  }
}

export { openModal, closeModal };
