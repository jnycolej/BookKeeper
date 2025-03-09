// importBooks.js

const fs = require('fs'); // File system module to read the JSON file
const path = require('path'); // Path module to handle file paths
const connectDB = require('../src/config/database'); // Import the database connection function

(async () => {
    try {
        // Read the books.json file
        const filePath = path.join(__dirname, '../books.json'); // Adjust path to match your structure
        const booksData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

        // Connect to the database
        const db = await connectDB();

        // Insert the books into the 'books' collection
        await db.collection('books').insertMany(booksData);

        console.log('Books imported successfully!');
    } catch (error) {
        console.error('Error importing books:', error);
    } finally {
        process.exit(); // Exit the script
    }
})();
