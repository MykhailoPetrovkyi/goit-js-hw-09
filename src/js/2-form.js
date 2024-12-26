const form = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

const fillFormData = () => {
  try {
    if (localStorage.length === 0) {
      return;
    }

    const dataLocale = JSON.parse(localStorage.getItem('feedback-form-state'));

    formData = dataLocale;

    for (const key in dataLocale) {
      form.elements[key].value = dataLocale[key];
    }
  } catch (error) {
    console.log(error);
  }
};

fillFormData();

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email !== '' && formData.message !== '') {
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  } else {
    alert('Fill please all fields');
  }
  formData = { email: '', message: '' };
});
