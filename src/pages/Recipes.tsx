import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GASTRONOMIA_RECIPES } from '../data/recipesData';
import { ChevronLeft, Utensils, Shield, Book, FlaskConical, Activity, ListChecks, Search, Filter } from 'lucide-react';

const IconRenderer = ({ icon, size = 48, opacity = 0.3 }: { icon: string, size?: number, opacity?: number }) => {
  const icons: Record<string, React.ReactNode> = {
    'shield': <Shield size={size} opacity={opacity} />,
    'book': <Book size={size} opacity={opacity} />,
    'utensils': <Utensils size={size} opacity={opacity} />,
    'flask': <FlaskConical size={size} opacity={opacity} />,
    'activity': <Activity size={size} opacity={opacity} />,
    'list-checks': <ListChecks size={size} opacity={opacity} />
  };
  return icons[icon] || <Book size={size} opacity={opacity} />;
};

const Recipes = () => {
  const { courseId } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const allRecipes = useMemo(() => {
    return (courseId === 'pizza' || courseId === 'alimentos') ? GASTRONOMIA_RECIPES : [];
  }, [courseId]);

  const filteredRecipes = useMemo(() => {
    return allRecipes.filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           recipe.ingredients.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || recipe.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allRecipes, searchQuery, selectedCategory]);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(allRecipes.map(r => r.category)));
    return cats;
  }, [allRecipes]);

  // Group recipes by category
  const groupedRecipes = useMemo(() => {
    return filteredRecipes.reduce((acc, recipe) => {
      if (!acc[recipe.category]) acc[recipe.category] = [];
      acc[recipe.category].push(recipe);
      return acc;
    }, {} as Record<string, typeof allRecipes>);
  }, [filteredRecipes]);

  if (allRecipes.length === 0) {
    return (
      <div className="section-container" style={{ textAlign: 'center', marginTop: '4rem' }}>
        <Link to={`/dashboard/${courseId}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', textDecoration: 'none', marginBottom: '2rem' }}>
          <ChevronLeft size={20} /> Volver al dashboard
        </Link>
        <h2>Este curso aún no tiene un recetario disponible.</h2>
      </div>
    );
  }

  return (
    <div className="section-container">
      <Link to={`/dashboard/${courseId}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', textDecoration: 'none', marginBottom: '2rem' }}>
        <ChevronLeft size={20} /> Volver al dashboard
      </Link>

      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Anexo Complementario</h2>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Recetario Profesional</h1>
        <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '1rem auto 0' }}>
          Colección de 80 recetas estandarizadas para la correcta aplicación técnica de los contenidos teóricos del curso.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="card glass" style={{ padding: '1.5rem', marginBottom: '3rem', position: 'sticky', top: '1rem', zIndex: 10 }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: '250px' }}>
            <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
            <input 
              type="text" 
              placeholder="Buscar receta por nombre o ingrediente..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ 
                paddingLeft: '3rem', 
                width: '100%',
                background: 'var(--bg-deep)',
                border: '1px solid var(--border)',
                borderRadius: '0.75rem',
                color: 'var(--text-main)',
                fontSize: '1rem',
                height: '3rem'
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', padding: '0.5rem 0' }}>
             <button 
               className={`btn ${!selectedCategory ? 'btn-primary' : 'glass'}`}
               onClick={() => setSelectedCategory(null)}
               style={{ fontSize: '0.8rem', padding: '0.5rem 1rem', whiteSpace: 'nowrap' }}
             >
               Todas
             </button>
             {categories.map(cat => (
               <button 
                 key={cat}
                 className={`btn ${selectedCategory === cat ? 'btn-primary' : 'glass'}`}
                 onClick={() => setSelectedCategory(cat)}
                 style={{ fontSize: '0.8rem', padding: '0.5rem 1rem', whiteSpace: 'nowrap' }}
               >
                 {cat}
               </button>
             ))}
          </div>
        </div>
      </div>

      <motion.div layout>
        <AnimatePresence mode="popLayout">
          {Object.entries(groupedRecipes).length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-dim)' }}
            >
              <p>No se encontraron recetas que coincidan con tu búsqueda.</p>
            </motion.div>
          ) : (
            Object.entries(groupedRecipes).map(([category, catRecipes]) => (
              <motion.div 
                key={category} 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ marginBottom: '4rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ height: '2px', background: 'var(--primary)', flex: 0.1 }}></div>
                  <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', whiteSpace: 'nowrap' }}>
                    {category}
                  </h2>
                  <div style={{ height: '1px', background: 'var(--border)', flex: 1 }}></div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {catRecipes.map(recipe => (
                    <motion.div 
                      key={recipe.id} 
                      layout
                      className="card" 
                      style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                    >
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0' }}>
                        
                        {/* Image / Icon Side */}
                        <div style={{ height: '100%', minHeight: '250px', background: 'var(--bg-deep)', position: 'relative' }}>
                          {recipe.image ? (
                            <img 
                              src={recipe.image.startsWith('http') ? recipe.image : `${import.meta.env.BASE_URL}${recipe.image.startsWith('/') ? recipe.image.slice(1) : recipe.image}`} 
                              alt={recipe.title} 
                              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} 
                            />
                          ) : (
                            <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                              <IconRenderer icon={recipe.icon} size={100} opacity={0.3} />
                            </div>
                          )}
                        </div>

                        {/* Content Side */}
                        <div style={{ padding: '2rem' }}>
                          <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>{recipe.title}</h3>
                          
                          <div style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ color: 'var(--text-dim)', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ingredientes</h4>
                            <div style={{ whiteSpace: 'pre-wrap', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                              {recipe.ingredients}
                            </div>
                          </div>

                          <div>
                            <h4 style={{ color: 'var(--text-dim)', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Paso a Paso</h4>
                            <div style={{ whiteSpace: 'pre-wrap', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                              {recipe.instructions}
                            </div>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Recipes;
