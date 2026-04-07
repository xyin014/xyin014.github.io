document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.nav-hamburger');
  var menu = document.querySelector('.nav-mobile');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
  }

  // Assemble email at runtime — not in source HTML, not copiable
  var el = document.querySelector('.email-protected');
  if (el) {
    var u = el.getAttribute('data-u');
    var d = el.getAttribute('data-d');
    el.textContent = u + '@' + d;
    el.removeAttribute('data-u');
    el.removeAttribute('data-d');
  }

  // Inject shared footer — single source of truth for all links
  var footer = document.querySelector('footer.footer');
  if (footer) {
    footer.innerHTML = '<div class="footer-inner">'
      + '<p class="footer-quote">\u201cTo see things as they really are\u201d</p>'
      + '<ul class="footer-links">'
      + '<li><a href="https://scholar.google.com/citations?user=jaRxg3EAAAAJ&hl=en">Scholar</a></li>'
      + '<li><a href="https://www.linkedin.com/in/xizhe-yin/">LinkedIn</a></li>'
      + '<li><a href="https://github.com/xyin014">GitHub</a></li>'
      + '</ul>'
      + '</div>';
  }
});
