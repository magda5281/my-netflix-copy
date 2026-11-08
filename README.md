# Reelbox: Movie Browsing App (Educational Project)

### CodersLab JavaScript Developer Bootcamp Final Project

Reelbox is a streaming-service-style web app for browsing films and series and saving favourites, built as part of the **CodersLab JavaScript Developer Bootcamp** final project.

## 🔗 Links

- [Live Project](https://my-netflix-copy.web.app/)

- [GitHub Repository](https://github.com/magda5281/my-netflix-copy)

## 🚀 Features

- Browse and search for movies and TV shows
- Simple sign-up with email
- User authentication with Firebase
- Responsive design for various screen sizes
- Styled using Sass for modular and maintainable styles
- Interactive UI using React components

## 🛠 Technologies Used

- **React.js** - Frontend framework
- **JavaScript** - Core programming language
- **Sass** - CSS preprocessor for styling
- **Firebase** - Authentication & hosting
- **API** - [The Movie Database (TMDb)](https://api.themoviedb.org/3)

## 📂 Project Setup

### 1. Clone the repository

```sh
 git clone https://github.com/magda5281/my-netflix-copy.git
 cd my-netflix-copy
```

### 2. Install dependencies

```sh
 npm install
```

### 3. Set up Firebase

- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
- Enable Authentication (Email/Password, Google Sign-In, etc.)
- Enable Firestore Database (if needed for user data)
- Update `firebaseConfig` in your project

### 4. Add environment variables

Create a `.env` file in the project root (it is git-ignored, so keys never get committed):

```sh
REACT_APP_API_KEY=your_tmdb_api_key
REACT_APP_base_URL=https://api.themoviedb.org/3
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_STORAGE_BUCKET=...
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
REACT_APP_FIREBASE_APP_ID=...
```

### 5. Start the development server

```sh
 npm start
```

### 6. Deploy to Firebase (Optional)

```sh
 firebase deploy
```

## 📜 Skills Demonstrated

- **React.js**: Component-based architecture for building UI
- **JavaScript**: Functional programming and ES6+ features
- **Firebase**: Authentication & hosting for seamless deployment
- **Sass**: Modular and maintainable styles
- **API Integration**: Fetching movie data from TMDb

## ⚠️ Disclaimer

This is a non-commercial student project. It is not affiliated with or endorsed by any streaming service. Movie data and images are provided by [TMDB](https://www.themoviedb.org/); this product uses the TMDB API but is not endorsed or certified by TMDB.

📌 **Author**: Magda Gozdalik
