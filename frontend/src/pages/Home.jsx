import { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { api } from '../services/api';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getRecipes()
      .then(data => {
        setRecipes(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-emerald-50 rounded-3xl p-8 mb-10 border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-4 tracking-tight">
            Fuel Your Body <br/>With <span className="text-emerald-600">HEALTH_AI</span>
          </h1>
          <p className="text-lg text-emerald-700 max-w-xl">
            Discover personalized, AI-curated recipes designed for your specific health goals and dietary preferences.
          </p>
        </div>
        <div className="hidden md:flex bg-white p-4 rounded-full shadow-sm text-emerald-500">
          <Sparkles size={48} />
        </div>
      </div>

      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Recommended for You</h2>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white rounded-2xl h-96 animate-pulse border border-slate-100"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
