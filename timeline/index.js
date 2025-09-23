// gsap.to(".box1", {
//     x: 500,
//     duration: 1,
//     delay:1,
//     rotate:360,
//     backgroundColor: "#f1c500ff",
//     borderRadius: 50,

// })
// gsap.to(".box2", {
//   x: 500,
//   duration: 1,
//   delay: 2,
//   rotate: 360,
//   backgroundColor: "#f10000ff",
//   borderRadius: 50,
// });
// gsap.to(".box3", {
//   x: 500,
//   duration: 1,
//   delay: 3,
//   rotate: 360,
//   backgroundColor: "#0085f1ff",
//   borderRadius: 50,
// });

var tl = gsap.timeline();

tl.to(".box1", {
  x: 500,
  duration: 1,

  rotate: 360,
  backgroundColor: "#f1c500ff",
  borderRadius: 50,
});
tl.to(".box2", {
  x: 500,
  duration: 1,

  rotate: 360,
  backgroundColor: "#f10000ff",
  borderRadius: 50,
});
tl.to(".box3", {
  x: 500,
  duration: 1,

  rotate: 360,
  backgroundColor: "#0085f1ff",
  borderRadius: 50,
});


var tl2 = gsap.timeline();
tl2.from("h1",{
    y:-30,
    duration: 1,
    opacity: 0,
    delay: 0.5,
})
tl2.from("p",{
    y:-30,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
})
