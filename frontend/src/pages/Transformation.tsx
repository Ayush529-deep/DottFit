import {
  Dumbbell,
  CheckCircle2,
  XCircle,
  Target,
  Activity,
  Brain,
  Calendar,
  Trophy,
  ArrowDown,
} from 'lucide-react';
import works from "@/assets/works.png";
import BannerImg from "@/assets/program.png";

function AboutBanner() {
  return (
   <section className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-no-repeat"
    style={{
      backgroundImage: `url(${BannerImg})`,
      backgroundPosition: "50% 8%",
    }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 md:bg-black/40" />

  {/* Content */}
  <div className="relative z-10 h-full flex items-start md:items-center justify-center">
    <div className="text-center px-4 md:px-6 max-w-5xl mx-auto pt-28 md:pt-0 md:mt-40">
      
      <h1 className="text-3xl sm:text-4xl md:text-[36px] lg:text-5xl font-bold text-white mb-3 md:mb-4 whitespace-normal md:whitespace-nowrap">
        12-WEEK HEALTH TRANSFORMATION PROGRAM
      </h1>

      <p className="text-base sm:text-lg md:text-2xl font-medium text-gray-300 mb-5 md:mb-6">
        Wellness at Your Fingertips
      </p>

      {/* Hide on mobile */}
      <div className="hidden sm:flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:text-base md:text-xl text-gray-300">
        <div>
          <strong>Audience:</strong> Busy professionals | 35–55 yrs | India & Global Indians
        </div>
        <div>
          <strong>Goal:</strong> Fat loss • Strength • Discipline • Sustainable health
        </div>
      </div>

    </div>
  </div>
</section>






  );
}

function MissionSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1425] via-[#0F1B30] to-[#14253F] text-gray-100 py-16 px-5 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">

        {/* PROGRAM - NOT / IS */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
            <Brain className="w-9 h-9 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl font-bold">PROGRAM</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-red-950/40 border border-red-800/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-red-400" />
                <h3 className="text-2xl font-semibold text-red-300">This is NOT</h3>
              </div>
              <ul className="space-y-4 text-lg text-gray-200">
                <li className="flex items-center gap-3"><XCircle className="w-6 h-6 text-red-400" /> bodybuilding</li>
                <li className="flex items-center gap-3"><XCircle className="w-6 h-6 text-red-400" /> extreme dieting</li>
                <li className="flex items-center gap-3"><XCircle className="w-6 h-6 text-red-400" /> short-term challenge</li>
              </ul>
            </div>

            <div className="bg-green-950/40 border border-green-800/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-semibold text-green-300">This IS</h3>
              </div>
              <ul className="space-y-4 text-lg text-gray-200">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-green-400" /> discipline-based lifestyle reset</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-green-400" /> simple fitness for real people</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-green-400" /> scalable, repeatable system</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-green-400" /> aligned with your service mindset</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROGRAM STRUCTURE - Vertical zigzag flowchart */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
            <Calendar className="w-9 h-9 text-cyan-400" />
            <h2 className="text-3xl md:text-4xl font-bold">PROGRAM STRUCTURE (12 WEEKS)</h2>
          </div>

          <p className="text-xl font-medium mb-12 text-center md:text-left text-gray-200">
            Training: 4–5 days/week
          </p>

          {/* Vertical zigzag flowchart */}
          <div className="relative space-y-16 md:space-y-20">
            {/* Connecting vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500/30 via-cyan-400/40 to-cyan-500/30 z-0 rounded-full" />

            {/* Phase 1 - left aligned */}
            <div className="relative z-10 md:ml-auto md:mr-16 md:max-w-[55%] lg:max-w-[50%]">
              <div className="bg-slate-800/70 border border-cyan-600/60 rounded-2xl p-8 backdrop-blur-md shadow-2xl shadow-cyan-900/30 transform md:-rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="absolute -top-5 -left-5 w-14 h-14 rounded-full bg-cyan-900/70 flex items-center justify-center text-2xl font-bold text-cyan-300 border-4 border-cyan-500/50">
                  1
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <Activity className="w-10 h-10 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-gray-100">
                    PHASE 1
                  </h3>
                </div>
                <p className="font-medium text-cyan-300 mb-4 text-lg">RESET & DISCIPLINE (Weeks 1–4)</p>
                <div className="space-y-4 text-gray-300">
                  <p><strong>Goal:</strong> Habit building + metabolic activation</p>
                  <p>Full body workouts • Home / gym adaptable</p>
                  <p className="font-medium text-gray-200">Focus on:</p>
                  <ul className="list-disc pl-6 space-y-1.5">
                    <li>mobility</li>
                    <li>core</li>
                    <li>basic strength</li>
                    <li>walking/cardio</li>
                  </ul>
                  <p className="font-medium text-gray-200">Nutrition:</p>
                  <ul className="list-disc pl-6 space-y-1.5">
                    <li>Simple Indian meals</li>
                    <li>No starvation</li>
                    <li>Plate method</li>
                    <li>Veg / non-veg options</li>
                  </ul>
                  <p className="font-bold text-green-400 flex items-center gap-2 mt-5 text-lg">
                    <Trophy className="w-6 h-6" />
                    Goal: consistency &gt; perfection
                  </p>
                  <p className="font-medium text-gray-200 mt-5">Mindset Tasks:</p>
                  <ul className="list-disc pl-6 space-y-1.5">
                    <li>Fixed wake-up time</li>
                    <li>Daily step target</li>
                    <li>Water discipline</li>
                    <li>Weekly reflection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center">
              <ArrowDown className="w-12 h-12 text-cyan-500 opacity-80" />
            </div>

            {/* Phase 2 - right aligned */}
            <div className="relative z-10 md:mr-auto md:ml-16 md:max-w-[55%] lg:max-w-[50%]">
              <div className="bg-slate-800/70 border border-cyan-600/60 rounded-2xl p-8 backdrop-blur-md shadow-2xl shadow-cyan-900/30 transform md:rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="absolute -top-5 -right-5 w-14 h-14 rounded-full bg-cyan-900/70 flex items-center justify-center text-2xl font-bold text-cyan-300 border-4 border-cyan-500/50">
                  2
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <Activity className="w-10 h-10 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-gray-100">
                    PHASE 2
                  </h3>
                </div>
                <p className="font-medium text-cyan-300 mb-4 text-lg">FAT LOSS & STRENGTH (Weeks 5–8)</p>
                <div className="space-y-4 text-gray-300">
                  <p><strong>Goal:</strong> Visible results + confidence</p>
                  <p className="font-medium text-gray-200">Training:</p>
                  <ul className="list-disc pl-6 space-y-1.5">
                    <li>Upper / Lower</li>
                    <li>Progressive overload</li>
                    <li>Fat-burning finishers</li>
                  </ul>
                  <p className="font-medium text-gray-200">Nutrition:</p>
                  <ul className="list-disc pl-6 space-y-1.5">
                    <li>Protein-focused</li>
                    <li>Carb timing</li>
                    <li>Simple swaps</li>
                    <li>Eating out rules</li>
                  </ul>
                  <p className="font-medium text-gray-200">Accountability:</p>
                  <ul className="list-disc pl-6 space-y-1.5">
                    <li>Weekly check-ins</li>
                    <li>Progress photos</li>
                    <li>Weight + measurements</li>
                    <li>WhatsApp accountability</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center">
              <ArrowDown className="w-12 h-12 text-cyan-500 opacity-80" />
            </div>

            {/* Phase 3 - left aligned */}
            <div className="relative z-10 md:ml-auto md:mr-16 md:max-w-[55%] lg:max-w-[50%]">
              <div className="bg-slate-800/70 border border-cyan-600/60 rounded-2xl p-8 backdrop-blur-md shadow-2xl shadow-cyan-900/30 transform md:-rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="absolute -top-5 -left-5 w-14 h-14 rounded-full bg-cyan-900/70 flex items-center justify-center text-2xl font-bold text-cyan-300 border-4 border-cyan-500/50">
                  3
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <Activity className="w-10 h-10 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-gray-100">
                    PHASE 3
                  </h3>
                </div>
                <p className="font-medium text-cyan-300 mb-4 text-lg">PERFORMANCE & LIFESTYLE (Weeks 9–12)</p>
                <div className="space-y-4 text-gray-300">
                  <p><strong>Goal:</strong> Make fitness permanent</p>
                  <p className="font-medium text-gray-200">Training:</p>
                  <ul className="list-disc pl-6 space-y-1.5">
                    <li>Strength + conditioning</li>
                    <li>Posture correction</li>
                    <li>Injury prevention</li>
                    <li>Energy optimization</li>
                  </ul>
                  <p className="font-medium text-gray-200">Lifestyle:</p>
                  <ul className="list-disc pl-6 space-y-1.5">
                    <li>Sleep discipline</li>
                    <li>Stress management</li>
                    <li>Travel-friendly workouts</li>
                    <li>Long-term planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-10">
            HOW IT WORKS
          </h2>
          <div className="rounded-2xl overflow-hidden border border-slate-600/60 shadow-2xl shadow-black/40">
            <img
              src={works}
              alt="How DottFit Works – step by step process"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* RESULTS - Highlighted with green checkmarks + justified text */}
        <section className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Trophy className="w-10 h-10 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-300">
              RESULTS
            </h2>
          </div>

          <div className="bg-gradient-to-br from-emerald-950/60 to-emerald-900/40 border border-emerald-700/60 rounded-2xl p-10 max-w-4xl mx-auto backdrop-blur-md shadow-2xl shadow-emerald-900/30">
            <ul className="space-y-6 text-xl md:text-2xl text-gray-100 text-justify">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-400 flex-shrink-0 mt-1" />
                <span>5–10 kg fat loss (average)</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-400 flex-shrink-0 mt-1" />
                <span>Better energy & sleep</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-400 flex-shrink-0 mt-1" />
                <span>Strength & mobility gains</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-400 flex-shrink-0 mt-1" />
                <span>Sustainable habits formed</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-400 flex-shrink-0 mt-1" />
                <span>Mental discipline & clarity</span>
              </li>
            </ul>
          </div>
        </section>

        
<div className="flex justify-center mt-16">
  <h1 className="text-5xl md:text-6xl font-extrabold text-center">
    <span className="bg-gradient-to-r from-yellow-400 via-white to-emerald-400 
      bg-[length:200%_auto] bg-clip-text text-transparent 
      animate-[shine_3s_linear_infinite]">
      🎉 Free 7 Days Trial
    </span>
  </h1>
</div>



      </div>
    </div>
  );
}

export default function TransformationPage() {
  return (
    <>
      <AboutBanner />
      <MissionSection />
    </>
  );
}