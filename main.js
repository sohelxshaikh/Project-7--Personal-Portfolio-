gsap.registerPlugin(ScrollTrigger);

function mouse() {
  // let cursor = document.querySelector(".cursor");
  // let body = document.querySelector("body");
  // body.addEventListener("mousemove", (e) => {
  //   gsap.to(cursor, {
  //     x: e.x + "px",
  //     y: e.y + "px",
  //   });
  // });
  Shery.mouseFollower();

}
Shery.makeMagnet(".magnet");

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
    xPercent: -100 * (sections.length -1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1.5,
      // snap: 1 / (sections.length ),
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


function workPage(){
  var work = document.querySelector('.work')
  work.addEventListener("mouseenter",() => {
    gsap.to(".cursor",{
      backgroundColor:"#000"
    })
  })
  work.addEventListener("mouseleave",() => {
    gsap.to(".cursor",{
      backgroundColor:"#fff"
    })
  })

}
workPage();

function eduCation(){
  var study = document.querySelector(".study");
  study.addEventListener("mouseenter",() => {
    gsap.to('.cursor',{
      backgroundColor:"#000"
    })
  })
  study.addEventListener("mouseleave",() => {
    gsap.to('.cursor',{
      backgroundColor:"#fff"
    })
  })

}
eduCation();



gsap.registerPlugin(Draggable, InertiaPlugin);

gsap.to(".tools .tools-icon svg", {
  y: 20, // Adjust the vertical distance of the floating effect
  duration: 1, // Duration of the animation
  ease: "power1.inOut", // Easing function for a smooth effect
  yoyo: true, // Allows the animation to reverse, creating a floating effect
  repeat: -1, // Repeat indefinitely
});

Draggable.create(".tools .tools-icon svg", {
  bounds: ".tools",
  inertia: true,
  
  
  
  
  cursor: "grab",
  onDragEnd: function () {
    gsap.to(".tools .tools-icon svg", {
     
      duration: 1,
      ease: "power1.inOut",
    });
  },
  onRelease: function () {
    // Animate the element back to its original position
    gsap.to(".tools .tools-icon svg", {
      x: 0, // Change this to the original x-coordinate
      y: 0, // Change this to the original y-coordinate
      duration: 2, // Adjust the duration as needed
      ease: "power2.inOut", // Easing function for a smooth effect
    });
  },
  
  
});

function hamBurger(){
  var menu = document.querySelector(".menu-container")
  var btn = document.getElementById("btn")
  var flag = 1;
  btn.addEventListener('click',function(){
    if(flag){
      gsap.to(menu,{
        y:"100%",
        duration:1,
      }),
      flag=0
    }else{
      gsap.to(menu,{
        y:"-100%",
        duration:1,
      }),
      flag=1
    }
    
 
});
}

hamBurger();


