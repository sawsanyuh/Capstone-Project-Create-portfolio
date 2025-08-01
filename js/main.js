

/* to change the menu icon for small devices */
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
};
/*Note , i watched tutorials to figure out how to make 
img slider i will mention acknowledgement in ReadMe file */
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".nav.prev");
  const next = document.querySelector(".nav.next");

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  prev.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  next.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
window.onscroll = ()=>{
   menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
}
/*scroll effect note:i got the effect from a website called scroll reveal*/ 
ScrollReveal({
  reset:true,
  distance:'80px',
  duration:2000,
  delay:40
});
ScrollReveal().reveal('.home-content, .heading',{origin:'top'});

