function toggleContent(event) {

  if (event.target && event.target.className == 'slider-link') {

    var next = event.target.previousElementSibling;

    if (next.style.display == 'none') {
      event.target.innerHTML = 'show less';
      next.style.display = 'block';
    } else {
      next.style.display = 'none';
      event.target.innerHTML = 'show more';
    }
  }
}

document.addEventListener('click', toggleContent, true);
