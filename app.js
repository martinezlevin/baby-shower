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
