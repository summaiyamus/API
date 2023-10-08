const {
    create,
    getBooks,
    getBooksById,
    getBooksByName,
    updateBooksById,
    deleteBooksById
} = require('./books.service');

module.exports = {
    createBooks: (req, res) => {
        const body = req.body;
        create(body, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(400).json({
                    success: 0,
                    message: "Connectivity error"
                });
            } else {
                return res.status(200).json({
                    success: 1,
                    data: result
                });
            }
        });
    },
    getBookById: async (req, res) => {
        const id = req.params.id;


        getBooksById(id, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error fetching book data"
                });
            }
            if (!result) {
                return res.status(404).json({
                    success: 0,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 1,
                data: result
            });

        });
    },
    getBooksByName: (req, res) => {
        const name = req.query.name;

        if (!name) {
            return res.status(400).json({ error: "Name parameter is required." });
        }

        getBooksByName(name, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error fetching book data"
                });
            }
            if (result.length === 0) {
                return res.status(400).json({
                    success: 1,
                    message: "Record not found."
                })
            }
            if (result.affectedRows === 0) {
                return res.status(400).json({
                    success: 0,
                    message: "No matching book found for update"
                });
            }
            return res.json({
                success: 1,
                data: result
            });
        });
    },


    getBooks: (req, res) => {
        getBooks((err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error fetching book data"
                });
            }
            return res.json({
                success: 1,
                data: result
            });
        });
    },
    updateBooksById: (req, res) => {
        const body = req.body;

        console.log(body);
        updateBooksById(body, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error updating book data ||con issue"
                });
            }
            if (result.length === 0) {
                return res.status(400).json({
                    success: 1,
                    message: "Record not found."
                })
            }
            if (!result) {

                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 1,
                message: "Record Updated successfully"
            });
        });
    },
    deleteBooksById: (req, res) => {
        const title = req.params.id;
        deleteBooksById(title, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error deleting book data"
                });
            }
            if (!result) {
                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 1,
                message: "Record Deleted successfully"
            });
        });
    }
};
