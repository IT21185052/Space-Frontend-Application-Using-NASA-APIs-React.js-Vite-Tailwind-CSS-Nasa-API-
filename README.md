# Frontend Application Using NASA APIs(React.js | Vite | Tailwind CSS | Nasa API)

## Introduction

This React.js Frontend application is designed to facilitate the access of Nasa endpoints given by Nasa API. It provides endpoints for Accessing Photo of the day and Mars photos,User Login/Register with authentication and validating.

## Features

- **Access Photo of the day**: User can view the photo of the day upload by the NASA.
- **Access Mars Rover Photos**: User can view the Mars Rover photos upload by the NASA.
- **User Freindly Interfaces**: Including User friendlu and attrctive colors and design.
- **Validation and Error Handling**: Utilizes Backend Validator for request validation and provides detailed error handling.

## Installation

1. Clone the repository.
2. Navigate to the project directory for frontend and backend.
3. Run `npm install` to install dependencies.

## Usage

1. Set up environment variables (if any).
2. Navigate to the project directory for frontend.
3. Run `npm run dev` to start the Frontend.
4. After Open another terminal and Navigate to the project directory for Backend.
5. Run `npm start` to start the server.

## Endpoints

#### Here are the some majorly primary endpoints of our NASA API:

### Photo Of Day

  - Endpoint: `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
  - Description: User can access the photo of the day of NASA.

### Mars Rover Phptos
  - Endpoint: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`
  - Description: User can access the Mars rover photos given by NASA.

### Login

- **Login**
  - Endpoint: `POST/api/login`
  - Description: Login as a user.
  - Path Parameter:
    - `email`: User Email,
    - `password`: user Password
  - Request Body (Fields to update):
    ```json
    {
      "email": "User Email",
      "password": "User Password",
    }
    ```

## Technologies Used

- **React.js:** Frontend JavaScript library for building user interfaces.
- **Vite:** Fast, opinionated web dev build tool that serves your code via native ES Module imports during development.
- **Tailwind CSS:** A utility-first CSS framework for quickly building custom designs.
- **Mongoose:** MongoDB object modeling for Node.js.
- **NASA Mars Rover Photos API**: Provides access to photos taken by NASA's Mars rovers.
- **Axios**: JavaScript library for making HTTP requests to fetch data from APIs.
- **jest**: Test the application

## Dependencies

- **react**: "^18.2.0"
- **react-dom**: "^18.2.0"
- **react-icons**: "^5.1.0"
- **react-router-dom**: "^6.23.0"
- **aos**: "^2.3.4"
- **axios**: "^1.6.8"
- **cors**: ^2.8.5
- **express**: ^4.18.3
- **mongoose**: ^8.2.2
- **nodemon**: ^3.1.0
- **jest**: "^29.7.0"

## Improve Code Quality & Standards

-  Added clear and descriptive variable names.
-  Added comments to explain each section of the code.
-  Ensured consistent indentation and spacing for better readability.
-  Removed unnecessary variable assignments.

## Contributing

S.Y.T.D.Bandara (IT21185052)



