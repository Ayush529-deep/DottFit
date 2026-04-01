// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Check, ArrowRight, Clock, Users, Video, Phone, Dumbbell, Apple, BarChart, MessageCircle } from "lucide-react";

// // Hero Section
// function SalesHero() {
//   return (
//     <section className="py-20 gradient-dark relative overflow-hidden">
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
//       </div>
      
//       <div className="container relative z-10 mx-auto px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold font-semibold text-sm mb-6">
//             Limited Spots Available
//           </span>
          
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
//             Transform Your Health in 12 Weeks – 
//             <span className="text-gold"> Without Crash Diets or Painful Gym Routines</span>
//           </h1>
          
//           <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
//             A complete fitness program for busy men & women 30–60 who want to lose fat, 
//             gain strength, fix lifestyle habits, and feel younger again.
//           </p>
          
//           {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button variant="gold" size="xl" asChild>
//               <Link to="#programs">
//                 View Programs
//                 <ArrowRight className="w-5 h-5" />
//               </Link>
//             </Button>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }

// // Why This Works Section
// function WhyItWorks() {
//   const reasons = [
//     {
//       icon: Apple,
//       title: "Simple Indian Food",
//       desc: "No expensive supplements or exotic ingredients. Eat the food you already love, just optimized.",
//     },
//     {
//       icon: BarChart,
//       title: "Science-Backed Workouts",
//       desc: "Evidence-based training that works for your age and fitness level. Home or gym options.",
//     },
//     {
//       icon: MessageCircle,
//       title: "Daily Accountability",
//       desc: "Stay on track with our community support and regular check-ins with your coach.",
//     },
//     {
//       icon: Clock,
//       title: "Real-Life Flexibility",
//       desc: "Miss a workout? Have a party? We teach you how to adapt without losing progress.",
//     },
//   ];

//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
//             Why Extreme Diets <span className="text-destructive">Fail</span> & 
//             WhyThis Works
//           </h2>
//           <p className="text-lg text-muted-foreground">
//             Most programs fail because they're not designed for real Indian lifestyles. 
//             DottFit is different.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {reasons.map((item, i) => (
//             <div 
//               key={i}
//               className="flex gap-4 p-6 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
//             >
//               <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
//                 <item.icon className="w-7 h-7 text-primary-foreground" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
//                 <p className="text-muted-foreground">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // Program Phases
// function ProgramPhases() {
//   const phases = [
//     { week: "1-3", title: "Habit + Foundation", desc: "Build sustainable habits and establish your baseline" },
//     { week: "4-6", title: "Fat Loss + Strength", desc: "Accelerate results with optimized nutrition and training" },
//     { week: "7-9", title: "Body Shaping", desc: "Sculpt and tone while building functional strength" },
//     { week: "10-12", title: "Lifestyle Lock", desc: "Lock in your new habits for lifelong success" },
//   ];

//   return (
//     <section className="py-20 bg-muted/50">
//       <div className="container mx-auto px-4">
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
//             The 12-Week Journey
//           </h2>
//           <p className="text-lg text-muted-foreground">
//             A structured approach designed for lasting transformation
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {phases.map((phase, i) => (
//             <div 
//               key={i}
//               className="relative bg-card rounded-2xl p-6 shadow-card group hover:-translate-y-2 transition-transform"
//             >
//               <div className="absolute -top-4 left-6">
//                 <span className="px-3 py-1 rounded-full gradient-hero text-primary-foreground text-sm font-bold">
//                   Week {phase.week}
//                 </span>
//               </div>
//               <div className="pt-4">
//                 <h3 className="text-xl font-heading font-bold mb-2">{phase.title}</h3>
//                 <p className="text-muted-foreground">{phase.desc}</p>
//               </div>
//               {i < 3 && (
//                 <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // Programs Section
// function ProgramsDetail() {
//   const groupFeatures = [
//     { icon: Dumbbell, text: "12-week structured workout plan" },
//     { icon: Phone, text: "DottFit app access" },
//     { icon: Check, text: "Habit tracking" },
//     { icon: Apple, text: "Indian meal strategy" },
//     { icon: BarChart, text: "Weekly progress check" },
//     { icon: Users, text: "WhatsApp support community" },
//     { icon: MessageCircle, text: "24/7 guidance through app" },
//   ];

//   const premiumFeatures = [
//     { icon: Dumbbell, text: "Personalized workouts" },
//     { icon: Apple, text: "Meal tracking & nutrition guidance" },
//     { icon: BarChart, text: "Progress tracking" },
//     { icon: Video, text: "Weekly video coaching" },
//     { icon: Phone, text: "Priority support" },
//     { icon: Users, text: "Direct guidance by Coach Louis" },
//   ];

//   return (
//     <section id="programs" className="py-20 scroll-mt-24">
//       <div className="container mx-auto px-4">
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
//             Choose Your Program
//           </h2>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           {/* Group Program */}
//           <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
//             <h3 className="text-2xl font-heading font-bold mb-2">Group Program</h3>
//             <div className="flex items-baseline gap-1 mb-6">
//             ₹6,000
//               <span className="text-muted-foreground">/12 weeks</span>
//             </div>
            
//             <ul className="space-y-4 mb-8">
//               {groupFeatures.map((feature, i) => (
//                 <li key={i} className="flex items-center gap-3">
//                   <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
//                     <feature.icon className="w-4 h-4 text-primary" />
//                   </div>
//                   <span>{feature.text}</span>
//                 </li>
//               ))}
//             </ul>
            
//             <Button variant="outline" className="w-full" size="lg" asChild>
//               <Link to="/contact">Join Group Program</Link>
//             </Button>
//           </div>
          
//           {/* Premium Coaching */}
//           <div className="relative bg-card rounded-2xl p-8 border-2 border-gold shadow-gold">
//             <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//               <span className="px-4 py-1 rounded-full gradient-gold text-gold-foreground text-sm font-bold">
//                 Best Value
//               </span>
//             </div>
            
//             <h3 className="text-2xl font-heading font-bold mb-2">Premium Coaching</h3>
//             <div className="flex items-baseline gap-1 mb-6">
//             ₹15,000
//               <span className="text-muted-foreground">/12 weeks</span>
//             </div>
            
//             <ul className="space-y-4 mb-8">
//               {premiumFeatures.map((feature, i) => (
//                 <li key={i} className="flex items-center gap-3">
//                   <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
//                     <feature.icon className="w-4 h-4 text-gold" />
//                   </div>
//                   <span>{feature.text}</span>
//                 </li>
//               ))}
//             </ul>
            
//             <Button variant="gold" className="w-full" size="lg" asChild>
//               <Link to="/contact">Get Premium Coaching</Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Guarantee Section
// function GuaranteeSection() {
//   return (
//     <section className="py-20 gradient-hero">
//       <div className="container mx-auto px-4 text-center">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
//             Our Commitment to You
//           </h2>
//           <p className="text-xl text-primary-foreground/80 mb-8">
//             We're so confident in our program that we offer a 7-day trial. 
//             If you're not satisfied, we'll work with you to make it right.
//           </p>
//           <Button variant="gold" size="xl" asChild>
//             <Link to="/contact">
//               Start Your Transformation Today
//               <ArrowRight className="w-5 h-5" />
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function ProgramsPage() {
//   return (
//     <>
//       <SalesHero />
//       <WhyItWorks />
//       <ProgramPhases />
//       <ProgramsDetail />
//       <GuaranteeSection />
//     </>
//   );
// }



import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ChevronRight, Dumbbell, Heart, LineChart, Users, Check } from 'lucide-react';


export default function DottfitWebsite() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    {
      title: "Beginners Journey",
      icon: "🚀",
      tagline: "Start strong. Start safely.",
      description: "Guided workouts, clear plans, and confidence-building routines. Perfect if you're new to fitness or restarting after a break.",
      features: ["Bodyweight & dumbbell workouts", "Simple nutrition guidance", "Technique videos", "Confidence-building progression"],
      color: "from-emerald-400 to-teal-600"
    },
    {
      title: "Busy Professionals",
      icon: "⏱",
      tagline: "Results without affecting work or family time",
      description: "Short, effective workouts designed for corporate professionals, entrepreneurs, and travelers. Train smart. Anytime, anywhere.",
      features: ["Short, effective workouts", "Minimal equipment options", "Stress & energy management", "Consistency despite busy schedules"],
      color: "from-blue-400 to-indigo-600"
    },
    {
      title: "Weight & Fat Loss",
      icon: "🔥",
      tagline: "Visible results + lasting confidence",
      description: "Scientifically designed programs for visible fat loss and body transformation. Track progress, stay consistent, see results.",
      features: ["Fat loss without muscle loss", "Metabolic conditioning", "Nutrition education (not starvation)", "Long-term habit building"],
      color: "from-orange-400 to-red-600"
    },
    {
      title: "Muscle & Strength",
      icon: "💪",
      tagline: "Build power and performance",
      description: "Structured programming for visible muscle gains. Ideal for intermediate to advanced fitness levels.",
      features: ["Structured hypertrophy programming", "Strength progression tracking", "Nutrition for lean mass", "Power and performance focus"],
      color: "from-purple-400 to-pink-600"
    },
    {
      title: "Medical & Corrective",
      icon: "🩺",
      tagline: "Safe, controlled, expert-guided",
      description: "For people with diabetes, BP, thyroid, joint pain, or post-injury concerns. Doctor-aware exercise planning.",
      features: ["Low-impact, joint-friendly training", "Mobility and strength focus", "Doctor-aware planning", "Post-injury rehabilitation"],
      color: "from-cyan-400 to-blue-600"
    },
    {
      title: "Senior Fitness",
      icon: "🌟",
      tagline: "Energy, mobility & independence",
      description: "Designed for 50+ adults with joint-friendly strength training, balance, and flexibility work.",
      features: ["Doctor-aware exercise planning", "Joint-friendly strength training", "Balance & flexibility", "Longevity-focused approach"],
      color: "from-amber-400 to-orange-600"
    }
  ];

  const features = [
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Personalized Training Blueprint",
      items: ["Gym or home-based programs", "Progressive overload & smart recovery", "Exercise videos with exact form cues"]
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Precision Nutrition Strategy",
      items: ["Lifestyle-based nutrition (no extremes)", "Macro & habit guidance", "Real-world sustainable eating"]
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Weekly Performance Reviews",
      items: ["Weight, measurements & progress photos", "Program optimization every phase", "Honest feedback & course correction"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Direct Coach Access",
      items: ["In-app messaging", "Accountability check-ins", "Human coaching, not automation"]
    }
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden bg-gradient-to-br from-[#0B1A2E] via-[#0F1E33] to-[#142A45]">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; -webkit-font-smoothing: antialiased; }

        .bebas { font-family: 'Bebas Neue', cursive; letter-spacing: 0.02em; }
        .syne  { font-family: 'Syne', sans-serif; }

        .grain::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.28;
        }

        .gold-gradient {
          background: linear-gradient(90deg, #f59e0b, #fbbf24, #fcd34d, #fde68a);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .gold-glow {
          text-shadow: 0 0 20px rgba(251, 191, 36, 0.6), 0 0 40px rgba(245, 158, 11, 0.3);
        }

        @keyframes float     { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-16px) rotate(4deg); } }
        @keyframes slide-up  { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes scale-in  { from { opacity:0; transform:scale(0.94); } to { opacity:1; transform:scale(1); } }

        .animate-float    { animation: float 7s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 0.85s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.65s ease-out forwards; }

        .card-hover:hover { transform: translateY(-8px); box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5); }
        .program-card     { transition: all 0.4s cubic-bezier(0.4,0,0.2,1); border: 1px solid rgba(255,255,255,0.08); }
        .program-card:hover { border-color: rgba(251,191,36,0.25); }

        /* Mobile fixes */
        @media (max-width: 640px) {
          .hero-nowrap { white-space: nowrap; }
          .icon-center-mobile { justify-content: center; }
          .text-hero-h1 { font-size: 3.2rem; line-height: 0.95; }
          .card-icon-wrapper { display: flex; justify-content: center; width: 100%; }
        }

        @media (max-width: 480px) {
          .text-hero-h1 { font-size: 2.8rem; }
        }
      `}</style>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute top-12 left-6 sm:left-12 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-amber-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-8 right-8 sm:right-16 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-yellow-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.4s' }}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 md:py-28 text-center">
          <div className="inline-block mb-5 px-5 py-2 bg-white/7 backdrop-blur-md border border-white/12 rounded-full animate-scale-in">
            <span className="text-xs sm:text-sm font-semibold tracking-wide gold-gradient">
              ✨ 15+ YEARS OF ELITE COACHING
            </span>
          </div>

          <h1 className="bebas text-5xl sm:text-6xl md:text-7xl lg:text-9xl leading-tight mb-6 animate-slide-up gold-glow text-hero-h1">
            <span className="block gold-gradient hero-nowrap">TRAIN SMARTER</span>
            <span className="block">LIVE STRONGER</span>
            <span className="block gold-gradient hero-nowrap">ANYWHERE</span>
          </h1>

          <p className="syne text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200/90 max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up">
            Personalized online fitness coaching — built for real consistency, visible results, and modern lifestyles.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-12 animate-slide-up">
           <Link
  to="/pricing"
  className="
    group
    px-6 sm:px-8 py-4 sm:py-5
    bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-500
    rounded-full
    font-bold text-base sm:text-lg
    shadow-lg shadow-amber-900/30
    hover:shadow-amber-500/50 hover:scale-[1.03]
    transition-all duration-300
    flex items-center justify-center gap-2 sm:gap-3
    w-full sm:w-auto
    whitespace-nowrap
    min-w-[220px]               /* prevents too much compression on small screens */
  "
>
  Start Your Transformation
  <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-1.5 transition-transform" />
</Link>
          </div>

          <div className="flex flex-wrap justify-center gap-5 sm:gap-8 text-gray-300 animate-slide-up">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-green-600/20 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
              <span className="font-medium text-sm">Structured Plans</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-green-600/20 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
              <span className="font-medium text-sm">Real Human Coaching</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-green-600/20 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
              <span className="font-medium text-sm">Sustainable Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 sm:py-28 md:py-36 px-5 sm:px-8 relative grain">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 gold-glow">
              <span className="gold-gradient">PROGRAMS</span> FOR EVERY GOAL
            </h2>
            <p className="syne text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Custom-built. Expert-guided. Continuously optimized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programs.map((program, i) => (
              <div
                key={i}
                className="program-card bg-gradient-to-br from-gray-900/75 to-black/75 backdrop-blur-sm p-6 sm:p-8 rounded-3xl card-hover"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="card-icon-wrapper mb-4 sm:mb-5">
                  <div className={`inline-flex text-5xl sm:text-6xl p-4 sm:p-5 bg-gradient-to-br ${program.color} rounded-2xl shadow-lg icon-center-mobile`}>
                    {program.icon}
                  </div>
                </div>
                <h3 className="syne text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center sm:text-left">{program.title}</h3>
                <p className="text-amber-400 font-medium text-sm sm:text-base mb-3 text-center sm:text-left">{program.tagline}</p>
                <p className="text-gray-300/90 text-sm sm:text-base mb-5 leading-relaxed text-center sm:text-left">{program.description}</p>
                <ul className="space-y-2.5 text-sm sm:text-base">
                  {program.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-gray-200/90">
                      <Check className="w-4 sm:w-5 h-4 sm:h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES / SYSTEM */}
      <section className="py-20 sm:py-28 md:py-36 px-5 sm:px-8 relative">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 gold-glow">
              THE <span className="gold-gradient">DOTTFIT</span> SYSTEM
            </h2>
            <p className="syne text-lg sm:text-xl text-gray-300">
              Intelligent coaching • Real accountability • Lasting transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {features.map((feature, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900/65 to-black/65 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/10 card-hover">
                <div className="flex justify-center sm:justify-start mb-4 sm:mb-5">
                  <div className="inline-flex p-3 sm:p-4 bg-amber-500/15 rounded-2xl text-amber-400 icon-center-mobile">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="syne text-xl sm:text-2xl font-bold mb-3 text-center sm:text-left">{feature.title}</h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-gray-200/90">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-amber-900/20 to-yellow-900/20 border border-amber-500/20 rounded-3xl p-8 sm:p-10 mx-2 sm:mx-0">
            <p className="syne text-xl sm:text-2xl md:text-3xl font-bold mb-3 gold-gradient">
              Real coaching — delivered digitally
            </p>
            <p className="text-base sm:text-lg text-gray-300">
              Expert-led programs • App tracking • Human support + smart planning
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-28 md:py-36 px-5 sm:px-8 relative">
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 gold-glow">
            READY TO <span className="gold-gradient">BEGIN?</span>
          </h2>

          <p className="syne text-lg sm:text-xl text-gray-300 mb-8">
            Only three things required:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-10">
            {[
              { icon: "📱", text: "Smartphone or tablet" },
              { icon: "🌐", text: "Stable internet" },
              { icon: "🔥", text: "Commitment to change" }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900/75 to-black/75 p-6 sm:p-8 rounded-3xl border border-white/10">
                <div className="text-5xl sm:text-6xl mb-3">{item.icon}</div>
                <p className="text-lg sm:text-xl font-semibold">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="syne text-xl sm:text-2xl font-bold mb-6 text-gray-200">
            We take care of everything else.
          </p>

          <Link
  to="/pricing"
  className="
    group
    px-6 sm:px-12 py-4 sm:py-6
    bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-500
    rounded-full
    font-bold text-base sm:text-xl
    shadow-2xl shadow-amber-900/40
    hover:shadow-amber-500/60 hover:scale-105
    transition-all duration-300
    inline-flex items-center justify-center gap-2 sm:gap-4
    w-full sm:w-auto
    whitespace-nowrap           /* ← prevents wrapping */
    min-w-[220px]               /* ← helps prevent awkward squeezing */
  "
>
  Start Your Journey Today
  <ChevronRight className="w-5 sm:w-7 h-5 sm:h-7 group-hover:translate-x-2 transition-transform" />
</Link>
        </div>
      </section>

    </div>
  );
}