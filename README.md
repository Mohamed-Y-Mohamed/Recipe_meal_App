# **Flavour Fusion - Recipe App**

Flavour Fusion is a full-stack web application that allows users to explore, like/unlike, and save their favorite meals. Users can create an account, sign in, manage their profile, and interact with meals fetched from an external API. The app uses a MongoDB database to store user data and liked meals.

## **Table of Contents**
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [API Endpoints](#api-endpoints)
5. [Frontend Components](#frontend-components)
6. [Backend Structure](#backend-structure)
7. [Screenshots](#screenshots)
8. [Credits](#credits)

---

## **Features**

### **Authentication**
- **Sign Up & Sign In**: Users can create an account, sign in with their credentials, and manage their session with secure JWT tokens.
- **Session Management**: The app stores user session data (customerId and token) in sessionStorage.
- **Protected Routes**: Only logged-in users can like/unlike meals and access favorite meals.

### **Meal Exploration**
- **Fetch Meals**: The app fetches meal data from the [TheMealDB API](https://www.themealdb.com) and displays meal details including name, category, and origin.
- **Like/Unlike Meals**: Authenticated users can like or unlike meals. Liked meals are stored in the user's profile.

### **Profile Management**
- **Profile View & Update**: Users can view and update their profile details, including name, email, profession, and bio. Profile images can also be uploaded or removed.
- **Favorite Meals**: Users can view all their liked meals and unlike them directly from the "Favorite Meals" page.

---

## **Tech Stack**

| **Category**        | **Technology**                 |
|---------------------|--------------------------------|
| **Frontend**        | React, Tailwind CSS, React Router |
| **Backend**         | Node.js, Express               |
| **Database**        | MongoDB                        |
| **Authentication**  | JWT (JSON Web Tokens)          |
| **API Integration** | TheMealDB API                  |

---

## **Installation**

### **Backend Setup**
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/flavour-fusion.git
   cd flavour-fusion/backend
Install dependencies:
bash
Copy code
npm install
Set up environment variables in .env:
bash
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the backend server:
bash
Copy code
npm run dev
Frontend Setup
Navigate to the frontend folder:
bash
Copy code
cd ../frontend
Install frontend dependencies:
bash
Copy code
npm install
Start the frontend app:
bash
Copy code
npm start
API Endpoints
Method	Endpoint	Description
POST	/api/signup	Sign up a new user
POST	/api/login	Log in and receive JWT token
GET	/api/recipes/search	Fetch meals from TheMealDB API
POST	/api/customer/:customerId/like	Like or unlike a meal
GET	/api/customer/:customerId	Retrieve user profile
PUT	/api/customer/:customerId	Update user profile
GET	/api/customer/:customerId/favorites	Fetch user's favorite meals
Frontend Components
NavBar: Responsive navigation bar with dynamic links based on user login status.
RecipeMeals: Displays a list of meals fetched from the external API, allowing users to like/unlike meals.
FavoriteMeals: Displays a list of meals the user has liked.
Profile: Allows users to view and update their profile information.
Signin/Signup: Authentication forms for user login and registration.
Backend Structure
Express Server: Handles routing and API logic for authentication, profile management, and interactions with MongoDB.
JWT Authentication: Secures protected routes such as liking/unliking meals and updating the profile.
MongoDB Integration: User data, including profile information and liked meals, is stored in MongoDB.
