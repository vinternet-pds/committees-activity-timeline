function toggleDocs(event) {

  if (event.target && event.target.className == 'slider-link') {

    var next = event.target.previousElementSibling;

    if (next.style.display == 'none') {
      next.style.display = 'block';
    } else {
      next.style.display = 'none';
    }
  }
}

document.addEventListener('click', toggleDocs, true);
