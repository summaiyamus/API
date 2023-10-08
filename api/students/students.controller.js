const {
    create,
    getStudents,
    getStudentsById, 
    getStudentsByName,
    updateStudentsById,
    deleteStudentsById
} = require('./students.service');

module.exports = {
    createStudents: (req, res) => {
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
    getStudentById: async (req, res) => {
        const id = req.params.id;
         

        getStudentsById(id, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error fetching Students data"
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
    getStudentsByName: (req, res) => {
        const name = req.query.name;
    
        if (!name) {
            return res.status(400).json({ error: "Name parameter is required." });
        }
    
        getStudentsByName(name, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error fetching student data"
                });
            }
            if (result === null) {
                return res.status(400).json({
                    success: 1,
                    message: "Record not found."
                });
            }
            return res.json({
                success: 1,
                data: result
            });
        });
    },
    

    getStudents: (req, res) => {
        getStudents((err, result) => {
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
    updateStudentsById: (req, res) => {
    const body = req.body; 
    
    console.log(body);
        updateStudentsById(body, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error updating book data ||con issue"
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
                message: "Record Updated successfully"
            });
        });
    },
    deleteStudentsById: (req, res) => {
        const id = req.params.id; 
        deleteStudentsById(id, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error deleting Student data"
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
