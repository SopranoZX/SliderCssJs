const slides = document.querySelectorAll('.slide')
const titleButton = document.querySelectorAll('.headerButton')

// check clicked slide 
for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses();

    slide.classList.add('active')
  });
};

// function for open slide
function clearActiveClasses(){
  slides.forEach((slide) => {
    slide.classList.remove('active')
  });
};

// for close all
for (const headerButton of titleButton) {
  headerButton.addEventListener('click', () => {
    clearActiveClasses();

  });
};
// Create mechanic for slider