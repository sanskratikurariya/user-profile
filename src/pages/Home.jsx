import React, { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import MapComponent from '../components/MapComponent';
import SearchFilter from '../components/SearchFilter';
import profilesData from '../data/profiles.json';

export default function Home() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [filteredProfiles, setFilteredProfiles] = useState(profilesData);

  const handleSearch = (query) => {
    const filtered = profilesData.filter((profile) =>
      profile.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse" />
      </div>

      <div className="relative container mx-auto p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-8">
          <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-800">
            <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Cyber Directory
            </h1>
            <SearchFilter 
              onSearch={handleSearch}
              className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-cyan-300 placeholder-cyan-500/70"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {filteredProfiles.length > 0 ? (
              filteredProfiles.map((profile) => (
                <ProfileCard
                  key={profile.id}
                  profile={profile}
                  onSummaryClick={() => setSelectedProfile(profile)}
                  className="bg-gray-900/80 hover:bg-gray-800/60 backdrop-blur-lg border border-gray-800 rounded-xl p-4 transition-all duration-300 hover:shadow-2xl hover:border-cyan-400/50 group"
                />
              ))
            ) : (
              <div className="col-span-full bg-red-900/30 backdrop-blur-lg border border-red-500/40 rounded-xl p-6 animate-pulse">
                <p className="text-red-400 font-medium text-center">
                  ⚠️ No matching profiles found
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Map */}
        <div className="sticky top-4 h-[calc(100vh-2rem)] lg:h-[90vh] bg-black/80 backdrop-blur-xl rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
          {selectedProfile ? (
            <div className="h-full flex flex-col">
              <div className="p-6 border-b border-gray-800 flex items-center justify-between bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
                <h2 className="text-2xl font-bold text-cyan-300">
                  {selectedProfile.name}
                </h2>
                <button
                  onClick={() => setSelectedProfile(null)}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/80 to-purple-500/80 rounded-lg hover:opacity-90 transition-opacity font-medium text-black"
                >
                  Clear Selection
                </button>
              </div>
              <div className="flex-1 relative">
                <MapComponent 
                  address={selectedProfile.address} 
                  className="absolute inset-0"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
                  <p className="text-cyan-300 text-sm">
                    📍 {selectedProfile.address}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center p-8">
              <div className="text-center space-y-4">
                <div className="text-6xl opacity-30 mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-cyan-300">
                  Select a Profile
                </h3>
                <p className="text-gray-400 text-sm">
                  Choose a profile from the list to view location details
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}