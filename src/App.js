import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./pages/projects.js";
import Contact from "./pages/contact.js";
import Resume from "./pages/experience.js";

function App() {
    
  return (
    <Router>
      <div className="app">
        {/* Header */}
        <header className="header">
          <h1>Charles Carroll</h1>
          <nav>
            <ul>
              <li><Link to="/" className="nav-button">Projects</Link></li>
              <li><Link to="/contact" className="nav-button">Contact/About</Link></li>
              <li><Link to="/resume" className="nav-button">Resume/Experience</Link></li>
            </ul>
          </nav>
        </header>

        {/* Page Content */}
        <main>
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
