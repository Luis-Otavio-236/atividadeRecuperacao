/**
 * JavaScript para ordenar os cards de projeto.
 */

function ordenarCards() {
    // 1. Seleciona o contêiner da galeria e a opção de ordenação
    const galeria = document.querySelector('.galeria-cards');
    const cards = Array.from(galeria.querySelectorAll('.card'));
    const filtro = document.getElementById('filtro').value;

    // 2. Define a função de comparação
    let comparador;

    switch (filtro) {
        case 'dataCrescente':
            // Ordena do mais antigo para o mais novo
            comparador = (a, b) => {
                const dataA = new Date(a.getAttribute('data-data'));
                const dataB = new Date(b.getAttribute('data-data'));
                return dataA - dataB;
            };
            break;

        case 'alfabetica':
            // Ordena por título de A a Z
            comparador = (a, b) => {
                const tituloA = a.getAttribute('data-titulo').toLowerCase();
                const tituloB = b.getAttribute('data-titulo').toLowerCase();
                if (tituloA < tituloB) return -1;
                if (tituloA > tituloB) return 1;
                return 0;
            };
            break;

        default:
            return; // Não faz nada se o valor for inesperado
    }

    // 3. Ordena o array de cards
    cards.sort(comparador);

    // 4. Reinsere os cards ordenados no DOM (na ordem correta)
    cards.forEach(card => {
        galeria.appendChild(card);
    });

    console.log(`Cards ordenados por: ${filtro}`);
}

// Executa a ordenação inicial ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    ordenarCards();
});