import "./StudentList.css";
import StudentCard from "./StudentCard";

function StudentList({ students }) {
    return (
        <div className="student-list-container">
            <h2 className="student-list-title">Student Directory</h2>
            <p className="student-count">Showing {students.length} students</p>
            <div className="student-grid">
                {students.map((student) => (
                    <StudentCard key={student.id} student={student} />
                ))}
            </div>
        </div>
    );
}

export default StudentList;
