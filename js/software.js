let stringarr = [
  "Custom Websites",
  "Software Consultation",
  "Bots and APIs",
  "Website Redesigns",
  "DNS/SSL Setup",
  "Website Repair",
  "Artificial Intelligence",
  "Software Experiments",
  "Games",
];

// Randomize the array
let randomarr = stringarr.sort(() => 0.5 - Math.random());

var typed3 = new Typed(".typed-text", {
  strings: randomarr,
  typeSpeed: 50,
  backSpeed: 0,
  smartBackspace: true, // this is a default
  loop: true,
});
AOS.init();
