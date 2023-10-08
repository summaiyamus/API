//queries 

const pool = require("./../../config/database");

module.exports = {
    create: (data, callback) => {
        // pool.query() takes 3 params 1.query , 2. values, 3.callback
        pool.query(
            "INSERT INTO books (title, author, `publish year`) VALUES (?, ?, ?)",

            [

                data.title,
                data.author,
                data.pub_year
            ],
            (err, res, fields) => {
                if (err) {
                    return callback(err);
                } else {
                    return callback(null, res);
                }
            }
        )
    },
    getBooks: (callback) => {

        // for getting all the data of books
        pool.query(
            "SELECT id, title, author, `publish year` FROM books",
            [],
            (err, results, fields) => {
                if (err) {
                    return callback(err);
                } else {
                    return callback(null, results);
                }
            }
        );

    },

    getBooksById: (id, callback) => {
        // for getting specific data of books
        console.log("function id = ", id);
        pool.query(
            "SELECT * FROM books WHERE id = ?",
            [id],
            (err, results, fields) => {
                if (err) {
                    // console.log("function prob");
                    return callback(err);
                } else {
                    if (results.length === 0) {
                        console.log("success");
                        return callback(null, null); // No record found
                    }
                    const d = results[0];
                    // console.log("d = ",d);
                    return callback(null, d);//data retuning from db to frntend
                }
            }
        );
    },
    getBooksByName: (name, callback) => {
        console.log(name, 'name via url');
        // for getting books by name
        pool.query(
            "SELECT * FROM books WHERE title LIKE ?",
            [`%${name}%`],
            (err, results, fields) => {
                if (err) {
                    console.log(err, 'error');
                    return callback(err);
                } else {
                    console.log('result', results);

                    if (results.length === 0) {
                        // No records found
                        return callback(null, []);
                    } else {
                        // Records found
                        
                        return callback(null, results);
                    }
                }
            }
        );
    },

    updateBooksById: (data, callback) => {
        pool.query(
            "UPDATE books SET  author=?, `publish year`=? WHERE title=?",
            [
                data.author,
                data.pub_year,
                data.title,

            ],
            (err, results, fields) => {
                if (err) {
                    return callback(err);
                } else {
                    console.log('result', results);

                    if (results.length === 0) {
                        // No records found
                        return callback(null, []);
                    } else {
                        // Records found
                        return callback(null, results);
                    }
                }
            }
        );
    },

    deleteBooksById: (title, callback) => {
        console.log('backend title ',title);
        // for deleting specific data 
        pool.query(
            "DELETE from books WHERE title=? LIMIT 1",
            [title],
            (err, results, fields) => {
                if (err) {
                    return callback(err);
                } else {
                    console.log('result', results);

                    if (results.length === 0) {
                        // No records found
                        return callback(null, []);
                    } else {
                        // Records found
                        return callback(null, results);
                    }
                }
            }
        );
    }
}