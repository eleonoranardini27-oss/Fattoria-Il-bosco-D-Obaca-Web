// Numero WhatsApp della fattoria (prefisso internazionale, senza + e senza spazi)
const WHATSAPP = '393000000000';

// All'apertura le pagine partono sempre dall'inizio, invece di tornare
// al punto in cui si era lasciata la pagina
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
if (!location.hash) window.scrollTo(0, 0);

// Menu mobile
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        const open = mobileMenu.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', open);
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });
}

// Modulo d'ordine: prepara il messaggio e lo apre su WhatsApp
const orderForm = document.getElementById('order-form');
if (orderForm) {
    const formSuccess = document.getElementById('form-success');
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const valore = id => document.getElementById(id).value.trim();
        const righe = [
            'Ciao Eleonora e Valentin! Vorrei ordinare la cassetta della settimana.',
            '',
            'Nome: ' + valore('nome'),
            'Telefono: ' + valore('telefono'),
            'Modalità: ' + valore('modalita')
        ];
        if (valore('note')) righe.push('Note: ' + valore('note'));
        const url = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(righe.join('\n'));
        window.open(url, '_blank', 'noopener');
        formSuccess.classList.add('show');
    });
}

// Calendario di stagione: evidenzia il mese in corso
const mesi = document.querySelectorAll('.calendario .mese');
if (mesi.length === 12) {
    const ora = mesi[new Date().getMonth()];
    ora.classList.add('ora');
    ora.querySelector('h3').insertAdjacentHTML('beforeend', '<small>Questo mese</small>');
}
