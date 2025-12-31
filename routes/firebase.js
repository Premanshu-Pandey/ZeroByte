const express = require("express");
const upload = require("./multer");
const { uploadPDF } = require("./uploadController");

const router = express.Router();

router.post("/admin/upload", upload.single("pdf"), uploadPDF);

module.exports = router;


