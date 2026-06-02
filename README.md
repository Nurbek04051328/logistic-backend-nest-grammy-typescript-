# 🚚 Logistics Backend (NestJS + Prisma)

A scalable backend system for logistics management with real-time driver tracking, role-based access control, and Telegram bot integration.

---

## 🚀 Tech Stack

- NestJS (TypeScript backend framework)
- PostgreSQL (database)
- Prisma ORM
- JWT Authentication
- bcrypt (password hashing)
- Socket.IO (real-time tracking - planned)
- Grammy Telegram Bot
- Class Validator / Class Transformer

---

## 📁 Project Structure
src/
├── config/
├── common/
│ ├── decorators/
│ ├── filters/
│ ├── guards/
│ ├── interceptors/
│ ├── utils/
│
├── infrastructure/
│ ├── prisma/
│
├── modules/
│ ├── auth/
│ ├── users/
│ ├── drivers/
│ ├── vehicles/
│ ├── orders/
│ ├── tracking/
│ ├── notifications/
│
├── app.module.ts
└── main.ts


---

## 🧑‍💼 Roles System

- **SUPER_ADMIN**
  - Full system control

- **DISPATCHER**
  - Create orders
  - Assign drivers
  - Monitor deliveries

- **DRIVER**
  - Receive orders
  - Send live location
  - Update delivery status

---

## 🔐 Authentication

- JWT-based authentication
- Access Token (short-lived)
- Refresh Token (stored in DB)
- Passwords are hashed using bcrypt

### Auth Endpoints

```

POST /auth/register
POST /auth/login

📦 Database (PostgreSQL + Prisma)

Main entities:

User
Driver
Vehicle
Order
DriverLocation
Example User Model

model User {
  id        String   @id @default(uuid())
  firstName String
  lastName  String?
  phone     String   @unique
  password  String
  role      UserRole

  refreshToken String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

📍 Driver Tracking System

Drivers send real-time GPS coordinates:

POST /tracking/location

Data stored:

latitude
longitude
speed
timestamp

Used for:

Live map tracking
Delivery monitoring
Route history
🤖 Telegram Bot Integration

Drivers can:

Register via bot
Receive system notifications
Access driver panel (PWA link)
⚡ Planned Features
Socket.IO real-time tracking
Live map (admin dashboard)
Order assignment system
Driver availability status
Route history tracking
Notifications system
Admin analytics dashboard
🛠 Installation
npm install

npx prisma db push

npx prisma generate

npm run start:dev
🌍 Environment Variables
PORT=5000

DATABASE_URL="postgresql://postgres:password@localhost:5432/logistics"

JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
📡 API Base URL
http://localhost:5000
👨‍💻 Author

Built by a fullstack developer using:

NestJS
Vue 3
TypeScript
PostgreSQL
📌 Notes

This project is under active development. Architecture is designed for scalability and real-world logistics systems (Uber-like tracking system).