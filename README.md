Image Gallery with Pagination

A simple, responsive image gallery built with React and Tailwind CSS. It fetches placeholder images from the Lorem Picsum API and implements client-side pagination.

🚀 Key Features

API Integration: Fetches image data using axios from https://picsum.photos/v2/list.

Pagination: Displays 8 images per page and allows navigation using "Next" and "Prev" buttons.

Responsive Design: Styled using Tailwind CSS to look great on all screen sizes.

External Links: Clicking an image opens the original image URL in a new tab.

🛠️ Tech Stack

Framework: React

Styling: Tailwind CSS

HTTP Client: Axios

Icons: Lucide React

📦 File Structure

The project assumes a standard Create React App or Vite structure:

├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Navbar.jsx  <-- Placeholder component
│   └── App.jsx         <-- Main component (the code you provided)
├── package.json
└── README.md


⚙️ Installation and Setup

Follow these steps to get the project running locally.

Prerequisites

Node.js (18+ recommended)

npm or yarn

1. Install Dependencies

You will need the following packages installed in your project root:

# Install required libraries
npm install react react-dom axios lucide-react

# Or using yarn
yarn add react react-dom axios lucide-react


2. File Content

Copy the content below into the respective files in your src/ directory.

src/App.jsx

This file contains the main logic and image grid.

src/components/Navbar.jsx

Your original code imports Navbar, so a simple component is needed:

import React from 'react';

const Navbar = ({ ind }) => {
  return (
    <nav className="p-4 bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-amber-500">Image Gallery (Page {ind})</h1>
        <p className="text-sm text-gray-400 hidden sm:block">
          Powered by Lorem Picsum API
        </p>
      </div>
    </nav>
  );
};

export default Navbar;


3. Tailwind CSS Setup

Ensure you have Tailwind CSS configured in your project. If you are using a modern setup (like Vite), you typically add the following directives to your main CSS file (e.g., src/index.css):

@tailwind base;
@tailwind components;
@tailwind utilities;


🚀 Running the App

After setup, run the development server:

npm run dev
# or
npm start


The application should now be accessible at http://localhost:3000 (or the port specified by your tool).