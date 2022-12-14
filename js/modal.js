(() => {
    const refs = {
      openModalBtn: document.querySelectorAll("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      backdrop: document.querySelector("[data-backdrop]"),
      modal: document.querySelector("[data-modal]"),
    };
  

  refs["openModalBtn"][0].addEventListener("click", toggleModal);
  refs["openModalBtn"][1].addEventListener("click", toggleModal);
  refs["openModalBtn"][2].addEventListener("click", toggleModal);

    //refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.backdrop.classList.toggle("backdrop--hidden");
      refs.modal.classList.toggle("modal--hidden");
      document.body.classList.toggle("modal-open")
    }
  })();