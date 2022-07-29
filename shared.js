'use strict';

const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

const choosePlanBtns = document.querySelectorAll('.choose-plan-button');
const modalNoBtn = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

const openItem = (item) => {
  item.classList.add('open');
  backdrop.classList.add('open');
};

const closeItem = (item) => {
  item.classList.remove('open');
  backdrop.classList.remove('open');
};

backdrop.addEventListener('click', () => {
  closeItem(mobileNav);
  closeItem(modal);
});

if (choosePlanBtns) {
  choosePlanBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      openItem(modal);
    });
  });
}

if (modalNoBtn) {
  modalNoBtn.addEventListener('click', () => closeItem(modal));
}

toggleButton.addEventListener('click', () => {
  openItem(mobileNav);
});
