


















# Database Setup Instructies

## PostgreSQL Installatie

### macOS
1. Installeer PostgreSQL via Homebrew:
```bash
brew install postgresql@14
```

2. Start PostgreSQL service:
```bash
brew services start postgresql@14
```

3. Verifieer installatie:
```bash
psql -V
```

### Database Setup

1. Maak een nieuwe database aan:
```bash
createdb nido_websites
```

2. Configureer database URL in .env:
```
DATABASE_URL="postgresql://gebruikersnaam:wachtwoord@localhost:5432/nido_websites?schema=public"
```

3. Initialiseer Prisma:
```bash
cd server
npx prisma generate
npx prisma migrate dev
```

## Email Service Setup

1. Maak een SendGrid account aan op: https://signup.sendgrid.com/

2. Creëer een API key:
   - Ga naar Settings > API Keys
   - Klik op "Create API Key"
   - Kies "Full Access" of "Restricted Access" met minimaal "Mail Send" rechten
   - Kopieer de API key

3. Configureer SendGrid in .env:
```
SENDGRID_API_KEY=your_api_key_here
SENDGRID_VERIFIED_SENDER=your_verified_email@example.com
CONTACT_FORM_EMAIL=notifications@yourdomain.com
```

## Development Server Starten

1. Start de frontend development server:
```bash
cd client
npm run dev
```

2. Start de backend development server:
```bash
cd server
npm run dev
```

## Troubleshooting

### Database Issues
- Controleer of PostgreSQL service draait: `brew services list`
- Controleer database connectie: `psql -d nido_websites`
- Controleer DATABASE_URL in .env file

### Email Issues
- Verifieer SendGrid API key
- Controleer of sender email geverifieerd is
- Check SendGrid Activity Feed voor email status

### Server Issues
- Controleer of alle dependencies zijn geïnstalleerd
- Verifieer dat alle environment variables zijn geconfigureerd
- Check server logs voor specifieke errors
