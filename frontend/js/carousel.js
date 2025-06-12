document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('#heroCarousel .carousel-inner');
    const carouselItems = document.querySelectorAll('#heroCarousel .carousel-item');
    const prevBtn = document.querySelector('#heroCarousel .carousel-control.prev');
    const nextBtn = document.querySelector('#heroCarousel .carousel-control.next');
    const indicatorsContainer = document.querySelector('#heroCarousel .carousel-indicators');
    const dots = document.querySelectorAll('#heroCarousel .dot');

    let currentIndex = 0;
    const totalItems = carouselItems.length;

    // Función para mostrar la diapositiva actual
    function showSlide(index) {
        // Asegurarse de que el índice esté dentro de los límites
        if (index >= totalItems) {
            currentIndex = 0; // Vuelve al principio
        } else if (index < 0) {
            currentIndex = totalItems - 1; // Va al final
        } else {
            currentIndex = index;
        }

        // Mueve el carousel-inner para mostrar la diapositiva correcta
        const offset = -currentIndex * 100; // Calcula el desplazamiento en porcentaje
        carouselInner.style.transform = `translateX(${offset}%)`;

        // Actualiza los indicadores (puntos)
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === currentIndex) {
                dot.classList.add('active');
            }
        });
    }

    // Navegación con flechas
    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Navegación con indicadores (puntos)
    dots.forEach(dot => {
        dot.addEventListener('click', (event) => {
            const slideIndex = parseInt(event.target.dataset.slideTo);
            showSlide(slideIndex);
        });
    });

    // Carrusel automático (opcional)
    let autoSlideInterval;
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 5000); // Cambia cada 5 segundos
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Iniciar el carrusel automático al cargar la página
    startAutoSlide();

    // Detener/Reiniciar el carrusel al pasar el mouse sobre él
    document.querySelector('#heroCarousel').addEventListener('mouseenter', stopAutoSlide);
    document.querySelector('#heroCarousel').addEventListener('mouseleave', startAutoSlide);

    // Muestra la primera diapositiva al cargar la página
    showSlide(currentIndex);
});