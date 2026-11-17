# 🚀 Node.js CI/CD Pipeline

A simple and robust Node.js application demonstrating continuous integration and continuous deployment (CI/CD) automation using **GitHub Actions**, **Docker**, and **Docker Hub**.

---

## 🎯 Project Overview

This project showcases an automated DevOps workflow:
- 🧪 Automatically executes unit tests on every code change.
- 🐳 Builds an optimized Docker container image.
- ☁️ Pushes the built container to Docker Hub on every merge/push to `main`.

---

## ⚒️ Technologies Used

- 🟢 **Node.js** (v24)
- 🚂 **Express.js** (v5)
- 🐳 **Docker & Docker Hub**
- 🐙 **GitHub & GitHub Actions**
- 🧪 **Node.js Built-in Test Runner** (`node:test`)

---

## 📱 Application Endpoints

When running locally or via Docker, the service exposes two endpoints on port `3000`:

| Endpoint | Method | Description | Sample Output |
| :--- | :--- | :--- | :--- |
| `/` | `GET` | Home / Welcome message | `"Hello from my updated CI/CD Pipeline! 🚀"` |
| `/health` | `GET` | Application health check status | `{"status":"OK","message":"Application is healthy"}` |

### 📸 Home Endpoint
<img width="1408" height="881" alt="Home Endpoint Screenshot" src="https://github.com/user-attachments/assets/87ed855a-c48f-43c2-8340-14976c3030d5" />

### 📸 Health Endpoint
<img width="1408" height="881" alt="Health Endpoint Screenshot" src="https://github.com/user-attachments/assets/d882d8ce-60b8-458b-a312-feaa2e397f45" />

---

## 💻 Running Locally

### 1️⃣ Run Directly with Node.js

```bash
# Install dependencies
npm install

# Run automated tests
npm test

# Start the application
npm start
```
The server will start at [http://localhost:3000](http://localhost:3000).

### 2️⃣ Run via Docker

```bash
# Build the Docker image
docker build -t nodejs-demo-app .

# Run the container
docker run -p 3000:3000 --name demo-app --rm nodejs-demo-app
```
*(If port 3000 is occupied on your host, you can map it to 8080: `docker run -p 8080:3000 --name demo-app --rm nodejs-demo-app`)*

---

## 🔄 CI/CD Pipeline Workflow

Every push to the `main` branch automatically triggers the GitHub Actions workflow defined in [`.github/workflows/main.yml`](.github/workflows/main.yml).

```text
Push to main
     ↓
📥 Checkout code
     ↓
⚙️ Setup Node.js v24
     ↓
📦 Install dependencies (npm ci)
     ↓
🧪 Run unit tests (npm test)
     ↓
🔐 Login to Docker Hub
     ↓
🐳 Build and push Docker image to Docker Hub
```

---

## 🔍 How to Check the CI/CD Pipeline

Follow these steps to test and verify the CI/CD pipeline end-to-end:

### Step 1: Ensure GitHub Secrets are Configured 🔐
The pipeline requires Docker Hub credentials to push images:
1. In your GitHub repository, navigate to **Settings** > **Secrets and variables** > **Actions**.
2. Make sure the following repository secrets are set:
   - `DOCKERHUB_USERNAME`: Your Docker Hub username.
   - `DOCKERHUB_TOKEN`: A Personal Access Token generated from [Docker Hub Account Settings](https://hub.docker.com/settings/security).

### Step 2: Trigger the Pipeline 🚀
Push any commit to the `main` branch:
```bash
git add .
git commit -m "Update application or documentation"
git push origin main
```

### Step 3: Monitor Workflow Execution 👀
1. Open the **Actions** tab in your repository:
   👉 `https://github.com/<your-username>/nodejs-demo-app/actions`
2. Click on the latest workflow run: **Node.js CI/CD Pipeline**.
3. Click into the **build-and-push** job to inspect live step-by-step logs and confirm all steps finish with green checkmarks.

### 📸 Successful Pipeline
<img width="1408" height="881" alt="Successful Pipeline Run" src="https://github.com/user-attachments/assets/fefd84b6-c06a-4181-9d1e-d3b64141d322" />

### Step 4: Verify the Docker Hub Image 📦
Once the pipeline finishes:
1. Navigate to your [Docker Hub Repositories](https://hub.docker.com/).
2. Check your repository:
   ```text
   ayush0shahir/nodejs-demo-app:latest
   ```
3. Verify that the image has been updated with the latest timestamp.

### 📸 Docker Hub Image
<img width="1408" height="881" alt="Docker Hub Image" src="https://github.com/user-attachments/assets/ddf4460c-e74c-4468-b819-116882bf5cdf" />

---

## 📁 Project Structure

```text
nodejs-demo-app/
├── .github/
│   └── workflows/
│       └── main.yml        # CI/CD pipeline definition
├── app.js                  # Express server & route endpoints
├── app.test.js             # Automated unit tests
├── Dockerfile              # Docker container configuration
├── package.json            # Project dependencies and npm scripts
├── package-lock.json       # Exact lockfile for reproducible builds
├── .dockerignore           # Excluded files from Docker context
├── .gitignore              # Ignored files from git tracking
└── README.md               # Project documentation
```
