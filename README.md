# Mobility Backend

This is the backend for the Mobility App, replacing all previous base44 dependencies. It is built with Node.js, Express, and MongoDB, and provides RESTful APIs for vehicles, service requests, inventory, orders, insurance leads, payments, commissions, user authentication, and integrations (LLM, email, file upload, image generation, data extraction).

## Stack

- Node.js
- Express
- MongoDB (Mongoose)

## Folder Structure

```
backend/
  src/
    controllers/
    models/
    routes/
    services/
    utils/
    app.js
  .env
  package.json
  README.md
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file with your MongoDB URI and other secrets.
3. Start the server:
   ```bash
   npm start
   ```
