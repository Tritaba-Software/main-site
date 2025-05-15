let stringarr = [
  "Website Management",
  "Consulting",
  "Search Engine Optimization",
  "E-Commerce (including Shopify and Wix)",
  "Website Design",
  "your next project?",
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
