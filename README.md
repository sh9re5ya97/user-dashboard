# User Dashboard

A user dashboard application built with Vue.js using data from the JSONPlaceholder API. This project demonstrates the creation of a responsive user list and user details page, with search and sorting functionalities.

## Features

- Fetches and displays a list of users from JSONPlaceholder.
- Allows searching and sorting of users by name, username, and email.
- Displays detailed user information on a separate page.
- Responsive design for both mobile and desktop layouts.
- Uses Bootstrap for styling.

## Setup and Installation

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/user-dashboard.git
    cd user-dashboard
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Application

1. **Start the development server:**

    ```bash
    npm run serve
    ```

2. **Open your browser and navigate to:**

    ```
    http://localhost:8080
    ```

### Project Structure

- **src/components/UserCard.vue**: Component for displaying individual user cards in the user list.
- **src/views/UsersList.vue**: Component for displaying and managing the user list.
- **src/views/UserDetails.vue**: Component for displaying detailed user information.
