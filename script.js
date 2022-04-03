const modal = document.querySelector('.modal'),
  btn = document.querySelector('.btn'),
  close = document.querySelector('.close');

btn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);

// open Modal
function openModal(e) {
  e.preventDefault();
  modal.style.display = 'block';
}
// close Modal
function closeModal(e) {
  modal.style.display = 'none';
}
