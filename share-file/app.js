const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up Multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the directory where uploaded files will be saved
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Set the file name to the original name of the uploaded file
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Serve uploaded files statically (optional)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Define a route to handle file uploads via API payload
app.post('/upload', upload.single('file'), (req, res) => {
  try {
    // Get the file information from the request
    const uploadedFile = req.file;

    if (!uploadedFile) {
      return res.status(400).send('No file uploaded.');
    }

    console.log('File uploaded:', uploadedFile.originalname);

    // Send a success response to the client
    res.status(200).json({ message: 'File uploaded successfully.' });
  } catch (error) {
    console.error('Error uploading file:', error.message);

    // Send an error response to the client
    res.status(500).json({ error: 'Error uploading file.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
