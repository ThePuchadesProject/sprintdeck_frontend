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
- **React Router DOM** — Client-side routing and nested layouts
- **TanStack Query (React Query)** — Server state management and asynchronous mutations
- **React Hook Form** — Form state management and input validation
- **Zod** — Schema definition and TypeScript type inference
- **Axios** — HTTP client for communicating with the REST API
- **React-Toastify** — Toast notifications for user feedback
- **Headless UI** & **Heroicons** — Accessible UI components and SVG icons

### Roadmap

- [x] Initial project setup with React, TypeScript, Vite, and Tailwind CSS
- [x] Routing setup, `@` path alias, main application layout (`AppLayout`), logo, and responsive navigation menu (`NavMenu`)
- [x] Project dashboard header, project creation view (`CreateProjectView`), and validated `ProjectForm` with React Hook Form
- [x] Zod project schemas (`Project`, `ProjectFormData`), Axios client with environment variables, and `ProjectAPI.createProject`
- [x] Toast notifications with React-Toastify and programmatic redirect after creating a project
- [x] TanStack Query setup (`QueryClientProvider`), `useMutation` for project creation, and Axios error handling (`isAxiosError`)
- [ ] Fetching and listing projects in `DashboardView` with `useQuery` and React Query DevTools
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

3. Create your local environment file from the template:
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
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
- **React Router DOM** — Enrutamiento en el cliente y layouts anidados
- **TanStack Query (React Query)** — Gestión del estado del servidor y mutaciones asíncronas
- **React Hook Form** — Gestión y validación de formularios
- **Zod** — Definición de esquemas e inferencia de tipos TypeScript
- **Axios** — Cliente HTTP para las peticiones a la API REST
- **React-Toastify** — Notificaciones emergentes para feedback al usuario
- **Headless UI** y **Heroicons** — Componentes de interfaz accesibles e iconos SVG

### Hoja de ruta

- [x] Configuración inicial del proyecto con React, TypeScript, Vite y Tailwind CSS
- [x] Configuración de rutas, alias `@`, diseño principal (`AppLayout`), logotipo y menú de navegación responsive (`NavMenu`)
- [x] Cabecera del panel de proyectos, vista de creación (`CreateProjectView`) y formulario validado (`ProjectForm`) con React Hook Form
- [x] Esquemas de proyecto con Zod (`Project`, `ProjectFormData`), cliente Axios con variables de entorno y `ProjectAPI.createProject`
- [x] Notificaciones toast con React-Toastify y redirección al crear un proyecto
- [x] Configuración de TanStack Query (`QueryClientProvider`), `useMutation` para crear proyectos y manejo de errores con `isAxiosError`
- [ ] Obtención y listado de proyectos en `DashboardView` con `useQuery` y React Query DevTools
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

3. Crea tu archivo local de variables de entorno a partir de la plantilla:
   ```bash
   cp .env.example .env.local
   ```

4. Inicia el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```
   Por defecto, el cliente web estará disponible en `http://localhost:5173`.

---

Developed by [The Puchades Project](https://thepuchadesproject.com) · MIT License
