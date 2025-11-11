# MERN Task Manager

![GitHub repo size](https://img.shields.io/github/repo-size/ShreyashPatil530/MERN-Task-Manager)
![GitHub last commit](https://img.shields.io/github/last-commit/ShreyashPatil530/MERN-Task-Manager)
![GitHub License](https://img.shields.io/github/license/ShreyashPatil530/MERN-Task-Manager)
![Issues](https://img.shields.io/github/issues/ShreyashPatil530/MERN-Task-Manager)
![Stars](https://img.shields.io/github/stars/ShreyashPatil530/MERN-Task-Manager?style=social)

A modern, robust **Task Manager App** using the MERN stack (MongoDB, Express.js, React + TypeScript, Node.js). Manage daily tasks effortlessly with authentication, clean UI, and full CRUD features.

---

## 🚀 Features

- User authentication (JWT)
- Task add/edit/delete (CRUD)
- Mark tasks complete/incomplete
- Responsive, modern TypeScript React UI
- RESTful API (Express/Node)
- Secure credentials with .env
- Organized folder structure

---

## ⚡ Tech Stack

**Frontend:** React + TypeScript, CSS Modules  
**Backend:** Node.js, Express.js, TypeScript  
**Database:** MongoDB, Mongoose  
**Auth:** JWT, bcryptjs  
**Tooling:** VS Code, npm/yarn, Git & GitHub

---

## 📁 Project Structure

```text
MERN-Task-Manager/
|-- client-app/
|   |-- src/components/
|   |-- src/assets/
|   |-- public/
|   |-- ...
|-- server-app/
|   |-- src/
|   |-- dist/
|   |-- .env
|   |-- ...
|-- README.md
```

---

## 🛠️ Quick Start

1. **Clone repository**
   ```bash
   git clone https://github.com/ShreyashPatil530/MERN-Task-Manager.git
   cd MERN-Task-Manager
   ```
2. **Install dependencies**  
   *(Repeat for both client-app & server-app)*
   ```bash
   cd client-app
   npm install
   cd ../server-app
   npm install
   ```
3. **Set environment variables**  
   In `server-app/.env`:
   ```
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
4. **Run backend & frontend**  
   ```bash
   # In server-app/
   npm run dev
   # In client-app/ (separate terminal)
   npm run dev
   ```
5. Visit [http://localhost:5173](http://localhost:5173)

---

## 🧩 Usage

- Sign up or log in  
- Create a new task  
- Edit, delete, mark as complete  
- View all tasks

---

## 🖼️ Screenshots

<img src="https://github.com/ShreyashPatil530/MERN-Task-Manager/blob/main/client-app/src/assets/app-demo.png" width="700"/>

---

## 🎨 CSS Styling Tips

- Use CSS Modules or styled-components for scoped, modular styles.
- Prefer variables for themes (colors, spacing).
- Use Flexbox/Grid for modern, responsive layouts.
- Example CSS snippet for button:
    ```css
    .btn-primary {
      background: linear-gradient(90deg,#06b,#24d6);
      color: white;
      border: none;
      border-radius: 8px;
      padding: 0.7em 1.4em;
      transition: background .3s;
      cursor: pointer;
    }
    .btn-primary:hover {
      background: linear-gradient(90deg,#24d6,#06b);
    }
    ```

---

## 📬 Links

- [See all code in this repo](https://github.com/ShreyashPatil530/MERN-Task-Manager)

---

## 🧑‍💻 Contributing

```bash
# Fork, clone, and create feature branch
git checkout -b feature/my-task
# Commit and open a pull request!
```

---

## 📄 License

MIT

---

## 🙋 FAQ

- **Where is main logic for tasks?**
  - Frontend: `/client-app/src/components/`
  - Backend: `/server-app/src/`

---

**Made with ❤️ by [ShreyashPatil530](https://github.com/ShreyashPatil530)**
