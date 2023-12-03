const express = require('express');
const router = express.Router();

// Require controller modules
const fileUpload_controller = require('../controllers/fileUploadController');

// File upload routes

// POST requrest for analyzing metadata
router.post("/", fileUpload_controller.file_metadata);

module.exports = router;