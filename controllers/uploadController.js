const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const bucket = require("../config/firebase.js");

console.log('step 1')

exports.uploadPDF = async (req, res) => {
  try {
    const file = req.file;
    // const { subject, branch, semester } = req.body;

    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Create unique filename
    // const fileName = `notes/${branch}/${subject}/${uuidv4()}.pdf`;
    const fileName = req.file.originalname

    // Upload to Firebase
    await bucket.upload(file.path, {
      destination: fileName,
    //   metadata: {
    //     contentType: "application/pdf"
    //   }
    });
    console.log('step 1')

    // Make file public (optional)
    await bucket.file(fileName).makePublic();
    console.log('step 1')

    const fileUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
    console.log('step 1')

    // Delete temp file
    fs.unlinkSync(file.path);
    console.log('step 1')

    res.json({
      message: "File uploaded successfully",
      fileUrl
    });
console.log('step 1')
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
