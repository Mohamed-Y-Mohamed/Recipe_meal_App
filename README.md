Flavour Fusion - Recipe App
Flavour Fusion is a full-stack web application that allows users to explore, like, and save their favorite meals. Users can sign up, log in, and manage their profile, including liking/unliking meals and viewing favorite meals saved in the database.

The app fetches meal data from an external API (TheMealDB) and interacts with a MongoDB database to store user-specific information such as profile details and liked meals.

Table of Contents
Features
Tech Stack
Getting Started
API Endpoints
Frontend Components
Backend Structure
Screenshots
Credits
Features
User Authentication
Sign Up & Sign In: Users can create an account and log in using their email and password.
JWT Token Authentication: JWT is used to manage user sessions, with tokens stored in sessionStorage.
Protected Routes: Certain features like liking meals, viewing saved meals, and updating profile information are only available to logged-in users.
Meals
Meal List: A list of meals fetched from TheMealDB API is displayed to users, with the ability to like or unlike meals.
Favorite Meals: Users can save meals to their profile by liking them. These favorites are saved in the database and displayed on the 'Favorite Meals' page.
Meal Details: Each meal has a detailed page with more information, such as ingredients and instructions.
User Profile
Profile Management: Users can update their full name, email, profession, bio, and profile image.
Profile Image: A default profile image is used if none is uploaded. Users can change or delete their profile picture.
Session Persistence: User information and session tokens are stored in sessionStorage for session management.
Additional Features
Responsive Design: The application is mobile-friendly and adapts to different screen sizes.
Dark Mode: The app supports a dark mode theme for better user experience.
Tech Stack
Frontend
React.js: The application is built using React, with hooks for state management and component lifecycle.
Tailwind CSS: Used for styling and creating responsive designs.
React Router: For routing between different pages in the application.
FontAwesome: Icons are used for UI elements such as like buttons and navigation.
Backend
Node.js: Server-side framework to manage the API and serve the application.
Express.js: The web framework for creating routes and handling HTTP requests.
MongoDB & Mongoose: MongoDB is used as the database to store user data, while Mongoose is used for object data modeling.
JWT: For secure authentication and authorization of users.
Bcrypt.js: For hashing user passwords before storing them in the database.
External APIs
TheMealDB API: Used to fetch meal data for the app.
Getting Started
Prerequisites
Node.js
MongoDB (local or MongoDB Atlas)
Yarn or npm for package management
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/flavour-fusion.git
cd flavour-fusion
Install dependencies for both frontend and backend:

bash
Copy code
cd frontend
npm install # or yarn install
cd ../backend
npm install # or yarn install
Set up the environment variables: Create a .env file in the backend folder and add the following:

env
Copy code
MONGO_URI=mongodb+srv://your-mongodb-uri
JWT_SECRET=your-jwt-secret
Run the backend server:

bash
Copy code
cd backend
npm run dev
Run the frontend development server:

bash
Copy code
cd frontend
npm start
Access the application: Open your browser and navigate to http://localhost:3000.

API Endpoints
Authentication
POST /api/signup: Create a new user account.
POST /api/login: Authenticate a user and return a JWT token.
User Profile
GET /api/customer/:customerId: Get user profile details.
PUT /api/customer/:customerId: Update user profile details.
Meals
GET /api/recipes/search: Fetch all meals from TheMealDB API.
POST /api/customer/:customerId/like: Like or unlike a meal. The meal is either added or removed from the user's likedMeals in the database.
GET /api/customer/:customerId/liked-meals: Retrieve a user's liked meals by fetching from TheMealDB based on saved meal IDs.
Frontend Components
NavBar.js
The main navigation bar that shows different links and options depending on whether a user is logged in.
Displays the option to log in, sign up, log out, and access user settings.
Signin.js
The sign-in page where users can log in. If the user is already logged in, they are redirected to the recipes page.
RecipeMeals.js
Displays all meals fetched from TheMealDB API with options to like/unlike a meal.
Redirects the user to the sign-in page if they attempt to like a meal without being logged in.
Profile.js
Allows the user to view and update their profile details, including full name, email, profession, bio, and profile image.
FavoriteMeals.js
Displays the user's liked meals and allows them to unlike meals from their favorites.
Backend Structure
models/Customer.js
Defines the Customer schema that stores user information such as:

fullName
email
password (hashed with bcrypt)
likedMeals (array of meal IDs)
Routes
Authentication Routes (/api/signup, /api/login): Handle user sign-up and login functionality.
Profile Routes (/api/customer/:customerId): Retrieve and update user profile details.
Meal Routes (/api/recipes/search, /api/customer/:customerId/like): Fetch meals from TheMealDB API, like/unlike meals, and retrieve saved favorite meals.
Screenshots
Feature	Screenshot
Home Page	
Sign In Page	
Profile Page	
Recipe List	
Favorite Meals Page	
Credits
Frontend Developer: Mohamed Yusuf Mohamed
Backend Developer: Mohamed Yusuf Mohamed
API: TheMealDB for meal data.
Design: Tailwind CSS for frontend styling.
