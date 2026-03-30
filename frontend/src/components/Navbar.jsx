import { Link } from 'react-router-dom';
import { HeartPulse, User, PlusCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-emerald-600 font-bold text-xl tracking-tight">
          <HeartPulse size={28} />
          HEALTH_AI
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/add-recipe" className="flex items-center gap-1 text-slate-600 hover:text-emerald-600 font-medium transition-colors">
            <PlusCircle size={18} /> Add Recipe
          </Link>
          <Link to="/login" className="flex items-center gap-1 text-slate-600 hover:text-emerald-600 font-medium transition-colors">
            <User size={18} /> Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
