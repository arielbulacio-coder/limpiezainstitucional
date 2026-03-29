import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GLOSSARY } from '../data/glossaryData';
import type { GlossaryTerm } from '../data/glossaryData';
import { Search, ChevronLeft, BookOpen, Scale, FlaskConical, Stethoscope } from 'lucide-react';

const CategoryIcon = ({ category }: { category: GlossaryTerm['category'] }) => {
  switch (category) {
    case 'Legislación': return <Scale size={16} />;
    case 'Química': return <FlaskConical size={16} />;
    case 'Salud': return <Stethoscope size={16} />;
    case 'Técnica': return <BookOpen size={16} />;
  }
};

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGlossary = GLOSSARY.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="section-container">
      <header style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
        <div>
           <Link to="/dashboard" className="btn glass" style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <ChevronLeft size={16} /> Volver al Dashboard
           </Link>
           <h1 className="text-gradient">Glosario Técnico</h1>
           <p style={{ color: 'var(--text-dim)' }}>Diccionario de términos fundamentales para el Auxiliar Institucional.</p>
        </div>
      </header>

      <div className="card glass" style={{ marginBottom: '3rem', padding: '0.5rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Search size={24} className="text-dim" />
        <input 
          type="text" 
          placeholder="Buscar términos (ej: ART, Cloro, In Itinere...)" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ border: 'none', background: 'transparent', outline: 'none', padding: '1rem 0', fontSize: '1.1rem', width: '100%' }}
        />
      </div>

      <div className="grid">
        {filteredGlossary.map((item, i) => (
          <motion.div 
            key={item.term}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.03 }}
            className="card"
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, color: 'var(--primary)' }}>{item.term}</h3>
              <span style={{ fontSize: '0.75rem', background: 'var(--bg-deep)', padding: '0.25rem 0.75rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', border: '1px solid var(--border)' }}>
                 <CategoryIcon category={item.category} /> {item.category}
              </span>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', lineHeight: '1.5' }}>{item.definition}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Glossary;
