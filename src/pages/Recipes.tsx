import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PIZZA_RECIPES } from '../data/recipesData';
import { ChevronLeft, Utensils, Shield, Book, FlaskConical, Activity, ListChecks } from 'lucide-react';

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

  // Currently we only have recipes for 'pizza'. 
  // You could expand this later to load FOOD_RECIPES etc.
  const recipes = courseId === 'pizza' ? PIZZA_RECIPES : [];

  // Group recipes by category
  const groupedRecipes = recipes.reduce((acc, recipe) => {
    if (!acc[recipe.category]) acc[recipe.category] = [];
    acc[recipe.category].push(recipe);
    return acc;
  }, {} as Record<string, typeof recipes>);

  if (recipes.length === 0) {
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
        <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '1rem auto 0' }}>Colección de recetas estandarizadas para la correcta aplicación técnica de los contenidos teóricos del curso.</p>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        {Object.entries(groupedRecipes).map(([category, catRecipes]) => (
          <div key={category} style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.8rem', borderBottom: '2px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '2rem', color: 'var(--text-main)' }}>
              {category}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {catRecipes.map(recipe => (
                <div key={recipe.id} className="card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0' }}>
                    
                    {/* Image / Icon Side */}
                    <div style={{ height: '100%', minHeight: '250px', background: 'var(--bg-deep)', position: 'relative' }}>
                      {recipe.image ? (
                        <img 
                          src={recipe.image} 
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
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Recipes;
