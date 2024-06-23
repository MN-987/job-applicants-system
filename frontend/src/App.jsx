import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FormPage from "./pages/FormPage";
import SubmissionPage from "./pages/SubmissionPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/form/submitted" element={<SubmissionPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
