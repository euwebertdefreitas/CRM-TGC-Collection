import { useState } from 'react';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { ChangelogWidget } from './components/ChangelogWidget';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  const handleLoginSuccess = (userName: string) => {
    setUser(userName);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-50">

      {!isAuthenticated ? (
        <>
          <div className="z-10 animate-fade-in-up">
            <Login onLoginSuccess={handleLoginSuccess} />
          </div>

          {/* Floating Particles (Exclusive for Login Screen) */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full blur-[1px] animate-ping opacity-20 pointer-events-none"></div>
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-amber-500 rounded-full blur-[2px] animate-ping opacity-20 delay-1000 pointer-events-none"></div>
        </>
      ) : (
        <div className="w-full h-full animate-in fade-in duration-500">
          <Home onLogout={handleLogout} userName={user || 'Admin'} />
        </div>
      )}

      <ChangelogWidget />
    </div>
  );
}

export default App;
