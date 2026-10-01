# Node.js CI/CD Pipeline

A simple Node.js application demonstrating CI/CD automation using GitHub Actions and Docker.

## Objective

Automate the process of testing the Node.js application, building a Docker image, and pushing the image to Docker Hub.

## Technologies Used

- Node.js
- Express.js
- Docker
- Docker Hub
- GitHub
- GitHub Actions

## Application

The application provides:

- `/` — Main application page
- `/health` — Health check endpoint

## CI/CD Pipeline

The pipeline will run automatically when code is pushed to the `main` branch.

```text
Push to main
     ↓
Checkout code
     ↓
Setup Node.js
     ↓
Install dependencies
     ↓
Run tests
     ↓
Build Docker image
     ↓
Push Docker image to Docker Hub


Docker

Build locally:

docker build -t nodejs-demo-app .

Run locally:

docker run -p 3000:3000 nodejs-demo-app

Open:

http://localhost:3000

Save it.

---

# 3. Check your folder

Your project should now look like:

```text
nodejs-demo-app/
│
├── node_modules/
├── app.js
├── app.test.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── .gitignore
└── README.md