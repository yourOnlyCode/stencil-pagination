# Stencil Form Application

A minimal Stencil.js template for paginated forms with API integration.

## Project Structure

```
src/
├── components/
│   ├── app-root/          # Main app container
│   ├── app-router/        # Simple routing component
│   ├── paginated-form/    # Multi-page form with pagination
│   ├── form-field/        # Reusable input field
│   └── success-page/      # Success confirmation page
├── services/
│   └── api-service.ts     # API integration (incoming/outgoing)
└── index.html             # Entry point
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm start
```

3. Build for production:

```bash
npm run build
```
