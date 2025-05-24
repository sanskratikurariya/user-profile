// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProfileDetailsPage from './pages/ProfileDetailsPage';
import Admin from './pages/Admin';
import {Link} from 'react-router-dom'; // Add this import at the top
import StudentSummary from './components/StudentSummary';


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-400 via-blue-400 to-purple-500 text-gray-100">
   
        
        <header className="py-6 px-6 bg-black backdrop-blur-lg shadow-2xl border-b border-purple-500/20">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-800 to-purple-700 bg-clip-text text-transparent">
              SearchSphere
            </h1>

            {/* Add navigation links container */}
            <div className="flex items-center gap-6">
              {/* Admin Panel Link */}
              <Link
                to="/admin"
                className="relative px-4 py-2 border border-cyan-400/30 rounded-lg 
                 bg-gradient-to-r from-cyan-400/10 to-purple-400/10
                 hover:bg-gradient-to-br hover:from-cyan-400/20 hover:to-purple-400/20
                 transition-all duration-300 group"
              >
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  ADMIN PANEL
                </span>
                <div className="absolute inset-0 border border-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </header>

        <main className=" max-w-full rounded-xl mx-auto transform perspective-1000">
          <div className="relative group">
            <div className="absolute inset-0 bg-black rounded-xl transform group-hover:rotate-1 transition-transform" />
            <div className="relative">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile/:id" element={<ProfileDetailsPage />} />
                <Route path="/admin" element={<Admin />} />
                  <Route path="/student/:id" element={<StudentSummary />} />
                <Route
                  path="*"
                  element={
                    <div className="text-center mt-20 text-xl font-semibold bg-gray-200/50 p-8 rounded-xl border border-purple-300/20 shadow-2xl">
                      ✨ Page not found - Explore our galaxy instead
                    </div>
                  }
                />
              </Routes>
            </div>
          </div>
        </main>

        <footer className="py-6 mt-12 border-t border-purple-100/20 bg-black">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm text-teal-400/80">
              © {new Date().getFullYear()} SearchSphere. Explore the universe of profiles
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}