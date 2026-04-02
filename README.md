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
    ```
    npm run seed
    ```
**Production Mode:**
    ```
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



## 🧪 Testing with Postman

A pre-configured Postman collection is included in this repository to easily test all endpoints, including data validation and dynamic database IDs.

### 1. Import the Collection
1. Open the Postman application.
2. Click the **Import** button (usually located in the top-left area of the workspace).
3. Select or drag-and-drop the `Pipeline_Alerts_API.postman_collection.json` file located in the root directory of this project.

### 2. Configuration (Base URL Variable)
This collection uses a built-in variable to manage the server address, so you don't have to type it manually for every request.
* By default, the `{{baseUrl}}` variable is set to `http://localhost:5000`. 
* **If your server runs on a different port:** Click on the **Pipeline Alerts API** collection folder on the left sidebar, navigate to the **Variables** tab, update the `baseUrl` value to match your port, and click **Save**.

### 3. How to Test Dynamic Routes
Routes like `GET by ID`, `PUT`, and `DELETE` require a real database ID to work. To test these:
1. Run the **"2. Get All Alerts (No Filters)"** request.
2. Look at the response data and copy an `id` string (e.g., `"662a5b9f9c..."`).
3. Open the specific request you want to test (e.g., **"7. Update an Alert"**).
4. In the URL bar, highlight `REPLACE_WITH_ACTUAL_ID` and paste your copied ID.
5. Hit **Send**.

### 4. Testing Validation
Run the **"9. Test Validation Error (Bonus)"** request to see the Express-Validator middleware in action. It will intentionally send an empty and incorrectly formatted payload to trigger a `400 Bad Request` and return an array of specific error messages.

