# Uber Application (MERN Stack)  

## 🚀 Overview  
This is a 'Basic' full-stack Uber-like application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application provides two main interfaces: one for **Users** and another for **Captains** (drivers). Users can request rides by selecting pickup and destination locations, choosing a vehicle type, and confirming the ride. Captains receive ride requests, confirm or decline them, and manage the ride until completion.  

---

## ✨ Features  

### User Features  
- **Mobile-Friendly Design**  
  - User-friendly mobile-first interface.  
  - Smooth navigation between pages and actions.  
- **Location & Vehicle Selection**  
  - Users can search and select their pick-up and destination locations using a proper search functionality.  
  - Option to choose a desired vehicle (car, bike, etc.).  
- **Ride Request & Confirmation**  
  - Users can make a ride request with pick-up and destination details.  
  - Upon captain confirmation, users receive an OTP and captain details (name, vehicle number plate).  
  - Users provide the OTP to the captain for ride confirmation.  
  - Ride details update with captain name, destination address, and final amount.  
  - Users are redirected to the home page upon ride completion.  

### Captain Features  
- **Mobile-Friendly Design**  
  - User-friendly mobile-first interface.  
  - Seamless experience while managing rides.  
- **Ride Notifications & Management**  
  - Captains receive a pop-up notification when a user makes a ride request.  
  - Ride request includes user details: pick-up & destination, selected vehicle, and total amount.  
  - Captains can confirm or decline ride requests.  
- **Ride Execution**  
  - Upon confirming a ride, captains receive user details and OTP through an pop.  
  - Captains use the OTP to verify and start the ride.  
  - Ride tracking updates in real-time with user information.  
  - Ride completion updates user and captain data, redirecting both to their respective home pages.    

---

## 🛠️ Technologies Used  
- **Frontend**: React.js with Vite (Mobile-friendly and responsive design).  
- **Backend**: Node.js, Express.js (RESTful APIs).  
- **Database**: MongoDB (For storing user, captain, and ride data).  
- **APIs**: Google Maps API (For location search and directions).  

---

## 🏗️ Implementation Details  

### Frontend  
- Built using React.js for a dynamic and modern user experience.  
- Mobile-first design for both user and captain interfaces.  
- Smooth navigation and seamless user interactions.  

### Backend  
- Google Maps API integrated for location search and directions.  
- User and captain authentication implemented.  
- Real-time notifications for captains when a new ride is requested.  
- Ride management logic implemented (confirmation, OTP verification, ride completion).  

---

## 🗂️ Folder Structure  
- **Frontend**: Built using React.js for a dynamic and modern user experience.  
- **Backend**: Powered by Node.js and Express.js with secure APIs and MongoDB integration.  

## 📌 How to Run the Project  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/your-repo-name.git  
   cd your-repo-name
   ```
2. Install dependencies:
   - For the backend:
   ```bash
   cd backend
      npm i
   ```
   - For the frontend:
   ```bash
   cd frontend   
      npm i
     ```
3. Set up environment variables:
 
   - Create a .env file in the backend folder and add your Google Maps API key and MongoDB connection string.
    
5. Run the backend server:
 ```bash
 cd backend
    npx nodemon
 ```
5. Run the frontend development server:
 ```bash
 cd Frontend
    npm run dev
 ```

## 🤝 Contribution  
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with clear and descriptive messages.
4. Submit a pull request, explaining the changes you've made.



