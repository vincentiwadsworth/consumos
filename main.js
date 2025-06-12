document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.category-btn');
    const sections = document.querySelectorAll('.content-section');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Actualiza botones activos
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.dataset.category;
            
            // Muestra/oculta secciones
            sections.forEach(section => {
                if (category === 'all' || section.id === category) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
            
            // Scroll suave al inicio
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
});