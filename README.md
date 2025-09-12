# Express TypeScript Boilerplate

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-blue.svg)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-5.1+-lightgrey.svg)](https://expressjs.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A modern and optimized boilerplate for creating robust web applications with Express.js and TypeScript. Perfect for starting scalable backend projects with development best practices.

## 📋 Description

This project provides a solid foundation for developing REST APIs and web applications using Express.js with TypeScript. It includes complete development configuration, optimized compilation, and tools to facilitate modern development.

### ✨ Why use this boilerplate?

- **🚀 Production-ready configuration** - Everything configured from day one
- **🔧 Strict TypeScript** - Optimized configuration for robust development
- **⚡ Hot reload** - Agile development with automatic reload
- **📦 Modern dependency management** - Only essential dependencies
- **🎯 Scalable structure** - Ready to grow with your project

## 🚀 Features

- **Express.js v5.1.0** - Modern and fast web framework
- **TypeScript v5.9.2** - Static typing for JavaScript
- **Optimized development configuration** - Scripts for all environments
- **Hot reload with nodemon** - Automatic reload during development
- **Complete type definitions** - Types for Express, Node.js and more
- **Compilation with source maps** - Easy debugging in development
- **Strict TypeScript configuration** - Best practices enabled

## 🛠️ Tech Stack

### Main Dependencies
- **Express.js v5.1.0** - Minimalist and flexible web framework
- **Node.js** - Server-side JavaScript runtime

### Development Dependencies
- **TypeScript v5.9.2** - Typed superset of JavaScript
- **@types/express v5.0.3** - Type definitions for Express
- **@types/node v24.3.1** - Type definitions for Node.js
- **ts-node v10.9.2** - TypeScript executor without prior compilation
- **nodemon v3.1.10** - Development tool with automatic reload

### TypeScript Configuration
- **Target**: ES2020 - Modern JavaScript features
- **Module**: CommonJS - Node.js compatibility
- **Strict mode**: Enabled - Maximum type safety
- **Source maps**: Enabled - Enhanced debugging

## 📦 Installation and Setup

### Prerequisites
- **Node.js** v18 or higher
- **npm** v8 or higher (included with Node.js)

### Installation Steps

1. **Clone the repository:**
```bash
git clone https://github.com/jonnyalexbh/express-typescript-boilerplate.git
cd express-typescript-boilerplate
```

2. **Install dependencies:**
```bash
npm install
```

3. **Verify installation:**
```bash
npm run dev
```

If everything is correct, you should see:
```
Example app listening on port 3000
```

4. **Visit the application:**
Open your browser at `http://localhost:3000` to see the "Hello World!" message

## 🏃‍♂️ Available Commands

### 🛠️ Development
```bash
# Run in development mode (recommended)
npm run dev

# Run with automatic reload (hot reload)
npm run dev:watch
```

### 🚀 Production
```bash
# Compile TypeScript to JavaScript
npm run build

# Run compiled version
npm start
```

### 📋 Other Commands
```bash
# Only compile (without running)
npm run build

# Verify TypeScript types
npx tsc --noEmit
```

## 🔧 Detailed Scripts

| Command | Description | When to use |
|---------|-------------|-------------|
| `npm run dev` | Runs with ts-node | Quick development |
| `npm run dev:watch` | Runs with nodemon | Development with hot reload |
| `npm run build` | Compiles TS → JS | Before production |
| `npm start` | Runs compiled version | Production |

## 📁 Project Structure

```
express-typescript-boilerplate/
├── src/
│   └── app.ts              # 🚀 Application entry point
├── dist/                   # 📦 Compiled files (auto-generated)
│   ├── app.js             # Compiled JavaScript
│   ├── app.d.ts           # Type definitions
│   └── app.js.map         # Source maps for debugging
├── node_modules/          # 📚 Installed dependencies
├── package.json           # ⚙️ Project configuration and dependencies
├── package-lock.json      # 🔒 Exact dependency versions
├── tsconfig.json          # 🔧 TypeScript configuration
└── README.md             # 📖 Project documentation
```

### 📝 File Description

- **`src/app.ts`** - Main file where Express and routes are configured
- **`dist/`** - Automatically generated folder with compiled code
- **`tsconfig.json`** - TypeScript configuration with strict mode enabled
- **`package.json`** - Project metadata, scripts and dependencies

## 🌐 API Endpoints

| Method | Route | Description | Response |
|--------|-------|-------------|----------|
| `GET` | `/` | Welcome endpoint | `"Hello World!"` |

### 📝 Response Example
```bash
curl http://localhost:3000/
# Response: Hello World!
```

## ⚙️ Configuration

### 🔧 Server Port
The server runs by default on port **3000**. To change the port:

```typescript
// src/app.ts
const port = process.env.PORT || 3000; // Use environment variable or 3000
```

### 🌍 Environment Variables
Create a `.env` file for configurations:

```bash
# .env
PORT=3000
NODE_ENV=development
```

## 📝 Development Guide

### ➕ Adding New Routes

```typescript
// src/app.ts
import express from 'express';

const app = express();
const port = 3000;

// Existing route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// New GET route
app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

// New POST route
app.post('/api/users', (req, res) => {
  res.json({ message: 'User created' });
});

// New route with parameters
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ user: { id } });
});
```

### 🏗️ Recommended Structure for Large Projects

```
src/
├── app.ts              # Main Express configuration
├── routes/             # Route definitions
│   ├── index.ts
│   ├── users.ts
│   └── auth.ts
├── controllers/        # Business logic
│   ├── userController.ts
│   └── authController.ts
├── middleware/         # Custom middleware
│   ├── auth.ts
│   └── validation.ts
├── models/             # Data models
│   └── User.ts
└── utils/              # Utilities
    ├── database.ts
    └── helpers.ts
```

## 🚀 Next Steps

### 🔧 Suggested Improvements
- [ ] Add logging middleware (morgan)
- [ ] Implement global error handling
- [ ] Add data validation (joi/zod)
- [ ] Configure database (MongoDB/PostgreSQL)
- [ ] Implement JWT authentication
- [ ] Add unit tests (Jest)
- [ ] Configure Docker
- [ ] Implement CI/CD

### 📚 Additional Resources
- [Express.js Documentation](https://expressjs.com/)
- [TypeScript Guide](https://www.typescriptlang.org/docs/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** the project
2. **Create** a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### 📋 Contribution Guidelines
- Use strict TypeScript
- Follow existing code conventions
- Add tests for new features
- Update documentation if necessary

## 🐛 Reporting Issues

If you find any issues:

1. **Search** if a similar issue already exists
2. **Create** a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Environment information (Node.js, OS)
   - Error logs if applicable

[🔗 Report Issue](https://github.com/jonnyalexbh/express-typescript-boilerplate/issues)

## 📄 License

This project is under the **ISC License**. See the `LICENSE` file for more details.

## ⭐ Do you like this project?

If this boilerplate has been useful to you, give it a star! ⭐

## 📞 Contact and Links

- **📁 Repository**: [express-typescript-boilerplate](https://github.com/jonnyalexbh/express-typescript-boilerplate)
- **🐛 Issues**: [GitHub Issues](https://github.com/jonnyalexbh/express-typescript-boilerplate/issues)
- **🏠 Homepage**: [GitHub Pages](https://github.com/jonnyalexbh/express-typescript-boilerplate#readme)

---

<div align="center">
  <p>Made with ❤️ for the developer community</p>
  <p>If you have any questions, don't hesitate to open an issue</p>
</div>
