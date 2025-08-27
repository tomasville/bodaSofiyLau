// script.js
// Muestra un modal con la información del regalo seleccionado

document.addEventListener('DOMContentLoaded', function () {
    // Datos de los regalos
    const gifts = [
        {
            name: 'Tomar un café con croissants debajo la Torre Eiffel, Paris, Francia',
            price: '$40.000'
        },
        {
            name: 'Practicar buceo o snorkel en las playas de Honolulu, Hawaii',
            price: '$60.000'
        },
        {
            name: 'Observar perezosos en su hábitat natural, en el Territorio de Perezosos, La Fortuna, Costa Rica',
            price: '$80.000'
        },
        {
            name: 'Caminar por Central Park y recorrer Times Square en Nueva York, Estados Unidos',
            price: '$100.000'
        },
        {
            name: 'Explorar las pirámides por dentro y disfrutar de paseos en camello en Guiza, Egipto',
            price: '$150.000'
        }
    ];

    // Selecciona todos los botones "Regalar"
    const buttons = document.querySelectorAll('.btn-gift');
    buttons.forEach((btn, idx) => {
        btn.addEventListener('click', function () {
            // Rellena el modal con la info del regalo
            document.getElementById('modalGiftName').textContent = gifts[idx].name;
            document.getElementById('modalGiftPrice').textContent = 'Precio: ' + gifts[idx].price;
            // Muestra el modal usando Bootstrap 5
            const modal = new bootstrap.Modal(document.getElementById('giftModal'));
            modal.show();
        });
    });
    // Funcionalidad para copiar el CVU al portapapeles
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('copy-cvu')) {
            const cvu = '0000003100098515211336';
            navigator.clipboard.writeText(cvu).then(function() {
                e.target.textContent = '¡Copiado!';
                setTimeout(() => {
                    e.target.textContent = 'Copiar CVU';
                }, 1500);
            });
        }
    });
});




