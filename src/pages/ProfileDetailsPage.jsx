import { useParams } from 'react-router-dom';
import profilesData from '../data/profiles.json';
import ProfileDetails from '../components/ProfileDetails';
import { Link } from 'react-router-dom'

export default function ProfileDetailsPage() {
    const { id } = useParams();
    const profile = profilesData.find((p) => p.id === parseInt(id));

    if (!profile)
        return (
            <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-8">
                <div className="border-2 border-red-500/50 bg-black/90 backdrop-blur-xl rounded-2xl p-8 text-center animate-pulse shadow-[0_0_30px_rgba(255,0,0,0.2)]">
                    <h1 className="text-red-500 text-4xl md:text-6xl font-bold mb-4 glitch" data-text="404">404</h1>
                    <p className="text-cyan-300 font-mono text-lg md:text-xl tracking-widest">PROFILE_NOT_FOUND</p>
                </div>
            </div>
        );

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-cyan-300 relative overflow-hidden">
         
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[url('https://tse2.mm.bing.net/th?id=OIP.Z306v3XdxhOaxBFGfHku7wHaHw&pid=Api&P=0&h=180')] opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-8 py-8 md:py-16">
                <div className="border-2 border-cyan-400/30 rounded-2xl p-6 md:p-8 bg-black/80 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 hover:shadow-purple-500/20 transition-all duration-300">
             
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12">
                        <div className="flex-1 space-y-6">
                            <button className="group relative inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/80 to-purple-500/80 rounded-lg hover:shadow-[0_0_15px_#00f3ff] transition-all">

                                <Link
                                    to="/"
                                    className="cyber-button-sm bg-cyan-400/10 hover:bg-cyan-400/20 border-cyan-400/30"
                                >
                                    ◀ RETURN TO ARCHIVE
                                </Link>
                            </button>

                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                    {profile.name}
                                </h1>
                                <p className="text-xl md:text-2xl font-mono text-purple-400/80">
                                    {profile.title}
                                </p>
                            </div>
                        </div>

                  
                        <div className="w-32 h-32 md:w-48 md:h-48 relative group self-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                            <div className="relative w-full h-full rounded-xl border-2 border-cyan-400/30 bg-gray-900/50 backdrop-blur-sm overflow-hidden">
                              
                            </div>
                        </div>
                    </div>

                
                    <div className="h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 my-12" />

                 
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 md:gap-12">
                        <ProfileDetails profile={profile} />

                     
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                CONNECTIONS
                            </h3>
                            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                                {profile.social?.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        className="aspect-square flex items-center justify-center rounded-lg bg-gray-900/50 border border-cyan-400/20 hover:border-purple-400/40 hover:bg-gradient-to-br from-cyan-400/10 to-purple-400/10 transition-all group"
                                    >
                                        <span className="text-2xl md:text-3xl transition-transform group-hover:scale-110">
                                            {link.icon}
                                        </span>
                                        <span className="absolute inset-0 shadow-[0_0_15px_#00f3ff] opacity-0 group-hover:opacity-30 transition-opacity" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                  
                    <div className="absolute top-8 right-8 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-float" />
                    <div className="absolute bottom-8 left-8 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl animate-float-delayed" />
                </div>
            </div>
        </div>
    );
}