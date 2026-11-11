<div align="center">

# 🎓 Learning Management System

A full-stack platform for managing online courses, student enrollment, and video-based learning.

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

</div>

## 📌 Overview

The Learning Management System (LMS) is a full-stack web application built to make online learning and course administration easier. Students can browse courses, enroll, and access course videos. Administrators can manage courses and learning content.

## ✨ Features

- User registration and login
- JWT-based authentication (if enabled in your configuration)
- Admin and student workflows
- Add, update, view, and delete courses
- Course enrollment and **My Courses** page
- Course details and video content management
- Video playback using Cloudinary-hosted links
- REST API communication between frontend and backend

## 🧰 Tech Stack

| Layer | Technologies |
|---|---|
| Backend | Java, Spring Boot |
| Persistence | Spring Data JPA, Hibernate |
| Frontend | React, JavaScript, HTML, CSS, Bootstrap |
| Database | MySQL |
| API | REST, Axios |
| Media | Cloudinary |
| Tools | Maven, Postman, Git, GitHub |

## 🗂️ Project Structure

```text
LMS/
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── ...
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
```

> Update this structure to match your actual repository folders.

## ⚙️ Getting Started

### Prerequisites

- Java and Maven
- Node.js and npm
- MySQL
- Git

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
cd YOUR_REPOSITORY_FOLDER
```

### 2. Configure the database

Create a MySQL database and update the backend configuration (commonly `application.properties`) with your database URL, username, and password.

Keep credentials and JWT secrets out of Git. Use environment variables or a local, untracked configuration file.

### 3. Run the backend

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

### 4. Run the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by the frontend development server.

## 🖼️ Screenshots

Add screenshots to a `screenshots/` folder and update the paths below.

```md
![LMS Home](screenshots/home.png)
![Course Details](screenshots/course-details.png)
```

## 🔮 Future Enhancements

- Course progress tracking
- Quizzes and assessments
- Certificates on course completion
- Payment integration
- Student analytics and reports

## 👨‍💻 Author

**Nithish Kumar S N**  
Computer Science and Engineering

---

If you find this project useful, feel free to star the repository!
