//queries 

const pool = require("./../../config/database");

module.exports = {
    create: (data, callback) => {
        // pool.query() takes 3 params 1.query , 2. values, 3.callback
        pool.query(
            "INSERT INTO teachers (name,subject) VALUES ( ?, ?)",

            [
               
                data.name,
                data.subject,
                
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
        getTeacher: (callback) => {

        // for getting all the data of Teacher
        pool.query(
            "SELECT id, name,subject FROM teachers",
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

    getTeacherById: (id, callback) => {
        // for getting specific data of Teacher
        console.log("function id = ",id);
        pool.query(
            "SELECT * FROM teachers WHERE id = ?",
            [id],
            (err, results, fields) => {
                if (err) {
                    console.log("function prob");
                    return callback(err);
                } else {
                    if (results.length === 0) {
                        console.log("success");
                        return callback(null, null); // No record found
                    }
                    const d=results[0];
                    console.log("d = ",d);
                    return callback(null, d);//data retuning from db to frntend
                }
            }
        );
    },
     
    updateTeacherById: (data, callback) => {
        pool.query(
            "UPDATE teachers SET name=?, subject=? WHERE id=?",
            [
                
                data.name,
                data.subject,
                
                
                
            ],
            (err, res, fields) => {
                if (err) {
                    return callback(err);
                } else {
                    return callback(null, res);
                }
            }
        );
    },
    
    deleteTeacherById: (id, callback) => {
// console.log(data);
        // for deleting specific data 
        pool.query(
            "DELETE from teacher WHERE id=?",
            [id],
            (err, res, fields) => {
                if (err) {
                    return callback(err);
                } else {
                    return callback(null, res);
                }
            }
        );
    }
}