// Отримуємо необхідні елементи DOM
const feedbackLink = document.querySelector('.feedback a');
const feedbackPopup = document.querySelector('.popup');
const feedbackClose = document.querySelector('.popup .close');

// Функція, яка відкриває вікно з формою
function openFeedbackPopup() {
  feedbackPopup.style.display = 'block';
}

// Функція, яка закриває вікно з формою
function closeFeedbackPopup() {
  feedbackPopup.style.display = 'none';
}

// Додаємо обробник події для кліку на посилання "Feedback"
feedbackLink.addEventListener('click', openFeedbackPopup);

// Додаємо обробник події для кліку на кнопку закриття вікна
feedbackClose.addEventListener('click', closeFeedbackPopup);