let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

// timeline.fromTo(".text", 5, { opacity: 0 }, { opacity: 1 });

timeline
  .to(".rock", 5, { y: -300 })
  .to(".girl", 5, { y: -200 }, "-=5")
  .fromTo(".bg1", 5, { y: -50 }, { y: 0 }, "-=5")
  .to(".content", 5, { top: "0%" }, "-=5")
  .fromTo(".content-images", 5, { opacity: 0 }, { opacity: 1 }, "-=5")
  .fromTo(".text", 5, { opacity: 0 }, { opacity: 1 }, "-=5");

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(timeline)
  .addTo(controller);
