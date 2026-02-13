# 🎓 College Club Manager

<div align="center">

![Flask](https://img.shields.io/badge/Flask-2.3.2-000000?style=for-the-badge&logo=flask&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.8+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A comprehensive web platform for managing college clubs, events, and student opportunities.**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## 📋 Overview

College Club Manager is a full-stack web application designed to streamline the management of college clubs and student engagement. It provides separate interfaces for students and club representatives, enabling seamless interaction between club organizers and potential members.

## ✨ Features

### For Students 👨‍🎓
- 🔐 **Secure Registration & Authentication** - Create accounts with student credentials
- 📊 **Personalized Dashboard** - View opportunities tailored to your interests
- 🔍 **Browse Opportunities** - Explore events, workshops, and club activities
- 📝 **Apply to Opportunities** - Submit applications with ease
- 👤 **Profile Management** - Update skills, interests, and personal information
- 🎯 **Skill-Based Matching** - Get recommendations based on your skills

### For Club Representatives 🏛️
- 🎫 **Opportunity Management** - Create, edit, and delete club opportunities
- 📈 **Application Tracking** - Review and manage student applications
- ✅ **Accept/Reject Applications** - Process applications efficiently
- 📊 **Club Dashboard** - Monitor club activities and engagement
- 🔔 **Notification System** - Stay updated on new applications

### Security & Authentication 🔒
- Password hashing using Werkzeug security
- Flask-Login session management
- Role-based access control (Student/Club Representative)
- Protected routes and authentication required pages

## 🛠️ Tech Stack

### Backend
- **Framework:** Flask 2.3.2
- **Database:** PostgreSQL (with SQLAlchemy ORM)
- **Authentication:** Flask-Login 0.6.2
- **Migrations:** Flask-Migrate 4.0.4
- **Security:** Werkzeug 2.3.7

### Frontend
- **Templating:** Jinja2 3.1.6
- **HTML/CSS:** Responsive design
- **Static Assets:** Flask static file handling

### Database
- PostgreSQL with SQLAlchemy 2.0.40
- psycopg2-binary for PostgreSQL adapter
- Flask-SQLAlchemy for ORM integration

## 📦 Installation

### Prerequisites
- Python 3.8 or higher
- PostgreSQL database
- pip package manager

### Step 1: Clone the Repository
```bash
git clone https://github.com/moulik3637/College-Club-Manager.git
cd College-Club-Manager
```

### Step 2: Create Virtual Environment
```bash
python -m venv venv

# On Windows
venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate
```

### Step 3: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 4: Configure Database
Create a `.env` file in the root directory:
```env
DATABASE_URL=postgresql://username:password@host:port/database_name
SECRET_KEY=your-secret-key-here
```

### Step 5: Initialize Database
```bash
flask db init
flask db migrate -m "Initial migration"
flask db upgrade
```

### Step 6: Run the Application
```bash
python app.py
```

The application will be available at `http://localhost:5000`

## 🚀 Usage

### Student Registration
1. Navigate to the registration page
2. Select "Student" as your role
3. Fill in your details (username, email, department, roll number, skills)
4. Submit the form to create your account

### Club Representative Registration
1. Navigate to the registration page
2. Select "Club Representative" as your role
3. Provide club details and credentials
4. Submit to create your club account

### Creating Opportunities (Club Reps)
1. Log in to your club representative account
2. Navigate to the dashboard
3. Click "Create Opportunity"
4. Fill in opportunity details (title, description, required skills, deadline)
5. Publish the opportunity

### Applying to Opportunities (Students)
1. Log in to your student account
2. Browse available opportunities
3. Click on an opportunity to view details
4. Submit your application

## 📁 Project Structure

```
College-Club-Manager/
├── app.py                  # Main application file
├── requirements.txt        # Python dependencies
├── Procfile.txt           # Deployment configuration
├── static/                # Static files (CSS, JS, images)
├── templates/             # HTML templates
│   ├── base.html         # Base template
│   ├── index.html        # Landing page
│   ├── login.html        # Login page
│   ├── register_role.html
│   ├── register_student.html
│   ├── register_club.html
│   ├── dashboard_student.html
│   ├── dashboard_club.html
│   ├── opportunities.html
│   ├── opportunity_detail.html
│   ├── create_opportunity.html
│   ├── edit_opportunity.html
│   ├── club_opportunities.html
│   └── profile.html
└── migrations/            # Database migrations
```

## 🗄️ Database Schema

### Users Table
- `id` - Primary key
- `username` - Unique username
- `email` - User email
- `password` - Hashed password
- `role` - User role (student/club_rep)

### Students Table
- `user_id` - Foreign key to Users
- `roll_number` - Unique roll number
- `department` - Student department
- `year_of_study` - Current year
- `skills` - Student skills

### Clubs Table
- `user_id` - Foreign key to Users
- `club_name` - Name of the club
- `description` - Club description
- `category` - Club category

### Opportunities Table
- `id` - Primary key
- `club_id` - Foreign key to Clubs
- `title` - Opportunity title
- `description` - Detailed description
- `required_skills` - Skills needed
- `deadline` - Application deadline
- `status` - Open/Closed

### Applications Table
- `id` - Primary key
- `student_id` - Foreign key to Students
- `opportunity_id` - Foreign key to Opportunities
- `status` - Pending/Accepted/Rejected
- `applied_at` - Application timestamp

## 🔐 Environment Variables

```env
SECRET_KEY=your-secret-key
DATABASE_URL=postgresql://user:password@host:port/database
FLASK_ENV=development  # or production
FLASK_APP=app.py
```

## 🚢 Deployment

This application is ready for deployment on platforms like:
- **Heroku** (Procfile included)
- **Railway**
- **Render**
- **AWS EC2/Elastic Beanstalk**

Make sure to:
1. Set environment variables on your hosting platform
2. Configure PostgreSQL database
3. Update `DATABASE_URL` in production

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Moulik**
- GitHub: [@moulik3637](https://github.com/moulik3637)

## 🙏 Acknowledgments

- Flask documentation and community
- PostgreSQL team
- All contributors and supporters

## 📧 Contact

For questions or support, please open an issue on GitHub or contact the maintainer.

---

<div align="center">

**⭐ Star this repository if you find it helpful! ⭐**

Made with ❤️ by [Moulik](https://github.com/moulik3637)

</div>
