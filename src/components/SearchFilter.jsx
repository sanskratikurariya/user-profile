export default function SearchFilter({ onSearch }) {
  return (
    <div className="relative group w-full max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Search by name..."
        onChange={(e) => onSearch(e.target.value)}
        className="
          w-full
          p-4
          rounded-xl
          border-2
          border-cyan-400/20
          bg-gray-900/80
          backdrop-blur-lg
          text-cyan-300
          placeholder-cyan-500/60
          focus:outline-none
          focus:border-cyan-400/50
          focus:ring-4
          focus:ring-cyan-400/20
          transition-all
          duration-300
          ease-out
          shadow-lg
          shadow-cyan-500/10
          hover:shadow-cyan-500/20
          hover:border-cyan-400/30
          font-mono
          text-lg
          tracking-wide
          pr-12
        "
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-50 group-focus-within:opacity-80 group-hover:opacity-80 transition-opacity">
        <svg 
          className="w-6 h-6 text-cyan-400"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
      </div>
      <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-cyan-500/30 to-purple-500/30 opacity-0 group-focus-within:opacity-30 group-hover:opacity-20 transition-opacity duration-300" />
    </div>
  );
}