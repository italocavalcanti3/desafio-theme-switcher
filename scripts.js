const slider = document.querySelector('input[type=checkbox]')

const colors = {
  dark: '#292C35',
	light: '#F1F1F1'
};

slider.addEventListener('change', (event) => {
  if (event.target.checked) {
    document.body.style.background = colors.dark;
  } else {
    document.body.style.background = colors.light;
  }
})