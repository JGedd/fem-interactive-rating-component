const ratingBtns = document.querySelectorAll('.rating__btn');
const submitBtn = document.querySelector('.submit__btn');
const modal = document.querySelector('.modal');
const submittedRating = document.querySelector('.submitted__rating');

let selectedRating = 0;

ratingBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    ratingBtns.forEach((btn) => btn.classList.remove('selected'));

    btn.classList.add('selected');

    selectedRating = btn.value;

    submitBtn.disabled = false;
  });
});

submitBtn.addEventListener('click', () => {
  if (selectedRating) {
    submittedRating.textContent = `You selected ${selectedRating} out of 5`;
    modal.classList.add('show');
  }
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});
