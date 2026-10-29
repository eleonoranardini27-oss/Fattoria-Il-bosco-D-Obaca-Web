# Fattoria-Il-bosco-D-Obaca-Web
Sito web per l'azienda agricola a conduzione familiare

Online su GitHub Pages: https://www.fattoriailboscodobaca.it/

## Pagine

| File | Pagina |
| --- | --- |
| `index.html` | Home |
| `fattoria.html` | La Fattoria: chi siamo, filosofia, progetti |
| `animali.html` | Gli animali |
| `prodotti.html` | Prodotti, guida alle uova e calendario di stagione |
| `ordina.html` | Come ordinare, modulo d'ordine e domande frequenti |
| `contatti.html` | Contatti e mappa |

## Altri file

- `assets/style.css`: lo stile di tutte le pagine
- `assets/script.js`: menu da telefono, modulo d'ordine su WhatsApp, mese in corso nel calendario
- `immagini sito/`: le foto del sito
- `guide/il-pollaio-arcobaleno.pdf`: la guida gratuita alle uova colorate

## Numero WhatsApp

Il numero compare in `assets/script.js` (costante `WHATSAPP`, usata dal modulo d'ordine)
e nei link `https://wa.me/...` delle pagine HTML: va cambiato in tutti questi punti.

## Modalità "presto disponibile"

Per ora la vendita non è attiva: pulsanti e testi dicono "presto disponibile" e il modulo d'ordine è disattivato.
La versione con gli ordini attivi è il commit `3c501fa`: quando si potrà vendere, si riparte da lì
(ad esempio annullando con `git revert` il commit che ha introdotto la modalità "presto disponibile").
