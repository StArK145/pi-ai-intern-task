# Pipeline Alert Management REST API

A robust RESTful backend API built with Node.js, Express, and MongoDB to manage pipeline leak and theft alerts. This API handles the full lifecycle of alerts and features input validation, pagination, and advanced MongoDB aggregation for summary statistics.

## 🚀 Tech Stack

* **Runtime:** Node.js (ES Modules)
* **Framework:** Express.js
* **Database:** MongoDB
* **ODM:** Mongoose
* **Validation:** Express-Validator

## 📦 Prerequisites

Before running this project, ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v14 or higher)
* [MongoDB](https://www.mongodb.com/try/download/community) (running locally or via MongoDB Atlas)
* [Postman](https://www.postman.com/) (for testing the API endpoints)

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/StArK145/pi-ai-intern-task.git
   cd pipeline-alerts-api

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/pipeline_alerts
    # (Replace with your Atlas connection string if not using local MongoDB)


# 🗄️ Database Seeding

To quickly test the API, you can populate the database with 5 sample alerts using the built-in seeder script.

> **Warning:** This will wipe any existing alerts in the database.

    ```bash
    npm run seed
    ```


# 💻 Running the Server

**Development Mode (auto-reloads on file changes):**
    ```bash
    npm run seed
    ```
**Production Mode:**
    ```bash
    npm start
    ```
The server will start on http://localhost:5000 (or your configured port).



# 📡 API Endpoints

## 1. Alert Management

| Method | Endpoint | Description | Query Parameters |
|--------|----------|-------------|------------------|
| POST | `/alerts` | Create a new alert | - |
| GET | `/alerts` | Get all alerts | `status`, `alert_type`, `page`, `limit` |
| GET | `/alerts/:id` | Get a specific alert by ID | - |
| PUT | `/alerts/:id` | Update an alert's details | - |
| DELETE | `/alerts/:id` | Delete an alert by ID | - |

**Example GET query:**  
`/alerts?status=active&alert_type=leak&page=1&limit=5`

---

## 2. Aggregation & Statistics

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/alerts/summary` | Returns a count of alerts grouped by status and severity. |

