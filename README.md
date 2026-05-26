# NovaNode Blogging Application

A full-stack blogging platform built with **Angular** and modern web technologies. This project provides a clean and responsive blogging experience with features like authentication, blog management, categories, comments, and user-friendly UI components.

## Features

* User Authentication & Authorization
* Create, Update, Delete Blog Posts
* Category-based Blog Management
* Comment System
* Responsive UI Design
* REST API Integration
* JWT Token-based Security
* Rich Form Validation
* Pagination & Search
* Modern Angular Architecture

---

## Tech Stack

### Frontend

* Angular
* TypeScript
* HTML5
* CSS3 / SCSS
* Bootstrap / Angular Material

### Backend (Integrated APIs)

* Spring Boot
* Java
* REST APIs
* JWT Authentication

### Database

* MySQL

---

## Project Structure

```bash id="1x2m7k"
src/
│── app/
│   ├── components/
│   ├── services/
│   ├── models/
│   ├── pages/
│   ├── guards/
│   ├── interceptors/
│   └── shared/
│
├── assets/
├── environments/
└── styles/
```

---

## Installation & Setup

### 1. Clone the Repository

```bash id="4d8sj2"
git clone https://github.com/sanjaychoudhary12/Angular-Project.git
```

### 2. Navigate to Project Directory

```bash id="7p9s0v"
cd Angular-Project
```

### 3. Install Dependencies

```bash id="5r2j1h"
npm install
```

### 4. Run the Angular Application

```bash id="8w3m9n"
ng serve
```

Application will run at:

```bash id="0n6k4p"
http://localhost:4200/
```

---

## Environment Configuration

Update API base URL inside:

```bash id="2b1t8f"
src/environments/environment.ts
```

Example:

```typescript id="4q9x7m"
export const environment = {
  production: false,
  baseUrl: 'http://localhost:8080/api/'
};
```

---

## Main Functional Modules

### Authentication

* Login
* Registration
* JWT Token Handling
* Route Guards

### Blog Management

* Create Post
* Edit Post
* Delete Post
* View Blog Details

### User Features

* Profile Management
* Commenting System
* Category Filtering

---

## Screenshots

You can add:

* Home Page
* Login Page
* Dashboard
* Blog Details
* Admin Panel

Example:

```markdown id="3y6k1r"
![Home](screenshots/home.png)
```

---

## Future Improvements

* Rich Text Editor
* Dark Mode
* Image Upload Optimization
* Real-time Notifications
* Social Login
* Bookmark Feature
* Docker Deployment

---

## Learning Outcomes

This project demonstrates:

* Angular Component Architecture
* API Integration
* State Management
* Authentication Flow
* Reactive Forms
* Routing & Guards
* Modular Frontend Development

---

## Contributing

Contributions are welcome.

Steps:

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

---

## Author

**Sanjay Choudhary**

* [GitHub Repository](https://github.com/sanjaychoudhary12/Angular-Project?utm_source=chatgpt.com)

---

## License

This project is licensed under the MIT License.
