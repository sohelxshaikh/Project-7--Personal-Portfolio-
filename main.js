gsap.registerPlugin(ScrollTrigger);

function mouse() {
  let cursor = document.querySelector(".cursor");
  let body = document.querySelector("body");
  body.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.x + "px",
      y: e.y + "px",
    });
  });
}

mouse();

function loader() {
  var load = document.querySelector("#loader");
  setTimeout(function () {
    load.style.top = "-100%";
  }, 3700);
}

loader();

function horizontalScroll() {
  let sections = gsap.utils.toArray(".panel");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1,
      // snap: 1 / (sections.length - 1),
      end: () => "+=" + document.querySelector(".container").offsetWidth,
    },
  });
}
horizontalScroll();

var cursor = document.querySelector(".cursor");
var project = document.querySelector(".project");

function projectAnime() {
  project.addEventListener("mouseenter", () => {
    gsap.to(cursor, { backgroundColor: "#000", duration: 0.3 });
  });
  project.addEventListener("mouseleave", () => {
    gsap.to(cursor, { backgroundColor: "#fff", duration: 0.3 });
  });
}
projectAnime();

function pageTl() {
  // Create a GSAP Timeline
  const timeline = gsap.timeline();
  timeline.from(".main-home .top", { y: -300, duration: 1, delay: 3.5 });
  timeline.from("#pp", {
    opacity: 0,
    y: 200,
    duration: 1,
  });
  timeline.from(".home-footer", { y: 100, duration: 0.5 });
}
pageTl();
