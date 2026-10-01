# Node.js CI/CD Pipeline

## Project Overview

A Node.js application demonstrating an automated CI/CD pipeline using
GitHub Actions and Docker.

## Technologies Used

- Node.js
- Express.js
- Docker
- Docker Hub
- GitHub Actions
- Git

## Application

### Home Endpoint

<img width="1408" height="881" alt="Screenshot 2026-10-01 at 8 59 51 PM" src="https://github.com/user-attachments/assets/87ed855a-c48f-43c2-8340-14976c3030d5" />

### Health Endpoint

<img width="1408" height="881" alt="Screenshot 2026-10-01 at 9 00 05 PM" src="https://github.com/user-attachments/assets/d882d8ce-60b8-458b-a312-feaa2e397f45" />

## CI/CD Pipeline

Every push to the `main` branch triggers the GitHub Actions workflow.

The pipeline:

1. Checks out the source code
2. Sets up Node.js
3. Installs dependencies
4. Runs tests
5. Logs into Docker Hub
6. Builds the Docker image
7. Pushes the image to Docker Hub

### Successful Pipeline

<img width="1408" height="881" alt="Screenshot 2026-10-01 at 9 00 35 PM" src="https://github.com/user-attachments/assets/fefd84b6-c06a-4181-9d1e-d3b64141d322" />


## Docker Image

Docker Hub:

`ayush0shahir/nodejs-demo-app:latest`

### Docker Hub Image

<img width="1408" height="881" alt="Screenshot 2026-10-01 at 8 22 24 PM" src="https://github.com/user-attachments/assets/ddf4460c-e74c-4468-b819-116882bf5cdf" />


## Project Structure

```text
nodejs-demo-app/
├── .github/
│   └── workflows/
│       └── main.yml
├── app.js
├── app.test.js
├── Dockerfile
├── package.json
├── package-lock.json
├── .dockerignore
├── .gitignore
└── README.md
