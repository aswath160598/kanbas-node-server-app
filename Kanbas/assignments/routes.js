import Database from "../Database/index.js";
export default function AssignmentRoutes(app) {
        app.get("/api/courses/:course_id/assignments", (req, res) => {
        const { course_id } = req.params;
        const assignment_list = Database.assignments
        .filter((a) => a.course === cid);
        res.send(assignment_list);
    });
}

