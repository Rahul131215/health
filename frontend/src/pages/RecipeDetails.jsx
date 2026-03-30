import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import { Clock, Flame, ArrowLeft } from 'lucide-react';

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    api.getRecipes().then(data => {
      const found = data.find(r => r.id.toString() === id);
      setRecipe(found);
    });
  }, [id]);

  if (!recipe) return <div className="text-center py-20 animate-pulse">Loading recipe...</div>;

  return (
    <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
      <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 mb-6 font-medium transition-colors">
        <ArrowLeft size={20} /> Back to Recipes
      </Link>
      
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <img 
          src={recipe.image || `https://picsum.photos/seed/${recipe.id}/1200/600`} 
          alt={recipe.title} 
          className="w-full h-80 object-cover" 
          referrerPolicy="no-referrer" 
        />
        <div className="p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{recipe.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600 mb-8 pb-8 border-b border-slate-100">
            <span className="flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-lg">
              <Flame size={20} /> {recipe.calories} Calories
            </span>
            <span className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg">
              <Clock size={20} /> {recipe.time}
            </span>
          </div>
          
          <div className="prose prose-emerald max-w-none">
            <h3 className="text-xl font-bold text-slate-800 mb-4">About this recipe</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              {recipe.description || "A delicious, AI-curated healthy recipe designed to fuel your body with the right nutrients. Perfect for a quick meal that doesn't compromise on taste or health benefits."}
            </p>
            
            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-2xl">
                <h4 className="font-bold text-slate-800 mb-4">Ingredients</h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Fresh ingredients</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Healthy spices</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Olive oil</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl">
                <h4 className="font-bold text-slate-800 mb-4">Instructions</h4>
                <ol className="space-y-3 text-slate-600 list-decimal list-inside">
                  <li>Prepare all ingredients</li>
                  <li>Mix thoroughly in a bowl</li>
                  <li>Cook at recommended temperature</li>
                  <li>Serve hot and enjoy</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
