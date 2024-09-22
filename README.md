# College Hostel Management System

A full-stack web and mobile application designed to streamline hostel-related processes for students and administrators. Built using **Next.js** for the web interface, **Flutter** for the mobile app, and **Node.js** for the backend, the system focuses on simplifying complaint management, gate pass approval workflows, and dues tracking.

## Features

- **User Authentication**:
  - Secure login using **Google OAuth** restricted to college domain emails (`@college_name.edu`).

- **Complaint Management**:
  - Students can submit complaints related to amenities (electrical, plumbing, carpentry, cleaning).
  - Admins can track, update, and resolve complaints with automated status updates.

- **Gate Pass Approval System**:
  - Multi-level approval process for gate passes, from department to final warden approval.
  - Notifications sent to students at each approval stage.

- **Dues Tracking**:
  - Students can view their outstanding mess and hostel fees.

- **Email Notifications**:
  - Integrated with the college's **Google Workspace** for sending automated emails regarding complaints, gate passes, and dues.

## Tech Stack

- **Frontend**:
  - Web: Next.js
  - Mobile: Flutter

- **Backend**:
  - Node.js + Express.js

- **Database**:
  - MongoDB (NoSQL) or MySQL/PostgreSQL (SQL)

- **Authentication**:
  - Google OAuth 2.0

- **Email Integration**:
  - Gmail API via **Nodemailer**

## Setup and Installation

### Prerequisites

- **Node.js** and **npm** installed
- **Flutter** installed
- **MongoDB** or **SQL Database** set up
- **Google Cloud Project** with OAuth 2.0 credentials

