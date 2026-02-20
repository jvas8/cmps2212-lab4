// exercise3.js

const filterBar = document.querySelector('#filter-bar');
const cards = document.querySelectorAll('.card');
const filterBtns = document.querySelectorAll('.filter-btn');

filterBar.addEventListener('click', function (event) {

  if (!event.target.matches('.filter-btn')) return;

  filterBtns.forEach(function (btn) {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');

  const filter = event.target.dataset.filter;

  cards.forEach(function (card) {

    if (filter === 'all') {
      card.classList.remove('hidden');
    } else {
      const category = card.dataset.category;

      const shouldHide = category !== filter;
      card.classList.toggle('hidden', shouldHide);
    }

  });

});