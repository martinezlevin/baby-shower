// Obtener todos los elementos de la foto y el modal
const photos = document.querySelectorAll('.photo-img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const caption = document.querySelector('.modal-caption');
const closeBtn = document.querySelector('.close-btn');

// Evento para abrir el modal al hacer clic en la foto
photos.forEach(photo => {
  photo.addEventListener('click', (e) => {
    modal.style.display = 'flex'; // Mostrar el modal
    modalImg.src = e.target.src; // Cambiar la imagen en el modal
    caption.innerHTML = e.target.nextElementSibling.innerHTML; // Copiar la leyenda
  });
});

// Evento para cerrar el modal al hacer clic en la X
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'; // Ocultar el modal
});

// Evento para cerrar el modal si se hace clic fuera del contenido del modal
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none'; // Ocultar el modal
  }
});

// AUDIO

const audio = document.getElementById('audio');
const toggleBtn = document.getElementById('toggle-btn');

const playIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
</svg>`;

const pauseIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pause-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>
</svg>`;

// Cambia el ícono dependiendo del estado del audio
function updateIcon() {
  toggleBtn.innerHTML = audio.paused ? pauseIcon : playIcon;
}

// Click del botón: alternar play/pause
toggleBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  updateIcon();
});

// Al cargar la página, establecer el ícono correcto
window.addEventListener('DOMContentLoaded', () => {
  updateIcon();
});

// Cuando termina el audio, cambiar ícono también
audio.addEventListener('ended', () => {
  updateIcon();
});