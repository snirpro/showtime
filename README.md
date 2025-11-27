# Showtime - TV Show Browser

A full-stack web application for browsing TV shows and episodes. Built with **Angular** (frontend) and **Node.js/Express** (backend) using Data from TVmaze API

## Project Overview

Showtime is a modern TV show discovery application with the following features:
- Search and browse TV shows
- View detailed episode information
- Filter shows
- Responsive user interface

## Tech Stack

### Frontend
- **Angular** 20.3 - Modern web framework
- **TypeScript** 5.9 - Type-safe development
- **RxJS** 7.8 - Reactive programming

### Backend
- **Node.js** - JavaScript runtime
- **Express** 5.1 - Web framework
- **CORS** - Cross-Origin Resource Sharing
- **CommonJS** JavaScript

## Project Structure

```
showtime/
├── Backend/              # Node.js/Express server
│   ├── server.js         # Main server file
│   ├── package.json      # Backend dependencies
│   └── routes/           # API endpoints
│       ├── shows.js      # Show search routes
│       └── episodes.js   # Episode routes
│
└── Frontend/             # Angular application
    ├── package.json      # Frontend dependencies
    ├── angular.json      # Angular configuration
    ├── tsconfig.json     # TypeScript configuration
    └── src/              # Angular source code
        ├── main.ts       # Application entry point
        ├── app/          # Application components
        │   ├── components/
        │   │   ├── header/
        │   │   ├── footer/
        │   │   ├── search-bar/
        │   │   └── filters/
        │   ├── pages/
        │   │   ├── home/
        │   │   ├── episodes/
        │   │   └── search-show/
        │   ├── services/  # HTTP services
        │   │   ├── search.ts
        │   │   └── episodes-list.ts
        │   └── app.ts    # Main app component
        └── styles.css    # Global styles
```

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) - Node Package Manager
- **Angular CLI** - `npm install -g @angular/cli`

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <https://github.com/snirpro/showtime.git>
cd showtime
```

### 2. Backend Setup

Navigate to the Backend folder and install dependencies:

```bash
cd Backend
npm install
```

Start the backend server:

```bash
npm start
```

The server will run on `http://localhost:3000` with the following API endpoints:
- `/search/shows` - Search shows
- `/episodes/:id` - Get episode information

### 3. Frontend Setup

Open a new terminal, navigate to the Frontend folder, and install dependencies:

```bash
cd Frontend
npm install
```

Start the Angular development server:

```bash
ng serve
```

The application will be available at `http://localhost:4200`.


## API Endpoints

### Backend Routes

The backend provides the following REST API:

- **GET /search** - Search for TV shows
- **GET /episodes** - Retrieve episode information

## Development Workflow

### Making Code Changes

1. **Frontend**: Edit files in `Frontend/src/` - changes will hot-reload automatically
2. **Backend**: Edit files in `Backend/` and restart the server with `node server.js`

### File Organization

- **Components** (`Frontend/src/app/components/`) - Reusable UI elements
- **Pages** (`Frontend/src/app/pages/`) - Full page components
- **Services** (`Frontend/src/app/services/`) - API communication and business logic
- **Routes** (`Backend/routes/`) - API endpoint definitions

## TVmaze Attribution

This project uses the TVmaze API for show and episode data.  
TVmaze content is licensed under CC BY-SA, and attribution is required when using the data.

Attribution is provided in the application UI and here in the documentation:

**Data provided by TVmaze — https://www.tvmaze.com/api**


## Contact & Support
If you have any questions, suggestions, or feedback, feel free to reach out:

**👤 Developer:** Snir Primovich  
**📧 Email:** snirpr00@gmail.com  
**🌐 GitHub:** https://github.com/snirpro
