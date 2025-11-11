# 📋 MERN Task Manager

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-green?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-black?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Open Issues](https://img.shields.io/github/issues/ShreyashPatil530/MERN-Task-Manager?color=orange)](https://github.com/ShreyashPatil530/MERN-Task-Manager/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/ShreyashPatil530/MERN-Task-Manager)](https://github.com/ShreyashPatil530/MERN-Task-Manager/commits/main)
[![Stars](https://img.shields.io/github/stars/ShreyashPatil530/MERN-Task-Manager?style=social)](https://github.com/ShreyashPatil530/MERN-Task-Manager)

> A modern, full-stack MERN (MongoDB, Express, React + TypeScript, Node.js) project for task management featuring authentication, CRUD operations, and a beautiful UI.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Screenshots](#-screenshots)
- [API Endpoints](#-api-endpoints)
- [Styling (CSS)](#-styling-css)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Overview

**MERN Task Manager** allows users to create, update, manage, and organize their daily tasks. With secure authentication and a modern, responsive interface built using React and TypeScript, this app showcases robust web dev practices and a clean codebase.

**Key Highlights:**
- 🔐 JWT-based authentication
- ⚡ Responsive and fast UI with React & Vite
- 🗃️ RESTful API powered by Node.js & Express
- 🛡️ Typed front & backend (TypeScript)
- 📦 MongoDB for scalable data storage
- 🎨 Modular CSS styling with customization tips

---

## ✨ Features

- **Authentication**:
  - Register & login with secure JWT tokens
  - Password hashing using bcryptjs
- **Task Management**:
  - Create, update, delete, view tasks
  - Mark tasks as complete/incomplete
  - Edit task title, description, status, and deadlines
- **User Experience**:
  - Modern, mobile-friendly UI
  - Error handling, loading indicators, and form validation
- **API**:
  - Protected routes, clear REST conventions
- **Type Safety**:
  - All components, server routes, and models use TypeScript

---

## 🛠️ Tech Stack

| Layer         | Technology                          |
|---------------|-------------------------------------|
| Frontend      | React + TypeScript, Vite, CSS/SCSS  |
| Backend       | Node.js, Express.js, TypeScript     |
| Database      | MongoDB Atlas, Mongoose             |
| Auth          | JWT, bcryptjs                       |
| Tooling       | GitHub, VS Code, Postman, npm/yarn  |

---

## 📁 Project Structure

```
MERN-Task-Manager/
│
├── client-app/           # React + TypeScript Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.tsx
│   │   │   └── TaskItem.tsx
│   │   ├── assets/
│   │   ├── App.tsx
│   │   └── ...
│   ├── package.json
│   ├── vite.config.ts
│   └── ...
│
├── server-app/           # Node.js + Express + TypeScript Backend
│   ├── src/
│   ├── dist/
│   ├── .env
│   ├── tsconfig.json
│   └── ...
│
├── README.md
└── .gitignore
```

---

## 🔧 Installation

### Prerequisites

- Node.js 20+
- npm or yarn
- MongoDB Atlas or local MongoDB

### Steps

1. **Clone the repository**
    ```bash
    git clone https://github.com/ShreyashPatil530/MERN-Task-Manager.git
    cd MERN-Task-Manager
    ```

2. **Install dependencies**

    ```bash
    cd client-app
    npm install
    cd ../server-app
    npm install
    ```

3. **Set up environment variables (`server-app/.env`)**

    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```

4. **Run the development servers**

    - **Backend**
        ```bash
        cd server-app
        npm run dev
        ```
    - **Frontend** (new terminal)
        ```bash
        cd client-app
        npm run dev
        ```

5. **Open the app**:  
   Visit [http://localhost:5173](http://localhost:5173)

---

## 🚀 Usage

- Register/login to access your task dashboard
- Add a new task, mark completed, edit, or delete
- Use the filter/search features to organize tasks
- Responsive layout for mobile & desktop

---


## 📊 API Endpoints

| Method | Endpoint            | Description               |
|--------|---------------------|---------------------------|
| POST   | `/api/auth/register`| Register user             |
| POST   | `/api/auth/login`   | Login user                |
| GET    | `/api/tasks`        | Get all tasks             |
| POST   | `/api/tasks`        | Create new task           |
| PUT    | `/api/tasks/:id`    | Edit a task               |
| PATCH  | `/api/tasks/:id`    | Mark complete/incomplete  |
| DELETE | `/api/tasks/:id`    | Delete a task             |

---

## 🎨 Styling (CSS)

For a modern look:
- Use flexbox/grid for layouts
- Prefer CSS modules or styled-components
- Animated transitions (`transition:`) for hover, pop-up, modal UIs
- Example:
    ```css
    .task-card {
      background: #f5f9ff;
      border-radius: 10px;
      padding: 1.2em 1.1em;
      margin-bottom: 1.4em;
      box-shadow: 0 4px 16px rgba(80,80,160,.08);
      transition: box-shadow .2s;
    }
    .task-card:hover {
      box-shadow: 0 8px 28px rgba(80,80,160,.15);
      background: #eaf4fd;
    }
    ```

---

## 🤝 Contributing

Contributions, feature requests, and bug reports welcome!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/FeatureName`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push (`git push origin feature/FeatureName`)
5. Open a pull request

---

## 📄 License

MIT License - see [LICENSE](LICENSE)

---

## 👤 Contact

**Shreyash Patil**  
📧 Email: shreyashpatil530@gmail.com  
💼 [LinkedIn](https://linkedin.com/in/yourprofile)  
🐱 [GitHub](https://github.com/ShreyashPatil530/MERN-Task-Manager)  
🌐 [Portfolio](https://shreyash-patil-portfolio1.netlify.app/)

---

## 🙏 Acknowledgments

- React, Node.js, TypeScript & MongoDB Documentation
- Contributions from open-source community

---

## ⭐ Star this Repo

If you found this project helpful, please consider starring it! ⭐

---

**Made with ❤️ by Shreyash Patil**

*Last Updated: 11 November 2025*
