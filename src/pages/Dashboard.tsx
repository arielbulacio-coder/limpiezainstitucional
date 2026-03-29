import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CLASSES } from '../data/courseData';
import { ChevronRight, Clock } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="section-container">
      <header style={{ marginBottom: '3rem' }}>
        <h1 className="text-gradient">Planificación Modular</h1>
        <p style={{ color: 'var(--text-dim)' }}>Selecciona una clase para ingresar. Necesitarás la palabra clave.</p>
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
                <div style={{ background: 'var(--bg-deep)', padding: '0.75rem', borderRadius: '0.75rem', width: '3.5rem', textAlign: 'center', fontWeight: 'bold', color: 'var(--primary)', border: '1px solid var(--border)' }}>
                   {cls.id}
                </div>
                <div>
                   <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{cls.title}</h3>
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
