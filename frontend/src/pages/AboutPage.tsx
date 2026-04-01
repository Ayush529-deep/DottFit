import { Award, Users, Calendar, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import aboutPageTranslations from "@/translations/aboutPageTranslations";

import coachImage from "@/assets/coach-joseph.png";
import fitnessImg from "@/assets/fitness.png";
import BannerImg from "@/assets/,,,.jpg";

export default function AboutPage() {
  const { i18n } = useTranslation();
  const lang = (i18n.language as "en" | "hi" | "te") || "en";

  const t = aboutPageTranslations;

  return (
    <div className="bg-[#F7F9FC] text-[#1E293B]">

      {/* ================= HERO ================= */}
      <section
        className="py-24 relative overflow-hidden bg-gradient-to-br from-[#0B1A2E] via-[#0F1E33] to-[#142A45]"
        style={{
          backgroundImage: `url('${BannerImg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.hero.title[lang]}
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle[lang]}
          </p>
        </div>
      </section>

      {/* ================= ABOUT DOTT FIT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              {t.about.title[lang]}
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t.about.paragraph1[lang]}
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              {t.about.paragraph2[lang]}
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl h-[420px]">
            <img
              src={fitnessImg}
              alt="Fitness"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* ================= COACH SECTION ================= */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[550px]">
              <img
                src={coachImage}
                alt={t.coach.name[lang]}
                className="w-full h-full object-cover object-[50%_25%]"
              />
            </div>

            {/* BADGE */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg border border-blue-200">
              <Award className="w-8 h-8 text-blue-600 mb-2" />
              <p className="text-sm font-bold">
                {t.coach.badge.title[lang]}
              </p>
              <p className="text-xs text-gray-500">
                {t.coach.badge.subtitle[lang]}
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold mb-2">
              {t.coach.name[lang]}
            </h2>

            <p className="text-blue-600 font-bold mb-6">
              {t.coach.designation[lang]}
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {t.coach.paragraph1[lang]}
            </p>

            <p className="italic border-l-4 border-blue-500 pl-4 bg-blue-100/50 py-3 mb-8">
              "{t.coach.quote[lang]}"
            </p>

            {/* SPECIALIZATIONS */}
            <div className="mb-6">
              <h3 className="font-bold mb-3">
                {t.coach.specializationsTitle[lang]}
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {t.coach.specializations[lang].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* MEDICAL FITNESS */}
            <div className="mb-8">
              <h3 className="font-bold mb-3">
                {t.coach.medicalTitle[lang]}
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {t.coach.medical[lang].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 border-t pt-8">
              <div className="text-center">
                <Calendar className="mx-auto text-blue-600 mb-2" />
                <p className="font-bold">
                  {t.coach.stats.experience.title[lang]}
                </p>
                <p className="text-sm text-gray-500">
                  {t.coach.stats.experience.subtitle[lang]}
                </p>
              </div>

              <div className="text-center">
                <Users className="mx-auto text-blue-600 mb-2" />
                <p className="font-bold">
                  {t.coach.stats.coaching.title[lang]}
                </p>
                <p className="text-sm text-gray-500">
                  {t.coach.stats.coaching.subtitle[lang]}
                </p>
              </div>

              <div className="text-center">
                <Star className="mx-auto text-blue-600 mb-2" />
                <p className="font-bold">
                  {t.coach.stats.approach.title[lang]}
                </p>
                <p className="text-sm text-gray-500">
                  {t.coach.stats.approach.subtitle[lang]}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}





























// import { Check, Award, Users, Calendar, Star } from "lucide-react";
// // import coachImage from "@/assets/coach.jpeg";
// import coachImage from "@/assets/coach-joseph.png";

// // import fitnessImg from "@/assets/zym.jpg";
// import fitnessImg from "@/assets/fitness.png";

// import BannerImg from "@/assets/,,,.jpg";

// function AboutHero() {
//   return (
//     <section 
//       className="py-20 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 relative overflow-hidden"
//       style={{
//         backgroundImage: `url('${BannerImg}')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}
//     >
//       <div className="absolute inset-0 bg-black/40"></div>
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
//       </div>
      
//       <div className="container relative z-10 mx-auto px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
//             About <span className="text-yellow-400">DottFit</span>
//           </h1>
//           <p className="text-xl text-white/90 max-w-3xl mx-auto text-left">
//             Born from a vision of holistic growth and modern innovation, DottFit is more than just a fitness app—it is a lifestyle architecture for the high-performer.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// function MissionSection() {
//   return (
//     <>
//       {/* SECTION 1 - About DottFit */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* LEFT - About DottFit Content */}
//             <div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-8">
//                 About DottFit
//               </h2>
//               <p className="text-lg text-gray-700 leading-relaxed mb-6">
//                 We believe that true wellness in the modern world requires a perfect harmony between physical strength and digital intelligence.
//               </p>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Guided by decades of insight and a passion for human potential, we connect the dots between where you are and where you are destined to be. At DottFit, we don't just track your progress; we empower your infinite journey toward a healthier, more balanced life.
//               </p>
//             </div>

//             {/* RIGHT - Fitness Image */}
//             <div className="relative rounded-2xl overflow-hidden shadow-xl h-96">
//               <img
//                 src={fitnessImg}
//                 alt="DottFit Fitness"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

// {/* SECTION 2 - About Coach Louis */}
// <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
//   <div className="container mx-auto px-4">
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
//       {/* LEFT - Coach Image */}
//       <div className="relative order-2 lg:order-1">

         

//        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[550px] bg-gray-300 flex items-center justify-center">
//   <img
//     src={coachImage}
//     alt="Louis Lancy Joseph"
//     className="w-full h-full object-cover object-[50%_25%]"
//   />
// </div>



//         {/* <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] bg-gray-300 flex items-center justify-center">
//           <img
//             src={coachImage}
//             alt="Louis Lancy Joseph"
//             className="w-full h-full object-cover"
//           />
//         </div> */}
        
//         {/* Floating Badge */}
//         <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg border border-blue-200">
//           <Award className="w-8 h-8 text-blue-600 mb-2" />
//           <p className="text-sm font-bold text-gray-900">ACE Certified</p>
//           <p className="text-xs text-gray-500">International Trainer</p>
//         </div>
//       </div>

//       {/* RIGHT - Coach Content */}
//       <div className="order-1 lg:order-2">
//         <h2 className="text-4xl font-bold text-gray-900 mb-2">
//           Louis Lancy Joseph
//         </h2>
//         <p className="text-blue-600 font-bold mb-6">ACE Certified International Trainer & Online Coach</p>
        
//         <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
//           <p>
//             With over <strong>15 years of experience</strong>, Louis is a global expert in body transformation and clinical exercise. From leading wellness for giants like <strong>Accenture and Dell</strong> to coaching clients worldwide, he focuses on scientific, injury-free progress.
//           </p>
//           <p className="italic border-l-4 border-blue-500 pl-4 bg-blue-100/50 py-2">
//             "I don’t believe in quick fixes. My goal is to debunk fitness myths and help you become better every day—mentally and physically."
//           </p>
//         </div>

//         {/* Specialized Areas */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//           <div>
//             <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
//               <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Specializations
//             </h4>
//             <ul className="text-sm space-y-1 text-gray-600">
//               <li>• Physique & Body Toning</li>
//               <li>• Longevity & Posture</li>
//               <li>• Injury Rehabilitation</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
//               <span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Medical Fitness
//             </h4>
//             <ul className="text-sm space-y-1 text-gray-600">
//               <li>• Diabetes & Hypertension</li>
//               <li>• Asthma & Thyroid Care</li>
//               <li>• Arthritis Management</li>
//             </ul>
//           </div>
//         </div>

//         {/* Quick Stats */}
//         <div className="flex flex-wrap gap-6 border-t border-gray-200 pt-8">
//           <div className="flex items-center gap-3">
//             <Calendar className="w-5 h-5 text-blue-600" />
//             <div>
//               <p className="font-bold text-gray-900">15+ Years</p>
//               <p className="text-xs text-gray-500">Experience</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-3">
//             <Users className="w-5 h-5 text-blue-600" />
//             <div>
//               <p className="font-bold text-gray-900">Global</p>
//               <p className="text-xs text-gray-500">Online Coaching</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-3">
//             <Star className="w-5 h-5 text-blue-600" />
//             <div>
//               <p className="font-bold text-gray-900">Scientific</p>
//               <p className="text-xs text-gray-500">Approach</p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </div>
//   </div>
// </section>
//     </>
//   );
// }

// export default function AboutPage() {
//   return (
//     <>
//       <AboutHero />
//       <MissionSection />
//     </>
//   );
// }