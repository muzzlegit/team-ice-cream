(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtnSec: document.querySelector('[data-modal-menu-open]'),    
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    open: document.querySelector('[data-open]')
  };
 refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnSec.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() { 
    refs.modal.classList.toggle('is-hidden');
    refs.open.classList.toggle('is-open');
  }
})();