# SprintDeck — Frontend Web Client

**Navigation / Navegación**
- **English:** [What the project does](#what-the-project-does) · [Tech Stack](#tech-stack) · [Roadmap](#roadmap) · [Local Installation](#local-installation)
- **Español:** [Qué hace el proyecto](#qué-hace-el-proyecto) · [Tecnologías](#tecnologías) · [Hoja de ruta](#hoja-de-ruta) · [Instalación local](#instalación-local)

---

## English

### What the project does

**SprintDeck** is a collaborative web app that helps teams organize projects, sprints, and daily tasks in a clear and simple way.

This repository contains the **frontend web client** built with React and TypeScript. It connects to the SprintDeck REST API to provide an interactive interface for managing projects, tasks, team members, and user accounts.

### Tech Stack

- **React 19** — Component-based user interface library
- **TypeScript** — Static typing for safer development
- **Vite** — Fast build tool and development server
- **Tailwind CSS** — Utility-first CSS framework for styling

### Roadmap

- [x] Initial project setup with React, TypeScript, Vite, and Tailwind CSS
- [ ] Routing, main application layout, and project dashboard views
- [ ] API client integration, data validation, and server state management
- [ ] Full Project CRUD views and interactive modals for task management
- [ ] User authentication flows (login, registration, account confirmation, and password recovery)
- [ ] Team collaboration views, role-based UI permissions, task notes, and change history
- [ ] User profile settings and interactive Drag & Drop board

### Local Installation

1. Clone this repository and move into the project folder:
   ```bash
   git clone https://github.com/ThePuchadesProject/sprintdeck_frontend.git
   cd sprintdeck_frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   By default, the web client runs at `http://localhost:5173`.

---

## Español

### Qué hace el proyecto

**SprintDeck** es una aplicación web colaborativa pensada para que los equipos organicen sus proyectos, sprints y tareas del día a día de forma clara y sencilla.

Este repositorio contiene el **cliente web (frontend)** desarrollado con React y TypeScript. Se conecta a la API REST de SprintDeck para ofrecer una interfaz interactiva desde la que gestionar proyectos, tareas, miembros del equipo y cuentas de usuario.

### Tecnologías

- **React 19** — Librería de interfaz de usuario basada en componentes
- **TypeScript** — Tipado estático durante el desarrollo
- **Vite** — Empaquetador y servidor de desarrollo rápido
- **Tailwind CSS** — Framework CSS de utilidades para el diseño

### Hoja de ruta

- [x] Configuración inicial del proyecto con React, TypeScript, Vite y Tailwind CSS
- [ ] Enrutamiento, diseño principal de la aplicación y vistas del panel de proyectos
- [ ] Integración con la API, validación de datos y gestión del estado del servidor
- [ ] Vistas para el CRUD completo de proyectos y modales interactivos para las tareas
- [ ] Flujos de autenticación de usuarios (inicio de sesión, registro, confirmación de cuenta y recuperación de contraseña)
- [ ] Vistas de gestión de equipos, permisos en interfaz según el rol, notas en tareas e historial de cambios
- [ ] Ajustes de perfil de usuario y tablero interactivo con Drag & Drop

### Instalación local

1. Clona este repositorio y entra en la carpeta del proyecto:
   ```bash
   git clone https://github.com/ThePuchadesProject/sprintdeck_frontend.git
   cd sprintdeck_frontend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```
   Por defecto, el cliente web estará disponible en `http://localhost:5173`.

---

Developed by [The Puchades Project](https://thepuchadesproject.com) · MIT License
