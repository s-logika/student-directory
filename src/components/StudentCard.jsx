import { useState } from "react";
import "./StudentCard.css";

function StudentCard({ student }) {
    const [selected, setSelected] = useState(false);

    return (
        <div className={`card ${selected ? "card-selected" : ""}`}>
            {student.isActive ? (
                <span className="badge badge-enrolled">✅ Enrolled</span>
            ) : (
                <span className="badge badge-alumni">🎓 Alumni</span>
            )}

            <p className="card-name">{student.name}</p>
            <p className="card-detail">
                <span>Age:</span> {student.age}
            </p>
            <p className="card-detail">
                <span>Course:</span> {student.course}
            </p>
            <p className="card-detail">
                <span>Student ID:</span> #{student.id}
            </p>

            {selected && <p className="selected-msg">✔ Student Selected</p>}

            <button
                className={`select-btn ${selected ? "selected" : ""}`}
                onClick={() => setSelected(!selected)}
            >
                {selected ? "Selected ✔" : "Select"}
            </button>
        </div>
    );
}

export default StudentCard;
