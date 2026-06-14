
# Portfolio Website

A modern responsive portfolio website built with React.

This repository contains only the **public-facing portfolio website** that visitors can access to view my professional profile, skills, projects, and resume.

> This repository does **not** contain admin authentication, CMS logic, or backend APIs.

---

## Related System Architecture

This portfolio is part of a larger 3-part architecture:

- **Public Portfolio Website (this repo)** → Visitor-facing React application
- **Admin Panel** → Used by admin to manage content
- **Backend API Server** → Handles authentication, database, and file storage

---

## How It Works

```text
Visitor
   |
   v
Portfolio Website (React)
   |
   | API Requests
   v
Backend Server
   |
   +---- MongoDB
   |
   +---- Resume Storage
```

### Flow

1. Visitor opens portfolio website
2. React frontend sends API requests to backend
3. Backend fetches portfolio data from database
4. Website renders:
   - Personal details
   - Skills
   - Projects
   - Resume link

This architecture keeps the frontend lightweight while all content remains dynamically manageable from the CMS.

---

## Features

- Responsive design
- Dynamic portfolio content
- Project showcase
- Skills section
- Resume download
- Contact section
- Fast client-side rendering

---

## Tech Stack

### Frontend
- React
- JavaScript
- CSS / Tailwind CSS
- Axios / Fetch API

### External Dependencies
- Backend REST API
- MongoDB-powered CMS

---

## Setup

Clone repository:

```bash
git clone <repo-url>
cd portfolio
```

Install dependencies:

```bash
npm install
```

Create `.env`

```env
VITE_SERVER_URL=http://localhost:5000
```

Run development server:

```bash
npm run dev
```

---

## Backend Dependency

This frontend depends on a separate backend service for:

- Portfolio data
- Skills
- Projects
- Resume links

Without the backend API, dynamic content will not load.

---

## Admin Access

This repository does **not** include:
- Admin login
- JWT authentication
- Protected routes
- CMS dashboard

These features are handled in the separate backend/admin system.

---

## Usage

Licensed under MIT.

You may:
- Use
- Modify
- Distribute
- Build upon this project

Conditions:
- Include original MIT license
- Preserve copyright notice

---

## License

MIT License

Copyright (c) 2026 Sahil

---

## Author

**Sahil**  
MERN Stack Developer | Full Stack Developer

