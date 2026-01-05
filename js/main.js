document.addEventListener('DOMContentLoaded', () => {

  flatpickr.localize({
    weekdays: {
      shorthand: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      longhand: [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ]
    },
    months: {
      shorthand: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ],
      longhand: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ]
    }
  });


  // инициализация и тип вывода

  const fromInput = document.querySelector('.filters__input--from');
  const toInput = document.querySelector('.filters__input--to');

  const fromPicker = flatpickr(fromInput, {
    dateFormat: 'd_m_Y',
    monthSelectorType: 'static', 
    onChange: function (selectedDates) {
      toPicker.set('minDate', selectedDates[0]);
    }
  });

  const toPicker = flatpickr(toInput, {
    dateFormat: 'd_m_Y',
    monthSelectorType: 'static', 
    defaultDate: new Date(),
    onChange: function (selectedDates) {
      fromPicker.set('maxDate', selectedDates[0]);
    }
  });

  // обработка кнопок

  document.querySelectorAll('.filters__icon--calendar').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.parentElement.querySelector('.filters__input');
      input._flatpickr.open();
    });
  });


  document.querySelectorAll('.filters__icon--clear').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.parentElement.querySelector('.filters__input');
      input._flatpickr.clear();
    });
  });



  const wrapper = document.querySelector('.post__wrapper');
  const filterGrid = document.querySelector('.types__view-btn--tiles');
  const filterRow = document.querySelector('.types__view-btn--rows');
  const posts = document.querySelectorAll('.post');
  const btnRow = document.querySelector('.types__view-btn--rows');
  const btnGrid = document.querySelector('.types__view-btn--tiles');

  // сетка
  filterGrid.addEventListener('click', () => {
    wrapper.classList.remove('post__wrapper--row');
    wrapper.classList.add('post__wrapper--grid');
    btnRow.classList.remove('types__view-btn--active');
    btnGrid.classList.add('types__view-btn--active');
    posts.forEach(post => {
      post.classList.remove('post--row');
      const img = post.querySelector('.post__image');
      img.src = img.dataset.grid; 
    });
  });

  // строки
  filterRow.addEventListener('click', () => {
    wrapper.classList.remove('post__wrapper--grid');
    wrapper.classList.add('post__wrapper--row');
    btnGrid.classList.remove('types__view-btn--active');
    btnRow.classList.add('types__view-btn--active');
    posts.forEach(post => {
      post.classList.add('post--row');
      const img = post.querySelector('.post__image');
      img.src = img.dataset.row; 
    });
  });


});