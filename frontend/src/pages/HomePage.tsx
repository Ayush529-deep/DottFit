import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Check, Dumbbell, UserCheck, Repeat, LineChart } from "lucide-react";
import { BASE_URL } from "@/Config";
import translations from "@/translations/homePageTranslations";
import { useTranslation } from "react-i18next";

import heroImg from "@/assets/Hero.png";
import video1 from "@/assets/v1.mp4";
import img1 from "@/assets/img1.jpeg";
import img2 from "@/assets/img2.jpeg";
import img3 from "@/assets/img3.jpeg";
import img4 from "@/assets/img4.jpeg";
import img5 from "@/assets/img5.jpeg";
import coachImg from "@/assets/coach-joseph.png";

export default function HomePage() {
  const [testimonials, setTestimonials] = useState([]);
  const { i18n } = useTranslation();
  // const lang = i18n.language || "en"; // current language
  const lang = (["en","hi","te"].includes(i18n.language?.split("-")[0]) 
  ? i18n.language.split("-")[0] 
  : "en") as "en" | "hi" | "te";

  useEffect(() => {
    fetch(`${BASE_URL}/testimonials`)
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error("Testimonials fetch error:", err));
  }, []);

  const loopData = [...testimonials, ...testimonials];

  const t = translations; // shorthand

  return (
    <div className="bg-[#F7F9FC] text-[#1E293B]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden flex flex-col md:block md:h-[720px] bg-gradient-to-br from-[#0B1A2E] via-[#0F1E33] to-[#142A45]">
        <div className="block md:hidden w-full h-[240px]">
          <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
        </div>
        <img src={heroImg} alt="Hero" className="hidden md:block absolute inset-0 w-full h-full object-cover" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[80px] h-full flex items-center">
          <div className="w-full md:w-[45%] text-white py-8 sm:py-10 md:py-0">
            <h1 className="font-semibold mb-5 md:mb-6 leading-tight text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px]">
                 {/* /* {t.hero.title[lang].split(". ").map((line, i) => (   */ */}
               {(t.hero.title[lang] || "").split(". ").map((line, i) => (

                <span key={i} className="block">{line}</span>
              ))}
            </h1>

            <p className="text-white/80 mb-6 text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[26px] lg:leading-[28px] mx-auto md:mx-0">
              {/* /* {t.hero.subtitle[lang]} */ */}
              {(t.hero.subtitle[lang] || "")}
            </p>

            <div className="flex flex-col gap-3 mb-8 w-full md:w-fit items-center md:items-start">
              <Link
                to="/transformation"
                className="w-full md:min-w-[320px] text-center bg-[#F5B940] text-[#0F1E33] px-5 sm:px-6 md:px-8 lg:px-10 py-3.5 md:py-4 rounded-2xl font-semibold tracking-wide hover:bg-[#e6ac32] transition whitespace-nowrap text-[13px] sm:text-[14px] md:text-[14px] lg:text-base"
              >
                {/* /* {t.hero.transformationBtn[lang]} */ */}
                  {(t.hero.transformationBtn[lang] || "")}
              </Link>

              <Link
                to="/programs"
                className="animated-btn w-full md:min-w-[320px] text-center px-5 sm:px-6 md:px-8 lg:px-10 py-3.5 md:py-4 rounded-2xl font-semibold tracking-wide text-[13px] sm:text-[14px] hover:bg-white hover:text-[#0F1E33] md:text-[14px] lg:text-base relative overflow-hidden"
              >
                <svg className="border-svg" xmlns="http://www.w3.org/2000/svg">
                  <rect className="border-rect" rx="16" ry="16" pathLength="100" />
                </svg>
                <span className="relative z-10">
                  {/* /* {t.hero.programsBtn[lang]} */ */}
                   {(t.hero.programsBtn[lang] || "")}
                </span>
              </Link>
            </div>

            <div className="flex flex-wrap gap-y-2 text-white/80 text-[15px] sm:text-[16px] md:text-[16px] lg:text-[18px]">
              {/* /* {t.hero.features[lang].map((feature, i) => ( */ */}
              {(t.hero.features[lang] || []).map((feature, i) => (
                <span key={i} className="flex items-center gap-2 px-2"><Check size={14} /> {feature}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="py-16 sm:py-20 md:py-[100px] bg-gradient-to-br from-[#0B1A2E] via-[#0F1E33] to-[#142A45]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[80px] text-center">
          <h2 className="text-center text-[22px] sm:text-[28px] md:text-[36px] font-semibold text-white mb-3 md:mb-4 max-w-[90%] sm:max-w-full mx-auto">
            {t.videoSection.title[lang]}
          </h2>
          <p className="text-left sm:text-center text-[14px] sm:text-[16px] md:text-[18px] text-white/70 max-w-[640px] mx-auto mb-10 sm:mb-12 md:mb-16 leading-relaxed">
            {t.videoSection.subtitle[lang]}
          </p>

          <div className="relative max-w-full mx-auto rounded-[20px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden bg-gradient-to-b from-[#1A2F4D] to-[#0B1626] shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 p-3 sm:p-4 md:p-6">
              <div className="aspect-video rounded-[14px] sm:rounded-[16px] md:rounded-[18px] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.5)]">
                <video src={video1} className="w-full h-full object-cover" controls muted playsInline />
              </div>
            </div>
          </div>

          <p className="text-[11px] sm:text-[12px] text-white/80 mt-6 sm:mt-8">
            {t.videoSection.note[lang]}
          </p>
        </div>
      </section>

      {/* ================= WHY DOTT FIT ================= */}
      <section className="py-14 xs:py-16 sm:py-20 lg:py-[100px] bg-gradient-to-br from-[#0B1A2E] via-[#0F1E33] to-[#142A45]">
        <div className="max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-[40px] md:px-[60px] lg:px-[80px]">
          <h2 className="text-center text-[24px] xs:text-[26px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold text-white mb-8 xs:mb-10 sm:mb-12 lg:mb-16 tracking-tight">
            {t.whyDottFit.title[lang]}
          </h2>

          <h3 className="text-left xs:text-left sm:text-center md:text-center text-[20px] xs:text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] font-semibold text-gray-100 mb-4 sm:mb-6 lg:mb-8">
            {t.whyDottFit.subtitle[lang]}
          </h3>

          <p className="text-left sm:text-left md:text-justify lg:text-justify lg:text-center text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-gray-200 leading-[1.75] max-w-[680px] lg:max-w-[820px] mx-auto">
            {t.whyDottFit.description[lang]}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 xs:gap-5 sm:gap-6 md:gap-8 mt-12">
            {[img1, img2, img3, img4, img5].map((img, index) => (
              <div key={index} className="flex justify-center">
                <img src={img} alt={t.whyDottFit.imagesAlt[lang][index]} className="w-full max-w-[240px] xs:max-w-[260px] sm:max-w-[300px] lg:max-w-[320px] rounded-xl xs:rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/60 border border-gray-700/30 transition-transform duration-300 hover:scale-105 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-14 xs:py-16 sm:py-20 lg:py-[100px] bg-gradient-to-br from-[#0B1A2E] via-[#0F1E33] to-[#142A45] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,185,64,0.04)_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-[40px] md:px-[60px] lg:px-[80px] relative z-10">
          <h2 className="text-center text-[24px] xs:text-[26px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-white mb-8 xs:mb-10 sm:mb-14 lg:mb-16 tracking-tight">
            {t.features.title[lang]}
          </h2>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
            {t.features.list.map(({ title, desc }, index) => {
              const icons = [Dumbbell, UserCheck, Repeat, LineChart];
              const Icon = icons[index];
              return (
                <div key={index} className="bg-white/8 backdrop-blur-md border border-white/10 rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 transition-all duration-300 hover:bg-white/12 hover:border-[#F5B940]/30 hover:shadow-xl hover:shadow-[#F5B940]/10 flex flex-col items-center sm:text-left min-h-[260px] sm:min-h-[300px]">
                  <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-[#F5B940]/15 rounded-xl xs:rounded-2xl flex items-center justify-center mb-3 xs:mb-4 sm:mb-6 transition-colors group-hover:bg-[#F5B940]/25">
                    <Icon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-[#F5B940]" />
                  </div>
                  <h4 className="text-[14px] xs:text-[15px] sm:text-[18px] md:text-[22px] font-semibold text-white mb-2 sm:mb-4">{title[lang]}</h4>
                  <p className="text-[12.5px] xs:text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-gray-300 max-w-[260px]">{desc[lang]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      {/* ... founder section update same way using translations ... */}




    {/* ================= FOUNDER ================= */}
       <section className="py-[100px] bg-gradient-to-br from-[#0B1A2E] via-[#0F1E33] to-[#142A45] relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,185,64,0.04)_0%,transparent_50%)] pointer-events-none" />
         <div className="max-w-[1440px] mx-auto px-[40px] sm:px-[60px] lg:px-[80px] relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
             <div className="flex justify-center lg:justify-start">
               <img src={coachImg} alt="Louis Lancy Joseph - ACE Certified Trainer" className="w-full max-w-[480px] lg:max-w-[560px] rounded-2xl shadow-2xl shadow-black/50 border border-white/10 object-cover transition-transform hover:scale-[1.02] duration-300" />
             </div>

             <div className="text-center lg:text-left">
               <p className="uppercase tracking-widest text-gray-400 text-[14px] sm:text-[15px] mb-4 font-medium"> {t.founder.authority[lang]}</p>
               <h3 className="text-[32px] sm:text-[38px] lg:text-[42px] font-bold text-white mb-3">{t.founder.name[lang]}</h3>
               <p className="text-[18px] sm:text-[20px] text-gray-300 mb-6 font-medium">{t.founder.experience[lang]}</p>

                
                  <div className="space-y-5 text-gray-200 leading-relaxed text-[16px] sm:text-[17px] lg:text-[18px] text-left">
          {t.founder.description[lang].map((line, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: line }} />
          ))}
        </div>
               
             
               {/* <div className="space-y-5 text-gray-200 leading-relaxed text-[16px] sm:text-[17px] lg:text-[18px] text-left">
                 <p>With over <strong className="text-white">15 years of experience</strong>, Louis is a global expert in body transformation and clinical exercise.</p>
                 <p>From leading wellness programs for giants like <strong className="text-white">Accenture and Dell</strong> to coaching clients worldwide, he specializes in scientific, sustainable, and completely injury-free progress.</p>
                 <p className="text-gray-300 italic">His approach combines cutting-edge science with real-world results — helping thousands achieve lasting health and performance.</p>
             </div> */}

               <div className="flex justify-center lg:justify-start mt-8 space-x-5">
                 {/* Social links (Facebook, Instagram, LinkedIn) */}
                 <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3b5998] hover:scale-110 transition-transform duration-300 shadow-lg">
                   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.337v21.326C0 23.403.597 24 1.337 24h11.494v-9.294H9.69v-3.622h3.14V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.462.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.74 0 1.337-.597 1.337-1.337V1.337C24 .597 23.403 0 22.675 0z"/></svg>
                 </a>
                 <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E4405F] hover:scale-110 transition-transform duration-300 shadow-lg">
                   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.315.974.974 1.252 2.242 1.315 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.34 2.633-1.315 3.608-.974.974-2.242 1.252-3.608 1.315-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.34-3.608-1.315-.974-.974-1.252-2.242-1.315-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.34-2.633 1.315-3.608C4.518 2.503 5.785 2.225 7.151 2.163 8.416 2.105 8.796 2.163 12 2.163m0-2.163C8.736 0 8.332.013 7.052.072 5.773.131 4.64.404 3.678 1.366 2.717 2.327 2.445 3.46 2.386 4.739.013 8.332 0 8.736 0 12s.013 3.668.072 4.948c.059 1.279.33 2.412 1.292 3.373.962.962 2.095 1.233 3.374 1.292C8.332 23.987 8.736 24 12 24s3.668-.013 4.948-.072c1.279-.059 2.412-.33 3.374-1.292.962-.961 1.233-2.094 1.292-3.373.059-1.28.072-1.684.072-4.948s-.013-3.668-.072-4.948c-.059-1.279-.33-2.412-1.292-3.374-.961-.962-2.094-1.233-3.374-1.292C15.668.013 15.264 0 12 0z"/><path d="M12 5.838a6.162 6.162 0 1 0 6.162 6.162A6.169 6.169 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 4-4 4.005 4.005 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z"/></svg>
                 </a>
                 <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A66C2] hover:scale-110 transition-transform duration-300 shadow-lg">
                   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.225 0H1.771C.792 0 0 .771 0 1.725v20.551C0 23.229.792 24 1.771 24h20.451C23.207 24 24 23.229 24 22.276V1.725C24 .771 23.207 0 22.225 0zM7.12 20.452H3.556V9h3.564v11.452zM5.338 7.652c-1.144 0-2.069-.933-2.069-2.078 0-1.145.925-2.078 2.069-2.078 1.145 0 2.07.933 2.07 2.078 0 1.145-.925 2.078-2.07 2.078zM20.452 20.452h-3.556v-5.569c0-1.327-.025-3.033-1.848-3.033-1.848 0-2.13 1.445-2.13 2.938v5.664h-3.556V9h3.415v1.561h.049c.476-.9 1.637-1.848 3.371-1.848 3.602 0 4.268 2.37 4.268 5.455v6.284z"/></svg>
                 </a>
               </div>
             </div>
           </div>
         </div>
    </section>


       



      {/* ================= TESTIMONIALS ================= */}
      {/* ... testimonials section remains same ... */}


      

            {/* ================= TESTIMONIALS ================= */}
      <section className="py-12 xs:py-14 sm:py-20 lg:py-[100px] bg-gradient-to-br from-[#0B1A2E] via-[#0F1E33] to-[#142A45] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-[80px]">
          <h2 className="text-center text-[24px] xs:text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-white mb-8 xs:mb-10 sm:mb-14 lg:mb-16">
             {t.testimonials.title[lang]}
          </h2>

          <div className="relative w-full overflow-hidden">
            <div className="flex gap-3 xs:gap-4 sm:gap-6 lg:gap-10 w-max animate-testimonial-scroll hover:[animation-play-state:paused]">
              {loopData.map((item, i) => (
                <div key={`${item.id}-${i}`} className="min-w-[220px] xs:min-w-[240px] sm:min-w-[300px] lg:min-w-[360px] bg-[#404969] rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 lg:p-6 shadow-lg">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {item.media_type === "image" && <img src={item.media_url} alt={item.name} className="w-full h-[120px] xs:h-[130px] sm:h-[160px] lg:h-[180px] object-cover rounded-lg sm:rounded-xl" />}
                    {item.media_type === "video" && <video src={item.media_url} controls className="w-full h-[120px] xs:h-[130px] sm:h-[160px] lg:h-[180px] rounded-lg sm:rounded-xl object-cover" />}
                    {item.media_type === "audio" && <audio src={item.media_url} controls className="w-full" />}

                    <div className="text-center">
                      <h4 className="text-[14px] xs:text-[15px] sm:text-[16px] lg:text-lg font-semibold text-white">{item.name}</h4>
                      <p className="mt-1.5 xs:mt-2 text-[12px] xs:text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed text-white/90">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>






      {/* ================= FINAL CTA ================= */}
      <section className="py-16 sm:py-[100px] bg-gradient-to-r from-[#0F1E33] to-[#132B4A] text-white text-center">
        <h2 className="max-w-3xl mx-auto text-center text-[26px] sm:text-[32px] lg:text-[40px] font-semibold mb-6">
          {t.finalCTA.title[lang]}
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
          <Link to="/pricing" className="w-full sm:w-auto bg-[#F5B940] text-[#0F1E33] px-8 py-4 rounded-full font-semibold text-center hover:bg-[#e6ac32] transition">
            {t.finalCTA.joinBtn[lang]}
          </Link>

          <Link to="/app" className="w-full sm:w-auto border border-white px-8 py-4 rounded-full text-center hover:bg-white hover:text-[#0F1E33] transition">
            {t.finalCTA.downloadBtn[lang]}
          </Link>
        </div>
      </section>
    </div>
  );
}


























































// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Check,
//   Dumbbell,
//   UserCheck,
//   Repeat,
//   LineChart
// } from "lucide-react";
// import { BASE_URL } from "@/Config";

// // import heroImg from "@/assets/cover page.png";
// import heroImg from "@/assets/Hero.png";
// import video1 from "@/assets/v1.mp4";
// import video2 from "@/assets/v2.mp4";
// // import appMockup from "@/assets/img1.png";
// import img1 from "@/assets/img1.jpeg";
// import img2 from "@/assets/img2.jpeg";
// import img3 from "@/assets/img3.jpeg";
// import img4 from "@/assets/img4.jpeg";
// import img5 from "@/assets/img5.jpeg";

// // import coachImg from "@/assets/coach-louis.jpg";
// import coachImg from "@/assets/coach-joseph.png"



// export default function HomePage() {

//    const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//     fetch(`${BASE_URL}/testimonials`)
//       .then((res) => res.json())
//       .then((data) => setTestimonials(data))
//       .catch((err) => console.error("Testimonials fetch error:", err));
//   }, []);

//   // duplicate for infinite scroll
//   const loopData = [...testimonials, ...testimonials];

//   return (
//     <div className="bg-[#F7F9FC] text-[#1E293B]">

//       {/* ================= HERO ================= */}
//      <section className="relative overflow-hidden flex flex-col md:block md:h-[720px] bg-gradient-to-br from-[#0B1A2E] via-[#0F1E33] to-[#142A45] md:bg-none">
//   {/* Mobile Image */}
//   <div className="block md:hidden w-full h-[240px]">
//     <img
//       src={heroImg}
//       alt="Hero"
//       className="w-full h-full object-cover"
//     />
//   </div>

//   {/* Medium + Large Background Image */}
//   <img
//     src={heroImg}
//     alt="Hero"
//     className="hidden md:block absolute inset-0 w-full h-full object-cover"
//   />

//   {/* Content */}
//   <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[80px] h-full flex items-center">
//     <div className="w-full md:w-[45%] text-white py-8 sm:py-10 md:py-0">
      
//       {/* Heading */}
//       <h1 className="font-semibold mb-5 md:mb-6 leading-tight
//         text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px]">
//         <span className="block md:inline">Train Smarter.</span>{' '}
//         <span className="block">Live Stronger.</span>
//         <span className="block">Anywhere.</span>
//       </h1>

//       {/* Paragraph */}
//       <p className="text-white/80 mb-6
//         text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px]
//         leading-[24px] sm:leading-[26px] md:leading-[26px] lg:leading-[28px] mx-auto md:mx-0">
//         Personalized online training guided by certified experts —
//         built for consistency, results, and modern lifestyles.
//       </p>

//       {/* Buttons */}
//       <div className="flex flex-col gap-3 mb-8 w-full md:w-fit item-center md:items-start">
//         <Link
//           to="/transformation"
//           className="w-full md:min-w-[320px] text-center bg-[#F5B940] text-[#0F1E33]
//           px-5 sm:px-6 md:px-8 lg:px-10 py-3.5 md:py-4 rounded-2xl font-semibold
//           tracking-wide hover:bg-[#e6ac32] transition whitespace-nowrap
//           text-[13px] sm:text-[14px] md:text-[14px] lg:text-base"
//         >
//           12-WEEK TRANSFORMATION PROGRAM
//         </Link>




// <Link
//   to="/programs"
//   className="animated-btn w-full md:min-w-[320px] text-center
//   px-5 sm:px-6 md:px-8 lg:px-10 py-3.5 md:py-4
//   rounded-2xl font-semibold tracking-wide
//   text-[13px] sm:text-[14px] hover:bg-white hover:text-[#0F1E33] md:text-[14px] lg:text-base
//   relative overflow-hidden"
// >
//   <svg
//     className="border-svg"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <rect
//       className="border-rect"
//       rx="16"
//       ry="16"
//       pathLength="100"
//     />
//   </svg>

//   <span className="relative z-10">
//     Explore Programs
//   </span>
// </Link>



       
// {/* 
//         <Link
//           to="/programs"
//           className="w-full md:min-w-[320px] text-center border border-white
//           px-5 sm:px-6 md:px-8 lg:px-10 py-3.5 md:py-4 rounded-2xl font-semibold
//           tracking-wide hover:bg-white hover:text-[#0F1E33] transition
//           text-[13px] sm:text-[14px] md:text-[14px] lg:text-base"
//         >
//           Explore Programs
//         </Link> */}
//       </div>

//       {/* Features */}
//       <div className="flex flex-wrap gap-y-2 text-white/80
//         text-[15px] sm:text-[16px] md:text-[16px] lg:text-[18px]">
//         <span className="flex items-center gap-2 px-2">
//           <Check size={14} /> Structured plans
//         </span>
//         <span className="flex items-center gap-2 px-2">
//           <Check size={14} /> Real coaches
//         </span>
//         <span className="flex items-center gap-2 px-2">
//           <Check size={14} /> Sustainable results
//         </span>
//       </div>
//     </div>
//   </div>
// </section>




//       {/* ================= VIDEO ================= */}
//       <section className="py-16 sm:py-20 md:py-[100px] bg-gradient-to-br from-[#0B1A2E] via-[#0F1E33] to-[#142A45]">
//   <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[80px] text-center">

//     {/* Heading */}
//     <h2 className="
//   text-center
//   text-[22px] sm:text-[28px] md:text-[36px]
//   font-semibold text-white
//   mb-3 md:mb-4
//   max-w-[90%] sm:max-w-full
//   mx-auto
// ">
//   See How DottFit Transforms Your Training
// </h2>


//    <p className="
//   text-left sm:text-center
//   text-[14px] sm:text-[16px] md:text-[18px]
//   text-white/70
//   max-w-[640px]
//   mx-auto
//   mb-10 sm:mb-12 md:mb-16
//   leading-relaxed
// ">
//   Real coaching. Real workouts. Real transformations.
// </p>


//     {/* Video Container */}
//     <div
//       className="relative max-w-full mx-auto rounded-[20px] sm:rounded-[24px] md:rounded-[28px]
//                  overflow-hidden bg-gradient-to-b from-[#1A2F4D] to-[#0B1626]
//                  shadow-[0_25px_70px_rgba(0,0,0,0.45)]"
//     >
//       {/* Soft overlay */}
//       <div className="absolute inset-0 bg-black/20" />

//       {/* Video */}
//       <div className="relative z-10 p-3 sm:p-4 md:p-6">
//         <div
//           className="aspect-video rounded-[14px] sm:rounded-[16px] md:rounded-[18px]
//                      overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.5)]"
//         >
//           <video
//             src={video1}
//             className="w-full h-full object-cover"
//             controls
//             muted
//             playsInline
//           />
//         </div>
//       </div>
//     </div>

//     {/* Footer Text */}
//     <p className="text-[11px] sm:text-[12px] text-white/80 mt-6 sm:mt-8">
//       Used by professionals • Built for consistency • Designed for modern life
//     </p>

//   </div>
// </section>


//       {/* ================= WHY DOTT FIT ================= */}
//     <section className="py-14 xs:py-16 sm:py-20 lg:py-[100px] bg-gradient-to-br from-[#0B1A2E] via-[#0F1E33] to-[#142A45]">
//   <div className="max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-[40px] md:px-[60px] lg:px-[80px]">

//     {/* Main Heading */}
//     <h2
//       className="
//         text-center
//         text-[24px] xs:text-[26px] sm:text-[36px] md:text-[48px] lg:text-[56px]
//         font-bold text-white
//         mb-8 xs:mb-10 sm:mb-12 lg:mb-16
//         tracking-tight
//       "
//     >
//       Why DottFit
//     </h2>

//     {/* Subheading + Description */}
//     <div className="max-w-5xl mx-auto mb-12 sm:mb-16">

//       {/* Subheading */}
//       <h3
//         className="
//           text-left xs:text-left sm:text-center md:text-center
//           text-[20px] xs:text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px]
//           font-semibold text-gray-100
//           mb-4 sm:mb-6 lg:mb-8
//         "
//       >
//         Wellness for the Modern World
//       </h3>

//       {/* Description */}
//       <p
//   className="
//     text-left
//     sm:text-left
//     md:text-justify
//     lg:text-justify lg:text-center

//     text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px]
//     text-gray-200
//     leading-[1.75]

//     max-w-[680px] lg:max-w-[820px]
//     mx-auto
//   "
// >

//         DottFit is your all-in-one structured fitness ecosystem — combining personalized
//         workouts, mindfulness tools, progress tracking, and expert guidance to help you
//         build discipline, achieve clarity, and sustain long-term health in today’s
//         fast-paced life. Whether you’re just starting your journey or looking to optimize
//         performance, DottFit adapts to your goals and lifestyle so consistency becomes
//         effortless and results become lasting.
//       </p>
//     </div>

//     {/* Images Grid */}
//     <div
//       className="
//         grid
//         grid-cols-1
//         sm:grid-cols-2
//         lg:grid-cols-3
//         xl:grid-cols-5
//         gap-4 xs:gap-5 sm:gap-6 md:gap-8
//       "
//     >
//       {[img1, img2, img3, img4, img5].map((img, index) => (
//         <div key={index} className="flex justify-center">
//           <img
//             src={img}
//             alt={`DottFit App Screen ${index + 1}`}
//             className="
//               w-full
//               max-w-[240px] xs:max-w-[260px] sm:max-w-[300px] lg:max-w-[320px]
//               rounded-xl xs:rounded-2xl sm:rounded-3xl
//               shadow-2xl shadow-black/60
//               border border-gray-700/30
//               transition-transform duration-300 hover:scale-105
//               object-cover
//             "
//           />
//         </div>
//       ))}
//     </div>

//   </div>
// </section>


//       {/* ================= FEATURES ================= */}
//      <section className="py-14 xs:py-16 sm:py-20 lg:py-[100px] bg-gradient-to-br from-[#0B1A2E] via-[#0F1E33] to-[#142A45] relative overflow-hidden">

//   {/* Subtle overlay */}
//   <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,185,64,0.04)_0%,transparent_50%)] pointer-events-none" />

//   <div className="max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-[40px] md:px-[60px] lg:px-[80px] relative z-10">

//     {/* Heading */}
//     <h2
//       className="
//         text-center
//         text-[24px] xs:text-[26px] sm:text-[36px] md:text-[40px] lg:text-[48px]
//         font-bold text-white
//         mb-8 xs:mb-10 sm:mb-14 lg:mb-16
//         tracking-tight
//       "
//     >
//       Features
//     </h2>

//     {/* Grid */}
//     <div
//       className="
//         grid
//         grid-cols-1
//         xs:grid-cols-2
//         lg:grid-cols-4
//         gap-4 xs:gap-5 sm:gap-6 md:gap-8
//       "
//     >
//       {[
//         {
//           title: "Smart Training",
//           icon: Dumbbell,
//           desc: "AI-powered workouts tailored to your fitness level, goals, and recovery status.",
//         },
//         {
//           title: "Real Coaching",
//           icon: UserCheck,
//           desc: "Expert guidance from certified trainers with real-time feedback and form checks.",
//         },
//         {
//           title: "Habit Systems",
//           icon: Repeat,
//           desc: "Build lasting routines with smart reminders, streaks, and progressive habit stacking.",
//         },
//         {
//           title: "Progress Tracking",
//           icon: LineChart,
//           desc: "Detailed analytics, visualizations, and milestone celebrations to keep you motivated.",
//         },
//       ].map(({ title, icon: Icon, desc }) => (
//         <div
//           key={title}
//           className="
//             bg-white/8 backdrop-blur-md
//             border border-white/10
//             rounded-xl xs:rounded-2xl
//             p-4 xs:p-5 sm:p-6 md:p-8
//             transition-all duration-300
//             hover:bg-white/12 hover:border-[#F5B940]/30
//             hover:shadow-xl hover:shadow-[#F5B940]/10
//             flex flex-col items-center sm:text-left md:tect-left
//             min-h-[260px] sm:min-h-[300px]
//           "
//         >
//           {/* Icon */}
//           <div
//             className="
//               w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16
//               bg-[#F5B940]/15
//               rounded-xl xs:rounded-2xl
//               flex items-center justify-center
//               mb-3 xs:mb-4 sm:mb-6
//               transition-colors
//               group-hover:bg-[#F5B940]/25
//             "
//           >
//             <Icon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-[#F5B940]" />
//           </div>

//           {/* Title */}
//           <h4
//             className="
//               text-[14px] xs:text-[15px] sm:text-[18px] md:text-[22px]
//               font-semibold text-white
//               mb-2 sm:mb-4
//             "
//           >
//             {title}
//           </h4>

//           {/* Description */}
//           <p
//             className="
//               text-[12.5px] xs:text-[13px] sm:text-[14px] md:text-[15px]
//               leading-relaxed
//               text-gray-300
//               max-w-[260px]
//             "
//           >
//             {desc}
//           </p>
//         </div>
//       ))}
//     </div>

//   </div>
// </section>



//       {/* ================= FOUNDER ================= */}
//       <section className="py-[100px] bg-gradient-to-br from-[#0B1A2E] via-[#0F1E33] to-[#142A45] relative overflow-hidden">
//   {/* Optional subtle overlay for depth (same as Features) */}
//   <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,185,64,0.04)_0%,transparent_50%)] pointer-events-none" />

//   <div className="max-w-[1440px] mx-auto px-[40px] sm:px-[60px] lg:px-[80px] relative z-10">
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//       {/* Coach Image – left side on desktop */}
//       <div className="flex justify-center lg:justify-start">
//         <img
//           src={coachImg}
//           alt="Louis Lancy Joseph - ACE Certified Trainer"
//           className="
//             w-full max-w-[480px] lg:max-w-[560px] 
//             rounded-2xl 
//             shadow-2xl shadow-black/50 
//             border border-white/10 
//             object-cover 
//             transition-transform hover:scale-[1.02] duration-300
//           "
//         />
//       </div>

//       {/* Text Content – right side on desktop, centered on mobile */}
//       <div className="text-center lg:text-left">
//         <p className="uppercase tracking-widest text-gray-400 text-[14px] sm:text-[15px] mb-4 font-medium">
//           Founder Authority
//         </p>

//         <h3 className="text-[32px] sm:text-[38px] lg:text-[42px] font-bold text-white mb-3">
//           Louis Lancy Joseph
//         </h3>

//         <p className="text-[18px] sm:text-[20px] text-gray-300 mb-6 font-medium">
//           15+ Years | ACE Certified Trainer
//         </p>

//        <div className="
//   space-y-5 text-gray-200 leading-relaxed
//   text-[16px] sm:text-[17px] lg:text-[18px]
//   text-left lg:text-left md:text-left sm:text-left
// ">

//           <p>
//             With over <strong className="text-white">15 years of experience</strong>, Louis is a global expert in body transformation and clinical exercise.
//           </p>

//           <p>
//             From leading wellness programs for giants like <strong className="text-white">Accenture and Dell</strong> to coaching clients worldwide, he specializes in scientific, sustainable, and completely injury-free progress.
//           </p>

//           <p className="text-gray-300 italic">
//             His approach combines cutting-edge science with real-world results — helping thousands achieve lasting health and performance.
//           </p>
//         </div>
           

//             {/* ================= SOCIAL LINKS ================= */}
//         <div className="flex justify-center lg:justify-start mt-8 space-x-5">
//           {/* Facebook */}
//           <a
//             href="https://facebook.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3b5998] hover:scale-110 transition-transform duration-300 shadow-lg"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.337v21.326C0 23.403.597 24 1.337 24h11.494v-9.294H9.69v-3.622h3.14V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.462.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.74 0 1.337-.597 1.337-1.337V1.337C24 .597 23.403 0 22.675 0z"/></svg>
//           </a>

//           {/* Instagram */}
//           <a
//             href="https://instagram.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E4405F] hover:scale-110 transition-transform duration-300 shadow-lg"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.315.974.974 1.252 2.242 1.315 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.34 2.633-1.315 3.608-.974.974-2.242 1.252-3.608 1.315-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.34-3.608-1.315-.974-.974-1.252-2.242-1.315-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.34-2.633 1.315-3.608C4.518 2.503 5.785 2.225 7.151 2.163 8.416 2.105 8.796 2.163 12 2.163m0-2.163C8.736 0 8.332.013 7.052.072 5.773.131 4.64.404 3.678 1.366 2.717 2.327 2.445 3.46 2.386 4.739.013 8.332 0 8.736 0 12s.013 3.668.072 4.948c.059 1.279.33 2.412 1.292 3.373.962.962 2.095 1.233 3.374 1.292C8.332 23.987 8.736 24 12 24s3.668-.013 4.948-.072c1.279-.059 2.412-.33 3.374-1.292.962-.961 1.233-2.094 1.292-3.373.059-1.28.072-1.684.072-4.948s-.013-3.668-.072-4.948c-.059-1.279-.33-2.412-1.292-3.374-.961-.962-2.094-1.233-3.374-1.292C15.668.013 15.264 0 12 0z"/><path d="M12 5.838a6.162 6.162 0 1 0 6.162 6.162A6.169 6.169 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 4-4 4.005 4.005 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z"/></svg>
//           </a>

//           {/* LinkedIn */}
//           <a
//             href="https://linkedin.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A66C2] hover:scale-110 transition-transform duration-300 shadow-lg"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.225 0H1.771C.792 0 0 .771 0 1.725v20.551C0 23.229.792 24 1.771 24h20.451C23.207 24 24 23.229 24 22.276V1.725C24 .771 23.207 0 22.225 0zM7.12 20.452H3.556V9h3.564v11.452zM5.338 7.652c-1.144 0-2.069-.933-2.069-2.078 0-1.145.925-2.078 2.069-2.078 1.145 0 2.07.933 2.07 2.078 0 1.145-.925 2.078-2.07 2.078zM20.452 20.452h-3.556v-5.569c0-1.327-.025-3.033-1.848-3.033-1.848 0-2.13 1.445-2.13 2.938v5.664h-3.556V9h3.415v1.561h.049c.476-.9 1.637-1.848 3.371-1.848 3.602 0 4.268 2.37 4.268 5.455v6.284z"/></svg>
//           </a>
//         </div>


//       </div>

//     </div>
//   </div>
// </section>

//       {/* ================= TESTIMONIALS ================= */}
//  <section className="py-12 xs:py-14 sm:py-20 lg:py-[100px] bg-gradient-to-br from-[#0B1A2E] via-[#0F1E33] to-[#142A45] overflow-hidden">
//   <div className="max-w-[1440px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-[80px]">

//     {/* Heading */}
//     <h2 className="
//       text-center
//       text-[24px] xs:text-[26px] sm:text-[34px] lg:text-[40px]
//       font-bold text-white
//       mb-8 xs:mb-10 sm:mb-14 lg:mb-16
//     ">
//       Testimonials
//     </h2>

//     {/* Auto Scroll Wrapper */}
//     <div className="relative w-full overflow-hidden">

//       {/* Track */}
//       <div className="
//         flex gap-3 xs:gap-4 sm:gap-6 lg:gap-10
//         w-max
//         animate-testimonial-scroll
//         hover:[animation-play-state:paused]
//       ">

//         {loopData.map((item, i) => (
//           <div
//             key={`${item.id}-${i}`}
//             className="
//               min-w-[220px] xs:min-w-[240px] sm:min-w-[300px] lg:min-w-[360px]
//               bg-[#404969]
//               rounded-xl sm:rounded-2xl
//               p-3 xs:p-4 sm:p-5 lg:p-6
//               shadow-lg
//             "
//           >
//             <div className="flex flex-col gap-3 sm:gap-4">

//               {/* Media */}
//               {item.media_type === "image" && (
//                 <img
//                   src={item.media_url}
//                   alt={item.name}
//                   className="
//                     w-full
//                     h-[120px] xs:h-[130px] sm:h-[160px] lg:h-[180px]
//                     object-cover
//                     rounded-lg sm:rounded-xl
//                   "
//                 />
//               )}

//               {item.media_type === "video" && (
//                 <video
//                   src={item.media_url}
//                   controls
//                   className="
//                     w-full
//                     h-[120px] xs:h-[130px] sm:h-[160px] lg:h-[180px]
//                     rounded-lg sm:rounded-xl
//                     object-cover
//                   "
//                 />
//               )}

//               {item.media_type === "audio" && (
//                 <audio src={item.media_url} controls className="w-full" />
//               )}

//               {/* Content */}
//               <div className="text-center">
//                 <h4 className="
//                   text-[14px] xs:text-[15px] sm:text-[16px] lg:text-lg
//                   font-semibold
//                   text-white
//                 ">
//                   {item.name}
//                 </h4>

//                 <p className="
//                   mt-1.5 xs:mt-2
//                   text-[12px] xs:text-[13px] sm:text-[14px] lg:text-[15px]
//                   leading-relaxed
//                   text-white/90
//                 ">
//                   {item.description}
//                 </p>
//               </div>

//             </div>
//           </div>
//         ))}

//       </div>
//     </div>
//   </div>
// </section>





//       {/* ================= FINAL CTA ================= */}
//       <section className="py-16 sm:py-[100px] bg-gradient-to-r from-[#0F1E33] to-[#132B4A] text-white text-center">
//  <h2 className="max-w-3xl mx-auto text-center text-[26px] sm:text-[32px] lg:text-[40px] font-semibold mb-6">

//     Your Fitness Deserves Structure, Not Shortcuts
//   </h2>

//   <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
//     <Link
//       to="/pricing"
//       className="
//         w-full sm:w-auto
//         bg-[#F5B940] text-[#0F1E33]
//         px-8 py-4 rounded-full font-semibold
//         text-center
//         hover:bg-[#e6ac32] transition
//       "
//     >
//       Join DottFit Today
//     </Link>

//     <Link
//       to="/app"
//       className="
//         w-full sm:w-auto
//         border border-white
//         px-8 py-4 rounded-full
//         text-center
//         hover:bg-white hover:text-[#0F1E33] transition
//       "
//     >
//       Download the App
//     </Link>
//   </div>
// </section>


//     </div>
//   );
// }                                                           
