function StudentCard({ student }) {
    return (
        <div>
            <p>{student.name}</p>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>
            <p>Student ID: #{student.id}</p>
        </div>
    );
}

export default StudentCard;
