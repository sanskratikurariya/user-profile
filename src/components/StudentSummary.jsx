import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import profilesData from '../data/profiles.json';

const StudentSummary = () => {
  const { id } = useParams();
  
  // Find student by ID
  const student = profilesData.find(profile => profile.id === parseInt(id));

  // Handle case when student not found
  if (!student) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-cyan-300 flex items-center justify-center">
        <div className="border-2 border-red-500/50 bg-black/90 backdrop-blur-lg p-8 text-center animate-pulse">
          <h1 className="text-red-500 text-4xl font-bold mb-4">404</h1>
          <p className="text-cyan-300 font-mono">STUDENT_NOT_FOUND</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-cyan-300 relative overflow-hidden p-6">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-12">
          <Link 
            to="/" 
            className="cyber-button-sm bg-cyan-400/10 hover:bg-cyan-400/20 border-cyan-400/30"
          >
            ◀ RETURN TO ARCHIVE
          </Link>
          <span className="font-mono text-purple-400/70 text-sm">STATUS: Active</span>
        </div>

        {/* Main Card */}
        <div className="border-2 border-cyan-400/30 rounded-2xl bg-black/80 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 p-8">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full opacity-30 blur-lg group-hover:opacity-50 transition-opacity" />
              <img 
                src={student.photo} 
                alt={student.name}
                className="w-32 h-32 rounded-full border-2 border-cyan-400/30 object-cover z-10 relative"
              />
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {student.name}
              </h1>
              <p className="font-mono text-purple-400/80">ID: {student.id}</p>
              <p className="text-cyan-300/80 mt-2">{student.description}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 my-8" />

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Section */}
            <div className="p-6 bg-gray-900/50 rounded-xl border border-cyan-400/20">
              <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-4">
                CONTACT DETAILS
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-400/10 rounded-lg">
                    <span className="text-cyan-400">📧</span>
                  </div>
                  <span className="font-mono text-cyan-300">{student.contact}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-400/10 rounded-lg">
                    <span className="text-purple-400">📍</span>
                  </div>
                  <span className="font-mono text-purple-300">{student.address}</span>
                </div>
              </div>
            </div>

            {/* Interests Section */}
            <div className="p-6 bg-gray-900/50 rounded-xl border border-purple-400/20">
              <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
                INTERESTS
              </h2>
              <div className="flex flex-wrap gap-2">
                {student.interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs bg-purple-400/10 text-purple-300 rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSummary;