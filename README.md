# Running the Project

This guide provides instructions on how to run the project using Docker and Docker Compose, as well as how to run it without Docker.

## Prerequisites

- **Docker**: Ensure Docker is installed on your machine. [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: Ensure Docker Compose is installed. [Install Docker Compose](https://docs.docker.com/compose/install/)
- **Node.js**: Ensure Node.js is installed. [Install Node.js](https://nodejs.org/)

## Running the Project with Docker

1. **Clone the Repository**

   `git clone https://github.com/yourusername/your-repo.git`

   `cd your-repo`

2. **Build and Start the Containers**

   `docker-compose up -d --build`

3. **Access the Application**

   Once the containers are running, access the application at `http://localhost:3000` or the port specified in your `docker-compose.yml` file.

4. **Running ESLint with Docker**

   To lint your code using Docker:

   `docker-compose exec app npx eslint .`

5. **Stop and Remove Containers**

   To stop and remove the Docker containers:

   `docker-compose down`

6. **View Logs**

   To view the logs from the Docker containers:

   `docker-compose logs`

7. **Rebuild Containers**

   To rebuild the Docker containers:

   `docker-compose up -d --build`

## Running the Project Without Docker

If Docker is not available or you prefer not to use it, you can run the project using npm:

1. **Clone the Repository**

   `git clone https://github.com/yourusername/your-repo.git`

   `cd your-repo`

2. **Install Dependencies**

   Install the project dependencies with npm:

   `npm install`

3. **Start the Development Server**

   Start the development server using npm:

   `npm run dev`

   This command will start the application using a local development server. By default, you can access it at `http://localhost:3000`.

4. **Running ESLint Without Docker**

   To lint your code without Docker:

   `npx eslint .`

## Configuration

- **ESLint Configuration**: The ESLint rules are defined in the `.eslintrc.js` file. The `.eslintignore` file specifies which files and directories should be ignored by ESLint.
- **Docker Configuration**: The `Dockerfile` defines the Docker image for the application, and `docker-compose.yml` defines the services and configuration for Docker Compose.

## File Structure

- `.eslintrc.js`: ESLint configuration file.
- `.eslintignore`: Specifies files and directories to be ignored by ESLint.
- `Dockerfile`: Defines the Docker image for the application.
- `docker-compose.yml`: Defines the services and configuration for Docker Compose.
- `src/`: Contains the source code of the project.
- `tests/`: Contains test files.

## Common Commands

- **Stop and Remove Containers** (if using Docker):

   `docker-compose down`

- **View Logs** (if using Docker):

   `docker-compose logs`

- **Rebuild Containers** (if using Docker):

   `docker-compose up -d --build`

- **Start Development Server** (if not using Docker):

   `npm run dev`

## Contributing

1. **Fork the Repository**
2. **Create a New Branch**: `git checkout -b feature/your-feature`
3. **Commit Your Changes**: `git commit -am 'Add some feature'`
4. **Push to the Branch**: `git push origin feature/your-feature`
5. **Create a Pull Request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [ESLint](https://eslint.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/)
