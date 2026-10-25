
# Web Developer Portfolio

A personal portfolio website built with React to showcase my web development skills, projects, and experience.

## About the Project

This portfolio was created as part of my web development journey at OpenClassrooms.

Its purpose is to present my technical skills, highlight projects I've worked on, and provide an overview of my experience with frontend and backend development.

The website features a clean, modern, and responsive design, ensuring a consistent experience across desktop, tablet, and mobile devices.

## Technologies Used

- React
- JavaScript
- HTML5
- CSS3
- Vite
- Font Awesome
- Git & GitHub

## Features

- Responsive design for different screen sizes
- Single-page layout
- Smooth navigation between sections
- Reusable React components
- Skills and technologies showcase
- Project cards with screenshots and descriptions
- Contact form interface
- Modern and minimalist design

**Note:** This portfolio is a frontend-only project. The contact form is currently a visual interface and is not connected to an email service or backend.

## Website Sections

### Home
A brief introduction with navigation links to the projects and contact sections.

### About Me
An overview of my background, experience, and development goals.

### Skills
Technologies and tools organized into three categories:

- Frontend
- Backend
- Workflow & Tools

### Projects
A selection of projects demonstrating my frontend and backend development experience.

### Contact
A contact section featuring a form interface.

## Featured Projects

### 1. Kasa

A responsive apartment rental interface built with React.

**Technologies:** React, JavaScript, CSS

**Challenge:** Managing dynamic property pages without duplicating React components.

**Solution:** Used React Router and reusable components to display property information dynamically.

**Skills developed:** React components, routing, and responsive design.

### 2. Mon Vieux Grimoire

A REST API developed for a book review platform.

**Technologies:** Node.js, Express, MongoDB

**Challenge:** Implementing secure user authentication and protecting API endpoints.

**Solution:** Used bcrypt for password hashing and JWT middleware to authenticate requests and protect routes.

**Skills developed:** REST API development, database management, and security.

## Project Structure

The portfolio follows a component-based React architecture.

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── images/
│   ├── kasa.png
│   └── my old grimoire.png
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Installation

To run this project locally:

### 1. Clone the repository

Clone this repository to your local machine.

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## Future Improvements

Potential improvements include:

- Connecting the contact form to an email service
- Adding more projects
- Improving accessibility
- Enhancing animations and transitions

## Author

**Christian Onaiwu**

Web Developer

Built with React and Vite.

