---

<p align="center">
  <img src="\studenterp.png" alt="Student ERP API Banner" width="100%">
</p>

# Student ERP API 🚀  
A secure Node.js + Express + MongoDB API designed to provide structured student data to developers, learners, and open-source communities — **absolutely free**.

Built and maintained by **Prajjal Dhar** ❤️

---

## 📊 Badges

![Node.js](https://img.shields.io/badge/Node.js-18+-green)  
![Express](https://img.shields.io/badge/Express.js-minimalist-black)  
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-success)  
![API Security](https://img.shields.io/badge/Secured%20By-API%20Key-blue)  
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## ✨ Features

- API-key protected access
- CORS enabled
- MongoDB Atlas integration
- Clean JSON responses
- Perfect for training, frontend apps, and demo ERP systems
- Lightweight and deploy-ready

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **dotenv**
- **CORS**

---

## 📁 Project Structure

```

project/
│── server.js
│── .env
│── package.json
│── node_modules/
│── README.md

```

---

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env`

```
API_KEY=your-secret-api-key
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/studenterp
```

### 4. Run the server

```bash
node server.js
```

Server runs at:

```
http://localhost:8080/studenterp/all
```

---

## 🔐 API Key Authentication

All requests **must** include the API key.

### Header

```
x-api-key: your-secret-api-key
```

### OR Query Parameter

```
?apiKey=your-secret-api-key
```

Errors:

- Missing → **401 Unauthorized**
- Invalid → **403 Forbidden**

---

## 📡 API Endpoints

### **GET /studenterp/all**

Fetch all student records.

#### Example (Axios)

```js
axios.get("http://localhost:8080/studenterp/all", {
  headers: { "x-api-key": "your-secret-api-key" },
});
```

#### Example (cURL)

```bash
curl -X GET http://localhost:8080/studenterp/all \
-H "x-api-key: your-secret-api-key"
```

---

## 📜 Sample JSON Response

```json
[
  {
    "_id": "676a12345abcedf",
    "data": {
      "name": "Aahan",
      "fatherName": "Kabir",
      "dob": "2008-04-12",
      "scores": []
    }
  }
]
```

---

## 🧩 Core Code Reference

### API Key Middleware

```js
const apiKeyAuth = (req, res, next) => {
  const userKey = req.headers["x-api-key"] || req.query.apiKey;

  if (!userKey) {
    return res.status(401).json({ success: false, message: "API key missing" });
  }

  if (userKey !== process.env.API_KEY) {
    return res.status(403).json({ success: false, message: "Invalid API key" });
  }

  next();
};
```

### Protected Route

```js
app.get("/studenterp/all", apiKeyAuth, async (req, res) => {
  try {
    const data = await AllDataModel.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
```

## ❤️ Contributing

Pull requests, improvements, and enhancements are welcome.
This API exists to support developers and communities worldwide.

---

## 👑 Credits

Created with passion by **Prajjal Dhar**.
Dedicated to helping communities with **free, open-source APIs**.

If you like this project, please star the repository ⭐

---
