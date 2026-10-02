window.SITE = {
  name: "The Link-up Hub",
  tagline: "Scenery photo and video collections",
  email: "hello@example.com"
};

(function () {
  var site = window.SITE;

  var iconLink = document.createElement("link");
  iconLink.rel = "icon";
  iconLink.type = "image/svg+xml";
  iconLink.href = "favicon.svg";
  document.head.appendChild(iconLink);

  var pageTitle = document.body.getAttribute("data-title");
  document.title = pageTitle ? pageTitle + " | " + site.name : site.name + " | " + site.tagline;

  var header = document.getElementById("site-header");
  if (header) {
    header.innerHTML =
      '<header class="topbar"><div class="wrap">' +
      '<a class="logo" href="index.html">' + site.name + '</a>' +
      '<nav class="nav"><a href="index.html#collections">Collections</a><a href="contact.html">Contact</a></nav>' +
      '</div></header>';
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML =
      '<footer><div class="wrap">' +
      '<span>&copy; ' + new Date().getFullYear() + ' ' + site.name + '</span>' +
      '<div class="links"><a href="terms.html">Terms</a><a href="privacy.html">Privacy</a><a href="contact.html">Contact</a></div>' +
      '</div></footer>';
  }

  document.querySelectorAll("[data-mailto]").forEach(function (el) {
    el.href = "mailto:" + site.email;
    el.textContent = site.email;
  });
})();