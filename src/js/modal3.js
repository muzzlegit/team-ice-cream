(() => {
  const refs = {
    openModal3Btn: document.querySelector('[data-modal3-open]'),
    closeModal3Btn: document.querySelector('[data-modal3-close]'),
    modal3: document.querySelector('[data-modal3]'),
  };

  refs.openModal3Btn.addEventListener('click', toggleModal3);
  refs.closeModal3Btn.addEventListener('click', toggleModal3);

  function toggleModal3() {
    document.body.classList.toggle('modal-open');
    refs.modal3.classList.toggle('is-hidden');
  }
})();
