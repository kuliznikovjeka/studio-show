import { modalElements } from "./constants.js";
import { openModal, closeModal } from "./modal.js";

const { openButtons, modalOverlay } = modalElements;

const eventOpenModal = openButtons.forEach((button) => {
  button.addEventListener("click", openModal);
});

const eventCloseModal = modalOverlay.addEventListener("click", closeModal);

export { eventOpenModal };
