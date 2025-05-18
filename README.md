
# StayHealthy - Medical Appointment App 🏥

## 📖 Overview
StayHealthy is a cutting-edge **medical appointment platform** designed to seamlessly connect patients with healthcare professionals. It facilitates **online consultations**, **appointment scheduling**, and **medical record management**, ensuring a streamlined digital healthcare experience. This project was developed as part of the **Coursera capstone initiative**, aimed at enhancing healthcare access, especially in remote and underserved areas.

![StayHealthy](https://github.com/Willie-Conway/StayHealthy-App/blob/dc4c56c1453208064e6395c8e101aec6ce307b4b/screenshots/Home_Page.png)

## 🚀 Features

- **🔒 User Authentication**:  
  Secure sign-up and login functionality for both patients and medical professionals, ensuring privacy and data protection.

- **📅 Appointment Booking**:  
  Patients can conveniently schedule appointments with doctors and specialists, selecting available time slots in real-time.

- **👨‍⚕️ Doctor Listing**:  
  A detailed directory of doctors and medical specialists, enabling patients to search by name, specialty, or location.

- **📝 Consultation Feedback**:  
  After consultations, patients can provide feedback to improve service quality and overall experience.

- **🖊️ Profile Management**:  
  Users can manage their profiles, update personal details, and set healthcare preferences.

- **📂 Access to Medical Records**:  
  Patients can view and share their medical history with healthcare providers to ensure better care.

- **📰 Health News & Training**:  
  StayHealthy keeps users informed with the latest health-related news and educational resources.

- **🧭 Intuitive Navigation**:  
  A user-friendly and accessible interface ensures a seamless experience on both desktop and mobile devices.

## 🛠️ Technologies Used

- **⚛️ React**: JavaScript library for building dynamic user interfaces.
- **⚡ Vite**: Fast build tool and development server for modern web projects.
- **🖥️ Express**: A flexible and lightweight framework for building backend APIs.
- **🐱 MongoDB**: NoSQL database for storing user data and medical records securely.
- **🎨 Figma**: Design tool used to create UI/UX mockups and prototypes.
- **🌐 Vercel**: Hosting platform for deploying the frontend application.
- **🚂 Railway**: Cloud platform for deploying the backend services.

## 🔧 Installation & Setup

### 1. Clone the Repository  
To set up the project locally, clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/stayhealthy.git
cd stayhealthy
````

### 2. Frontend Setup (React)

1. **Install Dependencies**:

   In the `frontend` directory, run the following command to install dependencies:

   ```bash
   npm install
   ```

2. **Run the Development Server**:

   Start the development server:

   ```bash
   npm run dev
   ```

   Access the application at [http://localhost:3000](http://localhost:3000).

### 3. Backend Setup (Express)

1. **Install Dependencies**:

   Navigate to the `backend` directory and install the required dependencies:

   ```bash
   cd backend
   npm install
   ```

2. **Start the Backend Server**:

   Launch the backend server:

   ```bash
   npm run start
   ```

   The backend will be available at [http://localhost:5000](http://localhost:5000).

### 4. Database Configuration

The project uses **MongoDB** for storing user and medical records. You can set up MongoDB locally or use a cloud service like **MongoDB Atlas**.

1. Create a `.env` file in the `backend` directory and configure the MongoDB URI:

   ```bash
   MONGODB_URI=your_mongodb_connection_string
   ```

### 5. Deploying the Application

* **Frontend Deployment**:
  The frontend is hosted on **Vercel**. To deploy your version of the platform, push the project to your GitHub repository and follow the [Vercel deployment guide](https://vercel.com/docs).

* **Backend Deployment**:
  The backend is hosted on **Railway**. Deploy the backend by following the [Railway deployment documentation](https://railway.app/docs).

## 📁 Folder Structure

```
stayhealthy/
├── backend/
│   ├── server.js          # Main server file for the backend API
│   ├── models/            # MongoDB data models
│   ├── routes/            # API route handlers
│   ├── controllers/       # Logic for API endpoints
│   └── .env               # Environment variables (MongoDB URI)
├── frontend/
│   ├── src/
│   │   ├── components/    # React components for different UI elements
│   │   ├── pages/         # React pages (Appointment, Profile, etc.)
│   │   └── App.js         # Entry point for the frontend application
│   ├── public/
│   └── package.json       # Frontend dependencies
├── README.md              # Project documentation
└── .gitignore             # Git ignore configuration
```

## 🤝 Development & Contribution

We welcome contributions to enhance the StayHealthy platform. To contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and write tests to ensure the integrity of the system.
4. Submit a pull request (PR) for review.

Please ensure your code adheres to the following standards:

* Follow **React** and **Express** coding conventions.
* Write unit tests for new features and bug fixes.
* Update this README if your changes introduce new functionality or alter the setup process.

## 🧪 Testing

To ensure high-quality code, run the tests for both frontend and backend:

1. **Frontend Tests**:

   ```bash
   npm test
   ```

2. **Backend Tests**:

   If you're using Jest or Mocha, run the backend tests with:

   ```bash
   npm run test
   ```

## 🎉 Acknowledgments

This project was developed as part of the **IBM Frontend Capstone** for StayHealthy's Digital Healthcare Initiative. Special thanks to **Coursera** for providing the necessary resources and support throughout the project.

## 📝 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for further details.

---

© 2025 StayHealthy Inc. – All rights reserved.

