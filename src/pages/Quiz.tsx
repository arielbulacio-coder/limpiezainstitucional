import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CLASSES } from '../data/courseData';
import { CheckCircle, XCircle, ChevronLeft, RefreshCw } from 'lucide-react';

const Quiz = () => {
  const { id } = useParams();
  const classId = parseInt(id || '1');
  const cls = CLASSES.find(c => c.id === classId);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  if (!cls) return <div className="section-container">Cuestionario no encontrado</div>;

  const handleSelect = (questionId: number, index: number) => {
    if (showResults) return;
    setAnswers(prev => ({ ...prev, [questionId]: index }));
  };

  const calculateScore = () => {
    let correct = 0;
    cls.questions.forEach(q => {
      if (answers[q.id] === q.correctAnswerIndex) correct++;
    });
    return {
      correct,
      total: cls.questions.length,
      percentage: Math.round((correct / cls.questions.length) * 100)
    };
  };

  const score = calculateScore();

  return (
    <div className="section-container">
      <Link to={`/class/${cls.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', textDecoration: 'none', marginBottom: '2rem' }}>
        <ChevronLeft size={20} /> Volver a la clase
      </Link>

      <header style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Cuestionario Autoevaluable</h2>
        <h1 style={{ fontSize: '2.5rem' }}>Clase {cls.id}: {cls.title}</h1>
        <p style={{ color: 'var(--text-dim)' }}>20 preguntas para validar sus conocimientos.</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {cls.questions.map((q, qIndex) => (
          <motion.div 
            key={q.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: qIndex * 0.05 }}
            className="card"
            style={{ 
              borderColor: showResults 
                ? (answers[q.id] === q.correctAnswerIndex ? 'var(--success)' : (answers[q.id] !== undefined ? 'var(--error)' : 'var(--border)')) 
                : (answers[q.id] !== undefined ? 'var(--primary)' : 'var(--border)')
            }}
          >
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>{qIndex + 1}. {q.question}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {q.options.map((option, oIndex) => {
                const isSelected = answers[q.id] === oIndex;
                const isCorrect = q.correctAnswerIndex === oIndex;
                
                let optionStyle: React.CSSProperties = {
                   padding: '1rem',
                   borderRadius: '0.5rem',
                   cursor: 'pointer',
                   border: '1px solid var(--border)',
                   transition: '0.2s',
                   background: isSelected ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'space-between'
                };

                if (showResults) {
                   if (isCorrect) {
                     optionStyle.background = 'rgba(16, 185, 129, 0.15)';
                     optionStyle.borderColor = 'var(--success)';
                   }
                   if (isSelected && !isCorrect) {
                     optionStyle.background = 'rgba(239, 68, 68, 0.15)';
                     optionStyle.borderColor = 'var(--error)';
                   }
                }

                return (
                  <div 
                    key={oIndex} 
                    style={optionStyle}
                    onClick={() => handleSelect(q.id, oIndex)}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                       <span style={{ fontWeight: isSelected || (showResults && isCorrect) ? 'bold' : 'normal' }}>{option}</span>
                       {showResults && isCorrect && <span style={{ fontSize: '0.7rem', color: 'var(--success)', marginTop: '0.2rem' }}>✓ Respuesta Correcta</span>}
                       {showResults && isSelected && !isCorrect && <span style={{ fontSize: '0.7rem', color: 'var(--error)', marginTop: '0.2rem' }}>✗ Tu elección</span>}
                    </div>
                    {showResults && isCorrect && <CheckCircle size={18} color="var(--success)" />}
                    {showResults && isSelected && !isCorrect && <XCircle size={18} color="var(--error)" />}
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ marginTop: '4rem', padding: '2rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        {!showResults ? (
          <button 
             className="btn btn-primary" 
             style={{ padding: '1rem 3rem' }}
             onClick={() => {
                if (Object.keys(answers).length < cls.questions.length) {
                   if (!confirm('No ha respondido todas las preguntas. ¿Desea continuar?')) return;
                }
                setShowResults(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
             }}
          >
             Finalizar Cuestionario
          </button>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card glass"
            style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem' }}
          >
             <h2 style={{ marginBottom: '1rem' }}>Resultados</h2>
             <div style={{ fontSize: '3rem', fontWeight: 'bold', color: score.percentage >= 60 ? 'var(--success)' : 'var(--error)' }}>
                {score.correct} / {score.total}
             </div>
             <p style={{ color: 'var(--text-dim)', marginBottom: '2rem' }}>Puntaje: {score.percentage}%</p>
             
             <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button className="btn btn-primary" onClick={() => { setAnswers({}); setShowResults(false); }}>
                   Reintentar <RefreshCw size={18} />
                </button>
                <Link to="/dashboard" className="btn" style={{ border: '1px solid var(--border)' }}>
                   Volver al Inicio
                </Link>
             </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
