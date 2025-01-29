# Humble Superhero API - Backend (NestJS)

## Project Overview
The backend of the **Humble Superhero API** is built with **NestJS** and provides a RESTful API to manage superheroes' data. It supports adding new superheroes and fetching the list of superheroes sorted by humility score.

## Tech Stack
- **Backend**: NestJS (Node.js framework)
- **Validation**: Zod (for data validation)

## How to Run the App Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/humble-superhero-be.git
   cd humble-superhero-be
   ```

2. Install the backend dependencies:
   ```bash
   yarn
   ```

3. Start the NestJS backend:
   ```bash
   yarn start:dev
   ```
   This will start the backend API server at `http://localhost:3000`.

## Deployment
This project is deployed on Render. You can access the API at the following URL:

[https://humble-superhero-be.onrender.com](https://humble-superhero-be.onrender.com)

## API Endpoints

#### POST `/hero`
Adds a new superhero to the list.

- **Request body**:
  ```json
  {
    "name": "Superman",
    "superPower": "Super Strength & Flight",
    "humilityScore": 8
  }
  ```

- **Response**:
  ```json
  {
    "id": 4,
    "name": "Superman",
    "superPower": "Super Strength & Flight",
    "humilityScore": 8
  }
  ```

#### GET `/hero`
Fetches the list of superheroes, sorted by humility score (descending).

- **Response**:
  ```json
  [
    {
      "id": 2,
      "name": "Spiderman",
      "superPower": "Wall-Crawling & Spider-Sense",
      "humilityScore": 9
    },
    {
      "id": 1,
      "name": "Superman",
      "superPower": "Super Strength & Flight",
      "humilityScore": 8
    },
    {
      "id": 3,
      "name": "Doctor Strange",
      "superPower": "Master of the Mystic Arts",
      "humilityScore": 7
    }
  ]
  ```

## Future Improvements
- **Persistent Storage**: Currently, the superheroes data is stored in-memory. Implementing a persistent database like MongoDB or PostgreSQL would allow the data to persist beyond the runtime of the server.
- **Authentication**: Implement user authentication (e.g., JWT) for securing the API and tie the user to their superhero data.
