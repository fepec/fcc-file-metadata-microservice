const asyncHandler = require('express-async-handler')

// Get file metadata
exports.file_metadata = asyncHandler( async (req, res, next ) => {
    res.send("Not implemented yet: Get file metadata")
})