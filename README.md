# SmartEats

SmartEats is a contactless restaurant ordering system. This repository is configured to run locally for development.

## Setup Instructions

1. **Install Dependencies**
   Make sure you have Node.js and pnpm installed. Then run:
   ```bash
   pnpm install
   ```

2. **Database Configuration**
   The project requires a MongoDB database. By default, it expects a local MongoDB instance running on port 27017.
   Ensure that you have your `.env` file correctly configured:
   ```env
   MONGODB_URI="mongodb://localhost:27017/smarteats"
   ```

3. **Seed the Database**
   To populate the Nigerian menu, start the development server first, and then visit the seeding endpoint.

4. **Run the Project**
   Start the development server:
   ```bash
   pnpm run play
   ```
   Or using next dev directly:
   ```bash
   pnpm next dev
   ```

5. **Initialize Menu Data**
   While the server is running, visit:
   [http://localhost:3000/api/refreshDemoData](http://localhost:3000/api/refreshDemoData)
   This will clear the existing demo data and insert the "smarteats" restaurant data (Nigerian menu) into your local database.

6. **View the Application**
   Visit [http://localhost:3000/smarteats](http://localhost:3000/smarteats) to see the menu.
