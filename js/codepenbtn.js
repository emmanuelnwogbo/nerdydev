const codePenBtns = document.getElementsByClassName('codepen-btn');

Array.from(codePenBtns, btn => {
  btn.addEventListener('click', function () {
    window.open('https://codepen.io/nerdyemmanuel/')
  });
})