
export default function ProfileDetails({ profile }) {
  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-4 md:p-8 border-2 border-cyan-400/30 shadow-2xl shadow-cyan-500/20 hover:shadow-purple-500/30 transition-all group overflow-x-hidden">
   
      <div className="absolute top-0 right-0 w-8 h-0.5 bg-cyan-400/50 transform -translate-y-1 -translate-x-4 -rotate-45" />
      <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-purple-400/50 transform translate-y-1 translate-x-4 rotate-45" />

      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 items-center">
    
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full opacity-30 blur-lg group-hover:opacity-50 transition-opacity" />
          <img 
            src={profile.photo} 
            alt={profile.name} 
            className="w-full h-full rounded-full border-2 border-cyan-400/30 object-cover z-10 relative"
          />
          <div className="absolute inset-0 border-2 border-purple-400/20 rounded-full animate-pulse -z-10" />
        </div>

        <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {profile.name}
          </h1>
          
          <p className="text-cyan-300/80 font-light text-base md:text-lg italic max-w-prose mx-auto lg:mx-0">
            {profile.description}
          </p>

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
            <div className="p-3 md:p-4 bg-gray-900/50 rounded-xl border border-cyan-400/20">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="p-2 bg-cyan-400/10 rounded-lg flex-shrink-0">
                  <span className="text-cyan-400 text-lg md:text-xl">📱</span>
                </div>
                <div className="truncate">
                  <p className="text-xs md:text-sm text-cyan-300/80">Contact</p>
                  <p className="font-medium text-cyan-100 text-sm md:text-base truncate">
                    {profile.contact}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 md:p-4 bg-gray-900/50 rounded-xl border border-purple-400/20">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="p-2 bg-purple-400/10 rounded-lg flex-shrink-0">
                  <span className="text-purple-400 text-lg md:text-xl">🔖</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs md:text-sm text-purple-300/80">Interests</p>
                  <div className="flex flex-wrap gap-1 md:gap-2 mt-1">
                    {profile.interests.map((interest, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-[10px] md:text-xs bg-purple-400/10 text-purple-300 rounded-full"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

     
          <div className="flex justify-center lg:justify-start gap-3 md:gap-4 mt-6 md:mt-8">
            <button className="p-2 md:p-3 bg-cyan-400/10 hover:bg-cyan-400/20 rounded-lg transition-all border border-cyan-400/30 hover:border-cyan-400/50">
              <span className="text-xl md:text-2xl">📧</span>
            </button>
            <button className="p-2 md:p-3 bg-purple-400/10 hover:bg-purple-400/20 rounded-lg transition-all border border-purple-400/30 hover:border-purple-400/50">
              <span className="text-xl md:text-2xl">💼</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hover effect line (mobile hidden) */}
      <div className="hidden md:block absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-400 group-hover:w-3/4 group-hover:left-1/4 transition-all duration-500" />
    </div>
  );
}