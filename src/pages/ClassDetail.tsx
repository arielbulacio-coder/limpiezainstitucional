import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CLASSES as LIMPIEZA_CLASSES, COURSE_INFO as LIMPIEZA_COURSE_INFO } from '../data/courseData';
import { FOOD_CLASSES, FOOD_COURSE_INFO } from '../data/foodData';
import { PIZZA_CLASSES, PIZZA_COURSE_INFO } from '../data/pizzaData';
import { 
  Key, BookOpen, Clock, ChevronLeft, ArrowRight, Shield, Brush, FlaskConical, Scale, Book, 
  Utensils, AlertTriangle, Droplets, ListChecks, Activity, Users, Recycle, Microscope, GraduationCap 
} from 'lucide-react';

const IconRenderer = ({ icon, size = 48, opacity = 0.3 }: { icon: string, size?: number, opacity?: number }) => {
  const icons: Record<string, React.ReactNode> = {
    'shield': <Shield size={size} opacity={opacity} />,
    'brush': <Brush size={size} opacity={opacity} />,
    'flask': <FlaskConical size={size} opacity={opacity} />,
    'scale': <Scale size={size} opacity={opacity} />,
    'book': <Book size={size} opacity={opacity} />,
    'utensils': <Utensils size={size} opacity={opacity} />,
    'alert-triangle': <AlertTriangle size={size} opacity={opacity} />,
    'droplets': <Droplets size={size} opacity={opacity} />,
    'list-checks': <ListChecks size={size} opacity={opacity} />,
    'activity': <Activity size={size} opacity={opacity} />,
    'users': <Users size={size} opacity={opacity} />,
    'recycle': <Recycle size={size} opacity={opacity} />,
    'microscope': <Microscope size={size} opacity={opacity} />,
    'graduation-cap': <GraduationCap size={size} opacity={opacity} />
  };
  return icons[icon] || <Book size={size} opacity={opacity} />;
};

const ClassDetail = () => {
  const { courseId, id } = useParams();
  const classId = parseInt(id || '1');
  const CLASSES = courseId === 'alimentos' ? FOOD_CLASSES : courseId === 'pizza' ? PIZZA_CLASSES : LIMPIEZA_CLASSES;
  const COURSE_INFO = courseId === 'alimentos' ? FOOD_COURSE_INFO : courseId === 'pizza' ? PIZZA_COURSE_INFO : LIMPIEZA_COURSE_INFO;
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
      <Link to={`/dashboard/${courseId}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', textDecoration: 'none', marginBottom: '2rem' }}>
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
           style={{ maxWidth: '400px', margin: '4rem auto', textAlign: 'center', padding: '3rem 2rem' }}
        >
          <div style={{ background: 'var(--bg-deep)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '1px solid var(--border)', color: 'var(--primary)' }}>
             <Key size={32} />
          </div>
          <h3 style={{ marginBottom: '1rem' }}>Contenido Protegido</h3>
          <p style={{ color: 'var(--text-dim)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Ingrese la palabra clave proporcionada por la instructora {COURSE_INFO.instructor}.</p>
          
          <form onSubmit={handleUnlock}>
            <input 
              type="text" 
              placeholder="Palabra Clave" 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              style={{ textAlign: 'center', letterSpacing: '0.2rem', textTransform: 'uppercase', marginBottom: '1rem' }}
            />
            {error && <p style={{ color: 'var(--error)', fontSize: '0.8rem', marginBottom: '1rem' }}>{error}</p>}
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Acceder al Módulo</button>
          </form>
        </motion.div>
      ) : (
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <div className="grid grid-cols-2" style={{ marginBottom: '3rem', alignItems: 'start' }}>
             <div className="card" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                   <BookOpen size={20} /> <strong>Material de Estudio</strong>
                </div>
                <div style={{ color: 'var(--text-main)', whiteSpace: 'pre-wrap', fontSize: '1.05rem', lineHeight: '1.7' }}>
                   {cls.content}
                </div>
                {cls.recipe && (
                  <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
                     <h3 style={{ color: 'var(--accent, #eab308)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Utensils size={24} /> Receta Práctica: {cls.recipe.title}
                     </h3>
                     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <img src={cls.recipe.image} alt={cls.recipe.title} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '0.75rem' }} />
                        <div style={{ background: 'var(--bg-deep)', padding: '1.5rem', borderRadius: '0.75rem' }}>
                           <h4 style={{ marginBottom: '0.5rem' }}>Ingredientes</h4>
                           <div style={{ whiteSpace: 'pre-wrap', fontSize: '0.95rem' }}>{cls.recipe.ingredients}</div>
                        </div>
                     </div>
                     <div style={{ background: 'var(--bg-deep)', padding: '1.5rem', borderRadius: '0.75rem' }}>
                        <h4 style={{ marginBottom: '0.5rem' }}>Paso a Paso</h4>
                        <div style={{ whiteSpace: 'pre-wrap', fontSize: '0.95rem' }}>{cls.recipe.instructions}</div>
                     </div>
                  </div>
                )}
             </div>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="card" style={{ padding: '0', overflow: 'hidden', height: '300px', position: 'relative' }}>
                   {cls.image ? (
                     <img 
                       src={cls.image} 
                       alt={cls.title} 
                       style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                     />
                   ) : (
                     <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, var(--bg-card), var(--bg-deep))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                        <IconRenderer icon={cls.icon} size={120} opacity={0.6} />
                     </div>
                   )}
                </div>
                <div className="card glass">
                   <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                      <Clock size={20} /> <strong>Requisitos de Cursada</strong>
                   </div>
                   <p style={{ marginBottom: '1.5rem' }}>Duración: {cls.duration}</p>
                   <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                     Al finalizar la lectura, debe completar el cuestionario autoevaluable de 20 preguntas con un puntaje mínimo del 70%.
                   </p>
                   <Link to={`/quiz/${courseId}/${cls.id}`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Comenzar Evaluación <ArrowRight size={20} />
                   </Link>
                </div>
             </div>
          </div>
          
          <div className="card" style={{ borderStyle: 'dashed', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>¿Consultas sobre este módulo?</h3>
            <p style={{ color: 'var(--text-dim)' }}>Diríjase a la instructora Maricel Gauna durante las horas de capacitación presencial.</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ClassDetail;
