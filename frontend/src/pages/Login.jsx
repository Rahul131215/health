import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mt-10">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Welcome Back</h2>
      <form className="space-y-4" onSubmit={e => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
          <input type="password" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="••••••••" />
        </div>
        <button className="w-full bg-emerald-600 text-white font-semibold py-2.5 rounded-lg hover:bg-emerald-700 transition-colors mt-2">
          Sign In
        </button>
      </form>
      <p className="text-center text-sm text-slate-500 mt-6">
        Don't have an account? <Link to="/register" className="text-emerald-600 font-medium hover:underline">Sign up</Link>
      </p>
    </div>
  );
}
