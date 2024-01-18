

```markdown
# Node.js Dockerized Application

This is a simple Node.js application that has been dockerized for easy deployment using [cranecloud.io](https://cranecloud.io/). 

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Node.js](https://nodejs.org/) (if you want to run the application locally without Docker)

## Getting Started

### Running Locally

1. Clone this repository:

   ```bash
   git clone https://github.com/darlio88/crane-cloud.git
   ```

2. Navigate to the project directory:

   ```bash
   cd crane-cloud
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm run serve
   ```

   The application will be accessible at [http://localhost:4000](http://localhost:4000).

### Running with Docker

1. Pull the Docker image from DockerHub:

   ```bash
   docker pull darlio/crane-cloud:latest
   ```

2. Run the Docker container:

   ```bash
   docker run -p 4000:4000 darlio/crane-cloud:latest
   ```

   The application will be accessible at [http://localhost:4000](http://localhost:4000).

## DockerHub Image

The Docker image for this application is available on DockerHub. You can pull it using:

```bash
docker pull darlio/crane-cloud:latest
```

[DockerHub Repository](https://hub.docker.com/r/darlio/crane-cloud)


