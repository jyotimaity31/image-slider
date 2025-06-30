const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0;
let slideInterval;

// Create navigation dots
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => {
    currentIndex = i;
    showSlide(currentIndex);
    resetInterval();
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dots span');

function showSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  resetInterval();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
  resetInterval();
});

function autoSlide() {
  slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 3000); // Change every 3 seconds
}

function resetInterval() {
  clearInterval(slideInterval);
  autoSlide();
}

// Pause on hover
document.querySelector('.slider').addEventListener('mouseover', () => clearInterval(slideInterval));
document.querySelector('.slider').addEventListener('mouseout', () => autoSlide());

// Initialize
showSlide(currentIndex);
autoSlide();
