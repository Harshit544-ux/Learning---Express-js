# Learning-Backend

A day-by-day backend development learning journey using **Node.js**, **Express.js**, and **MongoDB**.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js v5
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JSON Web Tokens (JWT) + Cookies
- **Password Hashing:** bcrypt
- **Validation:** validator.js

## Project Structure

```
├── Day1.js                    # Node.js basics & CommonJS imports
├── Day2.js                    # Module exports (named exports)
├── Day3.js                    # Module exports (default export)
├── Calculator/                # Modular calculator project
│   ├── app.js                 # Entry point
│   ├── index.js               # Barrel file (re-exports all operations)
│   ├── sum.js                 # Addition
│   ├── sub.js                 # Subtraction
│   └── mul.js                 # Multiplication
├── Day4/                      # HTTP server with Node.js core module
│   ├── index.js               # Basic HTTP server
│   └── server.js              # HTTP server with routing
├── Day5/                      # Introduction to Express.js
│   ├── index.js               # Basic Express server
│   ├── second.js              # Dynamic routing & query params
│   └── package.json
├── Day6/                      # REST API with MongoDB & Auth
│   ├── index.js               # Basic CRUD API
│   ├── second.js              # Logger middleware, GET & POST routes
│   ├── third.js               # Shopping cart CRUD (in-memory)
│   ├── four.js                # Full auth API (register, login, protected routes)
│   ├── database/
│   │   └── config.js          # MongoDB connection setup
│   ├── middlewares/
│   │   └── auth.js            # JWT authentication middleware
│   ├── model/
│   │   └── userModal.js       # Mongoose User schema
│   ├── utils/
│   │   ├── constants.js       # JWT secret & salt rounds
│   │   └── validateUser.js    # Input validation logic
│   └── package.json
└── package.json
```

## Day-by-Day Breakdown

### Day 1–3: Node.js Fundamentals

- CommonJS module system (`require` / `module.exports`)
- Named and default exports
- Importing and composing modules

### Calculator: Modular Project

- Splitting logic into separate files (`sum.js`, `sub.js`, `mul.js`)
- Barrel file pattern for clean re-exports (`index.js`)

### Day 4: HTTP Server (Node.js Core)

- Creating a server with the built-in `http` module
- Basic routing using `req.url`
- Handling 404 responses

### Day 5: Express.js Basics

- Setting up an Express server
- Sending JSON responses
- Dynamic route parameters (`req.params`)
- Query string parameters (`req.query`)

### Day 6: REST API, Database & Authentication

| File | Topics Covered |
|------|----------------|
| `index.js` | MongoDB CRUD — register, get, update, delete users |
| `second.js` | Custom logger middleware, `GET` & `POST` with query/body parsing |
| `third.js` | In-memory shopping cart with full CRUD operations |
| `four.js` | User registration with validation & password hashing, login with JWT, cookie-based auth, protected routes via auth middleware |

#### API Endpoints (four.js)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/register` | ✗ | Register a new user |
| POST | `/login` | ✗ | Login & receive JWT cookie |
| GET | `/users` | ✓ | Get all users |
| PUT | `/users` | ✓ | Update a user by ID |
| DELETE | `/users/:id` | ✓ | Delete a user by ID |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

### Installation

```bash
git clone https://github.com/Harshit544-ux/Learning-Backend.git
cd Learning-Backend
npm install
```

For Day 5 and Day 6, install dependencies inside their directories as well:

> **Note:** Update the MongoDB connection string in `Day6/database/config.js` with your own credentials before running the Day 6 API.

```bash
cd Day5 && npm install && cd ..
cd Day6 && npm install && cd ..
```

### Running

```bash
# Day 1-3 basics
node Day1.js

# Calculator
node Calculator/app.js

# Day 4 - HTTP server
node Day4/server.js

# Day 5 - Express basics
node Day5/second.js

# Day 6 - Full REST API with auth
node Day6/four.js
```

## License

ISC
