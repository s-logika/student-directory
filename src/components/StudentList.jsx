import { useState } from "react";
import "./StudentList.css";
import StudentCard from "./StudentCard";

function StudentList({ students }) {
    const [filter, setFilter] = useState("All");

    const filteredStudents = students.filter((student) => {
        if (filter === "Enrolled") return student.isActive === true;
        if (filter === "Alumni") return student.isActive === false;
        return true;
    });

    return (
        <div className="student-list-container">
            <h2 className="student-list-title">Student Directory</h2>
            <p className="student-count">
                Showing {filteredStudents.length} students
            </p>

            <div className="filter-bar">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search by name..."
                />
                <button
                    className={`filter-btn ${filter === "All" ? "active" : ""}`}
                    onClick={() => setFilter("All")}
                >
                    All
                </button>
                <button
                    className={`filter-btn ${filter === "Enrolled" ? "active" : ""}`}
                    onClick={() => setFilter("Enrolled")}
                >
                    Enrolled
                </button>
                <button
                    className={`filter-btn ${filter === "Alumni" ? "active" : ""}`}
                    onClick={() => setFilter("Alumni")}
                >
                    Alumni
                </button>
            </div>

            <div className="student-grid">
                {filteredStudents.map((student) => (
                    <StudentCard key={student.id} student={student} />
                ))}
            </div>
        </div>
    );
}

export default StudentList;
