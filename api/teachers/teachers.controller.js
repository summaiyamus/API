const {
    create,
    getTeacher,
    getTeacherById, 
    updateTeacherById,
    deleteTeacherById
} = require('./teachers.service');

module.exports = {
    createTeacher: (req, res) => {
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
    getTeacherById: async (req, res) => {
        const id = req.params.id;
         

        getTeacherById(id, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error fetching Teacher data"
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
    getTeacher: (req, res) => {
        getTeacher((err, result) => {
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
    updateTeacherById: (req, res) => {
    const body = req.body; 
    
    console.log(body);
        updateTeacherById(body, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error updating data ||con issue"
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
    deleteTeacherById: (req, res) => {
        const id = req.params.id; 
        deleteTeacherById(id, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error deleting Teacher data"
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
