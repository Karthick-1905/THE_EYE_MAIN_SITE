
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CyberRadar from "@/components/AdvancedRadar"
import Accordion from "@/components/Accordion"
import TypographySystem from "@/components/TypographySystem"
export default function CommandCenterPage() {
  return (
    <div className="p-6 space-y-6 max-w-[80%] mx-auto" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Agent Status Overview */}
        <Card className="lg:col-span-4 bg-neutral-900 border-neutral-700">
          <CardHeader className="pb-4">
            <CardTitle className="text-base text-neutral-200 tracking-[0.2em] uppercase" style={{ fontFamily: "'VT323', monospace" }}>AGENT ALLOCATION</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-5 mb-8 pb-6 border-b border-neutral-800">
              <div className="text-center">
                <div className="text-3xl font-light text-white mb-1 tabular-nums">47</div>
                <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-medium">Total Active</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 tabular-nums">44</div>
                <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-medium">On Mission</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white mb-1 tabular-nums">3</div>
                <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-medium">Available</div>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { id: "TECH-OPS", name: "Technical Operations", count: 15, status: "active" },
                { id: "DES-VIS", name: "Design & Visualization", count: 8, status: "active" },
                { id: "PUB-COM", name: "Publicity & Communications", count: 10, status: "active" },
                { id: "EVT-MGT", name: "Event Management", count: 11, status: "active" },
              ].map((division) => (
                <div
                  key={division.id}
                  className="group flex items-center justify-between p-3 bg-neutral-800/50 rounded-lg hover:bg-neutral-800 transition-all duration-200 cursor-pointer border border-transparent hover:border-neutral-700"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          division.status === "active"
                            ? "bg-white"
                            : division.status === "standby"
                              ? "bg-neutral-500"
                              : "bg-red-500"
                        }`}
                      ></div>
                      {division.status === "active" && (
                        <div className="absolute inset-0 w-2 h-2 rounded-full bg-white animate-ping opacity-75"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] text-neutral-400 font-bold tracking-[0.15em] uppercase mb-0.5">
                        {division.id}
                      </div>
                      <div className="text-xs text-neutral-300 font-medium leading-tight">
                        {division.name}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-lg font-light text-white tabular-nums group-hover:text-white group-hover:font-bold transition-colors">
                      {division.count}
                    </div>
                    <div className="text-[10px] text-neutral-600 uppercase tracking-wider">agents</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity Log */}
        <Card className="lg:col-span-4 bg-neutral-900 border-neutral-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-neutral-200 tracking-[0.2em] uppercase" style={{ fontFamily: "'VT323', monospace" }}>ACTIVITY LOG</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-80 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {[
                {
                  time: "25/06/2025 09:29",
                  agent: "gh0st_Fire",
                  action: "completed mission in",
                  location: "Berlin",
                  target: "zer0_Nigh",
                },
                {
                  time: "25/06/2025 08:12",
                  agent: "dr4g0n_V3in",
                  action: "extracted high-value target in",
                  location: "Cairo",
                  target: null,
                },
                {
                  time: "24/06/2025 22:55",
                  agent: "sn4ke_Sh4de",
                  action: "lost communication in",
                  location: "Havana",
                  target: null,
                },
                {
                  time: "24/06/2025 21:33",
                  agent: "ph4nt0m_R4ven",
                  action: "initiated surveillance in",
                  location: "Tokyo",
                  target: null,
                },
                {
                  time: "24/06/2025 19:45",
                  agent: "v0id_Walk3r",
                  action: "compromised security in",
                  location: "Moscow",
                  target: "d4rk_M4trix",
                },
              ].map((log, index) => (
                <div
                  key={index}
                  className="text-xs border-l-2 border-white/40 pl-3 hover:bg-neutral-800 p-2 rounded transition-colors"
                >
                  <div className="text-neutral-500 font-mono">{log.time}</div>
                  <div className="text-white">
                    Agent <span className="text-white font-bold font-mono">{log.agent}</span> {log.action}{" "}
                    <span className="text-white font-mono">{log.location}</span>
                    {log.target && (
                      <span>
                        {" "}
                        with agent <span className="text-white font-bold font-mono">{log.target}</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Encrypted Chat Activity */}
        <Card className="lg:col-span-4 bg-neutral-900 border-neutral-700 scrollbar-hide">
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-neutral-200 tracking-[0.2em] uppercase" style={{ fontFamily: "'VT323', monospace" }}>
              ENCRYPTED CHAT ACTIVITY
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            {/* Cyber Radar Display */}
            <CyberRadar size={180} className="mb-4" />

            <div className="text-xs text-neutral-500 space-y-1 w-full font-mono">
              <div className="flex justify-between">
                <span># 2025-06-17 14:23 UTC</span>
              </div>
              <div className="text-white">{"> [AGT:gh0stfire] ::: INIT >> ^^^ loading secure channel"}</div>
              <div className="text-white font-bold">{"> CH#2 | 1231.9082464.500...xR3"}</div>
              <div className="text-white">{"> KEY LOCKED"}</div>
              <div className="text-neutral-400">
                {'> MSG >> "...mission override initiated... awaiting delta node clearance"'}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Functions */}
        <Card className="lg:col-span-8 bg-neutral-900 border-neutral-700">
          <CardHeader className="pb-1">
            <CardTitle className="text-base text-neutral-200 tracking-[0.2em] uppercase" style={{ fontFamily: "'VT323', monospace" }}>CORE FUNCTIONS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  id: "01",
                  title: "WORKSHOPS",
                  subtitle: "Technical Training",
                  stats: { upcoming: 3, completed: 12 },
                  topics: ["Penetration Testing", "Reverse Engineering", "Web Security"],
                  status: "active",
                  icon: "▲"
                },
                {
                  id: "02",
                  title: "RESEARCH",
                  subtitle: "Security Analysis",
                  stats: { active: 5, published: 8 },
                  topics: ["Zero-Day Discovery", "Malware Analysis", "Cryptography"],
                  status: "active",
                  icon: "◆"
                },
                {
                  id: "03",
                  title: "PROJECTS",
                  subtitle: "Development Labs",
                  stats: { ongoing: 5, completed: 10 },
                  topics: ["Security Tools", "CTF Portal", "Open Source"],
                  status: "active",
                  icon: "■"
                },
                {
                  id: "04",
                  title: "EVENTS",
                  subtitle: "Community Outreach",
                  stats: { upcoming: 1, hosted: 20 },
                  topics: ["Hackathons", "CTF Competitions", "Tech Talks"],
                  status: "scheduled",
                  icon: "●"
                }
              ].map((func) => (
                <div
                  key={func.id}
                  className="group relative bg-neutral-800/30 border border-neutral-800 rounded-lg p-4 hover:bg-neutral-800/50 hover:border-neutral-700 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 text-6xl text-neutral-800/20 font-mono select-none">
                    {func.icon}
                  </div>
                  
                  {/* Header */}
                  <div className="relative z-10 mb-3">
                    <div className="flex items-start justify-between mb-1">
                      <div className="text-[10px] font-bold text-neutral-500 tracking-[0.2em]">
                        {func.id}
                      </div>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        func.status === "active" ? "bg-white animate-pulse" : "bg-white"
                      }`}></div>
                    </div>
                    <h3 className="text-xs font-bold text-white tracking-wider mb-0.5">
                      {func.title}
                    </h3>
                    <p className="text-[10px] text-neutral-400 font-medium">
                      {func.subtitle}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="relative z-10 flex gap-3 mb-3 pb-3 border-b border-neutral-800">
                    {Object.entries(func.stats).map(([key, value]) => (
                      <div key={key} className="flex-1">
                        <div className="text-lg font-light text-white tabular-nums group-hover:text-white group-hover:font-bold transition-colors">
                          {value}
                        </div>
                        <div className="text-[9px] text-neutral-500 uppercase tracking-wider">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Topics */}
                  <div className="relative z-10 space-y-1">
                    {func.topics.map((topic, idx) => (
                      <div
                        key={idx}
                        className="text-[10px] text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                      >
                        <span className="text-white/50">▸</span>
                        <span className="truncate">{topic}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-lg transition-all duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
            
            {/* Bottom Summary Bar */}
            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
              
              <div className="text-[10px] text-neutral-500 font-mono">
                LAST SYNC: 2025.06.25 09:45:00 UTC
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Event Log */}
        <Card className="lg:col-span-4 bg-neutral-900 border-neutral-700 gap-0">
          <CardHeader className="pb-1">
            <CardTitle className="text-base text-neutral-200 tracking-[0.2em] uppercase mb-1" style={{ fontFamily: "'VT323', monospace" }}>EVENT LOG</CardTitle>
          </CardHeader>
          <CardContent className="h-full">
            <div className="space-y-2">
              {[
                {
                  id: "EVT-001",
                  title: "The Pandemic That Never Happened",
                  date: "2025.07.15",
                  type: "Workshop",
                  status: "upcoming",
                  attendees: 45,
                  description: "Advanced malware analysis and reverse engineering workshop"
                },
                
                {
                  id: "EVT-002",
                  title: "EtherX Summit",
                  date: "2025.06.20",
                  type: "Conference",
                  status: "completed",
                  attendees: 89,
                  description: "Blockchain security and smart contract auditing summit"
                },
                
              ].map((event) => (
                <div
                  key={event.id}
                  className="group p-3 bg-neutral-800/30 hover:bg-neutral-800/50 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[9px] text-neutral-500 font-bold tracking-wider">{event.id}</span>
                       
                      </div>
                      <h4 className="text-xs text-white font-medium mb-1">{event.title}</h4>
                      <p className="text-[10px] text-neutral-400 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-800/50">
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] text-neutral-500">
                        <span className="text-white font-mono">{event.date}</span>
                      </span>
                      <span className="text-[9px] text-white/40">|</span>
                      <span className="text-[9px] text-neutral-500">{event.type}</span>
                      <span className="text-[9px] text-white/40">|</span>
                      <span className="text-[9px] text-neutral-500">
                        <span className="text-white font-mono">{event.attendees}</span> agents
                      </span>
                    </div>
                    <span className="text-[10px] text-neutral-300 group-hover:text-white group-hover:font-bold transition-colors">→</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Summary Bar */}
            <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-sm font-light text-white tabular-nums">2</div>
                  <div className="text-[9px] text-neutral-500 uppercase">Upcoming</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-white tabular-nums">1</div>
                  <div className="text-[9px] text-neutral-500 uppercase">Active</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-light text-white tabular-nums">1</div>
                  <div className="text-[9px] text-neutral-500 uppercase">Complete</div>
                </div>
              </div>
              <button className="text-[9px] text-white hover:font-bold uppercase tracking-wider transition-colors">
                View All Events →
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}