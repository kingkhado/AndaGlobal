/* ANDA GLOBAL — shared interactions */
(function () {
  "use strict";

  /* Sticky header state */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 30);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") nav.classList.remove("open");
    });
  }

  /* Scroll reveal */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* Animated counters */
  function animate(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var dec = (el.getAttribute("data-dec") || "0") | 0;
    var dur = 1600, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(dec);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toFixed(dec);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animate(en.target); cio.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* Progress bars */
  var bars = document.querySelectorAll(".progress .fill");
  if ("IntersectionObserver" in window && bars.length) {
    var bio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.style.width = en.target.getAttribute("data-w") + "%";
          bio.unobserve(en.target);
        }
      });
    }, { threshold: 0.5 });
    bars.forEach(function (el) { bio.observe(el); });
  }

  /* Featured-project image rotator */
  var gal = document.querySelector(".fp-gallery");
  if (gal) {
    var imgs = gal.querySelectorAll("img");
    var i = 0;
    if (imgs.length > 1) {
      setInterval(function () {
        imgs[i].classList.remove("show");
        i = (i + 1) % imgs.length;
        imgs[i].classList.add("show");
      }, 3500);
    }
  }

  /* Projects filter */
  var filterBtns = document.querySelectorAll(".filters button");
  var pcards = document.querySelectorAll(".portfolio .pcard");
  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var f = btn.getAttribute("data-filter");
        pcards.forEach(function (c) {
          var show = f === "all" || c.getAttribute("data-cat") === f;
          c.style.display = show ? "flex" : "none";
        });
      });
    });
  }

  /* Contact form (front-end only demo) */
  var form = document.querySelector("form[data-demo]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button[type=submit]");
      var old = btn.textContent;
      btn.textContent = "Sending…";
      btn.disabled = true;
      setTimeout(function () {
        form.reset();
        btn.textContent = "Message sent ✓";
        setTimeout(function () { btn.textContent = old; btn.disabled = false; }, 2600);
      }, 900);
    });
  }

  /* Footer year */
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();
})();
