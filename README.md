# Lulù Bolle&Coccole

Sito vetrina per una toelettatura cani e gatti a Torino. Realizzato con React 19 e Tailwind CSS 4; compilazione con esbuild. Nessun backend, sistema di prenotazione, login o pagamento.

## Contenuto

- `src/main.jsx`: interfaccia e interazioni.
- `src/content.js`: contatti, stato WhatsApp, servizi e FAQ.
- `src/style.css`: stili e responsive.
- `public/`: immagini e favicon.
- `dist/`: versione già compilata e pronta per un hosting statico.
- `index.html`: metadata e dati strutturati.
- `build.mjs`: compilazione.
- `package-lock.json`: versioni delle dipendenze per installazione riproducibile.

Non sono incluse dipendenze scaricabili (`node_modules`), cronologia Git, credenziali o configurazione dell’hosting Sites. Questo ZIP è una copia autonoma del codice e del sito compilato.

## Avvio locale

Installa Node.js 20 o successivo e, dalla cartella del progetto:

```bash
npm ci
npm run build
python3 -m http.server 8080 --directory dist
```

Apri http://localhost:8080. Per visualizzare subito la copia compilata, puoi eseguire soltanto il comando Python. Non aprire index.html con doppio clic: usa un server HTTP.

## Backup su GitHub

1. Crea un repository vuoto sul tuo account GitHub.
2. Estrai lo ZIP e carica il contenuto della cartella `lulu-bolle-coccole`, mantenendo la struttura.
3. Includi anche `.gitignore`. Non aggiungere `node_modules`, file `.env` o credenziali.

In alternativa, dalla cartella estratta:

```bash
git init
git add .
git commit -m "Sito Lulù Bolle e Coccole"
git branch -M main
git remote add origin https://github.com/TUO-UTENTE/TUO-REPOSITORY.git
git push -u origin main
```

Sostituisci l’URL con quello del tuo repository. Il caricamento su GitHub conserva il codice: non attiva automaticamente l’hosting.

## Pubblicazione indipendente

Usa un hosting statico con comando di build `npm ci && npm run build` e cartella pubblica `dist`.

I percorsi delle risorse sono relativi e supportano GitHub Pages sotto il percorso della repository. Il workflow GitHub Actions pubblica la cartella `dist`.

Prima di cambiare dominio aggiorna in `index.html` i valori Open Graph `og:url` e `og:image`. La versione attuale contiene `noindex,nofollow`: rimuovilo solo quando i contenuti sono approvati e vuoi consentire l’indicizzazione.

## WhatsApp

In `src/content.js`, `whatsappVerified` è impostato su `false`. Tutte le CTA commerciali mostrano un avviso finché il numero non viene confermato dall’attività. Dopo conferma ufficiale imposta `true` e ricompila: si aprirà https://wa.me/393204861180 senza messaggi precompilati.

## Informazioni da confermare

- Logo, colori originali, insegna, foto degli interni e profili social ufficiali.
- Disponibilità dei servizi, soprattutto taglio e riassetto, e orari.
- Abilitazione WhatsApp del numero +39 320 486 1180.
- Dati fiscali e informativa privacy definitiva per l’hosting scelto.
- Recensioni direttamente su Google: il sito usa sintesi attribuite a una fonte terza, non citazioni letterali o valutazioni inventate.

Le fotografie sono illustrative e non rappresentano clienti, ambienti o risultati dell’attività. Il marchio tipografico e la palette sono proposte provvisorie.

## Fonti e immagini

- Google Maps fornito: https://maps.app.goo.gl/vseyC8BnQ2AJwHuL9
- Contatti e orari: https://firmania.it/torino/lul%C3%B9-bollecoccole-5438023
- Recensioni riportate: https://toelettaturapro.com/pro/toelettatura/lulu-bollecoccole-torino
- Immagini illustrative: Unsplash, identificate nel file `ASSETS.md`.

Non è concessa con questo archivio alcuna esclusiva sulle fotografie o sui marchi dell’attività. Sostituisci le fotografie con materiali originali autorizzati prima della consegna definitiva se richiesto dal cliente.

## GitHub Pages

Il sito viene pubblicato dal workflow `.github/workflows/deploy-pages.yml`. In Settings → Pages mantieni selezionato **GitHub Actions**.

Ogni push su `main` avvia installazione delle dipendenze, compilazione React/Tailwind e pubblicazione su Pages. Puoi anche avviare il workflow dalla scheda Actions tramite Run workflow. Non occorre caricare manualmente i file compilati. La cartella `docs` resta una copia compilata utilizzabile come alternativa.

Indirizzo del sito: https://biscoooo.github.io/Lulu-Bolle-Coccole-/
