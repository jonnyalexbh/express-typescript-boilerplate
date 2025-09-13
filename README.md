# Express TypeScript Boilerplate

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-blue.svg)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-5.1+-lightgrey.svg)](https://expressjs.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

Enterprise-grade boilerplate for building scalable REST APIs and web services using Express.js and TypeScript. Designed for development teams requiring robust, maintainable, and production-ready backend applications.

## 📋 Overview

This enterprise boilerplate provides a comprehensive foundation for developing REST APIs and web services using Express.js with TypeScript. It includes complete development configuration, optimized compilation, and enterprise-grade tools to facilitate modern development workflows.

### 🎯 Business Value

- **⚡ Rapid Development** - Pre-configured environment reduces setup time by 80%
- **🛡️ Type Safety** - Strict TypeScript configuration prevents runtime errors
- **📈 Scalability** - Architecture designed for enterprise-scale applications
- **🔧 Maintainability** - Clean code structure and best practices
- **🚀 Production Ready** - Optimized for deployment and monitoring

## 🚀 Technical Features

- **Express.js v5.1.0** - Industry-standard web framework for Node.js
- **TypeScript v5.9.2** - Static typing for enhanced code quality and maintainability
- **Enterprise Development Configuration** - Production-ready scripts and environments
- **Hot Reload Development** - Automatic reload for efficient development cycles
- **Complete Type Definitions** - Full TypeScript support for Express and Node.js
- **Source Map Integration** - Advanced debugging capabilities
- **Strict TypeScript Configuration** - Enterprise-grade type safety

## 🛠️ Technology Stack

### Core Technologies
- **Express.js v5.1.0** - Enterprise-grade web framework for Node.js
- **Node.js** - High-performance server-side JavaScript runtime

### Development Tools
- **TypeScript v5.9.2** - Advanced static typing for JavaScript
- **@types/express v5.0.3** - Official TypeScript definitions for Express
- **@types/node v24.3.1** - Official TypeScript definitions for Node.js
- **ts-node v10.9.2** - TypeScript execution environment
- **nodemon v3.1.10** - Development server with live reload

### Code Quality & Formatting
- **ESLint v9.35.0** - Advanced linting with TypeScript support
- **Prettier** - Code formatting and style consistency
- **@typescript-eslint/parser** - TypeScript parser for ESLint
- **@typescript-eslint/eslint-plugin** - TypeScript-specific linting rules
- **eslint-config-prettier** - Disable ESLint rules that conflict with Prettier
- **eslint-plugin-prettier** - Run Prettier as an ESLint rule

### TypeScript Configuration
- **Target**: ES2020 - Modern JavaScript features for optimal performance
- **Module**: CommonJS - Full Node.js ecosystem compatibility
- **Strict Mode**: Enabled - Maximum type safety and error prevention
- **Source Maps**: Enabled - Production-grade debugging capabilities

## 📦 Quick Start Guide

### System Requirements
- **Node.js** v18 or higher (LTS recommended)
- **npm** v8 or higher (included with Node.js)
- **Git** for version control

### Development Environment Setup

1. **Clone the repository:**
```bash
git clone https://github.com/jonnyalexbh/express-typescript-boilerplate.git
cd express-typescript-boilerplate
```

2. **Install project dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

Expected output:
```
Server running on port 3000
Environment: development
```

4. **Verify deployment:**
Open your browser at `http://localhost:3000` to confirm the service is operational

## 🏃‍♂️ Development Commands

### 🛠️ Development Workflow
```bash
# Start development server (recommended for daily development)
npm run dev

# Start with hot reload (automatic restart on file changes)
npm run dev:watch
```

### 🚀 Production Deployment
```bash
# Build production assets
npm run build

# Start production server
npm start
```

### 🔍 Quality Assurance
```bash
# Type checking without compilation
npx tsc --noEmit

# Build verification
npm run build

# Code linting and formatting
npm run lint          # Run ESLint
npm run lint:fix      # Auto-fix ESLint issues
npm run format        # Format code with Prettier
npm run format:check  # Check code formatting
npm run check         # Run both linting and format checking
```

## 🔧 Command Reference

| Command | Description | Use Case |
|---------|-------------|----------|
| `npm run dev` | Development server with ts-node | Daily development work |
| `npm run dev:watch` | Development server with hot reload | Active development with file watching |
| `npm run build` | TypeScript compilation to JavaScript | Pre-deployment build process |
| `npm start` | Production server execution | Production deployment |
| `npm run lint` | Run ESLint code analysis | Code quality checking |
| `npm run lint:fix` | Auto-fix ESLint issues | Code quality improvement |
| `npm run format` | Format code with Prettier | Code style consistency |
| `npm run format:check` | Check code formatting | Pre-commit validation |
| `npm run check` | Run linting and format checking | Complete code quality check |

## 📁 Enterprise Project Structure

```
express-typescript-boilerplate/
├── src/
│   ├── app.ts              # 🚀 Main application entry point
│   ├── routes.ts           # 🛣️ Route definitions and handlers
│   ├── server.ts           # 🖥️ Server startup configuration
│   ├── controllers/        # 🎮 Business logic controllers
│   │   └── userController.ts
│   ├── middlewares/        # 🔧 Custom middleware functions
│   │   └── validation.ts
│   ├── schemas/            # 📋 Data validation schemas
│   │   ├── index.ts
│   │   └── userSchemas.ts
│   └── types/              # 🏷️ TypeScript type definitions
│       ├── index.ts        # Main types export
│       ├── common/         # Shared types across the application
│       │   └── index.ts    # ValidationSchema and common interfaces
│       └── user/           # User-specific types
│           ├── index.ts
│           └── userTypes.ts # UserRegistrationData interface
├── node_modules/          # 📚 Dependency management
├── package.json           # ⚙️ Project configuration and metadata
├── package-lock.json      # 🔒 Dependency version lock file
├── tsconfig.json          # 🔧 TypeScript compiler configuration
├── eslint.config.js       # 🔍 ESLint configuration (v9 format)
├── .prettierrc            # 🎨 Prettier configuration
├── .prettierignore        # 🚫 Prettier ignore patterns
└── README.md             # 📖 Project documentation
```

### 📝 Architecture Overview

#### Core Application Files
- **`src/app.ts`** - Core Express application configuration and middleware setup
- **`src/routes.ts`** - API endpoint definitions and business logic
- **`src/server.ts`** - Server startup and port configuration

#### Business Logic Layer
- **`src/controllers/`** - Business logic controllers handling HTTP requests
- **`src/middlewares/`** - Custom middleware functions for request processing
- **`src/schemas/`** - Data validation schemas using Joi

#### Type System Organization
- **`src/types/`** - Centralized TypeScript type definitions
  - **`src/types/common/`** - Shared types across the application (ValidationSchema, etc.)
  - **`src/types/user/`** - User-specific types and interfaces (UserRegistrationData, etc.)
  - **`src/types/index.ts`** - Main export file for easy type imports

#### Configuration & Build
- **`tsconfig.json`** - TypeScript compiler settings with enterprise-grade strict mode
- **`eslint.config.js`** - ESLint configuration with TypeScript support and Prettier integration
- **`.prettierrc`** - Prettier code formatting configuration
- **`.prettierignore`** - Files and directories to exclude from Prettier formatting
- **`package.json`** - Project metadata, dependency management, and build scripts

> **Note:** The `dist/` directory is auto-generated during build process and contains compiled JavaScript files, type definitions, and source maps.

## 🌐 API Documentation

| Method | Route | Description | Response |
|--------|-------|-------------|----------|
| `GET` | `/health` | Health check endpoint | `{"message": "Ok"}` |
| `POST` | `/api/users/register` | User registration endpoint | `{"message": "User registered successfully", "user": {...}}` |

### 📝 API Testing
```bash
# Health check endpoint
curl http://localhost:3000/health
# Expected Response: {"message": "Ok"}

# User registration endpoint
curl -X POST http://localhost:3000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword123",
    "age": 25
  }'
# Expected Response: {"message": "User registered successfully", "user": {...}}
```

## ⚙️ Enterprise Configuration

### 🔧 Server Configuration
The application runs on port **3000** by default. Configure via environment variables:

```typescript
// src/app.ts
const port = process.env.PORT || 3000; // Environment-driven configuration
```

### 🌍 Environment Management
Create a `.env` file for environment-specific settings:

```bash
# .env
PORT=3000
NODE_ENV=development
API_VERSION=v1
LOG_LEVEL=info
```

## 🎨 Code Quality & Development Workflow

### 🔍 ESLint Configuration
The project uses ESLint v9 with TypeScript support and Prettier integration:

- **TypeScript Support** - Full TypeScript parsing and linting
- **Prettier Integration** - Automatic code formatting on save
- **Enterprise Rules** - Strict linting rules for code quality
- **Auto-fix** - Automatic fixing of common issues

### 🎨 Prettier Configuration
Consistent code formatting with:
- **Single Quotes** - Consistent string formatting
- **Semicolons** - Required at end of statements
- **80 Character Width** - Optimal line length for readability
- **2 Space Indentation** - Consistent indentation
- **Trailing Commas** - ES5 compatible trailing commas

### 🚀 Development Workflow
```bash
# 1. Start development server
npm run dev:watch

# 2. In another terminal, run quality checks
npm run check

# 3. Auto-fix issues before committing
npm run lint:fix
npm run format
```

### 📋 Pre-commit Checklist
Before committing code, ensure:
- [ ] All ESLint issues are resolved (`npm run lint`)
- [ ] Code is properly formatted (`npm run format:check`)
- [ ] TypeScript compilation succeeds (`npm run build`)
- [ ] All tests pass (when implemented)

## 📝 Development Guidelines

### ➕ Extending API Endpoints

```typescript
// src/app.ts
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Business API endpoints
app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

app.post('/api/users', (req, res) => {
  res.json({ message: 'User created successfully' });
});

// Parameterized routes
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ user: { id } });
});
```

### 🏗️ Enterprise Architecture Pattern

```
src/
├── app.ts              # Main Express application configuration
├── routes.ts           # API route definitions and handlers
├── server.ts           # Server startup configuration
├── controllers/        # Business logic layer
│   └── userController.ts
├── middlewares/        # Custom middleware functions
│   └── validation.ts   # Request validation middleware
├── schemas/            # Data validation schemas
│   ├── index.ts        # Schema exports
│   └── userSchemas.ts  # User validation schemas
├── types/              # TypeScript type definitions
│   ├── index.ts        # Main types export
│   ├── common/         # Shared types across application
│   │   └── index.ts    # ValidationSchema, common interfaces
│   └── user/           # User-specific types
│       ├── index.ts
│       └── userTypes.ts # UserRegistrationData interface
├── services/           # Business services (future enhancement)
│   ├── userService.ts
│   └── authService.ts
├── models/             # Data models (future enhancement)
│   └── User.ts
└── utils/              # Shared utilities (future enhancement)
    ├── database.ts
    └── helpers.ts
```

#### 🏷️ Type System Best Practices

The project implements a centralized type system following enterprise best practices:

- **Separation of Concerns** - Types are separated from business logic
- **Modular Organization** - Types grouped by domain (user, common, etc.)
- **Easy Imports** - Index files provide clean import paths
- **Reusability** - Common types shared across the application
- **Maintainability** - Clear structure for adding new types

```typescript
// Example: Importing types
import { UserRegistrationData } from '../types/user';
import { ValidationSchema } from '../types/common';

// Or import all types
import { UserRegistrationData, ValidationSchema } from '../types';
```

## 🚀 Enterprise Roadmap

### 🔧 Production Enhancements
- [x] **Code Quality Tools** - ESLint v9 with TypeScript support and Prettier integration
- [x] **Type System Organization** - Centralized TypeScript type definitions with modular structure
- [x] **Data Validation** - Request/response validation with Joi schemas
- [ ] **Logging & Monitoring** - Implement structured logging (Winston/Pino)
- [ ] **Error Handling** - Global error handling middleware
- [ ] **Database Integration** - PostgreSQL/MongoDB with ORM/ODM
- [ ] **Authentication** - JWT-based authentication system
- [ ] **Testing Suite** - Unit and integration tests (Jest/Supertest)
- [ ] **Containerization** - Docker configuration for deployment
- [ ] **CI/CD Pipeline** - Automated testing and deployment
- [ ] **API Documentation** - OpenAPI/Swagger documentation
- [ ] **Security** - Rate limiting, CORS, helmet middleware

### 📚 Enterprise Resources
- [Express.js Enterprise Documentation](https://expressjs.com/)
- [TypeScript Enterprise Guide](https://www.typescriptlang.org/docs/)
- [Node.js Production Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Enterprise Architecture Patterns](https://microservices.io/)

## 🤝 Team Collaboration

### 📋 Development Workflow
1. **Create Feature Branch** - `git checkout -b feature/feature-name`
2. **Implement Changes** - Follow TypeScript best practices
3. **Test Implementation** - Ensure all tests pass
4. **Commit Changes** - `git commit -m 'feat: add feature description'`
5. **Push Branch** - `git push origin feature/feature-name`
6. **Create Pull Request** - Submit for code review

### 📋 Code Standards
- **TypeScript Strict Mode** - Maintain type safety
- **Consistent Naming** - Follow established conventions
- **Comprehensive Testing** - Include unit and integration tests
- **Documentation Updates** - Update relevant documentation
- **Code Review** - All changes require peer review

## 🐛 Issue Management

### 📋 Bug Reporting Process
1. **Search Existing Issues** - Check for similar reported problems
2. **Create Detailed Issue** with:
   - **Problem Description** - Clear explanation of the issue
   - **Reproduction Steps** - Step-by-step instructions
   - **Environment Details** - Node.js version, OS, dependencies
   - **Error Logs** - Relevant error messages and stack traces
   - **Expected vs Actual Behavior** - Clear comparison

[🔗 Create Issue](https://github.com/jonnyalexbh/express-typescript-boilerplate/issues)

## 📄 License

This project is licensed under the **ISC License**. See the `LICENSE` file for complete details.

## 📞 Enterprise Support

### 🔗 Project Resources
- **📁 Repository**: [express-typescript-boilerplate](https://github.com/jonnyalexbh/express-typescript-boilerplate)
- **🐛 Issue Tracker**: [GitHub Issues](https://github.com/jonnyalexbh/express-typescript-boilerplate/issues)
- **📖 Documentation**: [Project Wiki](https://github.com/jonnyalexbh/express-typescript-boilerplate#readme)

### 💼 Enterprise Contact
For enterprise support, custom implementations, or consulting services, please contact the development team through the project repository.

---

<div align="center">
  <p><strong>Enterprise Express TypeScript Boilerplate</strong></p>
  <p>Built for development teams requiring robust, scalable backend solutions</p>
  <p>For technical support, please create an issue in the repository</p>
</div>
