const contactBtns = document.getElementsByClassName('contact-btn');
const contactCheckbox = document.getElementById('contactform--checkbox');
const sideNavOverLay = document.getElementById('sidenav--overlay');

Array.from(contactBtns, btn => {
  btn.addEventListener('click', () => {
    if (!contactCheckbox.checked) {
      contactCheckbox.checked = true;
    }
  })
});

sideNavOverLay.addEventListener('click', () => {
  if (contactCheckbox.checked) {
    contactCheckbox.checked = false;
  }
});