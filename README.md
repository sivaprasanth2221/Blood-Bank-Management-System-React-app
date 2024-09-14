# Blood Bank Management System

This project is a simple Blood Bank Management System that allows you to manage hospital information using a Node.js backend with MongoDB and a React frontend.

## Project Overview

- **Backend**: Built with Express.js and MongoDB.
- **Frontend**: Developed with React.js.
- **API Endpoints**:
  - `GET /api/Bloodbank/GetHospital`: Retrieve a list of hospitals.
  - `POST /api/Bloodbank/AddHospital`: Add a new hospital.
  - `DELETE /api/Bloodbank/DeleteHospital`: Delete a hospital by ID.

## Installation

### Backend

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-folder>/api
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the MongoDB server:**
    Ensure MongoDB is running locally on the default port (`27017`). You can start MongoDB using:
    ```bash
    mongod
    ```

4. **Run the backend server:**
    ```bash
    npm start
    ```
   The backend server will start on port `5038`.

### Frontend

1. **Navigate to the frontend directory:**
    ```bash
    cd ../bloodbank/src
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the React application:**
    ```bash
    npm start
    ```
   The React app will start on port `3000` by default.

## Usage

1. Open your browser and go to `http://localhost:3000` to access the React frontend.
2. Use the interface to add, view, and delete hospitals.

## API Details

### Get Hospitals

- **Endpoint:** `/api/Bloodbank/GetHospital`
- **Method:** `GET`
- **Response:** List of hospitals in JSON format.

### Add Hospital

- **Endpoint:** `/api/Bloodbank/AddHospital`
- **Method:** `POST`
- **Body Parameters:**
  - `newHospital`: Name of the hospital.
  - `newAddress`: Address of the hospital.
- **Response:** Confirmation message.

### Delete Hospital

- **Endpoint:** `/api/Bloodbank/DeleteHospital`
- **Method:** `DELETE`
- **Query Parameter:**
  - `id`: ID of the hospital to delete.
- **Response:** Confirmation message.

## Contributing

Feel free to submit issues and pull requests. Please ensure your code adheres to the project's style guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact [your-email@example.com](mailto:your-email@example.com).
