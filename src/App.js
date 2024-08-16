import './App.css';
import { ToDoListPage } from './routes/index.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ToDoListPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
