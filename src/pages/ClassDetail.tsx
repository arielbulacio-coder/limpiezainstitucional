import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CLASSES } from '../data/courseData';
import { Key, BookOpen, Clock, ChevronLeft, ArrowRight } from 'lucide-react';

const ClassDetail = () => {
  const { id } = useParams();
  const classId = parseInt(id || '1');
  const cls = CLASSES.find(c => c.id === classId);
  
  const [keyword, setKeyword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState('');

  if (!cls) return <div className="section-container">Clase no encontrada</div>;

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.toUpperCase() === cls.keyword.toUpperCase()) {
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Palabra clave incorrecta. Por favor, intente de nuevo.');
    }
  };

  return (
    <div className="section-container">
      <Link to="/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', textDecoration: 'none', marginBottom: '2rem' }}>
        <ChevronLeft size={20} /> Volver al dashboard
      </Link>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Módulo {cls.id}</h2>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>{cls.title}</h1>
      </div>

      {!isUnlocked ? (
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="card glass" 
           style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center', padding: '3rem 2rem' }}
        >
          <div style={{ background: 'var(--bg-deep)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '1px solid var(--border)', color: 'var(--primary)' }}>
             <Key size={32} />
          </div>
          <h3 style={{ marginBottom: '1rem' }}>Contenido Protegido</h3>
          <p style={{ color: 'var(--text-dim)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Ingrese la palabra clave para acceder al contenido de esta sesión.</p>
          
          <form onSubmit={handleUnlock}>
            <input 
              type="text" 
              placeholder="Palabra Clave" 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              style={{ textAlign: 'center', letterSpacing: '0.2rem', textTransform: 'uppercase', marginBottom: '1rem' }}
            />
            {error && <p style={{ color: 'var(--error)', fontSize: '0.8rem', marginBottom: '1rem' }}>{error}</p>}
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Acceder</button>
          </form>
        </motion.div>
      ) : (
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <div className="grid grid-cols-2" style={{ marginBottom: '4rem' }}>
             <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                   <BookOpen size={20} /> <strong>Contenido</strong>
                </div>
                <p style={{ color: 'var(--text-dim)', whiteSpace: 'pre-wrap' }}>{cls.content}</p>
             </div>
             <div className="card glass">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                   <Clock size={20} /> <strong>Detalles</strong>
                </div>
                <p>Duración Estimada: {cls.duration}</p>
                <div style={{ marginTop: '2rem' }}>
                   <Link to={`/quiz/${cls.id}`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Comenzar Cuestionario <ArrowRight size={20} />
                   </Link>
                </div>
             </div>
          </div>
          
          <div className="card" style={{ borderStyle: 'dashed' }}>
            <h3>Apuntes de Cátedra</h3>
            <p style={{ color: 'var(--text-dim)', marginTop: '0.5rem' }}>Consulte los materiales proporcionados por la instructora Maricl Gauna en clase.</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ClassDetail;
