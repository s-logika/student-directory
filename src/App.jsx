import "./App.css";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";

const students = [];

function App() {
    return (
        <div>
            <Header />
            <StudentList students={students} />
            <Footer />
        </div>
    );
}

export default App;
