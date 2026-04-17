const buttons = document.querySelectorAll('.lang-btn');

function setLanguage(lang) {
  document.body.setAttribute('data-current-lang', lang);
  buttons.forEach((button) => {
    button.classList.toggle('active', button.dataset.targetLang === lang);
  });
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.targetLang);
  });
});

setLanguage('en');
