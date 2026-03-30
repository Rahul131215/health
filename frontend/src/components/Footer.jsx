export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} HEALTH_AI. All rights reserved.</p>
        <p className="mt-2">Microservices Architecture Demo</p>
      </div>
    </footer>
  );
}
