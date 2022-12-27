const multer = require("multer");
const GridFsStorage = require('multer-gridfs-storage').GridFsStorage;

const storage = new GridFsStorage({
    url: "mongodb+srv://shimittal:shivani@cluster0.s51nxga.mongodb.net/?retryWrites=true&w=majority",

    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-any-name-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-any-name-${file.originalname}`,
        };
    },
});

module.exports = multer({ storage });
