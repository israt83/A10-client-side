
# TouristSpot

TouristSpot is a dynamic platform for exploring and learning about famous tourist destinations. Users can browse through various countries, view images, read descriptions, and explore the rich culture and history associated with each destination. The platform offers a responsive design and user-friendly interface, making it ideal for travelers and travel enthusiasts.

## Live Site URL

[TouristSpot Live Site](https://tourismspot-website.netlify.app)

## Server Repository

[TouristSpot Server Repository](https://github.com/israt83/tourism-spot-server)



---



## Key Features

- **Browse Destinations:** Explore countries with images, descriptions, and key details.
- **Responsive Design:** Optimized for all devices, including desktops, tablets, and mobile phones.
- **Dynamic Content:** Backend-driven data fetching ensures up-to-date information.
- **Theme Change:** Users can switch between light and dark themes for a personalized browsing experience.
- **Authentication**: Implemented email/password, Google, and GitHub login and registration functionality.
- **Profile Update Feature**: Enabled logged-in users to update their profile information securely.



---

## Technologies Used

### **Frontend**
- **React**: For building dynamic user interfaces.
- **Tailwind CSS**: For responsive and modern styling.
- **Swiper**: For implementing a responsive slider.
- **AOS**: For scroll animations to enhance user experience.
- **React Hook Form**: For managing form state and validation.
- **DaisyUI**: For a utility-first CSS framework to style the components.
- **react-awesome-reveal**: For adding simple and customizable reveal animations to components.
- **react-simple-typewriter**: For adding typewriter effects to text elements.
- **Tippy.js**: For adding tooltips to enhance user interactions.

### **Backend**
- **Express.js**: For building the server and handling API requests.
- **MongoDB**: For storing country and tourist spot data.
- **JWT**: For secure authentication.

### **Authentication**
- **Firebase**: For handling user authentication.

---

## Running the Project Locally

### **Frontend**

1. Clone the client-side repository:
    ```bash
    git clone https://github.com/israt83/tourismspots-client-side.git
    cd touristspot-client
    npm install
    ```

2. Set up Firebase for authentication:
   - Create a Firebase project in your Firebase Console.
   - Add your Firebase configuration to the `firebase.config.js` file.

3. Start the development server:
    ```bash
    npm start
    ```
4. Open your browser and navigate to: https://github.com/israt83/tourism-spot-server.git
    ```
    http://localhost:port
    ```

---

### **Backend**

1. Clone the server-side repository:
    ```bash
    git clone 
    cd touristspot-server
    npm install
    ```

2. Set up MongoDB:
   - Use MongoDB Atlas or run a local instance.
   - Add your MongoDB connection URI to the `index.js` file:
     ```javascript
     const uri = "YOUR_MONGODB_CONNECTION_URI";
     ```

3. Start the backend server:
    ```bash
    nodemon index.js
    ```

4. Open your browser and navigate to the server's API endpoint (e.g., `http://localhost:port`).


