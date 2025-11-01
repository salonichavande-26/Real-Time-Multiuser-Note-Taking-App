#  Real-Time Multiuser Note-Taking App

A **real-time collaborative note-taking application** built using **Node.js, Express, MySQL, and WebSocket**.  
This app allows multiple users to create, edit, and share notes simultaneously — just like Google Docs, but simplified!

---

## Features

- User Registration and Login (with password encryption)
- Create, Edit, and Delete Notes
- Real-Time Updates (multiple users can edit the same note)
- MySQL Database Integration
- RESTful API built with Express
- Secure Authentication and Error Handling
- Modular and Scalable Backend Code Structure

---

## Tech Stack

| Category | Technologies Used |
|-----------|-------------------|
| **Frontend** | HTML, CSS, JavaScript *(React optional)* |
| **Backend** | Node.js, Express.js |
| **Database** | MySQL |
| **Real-Time Communication** | Socket.io (or WebSocket) |
| **Environment Variables** | dotenv |
| **API Testing** | Thunder Client / Postman |

---

##  Installation & Setup

### 1️ Clone this repository
```bash
git clone https://github.com/<your-username>/Real-Time-Multiuser-Note-Taking-App.git
cd Real-Time-Multiuser-Note-Taking-App


Navigate to the backend folder
cd user-backend

Install dependencies
npm install

Create a .env file

In the user-backend folder, create a file named .env and add the following:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=realtime_notes_db
PORT=5000
JWT_SECRET=mysecretkey

Set up the MySQL Database

You can use MySQL Workbench, phpMyAdmin, or your MySQL terminal.

Run the following SQL commands:
CREATE DATABASE realtime_notes_db;
USE realtime_notes_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  is_admin BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE notes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  title VARCHAR(255),
  content TEXT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

Run the backend server
npm run dev

If everything is set up correctly, you should see:

✅ Server running on port 5000
✅ Connected to MySQL Database


