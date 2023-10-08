//queries 

const pool = require("./../../config/database");

module.exports = {
    create: (data, callback) => {
        // pool.query() takes 3 params 1.query , 2. values, 3.callback
        pool.query(
            "INSERT INTO students ( name,age) VALUES (?, ?)",

            [
               
                data.name,
                data.age,
                
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
        getStudents: (callback) => {

        // for getting all the data of Students
        pool.query(
            "SELECT id, name,age FROM students",
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

    getStudentsById: (id, callback) => {
        // for getting specific data of Students
        console.log("function id = ",id);
        pool.query(
            "SELECT * FROM Students WHERE id = ?",
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
    getStudentsByName: (name, callback) => {
       
        pool.query(
            "SELECT * FROM students WHERE name LIKE ?",
            [`%${name}%`],
            (err, results, fields) => {
                if (err) {
                    console.log("function prob");
                    return callback(err);
                } else {
                    console.log('result', results);
                    if (results.length === 0) {
                        console.log("success");
                        return callback(null, null); // No record found
                    }
                    
                    const data = results.map(row => {
                        return {name: row.name, age: row.age };
                    });
                    console.log("data = ", data);
                    return callback(null, data);//data retuning from db to frntend
                }
            }
        );
    },
     
    updateStudentsById: (data, callback) => {
        pool.query(
            "UPDATE students SET age=? WHERE name=?",
            [   data.age,
                data.name,
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
    
    deleteStudentsById: (name, callback) => {
// console.log(data);
        // for deleting specific data 
        pool.query(
            "DELETE from students WHERE name=?  LIMIT 1",
            [name],
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