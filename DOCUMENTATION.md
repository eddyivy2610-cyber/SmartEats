# SmartEats - Full Project Documentation

## 1. Executive Summary
SmartEats is a modern, full-stack, contactless restaurant ordering platform. It enables restaurants to offer a seamless dine-in experience where customers scan a QR code at their table to view a digital menu, place orders, and chat with an AI waitstaff for personalized recommendations. The system is multi-tenant, meaning it can support multiple restaurants (like SmartEats, Starbucks, etc.) from a single codebase and database.

## 2. Core Features
- **QR Code Table Scanning:** Customers scan a unique QR code placed on their table to instantly access the restaurant's menu without needing to download an app.
- **AI Waitstaff (Jarvis):** A built-in AI chatbot capable of reading the menu, understanding dietary restrictions, and giving customers intelligent food recommendations. (Supports Fallback AI switching between Groq, Cerebras, Google Gemini, and SiliconFlow).
- **Multi-Tenant Architecture:** Supports multiple restaurants. Each restaurant gets a customized URL route (e.g., `/smarteats`, `/starbucks`).
- **Admin Dashboard:** Restaurant owners can log in to a secure dashboard to manage their menu, view active orders, and update kitchen profiles.
- **Real-Time Order Tracking:** Kitchen staff receive orders dynamically as customers place them.

## 3. Technology Stack
- **Frontend:** Next.js 14+ (App Router), React, SCSS Modules, Xtreme-UI
- **Backend:** Next.js Serverless API Routes
- **Database:** MongoDB (via Mongoose ORM)
- **Authentication:** NextAuth.js (Session-based secure authentication)
- **Deployment:** Vercel (Hosting) & MongoDB Atlas (Cloud Database)

## 4. Environment Variables Configuration
To run this project, you need an `.env` file in the root directory. Below is the required configuration for production:

```env
# MongoDB Connection String (Atlas or Local)
MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.../smarteats?retryWrites=true&w=majority"

# The public URL of the application
NEXT_PUBLIC_SITE_URL="https://smart-eats-six.vercel.app"

# NextAuth Configuration
NEXTAUTH_URL="https://smart-eats-six.vercel.app"
NEXTAUTH_SECRET="smarteats-secret-key-123"

# AI Provider Keys (Provide at least one to enable the AI Waitstaff feature)
AI_GROQ_KEY="your_groq_api_key_here"
AI_GOOGLE_KEY="your_gemini_api_key_here"
AI_CEREBRAS_KEY="your_cerebras_api_key_here"
AI_SILICONFLOW_KEY="your_siliconflow_api_key_here"
```

## 5. Local Development Setup
1. **Install Node.js & pnpm:** Ensure Node.js (v18+) and `pnpm` are installed on your machine.
2. **Install Dependencies:** Run `pnpm install` in the project root.
3. **Configure Environment:** Create a `.env` file and populate it with the local variables (e.g., `NEXT_PUBLIC_SITE_URL="http://localhost:3000"`).
4. **Start Development Server:** Run `pnpm run play` to launch the Next.js development server.
5. **Seed the Database:** Open your browser and navigate to `http://localhost:3000/api/refreshDemoData`. This will wipe the database and inject fresh demo data for the restaurants.

## 6. Deployment Instructions (Vercel + Atlas)
1. **Database:** 
   - Create a free cluster on MongoDB Atlas.
   - Go to "Network Access" and whitelist `0.0.0.0/0` to allow Vercel to connect to the database.
   - Copy your connection string into the `MONGODB_URI` environment variable.
2. **Hosting:**
   - Push your codebase to a GitHub repository.
   - Import the repository into a new Vercel project.
   - In the Vercel dashboard, add all the environment variables from your `.env` file.
   - Click "Deploy".
3. **Post-Deployment Seeding:**
   - Once the Vercel site is live, visit `https://<YOUR_VERCEL_DOMAIN>.vercel.app/api/refreshDemoData` to populate your production database.

## 7. Demo & Testing Walkthrough
If you are passing this project on for a demo, here is how the recipient should test it:

**A. Test the Customer QR Code Flow**
1. Navigate to `/print-tables.html` (e.g., `https://smart-eats-six.vercel.app/print-tables.html`).
2. Use your phone's camera to scan one of the Table QR Codes.
3. You will be routed to the SmartEats customer view where you can browse the catalog (Jollof Rice, Suya, etc.) and add items to your cart.

**B. Test the Admin Dashboard**
1. Navigate to `https://smart-eats-six.vercel.app/smarteats` on a desktop browser.
2. Click the "Login" button or navigate to the admin portal.
3. **Username:** `admin@smarteats.ng`
4. **Password:** `password123`
5. Once logged in, you can explore the incoming orders from the tables, and edit the restaurant's menu items.

**C. Test the AI Waitstaff**
1. Ensure you have added an AI API key (like `AI_GROQ_KEY`) to your environment variables.
2. Scan a table QR code to enter the customer view.
3. Click the floating chat icon in the bottom right corner.
4. Ask the AI something like: *"I am vegetarian, what can I eat here?"* The AI will parse the SmartEats menu and recommend the Zobo Drink or other appropriate items.
