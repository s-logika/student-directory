import "./StudentCard.css";

function StudentCard({ student }) {
    return (
        <div className="card">
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
            <button className="select-btn">Select</button>
        </div>
    );
}

export default StudentCard;
