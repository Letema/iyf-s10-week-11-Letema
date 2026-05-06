# CommunityHub API - Database & Authentication

This project is a robust RESTful API for a community platform, built with Node.js, Express, and MongoDB. This version includes full data persistence and secure user authentication.

## 🚀 Features

- **Data Persistence**: Integrated with MongoDB Atlas using Mongoose ODM.
- **Authentication**: Secure user registration and login using JWT (JSON Web Tokens).
- **Security**: Password hashing with `bcryptjs` and protected route middleware.
- **Relationships**: Linking Users to Posts and Posts to Comments.
- **Advanced CRUD**: 
  - Text-based search for posts.
  - Sorting and pagination.
  - Ownership checks (Users can only edit/delete their own content).
  - Admin roles for global management.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB Atlas
- **Authentication**: JWT, BcryptJS
- **ODM**: Mongoose

## 📋 Prerequisites

Before running the server, ensure you have a `.env` file in the root directory with the following variables:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d
```

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd iyf-s10-week-11-repo-name
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   node server.js
   ```

## 🛣️ API Endpoints

### Authentication

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user & get token |
| GET | `/api/auth/me` | Get current user profile (Protected) |

### Posts

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/api/posts` | Get all posts (Search/Sort/Pagination) |
| POST | `/api/posts` | Create a post (Protected) |
| GET | `/api/posts/:id` | Get single post |
| PUT | `/api/posts/:id` | Update post (Owner only) |
| DELETE | `/api/posts/:id` | Delete post (Owner or Admin) |

### Comments

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/api/posts/:postId/comments` | Get comments for a post |
| POST | `/api/posts/:postId/comments` | Add a comment (Protected) |

## 🧪 Testing with Postman
1. **Register** a user to get a token.
2. In Postman, go to the **Authorization** tab.
3. Select **Bearer Token** and paste your JWT.
4. Now you can access Protected routes like `POST /api/posts`.

## 📂 Project Structure
- `src/models`: Database schemas (User, Post, Comment)
- `src/controllers`: Logic for handling requests
- `src/middleware`: Auth and protection logic
- `src/routes`: API endpoint definitions
- `src/config`: Database connection setup
