const upload = require("../middleware/upload");
const express = require("express");
const router = express.Router();
var uploadfiles=upload.fields([{ name: 'file1'},{name:'file2'}]);

router.post("/upload", uploadfiles, async (req, res) => {
   if(req.files)
    {
    console.log(req.files);
    res.send("sucessfully uploaded")
}
});

module.exports = router;
