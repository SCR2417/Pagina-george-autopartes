document.addEventListener('DOMContentLoaded', function() {
    const carouselWrapper = document.querySelector('.product-carousel-wrapper');
    const carouselInner = document.querySelector('.product-carousel-inner');
    const prevBtn = document.querySelector('.product-carousel-control.prev');
    const nextBtn = document.querySelector('.product-carousel-control.next');

    // Función para actualizar la visibilidad de las flechas
    function updateArrowVisibility() {
        // La posición de scroll actual del carrusel interno
        const scrollLeft = carouselInner.scrollLeft;
        // El ancho visible del carrusel interno
        const clientWidth = carouselInner.clientWidth;
        // El ancho total de contenido desplazable (incluyendo lo que está fuera de vista)
        const scrollWidth = carouselInner.scrollWidth;

        // Ocultar/mostrar flecha "anterior"
        if (scrollLeft <= 0) {
            prevBtn.classList.add('hidden');
        } else {
            prevBtn.classList.remove('hidden');
        }

        // Ocultar/mostrar flecha "siguiente"
        // Se considera un pequeño margen de error para flotantes
        if (scrollLeft + clientWidth >= scrollWidth - 5) { // -5 para tolerancia
            nextBtn.classList.add('hidden');
        } else {
            nextBtn.classList.remove('hidden');
        }
    }

    // Desplazar a la izquierda
    prevBtn.addEventListener('click', () => {
        // Desplaza el 80% del ancho visible del carrusel
        carouselInner.scrollBy({
            left: -carouselInner.clientWidth * 0.8,
            behavior: 'smooth'
        });
        // Una vez que el desplazamiento termina, se actualiza la visibilidad
        // Usar un pequeño timeout para que la animación termine antes de ocultar/mostrar
        setTimeout(updateArrowVisibility, 600);
    });

    // Desplazar a la derecha
    nextBtn.addEventListener('click', () => {
        // Desplaza el 80% del ancho visible del carrusel
        carouselInner.scrollBy({
            left: carouselInner.clientWidth * 0.8,
            behavior: 'smooth'
        });
        // Una vez que el desplazamiento termina, se actualiza la visibilidad
        setTimeout(updateArrowVisibility, 600);
    });

    // Actualizar la visibilidad de las flechas al iniciar y al hacer scroll manual
    carouselInner.addEventListener('scroll', updateArrowVisibility);

    // Inicializar la visibilidad de las flechas al cargar la página
    updateArrowVisibility();
});