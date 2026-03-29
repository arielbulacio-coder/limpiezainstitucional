import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CLASSES } from '../data/courseData';
import { 
  ChevronRight, Clock, Shield, Brush, FlaskConical, Scale, Book, Utensils, 
  AlertTriangle, Droplets, ListChecks, Activity, Users, Recycle, Microscope, GraduationCap,
  Home, BookText
} from 'lucide-react';

const IconRenderer = ({ icon }: { icon: string }) => {
  const icons: Record<string, React.ReactNode> = {
    'shield': <Shield size={24} />,
    'brush': <Brush size={24} />,
    'flask': <FlaskConical size={24} />,
    'scale': <Scale size={24} />,
    'book': <Book size={24} />,
    'utensils': <Utensils size={24} />,
    'alert-triangle': <AlertTriangle size={24} />,
    'droplets': <Droplets size={24} />,
    'list-checks': <ListChecks size={24} />,
    'activity': <Activity size={24} />,
    'users': <Users size={24} />,
    'recycle': <Recycle size={24} />,
    'microscope': <Microscope size={24} />,
    'graduation-cap': <GraduationCap size={24} />
  };
  return icons[icon] || <Book size={24} />;
};

const Dashboard = () => {
  return (
    <div className="section-container">
      <header style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
        <div>
          <h1 className="text-gradient">Planificación Modular</h1>
          <p style={{ color: 'var(--text-dim)' }}>Selecciona una clase para ingresar. Necesitarás la palabra clave.</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Link to="/glossary" className="btn glass primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem' }}>
            <BookText size={18} /> Glosario
          </Link>
          <Link to="/" className="btn glass" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem' }}>
            <Home size={18} /> Inicio
          </Link>
        </div>
      </header>

      <div className="grid">
        {CLASSES.map((cls, i) => (
          <motion.div
            key={cls.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link to={`/class/${cls.id}`} className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', textDecoration: 'none', color: 'inherit' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ background: 'var(--bg-deep)', padding: '0.75rem', borderRadius: '0.75rem', width: '3.5rem', height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', border: '1px solid var(--border)' }}>
                   <IconRenderer icon={cls.icon} />
                </div>
                <div>
                   <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{cls.id}. {cls.title}</h3>
                   <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>{cls.description}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <div style={{ display: 'none', gap: '0.5rem', alignItems: 'center', color: 'var(--text-dim)', fontSize: '0.8rem' }} className="md-flex">
                   <Clock size={14} /> {cls.duration}
                </div>
                <div style={{ color: 'var(--text-dim)' }}>
                   <ChevronRight size={20} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
