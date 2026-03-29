import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import ClassDetail from './pages/ClassDetail';
import Quiz from './pages/Quiz';
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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/class/:id" element={<ClassDetail />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/glossary" element={<Glossary />} />
          </Routes>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
