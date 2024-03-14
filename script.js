
const usernameInput = document.getElementById('username');
const selectRating = document.getElementById('select-rating');
const submitButton = document.querySelector('.form button');
const feedbackList = document.querySelector('.feedback-list ul');

submitButton.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  const rating = selectRating.value;

  if (username && rating) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${username}</span> rated <strong>${rating}</strong> 
      <button class="edit-btn">Edit</button> 
      <button class="delete-btn">Delete</button>`;
    feedbackList.appendChild(li);

    const span = document.querySelectorAll('.header span')[rating - 1];
    span.textContent = parseInt(span.textContent) + 1;

    usernameInput.value = '';
    selectRating.value = '1';
  }
});

feedbackList.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('edit-btn')) {
    const li = target.parentElement;
    const [span, strong] = li.children;
    usernameInput.value = span.textContent;
    selectRating.value = strong.textContent;
    submitButton.textContent = 'Edit Rating';
    feedbackList.removeChild(li);

    submitButton.onclick = () => {
      const username = usernameInput.value.trim();
      const rating = selectRating.value;
      if (username && rating) {
        const editedLi = document.createElement('li');
        editedLi.innerHTML = `<span>${username}</span> rated <strong>${rating}</strong> 
          <button class="edit-btn">Edit</button> 
          <button class="delete-btn">Delete</button>`;
        feedbackList.appendChild(editedLi);

        const span = document.querySelectorAll('.header span')[rating - 1];
        const originalSpan = li.children[1];
        originalSpan.textContent = parseInt(originalSpan.textContent) - 1;
        span.textContent = parseInt(span.textContent) + 1;

        usernameInput.value = '';
        selectRating.value = '1';
        submitButton.textContent = 'Submit';
        submitButton.onclick = null;
      }
    };
  } else if (target.classList.contains('delete-btn')) {
    const li = target.parentElement;
    const strong = li.querySelector('strong');
    const span = document.querySelectorAll('.header span')[strong.textContent - 1];
    span.textContent = parseInt(span.textContent) - 1;
    li.remove();
  }
});



























































  













