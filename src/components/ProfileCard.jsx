import { Link } from 'react-router-dom'

export default function ProfileCard({ profile, onSummaryClick }) {
  return (
    <div className="group relative p-0.5 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30 hover:shadow-[0_0_25px_rgba(0,243,255,0.3)] transition-all duration-300">
      <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-300">
        {/* Diagonal corner accents */}
        <div className="absolute top-0 right-0 w-8 h-0.5 bg-cyan-400/50 transform -translate-y-1 -translate-x-4 -rotate-45" />
        <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-purple-400/50 transform translate-y-1 translate-x-4 rotate-45" />
        
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Avatar with animated border */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full opacity-30 blur-lg group-hover:opacity-50 transition-opacity" />
            <img 
              src={profile.photo} 
              alt={profile.name} 
              className="w-24 h-24 rounded-full border-2 border-cyan-400/30 object-cover z-10 relative"
            />
            <div className="absolute inset-0 border-2 border-purple-400/20 rounded-full animate-pulse -z-10" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {profile.name}
            </h2>
            <p className="mt-2 text-cyan-300/80 font-light max-w-prose">
              {profile.description}
            </p>
           
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                 <Link  to={`/student/${profile.id}`}>
              <button 
                onClick={onSummaryClick} 
                className="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-cyan-400/80 rounded-lg hover:shadow-cyan-500/20 hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                <span className="text-sm">📄</span>
                <span className="font-medium text-black">Summary</span>
              </button>
              </Link>
              
              <Link
                to={`/profile/${profile.id}`}
                className="px-6 py-2 bg-gradient-to-r from-purple-600/80 to-purple-400/80 rounded-lg hover:shadow-purple-500/20 hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                <span className="text-sm">🔍</span>
                <span className="font-medium text-black">Details</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Hover effect line */}
        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-400 group-hover:w-3/4 group-hover:left-1/4 transition-all duration-500" />
      </div>
    </div>
  );
}