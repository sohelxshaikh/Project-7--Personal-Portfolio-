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
      snap: 1 / (sections.length - 1),
      end: () => "+=" + document.querySelector(".container").offsetWidth,
    },
  });
}
horizontalScroll();
