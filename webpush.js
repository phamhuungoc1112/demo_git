var container = document.getElementById('webpush') || document.getElementById('webpush-image');
var closeButton = document.getElementById('webpush-close') || document.getElementById('webpush-image-close');
let closed = false;
var target = document.getElementById('i-2') || document.getElementById('i-1') || document.getElementById('i-0');
if (container) {
  if (target) {
    window.addEventListener('scroll', () => pushAd(), false);
  } else {
    showContainer();
  }
  enableCloseButton();
}
function close() {
  if (this.container) {
    this.container.classList.add('fadeout');
  }
  setTimeout(() => {
    if (this.container) {
      this.container.remove();
    }
  }, 500);
  this.closed = true;
}
function pushAd() {
  if (this.closed) {
    return;
  }
  if (this.target && this.target.getBoundingClientRect().top <= 0) {
    showContainer();
  }
}
function enableCloseButton() {
  if (this.closeButton) {
    this.closeButton.addEventListener('click', () => close(), false);
  }
}
function showContainer() {
  if (this.container && this.container.style.display !== 'block') {
    this.container.style.display = 'block';
  }
}
