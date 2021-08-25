// hero
var tl = gsap.timeline({ repeat: 0 });
// logo and text come down from top
tl.from(".logoContainer, .bigText", {
  y: -500,
  duration: 2.5,
  ease: "bounce"
});
// button to aqua
tl.to(".cta", {
  y: 100,
  background: 'aqua',
  filter: 'drop-shadow(0px 0px 4px aqua)',
  duration: .5,
  delay: -1.6,
  ease: "power4"
});
// button to black
tl.to(".cta", {
  y: 0,
  background: 'black',
  border: '2px solid aqua',
  duration: 1.25,
  ease: "bounce.out",
  delay: -1.15
});

// current year for footer
let currentYear = new Date().getFullYear()
document.getElementById('year').innerHTML = currentYear;