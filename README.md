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

#### POST `/superheroes`
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

#### GET `/superheroes`
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

## Team Collaboration
To improve or expand this task, I would collaborate with a teammate by:
- **Code Reviews**: Conducting regular code reviews to ensure code quality and share knowledge.
- **Pair Programming**: Working together on complex features to leverage each other's strengths and improve problem-solving.
- **Task Breakdown**: Dividing larger tasks into smaller, manageable pieces and assigning them based on each team member's strengths.
- **Communication**: Keeping open lines of communication through regular stand-ups, meetings, and using collaboration tools like Slack or Microsoft Teams.
- **Documentation**: Ensuring all changes are well-documented and updating the README and other relevant documentation as needed.

## If I had more time

If I had more time, I would:
- **Implement Unit Tests**: Add more comprehensive unit tests to ensure the reliability and correctness of the code.
- **Optimize Performance**: Explore ways to optimize the performance of the API, such as caching frequently accessed data.
- **Enhance Documentation**: Improve the documentation to include detailed setup instructions, API usage examples, and contribution guidelines.
- **Add Caching**: Implement caching mechanisms to improve the performance of frequently accessed endpoints.
- **Extend Features**: Add more features and functionalities to the endpoints, such as extended filtering options.
- **Complete CRUD Operations**: Implement complete CRUD operation APIs for the superhero, including update and delete functionalities.
- **Pagination**: Implement pagination to handle large lists of superheroes efficiently.