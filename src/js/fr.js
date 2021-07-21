 (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-fr-open]'),
      closeModalBtn: document.querySelector('[data-fr-close]'),
      modal: document.querySelector('[data-fr]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      document.body.classList.toggle('fr-open');
      refs.modal.classList.toggle('is-hidden');
    }
  })();