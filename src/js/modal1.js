(() => {
  const refs = {
    openModal1Btn: document.querySelector('[data-modal1-open]'),
    closeModal1Btn: document.querySelector('[data-modal1-close]'),
    modal1: document.querySelector('[data-modal1]'),
  };

  refs.openModal1Btn.addEventListener('click', toggleModal1);
  refs.closeModal1Btn.addEventListener('click', toggleModal1);

  function toggleModal1() {
    document.body.classList.toggle('modal-open');
    refs.modal1.classList.toggle('is-hidden');
  }
})();
