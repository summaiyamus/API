const express = require("express");
const router = express.Router();

const {
    createBooks,
    getBookById,
    getBooksByName,
    getBooks,
    updateBooksById,
    deleteBooksById
} = require("./books.controller");

router.get("/specificBook/:id", getBookById); 
router.get("/searchBooks", getBooksByName);

router.get("/allBooks/", getBooks);
router.post("/insertBook/", createBooks);//insering data into db

router.patch("/updateBook/", updateBooksById);
router.delete("/delBook/:id", deleteBooksById);

module.exports = router;
