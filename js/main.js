const filterButtons = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('.work-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    workItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.classList.remove('hide');
      } else {
        item.classList.add('hide');
      }
    });
  });
});
const bookingForm = document.querySelector('.booking-form');

bookingForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! Your appointment request has been received.');
  bookingForm.reset();
});
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});
