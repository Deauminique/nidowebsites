# Website Toegang

## Lokale Development Server

1. Start de development server (als deze nog niet draait):
```bash
cd client
npm run dev
```

2. Open de website op een van deze URLs:
   - http://localhost:3002/nidowebsites/
   - Als poort 3002 bezet is, check de terminal output voor de juiste poort

## Gedeployde Website

De website is ook beschikbaar via GitHub Pages:
- https://deauminique.github.io/nidowebsites/

## Troubleshooting

Als je de website niet kunt openen:

1. Controleer of de development server draait:
   - Kijk in de terminal of je de melding "VITE v5.4.11 ready" ziet
   - Check welke poort wordt gebruikt (standaard 3002, maar kan verschillen)

2. Controleer de URL:
   - Gebruik de complete URL inclusief '/nidowebsites/' aan het einde
   - Let op: http://localhost:3002 zonder '/nidowebsites/' werkt niet

3. Als de server niet draait:
   - Stop eventuele oude processen met Ctrl+C
   - Start de server opnieuw met `npm run dev`

4. Browser cache:
   - Probeer de pagina te verversen (Ctrl/Cmd + R)
   - Of open in incognito/private modus
