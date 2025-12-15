function ordenarCards() {
    // opções da ordem
    const galeria = document.querySelector('.galeria-cards');
    const cards = Array.from(galeria.querySelectorAll('.card'));
    const filtro = document.getElementById('filtro').value;

    let comparador;

    switch (filtro) {
        case 'dataCrescente':
            comparador = (a, b) => {
                const dataA = new Date(a.getAttribute('data-data'));
                const dataB = new Date(b.getAttribute('data-data'));
                return dataA - dataB;
            };
            break;

        case 'alfabetica':
            comparador = (a, b) => {
                const tituloA = a.getAttribute('data-titulo').toLowerCase();
                const tituloB = b.getAttribute('data-titulo').toLowerCase();
                if (tituloA < tituloB) return -1;
                if (tituloA > tituloB) return 1;
                return 0;
            };
            break;

        default:
            return;
    }

    cards.sort(comparador);

    // coloca os cards de volta na ordem que vc selecionou
    cards.forEach(card => {
        galeria.appendChild(card);
    });

    console.log(`Cards ordenados por: ${filtro}`);
}

// coloca na primeira quando entra no site ou então recarrega a página automaticamente
document.addEventListener('DOMContentLoaded', () => {
    ordenarCards();

});
