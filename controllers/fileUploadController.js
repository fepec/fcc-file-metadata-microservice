const asyncHandler = require('express-async-handler')
const multer = require('multer');
const upload = multer({ dest: '../public/data/uploads/'})

// Get file metadata
exports.file_metadata = [
    upload.single('upfile'),
    (req, res ) => {
    res.send({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size,
    })
}]