export default function Admin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="mt-2 text-cyan-300/80 font-light">
              Manage profiles and system configurations
            </p>
          </div>

          {/* Coming Soon Card */}
          <div className="group relative bg-gradient-to-br from-black via-gray-900 to-black p-6 rounded-xl border border-cyan-400/20 hover:border-purple-400/40 transition-all duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00ffff10_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-cyan-400/10 rounded-lg">
                <span className="text-3xl text-cyan-400">🚧</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-cyan-300">
                  Profile Management
                </h2>
                <p className="text-cyan-300/70 mt-1">
                  Advanced profile editing tools - Coming soon!
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="w-2/3 h-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse"
                  style={{width: '65%'}}
                />
              </div>
              <p className="text-right text-sm text-cyan-400/80 mt-1">
                65% completed
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <button className="p-4 bg-gray-900/50 hover:bg-cyan-400/10 border border-cyan-400/20 rounded-lg transition-all duration-300 group">
              <span className="text-cyan-400 group-hover:text-purple-400 transition-colors">
                ➕ Add Profile
              </span>
            </button>
            <button className="p-4 bg-gray-900/50 hover:bg-purple-400/10 border border-purple-400/20 rounded-lg transition-all duration-300 group">
              <span className="text-purple-400 group-hover:text-cyan-400 transition-colors">
                ✏️ Edit Profiles
              </span>
            </button>
            <button className="p-4 bg-gray-900/50 hover:bg-red-400/10 border border-red-400/20 rounded-lg transition-all duration-300 group">
              <span className="text-red-400 group-hover:text-cyan-400 transition-colors">
                🗑️ Delete Profiles
              </span>
            </button>
          </div>

          {/* Status Indicator */}
          <div className="mt-8 flex items-center justify-end space-x-2">
            <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-green-400/80">System Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}