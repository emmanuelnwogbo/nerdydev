const sideNavIcon = document.getElementById('sidenav--icon');
const sideNavCheckBox = document.getElementById('sidenav--checkbox');
const sideNavOverLay = document.getElementById('sidenav--overlay');

sideNavIcon.addEventListener('click', () => {
  if (!sideNavCheckBox.checked) {
    sideNavCheckBox.checked = true;
  }
});

sideNavOverLay.addEventListener('click', () => {
  if (sideNavCheckBox.checked) {
    sideNavCheckBox.checked = false;
  }
});