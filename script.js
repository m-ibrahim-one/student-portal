// Student Portal — script.js

// Toggle the notice box when the button is clicked
function showNotice() {
  const noticeBox = document.getElementById('noticeBox');
  const btn = document.getElementById('noticeBtn');

  if (noticeBox.classList.contains('hidden')) {
    noticeBox.classList.remove('hidden');
    btn.textContent = 'Hide Notice';
  } else {
    noticeBox.classList.add('hidden');
    btn.textContent = 'View Latest Notice';
  }
}
