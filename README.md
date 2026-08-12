# EduQuest Games - STEM Learning Platform

A modern, responsive landing page and management platform for educational STEM games designed for middle schoolers. Built with vanilla HTML, CSS, and JavaScript, featuring role-based access control and a professional UI.

## 🚀 Features

### For Students & Parents
- **Engaging Landing Page**: Vibrant design showcasing game library, features, and testimonials.
- **Game Library**: Browse 12+ STEM games covering Biology, Physics, Computer Science, Math, and Earth Science.
- **Free Demo Download**: Easy access to try games before purchasing.
- **Student Portal**: Personalized dashboard to track progress and downloaded games.
- **Social Login**: Quick access via Google Sign-In simulation.

### For Educators & Admins
- **Role-Based Access Control (RBAC)**:
  - **Admin**: Full access to manage games, users, and view analytics.
  - **Teacher**: View game library and student progress; read-only access.
  - **Student**: Access to personal library and downloads only.
- **Admin Dashboard**:
  - **Game Management**: Add, edit, or remove games dynamically.
  - **User Management**: Create/Edit/Delete users and assign roles/privileges.
  - **Analytics**: Real-time stats on downloads, active users, and ratings.
  - **Data Export**: Download user/download reports as CSV.
- **Secure Authentication**: Session-based login with no hardcoded credentials.

## 🛠️ Tech Stack
- **Frontend**: HTML5, CSS3 (Custom Properties, Flexbox/Grid), Vanilla JavaScript (ES6+)
- **Icons**: [Iconify](https://iconify.design/) (icon-park-solid set)
- **Authentication**: Simulated OAuth (Google) & Email/Password (SessionStorage based)
- **Backend Ready**: Prepared for Supabase integration (config file included)
- **No Build Step**: Runs directly in the browser without Node.js or bundlers.

## 📂 Project Structure
```
/workspace
├── index.html          # Main landing page & public game library
├── login.html          # Authentication page (Login/Signup/Social)
├── admin.html          # Protected dashboard for Admin/Teachers
├── supabase-config.js  # Configuration template for backend integration
└── README.md           # This file
```

## 🏃 Getting Started

### 1. Local Development
Since this is a static site, you can run it using any local server.

**Option A: Python**
```bash
cd /workspace
python3 -m http.server 8080
```

**Option B: Node.js (npx)**
```bash
cd /workspace
npx serve .
```

**Option C: VS Code**
Install the "Live Server" extension and click "Go Live".

### 2. Access the Application
Open your browser and navigate to:
- **Landing Page**: `http://localhost:8080`
- **Login**: `http://localhost:8080/login.html`
- **Admin Dashboard**: `http://localhost:8080/admin.html`

## 🔐 Authentication & Roles

Since there are no hardcoded credentials for security, you must create an admin account dynamically:

1. Navigate to the **Login Page**.
2. Click **"Create Account"** (Sign Up mode).
3. Enter your details and select **Role: Admin**.
4. Submit and Log In.
5. You will be redirected to the **Admin Dashboard**.

**Note:** 
- Data is stored in `sessionStorage`. Refreshing the page keeps you logged in, but closing the tab logs you out.
- To test different roles, use the **"Switch User"** feature in the dashboard to log out and create a new Teacher or Student account.

## 🎨 Design Highlights
- **Responsive**: Fully mobile-friendly layout.
- **Iconography**: Uses `icon-park-solid` from Iconify for consistent, professional visuals.
- **Animations**: Smooth transitions, loading states, and toast notifications.
- **Security**: Input sanitization to prevent XSS; no sensitive data in source code.

## 🔌 Supabase Integration (Optional)
To make user data persistent across sessions and devices:
1. Create a project at [Supabase](https://supabase.com).
2. Open `supabase-config.js`.
3. Insert your `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
4. The app will automatically switch from local simulation to real database authentication.

## 📄 License
MIT License - Free for educational and commercial use.

---
**EduQuest Games** - Making STEM Fun! 🚀🧬🤖
