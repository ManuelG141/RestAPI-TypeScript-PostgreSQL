## Getting Started

### Prerequisites
- Node.js
- PostgreSQL

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/RestAPI-TypeScript-PostgreSQL.git
    ```
2. Navigate to the project directory:
    ```bash
    cd RestAPI-TypeScript-PostgreSQL
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Configuration

Create a `.env` file in the root directory and add the following environment variables:
    ```
    DB_ENDPOINT=your_database_host
    ```
    ```
    DB_PORT=your_database_port,
    ```
    ```
    DB_USER=your_database_user,
    ```
    ```
    DB_PASSWORD=your_database_password,
    ```
    ```
    DB=your_database_name
    ```

### Running the Application with JavaScript

To start the application, run:
    ```
    npm run tsc
    ```
    And then use
    ```
    npm run start
    ```

### Running the Application directly with TypeScript

To run tests, use:
    ```
    npm run dev
    ```

### Usage

The API provides the following endpoints:

1. **Create a user**
    - **Endpoint:** `POST /api/users`
    - **Description:** Creates a new user and retrieves an object with the created user if the request was successful.
    - **Request body:**
        ```json
        {
            "name": "User's name",
            "email": "User's email",
        }
        ```

2. **Get all users**
    - **Endpoint:** `GET /api/users`
    - **Description:** Retrieves an array of objects with a list of all users.

3. **Get a user by ID**
    - **Endpoint:** `GET /api/users/:id`
    - **Description:** Retrieves an object with specific user by their ID.
    - **Route parameters:**
        - `id`: The ID of the user.

4. **Update a user**
    - **Endpoint:** `PUT /api/users/:id`
    - **Description:** Updates an existing user and retrieves an object with the updated user if the request was successful.
    - **Route parameters:**
        - `id`: The ID of the user.
    - **Request body:**
        ```json
        {
            "name": "New name of the user",
            "email": "New email of the user",
        }
        ```

5. **Delete a user**
    - **Endpoint:** `DELETE /api/users/:id`
    - **Description:** Deletes a user by their ID and retrieves an object with the deleted user if the request was successful.
    - **Route parameters:**
        - `id`: The ID of the user.
