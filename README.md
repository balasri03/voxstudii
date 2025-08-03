# VoxStudii 🎓📢

VoxStudii is a feedback management platform designed to improve communication between students and administrators. It allows students to submit categorized feedback and enables administrators to manage and respond effectively. 

Admins are also notified via email if they haven't logged in within the past 7 days, ensuring timely attention to student feedback.

---

## 🌟 Preview

### 🏠 Homepage
![VoxStudii Home](assets/screenshots/home.png)
### 📝 Feedback Form
![Feedback Form](assets/screenshots/feedback.png)
### 🔐 Admin Login
![Admin Login](assets/screenshots/admin.png)

### 📋 Dashboard (after login)
*(Include this screenshot here when available)*

---

## ✨ Features

### 🧑‍🎓 Students:
- Submit feedback in specific categories: Mess, Hostel, Academics, Others.
- Easy-to-use, clean interface.
- Option to remain anonymous or include name.

### 🧑‍💼 Admins:
- View feedback by category.
- Receive **email reminders** if not logged in for more than 7 days.
- Secure login system.

---

## ⚙️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Flask (Python)
- **Database**: SQLite
- **Email Alerts**: `smtplib`
- **Scheduler**: `APScheduler` (periodic login check)

---

## 📁 Project Structure

```bash
voxstudii/
├── static/                 # CSS, JS, Images
├── templates/              # HTML files
├── app.py                  # Main Flask app
├── scheduler.py            # Email reminder script
├── utils.py                # Utility functions
├── database/voxstudii.db   # SQLite database
└── README.md
