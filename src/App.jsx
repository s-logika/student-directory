import { useEffect } from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";

const students = [
    {
        id: 1,
        name: "Amal Perera",
        age: 21,
        course: "Information Technology",
        isActive: true,
    },
    {
        id: 2,
        name: "Nimesha Silva",
        age: 22,
        course: "Business Management",
        isActive: false,
    },
    {
        id: 3,
        name: "Kasun Fernando",
        age: 20,
        course: "Engineering",
        isActive: true,
    },
    {
        id: 4,
        name: "Dilani Ranasinghe",
        age: 23,
        course: "Information Technology",
        isActive: true,
    },
    {
        id: 5,
        name: "Tharindu Wijesinghe",
        age: 21,
        course: "Business Management",
        isActive: false,
    },
    {
        id: 6,
        name: "Sanduni Jayawardena",
        age: 22,
        course: "Engineering",
        isActive: true,
    },
];

function App() {
    useEffect(() => {
        console.log("Student Directory Loaded");
    }, []);

    useEffect(() => {
        document.title = `${students.length} Students | Directory`;
    }, []);

    return (
        <div>
            <Header />
            <StudentList students={students} />
            <Footer />
        </div>
    );
}

export default App;
