window.SITE = {
  name: "The Link-up Hub",
  tagline: "Scenery photo and video collections",
  email: "d.linkuphub@gmail.com",
  whatsapp: "256792713519"
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
      '<header class="topbar" id="topbar"><div class="wrap">' +
      '<a class="logo" href="index.html">' + site.name + '</a>' +
      '<nav class="nav" id="nav-menu"><a href="index.html#collections">Collections</a><a href="contact.html">Contact</a></nav>' +
      '<button class="menu-toggle" id="menu-toggle" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
      '</div></header>';

    var topbar = document.getElementById("topbar");
    var navMenu = document.getElementById("nav-menu");
    var toggle = document.getElementById("menu-toggle");

    toggle.addEventListener("click", function () {
      var isOpen = navMenu.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    window.addEventListener("scroll", function () {
      topbar.classList.toggle("scrolled", window.scrollY > 8);
    }, { passive: true });
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

  var whatsappLink = document.getElementById("whatsapp-link");
  if (whatsappLink && site.whatsapp) {
    whatsappLink.href = "https://wa.me/" + site.whatsapp;
    whatsappLink.hidden = false;
  }

  // Scroll-reveal: anything with class "reveal" fades up into view once,
  // as the visitor scrolls to it. window.observeReveal lets pages register
  // elements added later by their own scripts (like fetched cards), not
  // just ones present when the page first loads.
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    window.observeReveal = function (el) { observer.observe(el); };

    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll(".reveal").forEach(function (el) { observer.observe(el); });
    });
  } else {
    // No IntersectionObserver support: just show everything immediately.
    window.observeReveal = function (el) { el.classList.add("in-view"); };
  }
})();