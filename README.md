BookKeeper

BookKeeper is a personal library tracking application that allows users to catalog, organize, and track their reading history across physical books, ebooks, and borrowed titles. It is a modern alternatice ot traditional book tracking tools, with an emphasis on clean UI, flexible metadata, and future adaptability.

Link to project: Coming Soon

How It's Made:

Tech used: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Auth0, Docker, Vite, Tailwind CSS

BookKeeper was designed as a full-stack application from the beginning, with clear separation between the frontend, backend, and data layers. The frontend is built with React and focuses on reusable components, predictable state management, and a clean user experience. Routing and protected views ensure users can securely manage their personal libraries.

The backend is powered by Node.js and Express, providing RESTful API endpoints for managing books, genres, reading status, and metadata. MongoDB was chosen for its flexible document structure, allowing books to store varied information such as formats, series data, ratings, ISBN/ASIN identifiers, and reading dates without rigid schema constraints.

Authentication and authorization are handled through Auth0, ensuring that each user’s library is private and securely accessed. Docker is used to containerize both the frontend and backend, enabling consistent development environments and simplifying deployment.

Throughout development, features were built incrementally, tested locally, and refactored as the application grew in complexity.

Optimizations

As BookKeeper evolved, several optimizations were made to improve performance and maintainability:

- Refactored API routes to reduce redundant database queries
- Centralized API logic into service layers for cleaner frontend code
- Improved filtering and sorting logic to handle larger book collections efficiently
- Reduced unnecessary component re-renders by tightening state scope
- Containerized the application with Docker to eliminate environment inconsistencies

These changes resulted in a more scalable codebase and a smoother user experience as the library grows.

Lessons Learned:

Building BookKeeper reinforced the importance of thinking beyond MVP features and considering how real users interact with long-lived data. I gained hands-on experience designing APIs, structuring a growing React application, and managing authentication in a real-world scenario.

This project also taught me how valuable refactoring is as a skill — not just to clean up code, but to improve performance, readability, and future extensibility.

BookKeeper represents a significant step forward in my ability to design, build, and maintain full-stack applications independently.
