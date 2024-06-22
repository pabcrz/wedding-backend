# Wedding Backend

This is the backend repository for our wedding project. It contains all the necessary code and documentation for the server-side implementation.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory:

```
cd wedding-backend
```

3. Install project dependencies:

```
npm install
```

4. Configure environment variables in a `.env` file following the example in the `.env.example` file.
5. Start the server locally:

```
npm start
```

6. Start the server in development mode:

```
npm run dev
```

## Key Features

- **Guest Registration**: Allows admin to register guest on the platform.
- **Guest Management**: Allows admin to manage guest details.
- **Guest Confirmation**: Allows guest to confirm their attendance or not.

## Usage

Once the server is up and running, you can access the API endpoints to perform various operations related to the wedding. Here are some examples:

- GET `/guests`: Retrieve a list of all guests.
- POST `/guests`: Add a new guest to the list.
- PUT `/guests/:id`: Update the details of a specific guest.
- DELETE `/guests/:id`: Remove a guest from the list.

## Technologies Used

- **Node.js**: as the main execution environment.
- **Express.js**: as the web framework for building the API.
- **MongoDB**: as the database for storing student, course, and task data.
- **Mongoose**: as the Object-Document Mapping (ODM) to interact with the MongoDB database.
- **JSON Web Tokens (JWT)**: as the authentication and authorization mechanism for users.
- **Bcrypt**: as the encryption algorithm for securely storing user passwords.
- **Dotenv**: as the module for loading environment variables from a `.env` file.
- **Cors**: as the middleware for enabling resource sharing between different domains.
- **Nodemon**: as the tool for automatically restarting the Node.js application when changes in the source code are detected.
- **http-errors**: as the utility for creating HTTP errors.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
