import { Link } from 'react-router-dom';
import { Clock, Flame } from 'lucide-react';

export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <img 
        src={recipe.image || `https://picsum.photos/seed/${recipe.id}/400/300`} 
        alt={recipe.title} 
        className="w-full h-48 object-cover" 
        referrerPolicy="no-referrer" 
      />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-2 line-clamp-1">{recipe.title}</h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-grow">{recipe.description}</p>
        
        <div className="flex items-center gap-4 text-sm font-medium text-slate-600 mb-5">
          <span className="flex items-center gap-1.5 bg-orange-50 text-orange-600 px-2.5 py-1 rounded-md">
            <Flame size={16} /> {recipe.calories} kcal
          </span>
          <span className="flex items-center gap-1.5 bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md">
            <Clock size={16} /> {recipe.time}
          </span>
        </div>
        
        <Link 
          to={`/recipe/${recipe.id}`} 
          className="block w-full text-center bg-emerald-600 text-white py-2.5 rounded-xl font-semibold hover:bg-emerald-700 transition-colors shadow-sm mt-auto"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
}
