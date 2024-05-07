MERN Project README
Welcome to the MERN (MongoDB, Express, React, Node.js) project! This README will guide you through the steps to set up and run the server and the React application.

Server Setup
1.Navigate to the server directory:

cd server

2.Install dependencies:

npm install

3.Create a .env file in the server directory with the following variables:
//example
PORT=8080
DB_URL=mongodb+srv://emailMarketing:emailMarketing@email-marketing.cj195e5.mongodb.net/
SECRET_KEY=forgot_PasswordMarketingApplication
SALT=10
EMAIL="fazilmm860@gmail.com"
PASSWORD="nbpe abru dphs cyoe"

Make sure to replace the values with your actual configuration.

React Application Setup

1.The React application is located in the main directory. Navigate to it:

cd email_marketing

2.Install dependencies:

npm install

3.Start the React application:
npm start

Accessing the Application
Once the server and the React application are running, you can access the application through your browser. The server will be running on http://localhost:8080, and the React application will typically be accessible at http://localhost:3000. You can adjust the ports if necessary.
