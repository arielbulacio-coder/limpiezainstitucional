import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import ClassDetail from './pages/ClassDetail';
import Quiz from './pages/Quiz';
import Recipes from './pages/Recipes';
import Glossary from './pages/Glossary';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="app-main">
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Navigate to="/" replace />} />
            <Route path="/dashboard/:courseId" element={<Dashboard />} />
            <Route path="/class/:courseId/:id" element={<ClassDetail />} />
            <Route path="/quiz/:courseId/:id" element={<Quiz />} />
            <Route path="/recipes/:courseId" element={<Recipes />} />
            <Route path="/glossary" element={<Glossary />} />
          </Routes>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
