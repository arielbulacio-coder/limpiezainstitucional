import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, ShieldCheck, Clock, User } from 'lucide-react';
import { COURSE_INFO } from '../data/courseData';

const Landing = () => {
  return (
    <div className="section-container">
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-gradient" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: '1rem' }}>
            Formación Profesional
          </h2>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Limpieza Institucional
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-dim)', maxWidth: '700px', margin: '0 auto' }}>
            {COURSE_INFO.description}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}
        >
          <Link to="/dashboard" className="btn btn-primary">
             Ver Clases <BookOpen size={20} />
          </Link>
        </motion.div>
      </header>

      <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="card"
        >
          <User className="text-gradient" size={40} style={{ marginBottom: '1rem' }} />
          <h3>Instructora</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{COURSE_INFO.instructor}</p>
          <p style={{ color: 'var(--text-dim)' }}>Especialista en Bioseguridad e Higiene Institucional.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="card"
        >
          <Clock className="text-gradient" size={40} style={{ marginBottom: '1rem' }} />
          <h3>Detalles</h3>
          <p style={{ fontWeight: 'bold' }}>Duración: {COURSE_INFO.hours}</p>
          <p style={{ color: 'var(--text-dim)' }}>Frecuencia: 2 veces por semana (14 Clases)</p>
        </motion.div>
      </div>

      <div style={{ marginTop: '4rem' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Lo que aprenderás</h3>
        <div className="grid grid-cols-3">
          {[
            { icon: <ShieldCheck />, title: "Bioseguridad", text: "Protocolos avanzados de desinfección en establecimientos educativos." },
            { icon: <GraduationCap />, title: "Marco Legal", text: "Derechos y obligaciones bajo la Ley 24557 y resolución 299/11." },
            { icon: <BookOpen />, title: "Higiene", text: "Manejo seguro de sustancias químicas y prevención de ETA." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card glass"
              style={{ padding: '1.5rem' }}
            >
              <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{item.icon}</div>
              <h4 style={{ marginBottom: '0.5rem' }}>{item.title}</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <footer style={{ marginTop: '6rem', textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
        <p>{COURSE_INFO.institution}</p>
        <p>&copy; 2026 {COURSE_INFO.instructor}</p>
      </footer>
    </div>
  );
};

export default Landing;
