# NIDO Websites Backend

Backend server voor de NIDO Websites applicatie.

## Setup

### Prerequisites

- Node.js >= 18
- PostgreSQL
- SendGrid account voor email service

### Installatie

1. Fix npm permissions (eenmalig):
```bash
sudo chown -R $(whoami) ~/.npm
```

2. Installeer dependencies:
```bash
npm install
```

3. Configureer environment variables:
- Kopieer `.env.example` naar `.env`
- Vul de juiste waarden in voor alle environment variables

4. Setup database:
```bash
# Genereer Prisma client
npx prisma generate

# Voer database migrations uit
npx prisma migrate dev
```

### Development

Start de development server:
```bash
npm run dev
```

### API Endpoints

#### Contact Form

- `POST /api/contact`
  - Submit contact form
  - Body: `{ name, email, subject, message }`

- `GET /api/contact`
  - Get all contact submissions
  - Protected route voor admin

### Scripts

- `npm run dev`: Start development server met hot-reload
- `npm start`: Start production server
- `npm test`: Run tests
- `npm run lint`: Run linter
- `npm run format`: Format code met Prettier

### Project Structure

```
src/
├── controllers/     # Request handlers
├── middleware/      # Custom middleware
├── models/         # Database models
├── routes/         # API routes
└── utils/          # Utility functions
```

### Logging

Logs worden opgeslagen in:
- `logs/error.log`: Error logs
- `logs/combined.log`: Alle logs

### Security

- CORS configuratie voor frontend
- Rate limiting
- Input validatie
- Helmet security headers

### Database

PostgreSQL database met Prisma ORM:
- Contact form submissions
- Projects
- Services
