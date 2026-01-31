const formData = {
  email: '',
  message: '',
};
const inpEl = document.querySelector('input');
const textAreaEl = document.querySelector('textarea');
const formEl = document.querySelector('form.feedback-form');
if (localStorage.getItem('feedback-form-state')) {
  const tmp = JSON.parse(localStorage.getItem('feedback-form-state'));
  formData.email = tmp.email;
  formData.message = tmp.message;
  inpEl.value = formData.email;
  textAreaEl.value = formData.message;
}
formEl.addEventListener('input', e => {
  e.target.nodeName === 'INPUT'
    ? (formData.email = e.target.value)
    : (formData.message = e.target.value);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

formEl.addEventListener('submit', e => {
  e.preventDefault();
  (isNull(inpEl) || isNull(textAreaEl)
    ? alert('Fill please all fields')
    : console.log(formData),
    toCleanValueEl(inpEl, textAreaEl),
    localStorage.removeItem('feedback-form-state'));
});

function isNull(el) {
  return el.value.trim() === '';
}

function toCleanValueEl() {
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].value = '';
  }
}
