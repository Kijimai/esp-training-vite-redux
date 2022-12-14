# Legend Trainer - Working Title

- [Overview](#overview)
  - [What is this?](#what-is-this)
  - [What can a user do?](#what-can-a-user-do)
  - [How was it built?](#how-was-it-built)
  - [ViteJS](#vitejs)
  - [React and Styled Components](#react-with-styled-components)
  - [React Router](#react-router)
  - [Auth0](#auth0)
  - [Netlify CLI](#netlify-cli)
  <hr>

## What is this?

This is a web app for providing coaching services for Apex Legends players.

<small>This is not a real service. This project is intended for learning purposes only.</small>

## What can a user do?

The user can register for an account and book a coaching service in which payment is handled by the Stripe API. Once registered, the user can access their dashboard and book a session with a coach of their choosing.

## How was it built?

### ViteJS

- The app was initialized using ViteJS for faster development (dev server loads up within seconds).

### React with styled components

- In conjunction with React, I used styled-components to consolidate all component styling and functionality in itself (CSS in Javascript).

### React Router

- Pages are handled by React Router V6.

### Auth0

- User login and registration is handled by Auth0. The user may register using their gmail or twitter account.

### Netlify CLI

- The app uses the Netlify CLI to run server-side code to interact with the Stripe API without having a dedicated backend.
