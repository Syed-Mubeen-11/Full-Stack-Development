// Burger Menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});

// Typing animation
const words = ["Web Developer", "Frontend Enthusiast", "Problem Solver"];
let i = 0, j = 0, currentWord = '', isDeleting = false;
const typedText = document.querySelector('.typed-text');
function type() {
  if(i >= words.length) i = 0;
  currentWord = words[i];
  if(!isDeleting) {
    typedText.textContent = currentWord.substring(0, j+1);
    j++;
    if(j === currentWord.length){ isDeleting = true; setTimeout(type, 1000); return; }
  } else {
    typedText.textContent = currentWord.substring(0, j-1);
    j--;
    if(j===0){ isDeleting = false; i++; }
  }
  setTimeout(type, 150);
}
type();

// Contact Form
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  form.reset();
});

// Project Modals
function openModal(id){ document.getElementById(id).style.display='flex'; }
function closeModal(id){ document.getElementById(id).style.display='none'; }
window.addEventListener('click', e => {
  if(e.target.classList.contains('modal')) e.target.style.display='none';
});