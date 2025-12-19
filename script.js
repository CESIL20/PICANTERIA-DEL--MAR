document.addEventListener('DOMContentLoaded', function () {

    // --- 1. EFECTO FADE-IN AL HACER SCROLL ---
    const sections = document.querySelectorAll('.fade-in-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });


    // --- 2. MENÚ HAMBURGUESA ---
    const toggle = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }


    // --- 3. FORMULARIO DE RESERVAS (opcional, solo si existe) ---
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = document.getElementById('name')?.value || 'cliente';
            alert(`¡Gracias, ${name}! Tu solicitud de reserva ha sido recibida. Nos pondremos en contacto contigo pronto para confirmar.`);
            reservationForm.reset();
        });
    }

});