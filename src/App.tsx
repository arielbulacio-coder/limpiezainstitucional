import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import ClassDetail from './pages/ClassDetail';
import Quiz from './pages/Quiz';

function App() {
  return (
    <BrowserRouter>
      <div className="app-main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/class/:id" element={<ClassDetail />} />
          <Route path="/quiz/:id" element={<Quiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
