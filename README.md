FlexPay

FlexPay is a digital payment application designed to facilitate seamless transactions between users. It provides a secure and efficient way to send and receive payments, track transaction history, and manage accounts with ease. The platform supports authentication, authorization, and integrates various financial features.

Features

User Authentication: Secure signup, login, and JWT-based authentication.

Transactions: Send and receive payments between users.

Transaction History: View past transactions with timestamps and details.

Security: Implements encryption and secure storage for sensitive data.

Admin Dashboard: Admin functionality for user and transaction management.

Notifications: Real-time alerts for transactions and account updates.

Tech Stack

Frontend:

React.js: Interactive user interface with state management.

Tailwind CSS: Responsive and modern styling.

Backend:

Node.js & Express.js: RESTful API development and request handling.

MongoDB with Mongoose: NoSQL database for storing user and transaction data.

Prisma ORM: Additional support for database queries and schema management.

Security & Authentication:

JWT (JSON Web Tokens): Secure token-based authentication.

bcrypt: Password hashing and security.

Deployment:

AWS / Cloudflare: Hosting and CDN services for scalability.

Neon: PostgreSQL database integration.

Installation & Setup

Prerequisites

Node.js & npm installed

MongoDB database setup

PostgreSQL database (if using Prisma)

Steps to Run Locally

Clone the repository:

git clone https://github.com/Rajkumar-001/flexpay.git
cd flexpay

Install dependencies:

npm install

Set up environment variables in a .env file:


JWT_SECRET=your_jwt_secret
POSTGRES_URL=your_postgres_database_url

Run the backend server:

npm start

Navigate to the frontend directory and start the React app:

cd client
npm start

API Endpoints

Method

Endpoint

Description

POST

/api/auth/signup

Register a new user

POST

/api/auth/login

Authenticate user and get token

GET

/api/users

Fetch user details

POST

/api/transaction

Initiate a payment transaction

GET

/api/transactions

Get transaction history

Future Enhancements

Integration with UPI & Bank Accounts

AI-based Fraud Detection System

P2P Lending Feature

Multi-Currency Support

Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

License

This project is licensed under the MIT License.

Contact

For any queries or collaborations, reach out at:
📧 Email: rpandeya12345@gmail.com🌐 Portfolio: [Your Portfolio Link]
