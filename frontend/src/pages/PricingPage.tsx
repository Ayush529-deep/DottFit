// import { Check, X, ArrowRight } from "lucide-react";
// import { useState } from "react";
// import BannerImg from "@/assets/cover page.jpg"; 

// function PricingHero() {
//   return (
//     <section 
//       className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden"
//       style={{
//         backgroundImage: `url('${BannerImg}')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}
//     >
//       <div className="absolute inset-0 bg-black/50"></div>
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
//       </div>
      
//       <div className="container relative z-10 mx-auto px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold text-sm mb-6">
//             Investment in Your Health
//           </span>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
//             Simple, Transparent <span className="text-yellow-300">Pricing</span>
//           </h1>
//           <p className="text-xl text-white/90 max-w-3xl mx-auto">
//             Choose a plan that aligns with your fitness goals and budget. Every plan includes expert guidance, personalized tracking, and sustainable results.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// const plans = [
//   {
//     name: "Basic",
//     price: "₹4,000",
//     period: "12 weeks",
//     description: "Ideal for Beginners",
//     features: {
//       "Dott fit App Access": true,
//       "Custom Workouts": true,
//       "Habit Tracking": true,
//       "Nutrition Coaching": false,
//       "Weekly Audio Feedback": false,
//       "1-on-1 Live Calls": false,
//     },
//     details: [
//       "App based workout plan (home or gym)",
//       "Beginner-friendly routines",
//       "Weekly progress check",
//       "Basic nutrition guidance",
//       "WhatsApp support (limited)",
//       "Suitable for weight loss & general fitness",
//     ],
//     bestFor: "People starting their fitness journey or maintaining consistency",
//     cta: "Get Started",
//     popular: false,
//   },
//   {
//     name: "Advance",
//     price: "₹6,000",
//     period: "12 weeks",
//     description: "Most popular for committed beginners",
//     features: {
//       "Dott fit App Access": true,
//       "Custom Workouts": true,
//       "Habit Tracking": true,
//       "Nutrition Coaching": true,
//       "Weekly Audio Feedback": true,
//       "1-on-1 Live Calls": false,
//     },
//     details: [
//       "Fully customized workout plan",
//       "Home + gym workout options",
//       "Fat loss or muscle gain focused training",
//       "Detailed nutrition guidance (Indian diet)",
//       "Weekly progress review & plan updates",
//       "Injury-friendly modifications",
//       "Habit & lifestyle coaching",
//       "Priority WhatsApp support",
//     ],
//     bestFor: "Fat loss, muscle building, body recomposition",
//     cta: "Join Now",
//     popular: true,
//   },
//   {
//     name: "Elite",
//     price: "₹15,000",
//     period: "12 weeks",
//     description: "Complete transformation with 1-on-1 coaching",
//     features: {
//       "Dott fit App Access": true,
//       "Custom Workouts": true,
//       "Habit Tracking": true,
//       "Nutrition Coaching": true,
//       "Weekly Audio Feedback": true,
//       "1-on-1 Live Calls": true,
//     },
//     details: [
//       "1-on-1 personalized coaching",
//       "Advanced workout programming",
//       "Transformation-focused nutrition planning",
//       "Form correction & technique guidance",
//       "Mobility, flexibility & recovery routines",
//       "Weekly check-in calls",
//       "AI-powered progress tracking",
//       "Unlimited messaging in app",
//       "Lifestyle & wellness optimization",
//     ],
//     bestFor: "Serious transformation, athletes, long-term results",
//     cta: "Get Elite",
//     popular: false,
//   },
// ];

// const comparisonFeatures = [
//   "Dott fit App Access",
//   "Custom Workouts",
//   "Habit Tracking",
//   "Nutrition Coaching",
//   "Weekly Audio Feedback",
//   "1-on-1 Live Calls",
// ];

// export default function PricingPage() {
//   const [selectedPlan, setSelectedPlan] = useState(null);

//   const handleGetStarted = (planName) => {
//     setSelectedPlan(planName);
//     alert(`Getting started with ${planName} plan!`);
//   };

//   return (
//     <>
//       {/* Hero Banner Section */}
//       <PricingHero />
      
//       {/* Pricing Cards Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto mb-12">
//             <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm mb-4">
//               Simple Pricing
//             </span>
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
//               Choose Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Transformation Plan</span>
//             </h1>
//             <p className="text-lg text-gray-600">
//               Invest in yourself with a plan that fits your goals and budget
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {plans.map((plan, i) => (
//               <div 
//                 key={i}
//                 className={`relative rounded-2xl p-8 transition-all ${
//                   plan.popular 
//                     ? "border-2 border-blue-600 shadow-xl scale-105 bg-white" 
//                     : "border border-gray-200 shadow-md bg-white hover:shadow-lg"
//                 }`}
//               >
//                 {plan.popular && (
//                   <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//                     <span className="px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-bold">
//                       Most Popular
//                     </span>
//                   </div>
//                 )}
                
//                 <div className="text-center mb-6">
//                   <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
//                   <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
//                   <div className="flex items-baseline justify-center gap-1">
//                     <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{plan.price}</span>
//                     <span className="text-gray-600">/{plan.period}</span>
//                   </div>
//                 </div>
                
//                 <div className="mb-8">
//                   <ul className="space-y-3 mb-6">
//                     {plan.details.map((detail, j) => (
//                       <li key={j} className="flex items-start gap-3">
//                         <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                         <span className="text-sm text-gray-700">{detail}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="pt-6 border-t border-gray-200">
//                     <p className="text-sm font-semibold text-gray-700 mb-2">Best for:</p>
//                     <p className="text-sm text-gray-600">{plan.bestFor}</p>
//                   </div>
//                 </div>
                
//                 <button 
//                   onClick={() => handleGetStarted(plan.name)}
//                   className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
//                     plan.popular 
//                       ? "bg-blue-600 hover:bg-blue-700 text-white" 
//                       : "border border-gray-300 hover:bg-gray-50 text-gray-700"
//                   }`}
//                 >
//                   {plan.cta}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Comparison Table Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Compare <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">All Features</span>
//             </h2>
//           </div>
          
//           <div className="max-w-5xl mx-auto overflow-x-auto">
//             <table className="w-full bg-white rounded-2xl shadow-md overflow-hidden">
//               <thead>
//                 <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//                   <th className="text-left p-4 font-semibold">Feature</th>
//                   {plans.map((plan, i) => (
//                     <th key={i} className="p-4 text-center font-semibold">
//                       {plan.name}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="border-b border-gray-200 bg-gray-50">
//                   <td className="p-4 font-semibold text-gray-800">Price</td>
//                   {plans.map((plan, i) => (
//                     <td key={i} className="p-4 text-center font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                       {plan.price}
//                     </td>
//                   ))}
//                 </tr>
//                 {comparisonFeatures.map((feature, i) => (
//                   <tr key={i} className="border-b border-gray-200 hover:bg-gray-50 transition">
//                     <td className="p-4 text-gray-800 font-medium">{feature}</td>
//                     {plans.map((plan, j) => {
//                       const value = plan.features[feature as keyof typeof plan.features];
//                       return (
//                         <td key={j} className="p-4 text-center">
//                           {value === true ? (
//                             <Check className="w-5 h-5 text-green-500 mx-auto" />
//                           ) : (
//                             <X className="w-5 h-5 text-gray-300 mx-auto" />
//                           )}
//                         </td>
//                       );
//                     })}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             Ready to Transform?
//           </h2>
//           <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//             Join thousands of Indians who have already started their fitness journey
//           </p>
//           <button 
//             onClick={() => alert("Redirecting to contact page...")}
//             className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
//           >
//             Start Today
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </section>
//     </>
//   );
// }


































































































































import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Check, X, Zap, Award, Crown, ArrowRight, Phone } from 'lucide-react';
import pricingPageTranslations from "@/translations/pricingPageTranslations";
import { useTranslation } from "react-i18next";



       import LeafImg from "../assets/leaf-img.png";





type PlanFeature = {
  name: string;
  value?: string;
  included?: boolean;
};

type Plan = {
  name: string;
  tagline: string;
  icon: any;
  color: string;
  bgAccent: string;
  borderColor: string;
  buttonColor: string;
  basePrice: number;
  popular?: boolean;
  bestFor: string;
  description: string;
  features: PlanFeature[];
  highlights: string[];
};






const DottFitPricing = () => {


  const { i18n } = useTranslation();
const lang = i18n.language as "en" | "hi" | "te";



   const [billingCycle, setBillingCycle] = useState<'monthly' | '3months' | '6months'>('monthly');

  // Price calculation based on billing cycle
  const getPrice = (basePrice: number) => {
    switch (billingCycle) {
      case '3months':
        return basePrice * 3;
      case '6months':
        return basePrice * 6;
      default:
        return basePrice;
    }
  };

  // Discount label
  const getDiscount = () => {
    switch (billingCycle) {
      case '3months':
        return '10% OFF';
      case '6months':
        return '20% OFF';
      default:
        return null;
    }
  };




  const plans: Plan[] = [
  {
    name: "Basic",
    tagline: "The Foundation",
    icon: Zap,
    color: "from-emerald-400 to-teal-500",
    bgAccent: "bg-emerald-50",
    borderColor: "border-emerald-200",
    buttonColor: "bg-emerald-500 hover:bg-emerald-600",
    basePrice: 699,
    bestFor: pricingPageTranslations.plansFull.Basic.bestFor[lang],
    description: pricingPageTranslations.plansFull.Basic.description[lang],
    features: [
      { name: "Training", value: pricingPageTranslations.plansFull.Basic.features.training[lang] },
      { name: "Nutrition", value: pricingPageTranslations.plansFull.Basic.features.nutrition[lang] },
      { name: "Check-in", value: pricingPageTranslations.plansFull.Basic.features.checkin[lang] },
      { name: "App", value: pricingPageTranslations.plansFull.Basic.features.app[lang] },
      { name: "Chat", value: pricingPageTranslations.plansFull.Basic.features.chat[lang] },
      { name: "Goals", value: pricingPageTranslations.plansFull.Basic.features.goals[lang] },
    ],
    highlights: pricingPageTranslations.plansFull.Basic.highlights[lang],
  },
  {
    name: "Advance",
    tagline: "The Transformation",
    icon: Award,
    color: "from-blue-500 to-indigo-600",
    bgAccent: "bg-blue-50",
    borderColor: "border-blue-300",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    basePrice: 5999,
    popular: true,
    bestFor: pricingPageTranslations.plansFull.Advance.bestFor[lang],
    description: pricingPageTranslations.plansFull.Advance.description[lang],
    features: [
      { name: "Training", value: pricingPageTranslations.plansFull.Advance.features.training[lang] },
      { name: "Nutrition", value: pricingPageTranslations.plansFull.Advance.features.nutrition[lang] },
      { name: "Check-in", value: pricingPageTranslations.plansFull.Advance.features.checkin[lang] },
      { name: "App", value: pricingPageTranslations.plansFull.Advance.features.app[lang] },
      { name: "Chat", value: pricingPageTranslations.plansFull.Advance.features.chat[lang] },
      { name: "Goals", value: pricingPageTranslations.plansFull.Advance.features.goals[lang] },
    ],
    highlights: pricingPageTranslations.plansFull.Advance.highlights[lang],
  },
  {
    name: "Elite",
    tagline: "Medical & Longevity",
    icon: Crown,
    color: "from-purple-500 to-pink-600",
    bgAccent: "bg-purple-50",
    borderColor: "border-purple-300",
    buttonColor:
      "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
    basePrice: 9999,
    bestFor: pricingPageTranslations.plansFull.Elite.bestFor[lang],
    description: pricingPageTranslations.plansFull.Elite.description[lang],
    features: [
      { name: "Training", value: pricingPageTranslations.plansFull.Elite.features.training[lang] },
      { name: "Nutrition", value: pricingPageTranslations.plansFull.Elite.features.nutrition[lang] },
      { name: "Check-in", value: pricingPageTranslations.plansFull.Elite.features.checkin[lang] },
      { name: "App", value: pricingPageTranslations.plansFull.Elite.features.app[lang] },
      { name: "Chat", value: pricingPageTranslations.plansFull.Elite.features.chat[lang] },
      { name: "Goals", value: pricingPageTranslations.plansFull.Elite.features.goals[lang] },
    ],
    highlights: pricingPageTranslations.plansFull.Elite.highlights[lang],
  },
];




  // const plans: Plan[] = [
  //   {
  //     name: 'Basic',
  //     tagline: 'The Foundation',
  //     icon: Zap,
  //     color: 'from-emerald-400 to-teal-500',
  //     bgAccent: 'bg-emerald-50',
  //     borderColor: 'border-emerald-200',
  //     buttonColor: 'bg-emerald-500 hover:bg-emerald-600',
  //     basePrice: 699,
  //     bestFor: 'Beginners & Busy Professionals',
  //     description: 'Smart app-based training and habit tracking to keep you on the right path.',
  //     features: [
  //       { name: 'Training Style', value: 'General' },
  //       { name: 'Custom Nutrition', value: 'General guidance' },
  //       { name: 'Check-in Frequency', value: 'Bi-monthly' },
  //       { name: 'Habit Tracking', included: true },
  //       { name: 'App Access', value: 'Basic' },
  //       { name: 'Chat Support', value: 'Limited' },
  //       { name: 'Lifestyle Coaching', included: false },
  //       { name: 'Goal Adjustments', value: 'Monthly' },
  //     ],
  //     highlights: [
  //       'Personalized workout plan (home or gym)',
  //       'Beginner-friendly routines',
  //       'Weekly progress check',
  //       'App-based workout tracking',
  //       'WhatsApp support (limited)',
  //     ],
  //   },
  //   {
  //     name: 'Advance',
  //     tagline: 'The Transformation',
  //     icon: Award,
  //     color: 'from-blue-500 to-indigo-600',
  //     bgAccent: 'bg-blue-50',
  //     borderColor: 'border-blue-300',
  //     buttonColor: 'bg-blue-600 hover:bg-blue-700',
  //     basePrice: 5999,
  //     popular: true,
  //     bestFor: 'Fat loss, muscle building, body recomposition',
  //     description: 'Fully integrated nutrition and fitness strategy. Double the check-ins and custom food plan.',
  //     features: [
  //       { name: 'Training Style', value: 'Personalized' },
  //       { name: 'Custom Nutrition', included: true },
  //       { name: 'Check-in Frequency', value: 'Weekly' },
  //       { name: 'Habit Tracking', included: true },
  //       { name: 'App Access', value: 'Full' },
  //       { name: 'Chat Support', value: 'Standard' },
  //       { name: 'Lifestyle Coaching', included: false },
  //       { name: 'Goal Adjustments', value: 'Weekly' },
  //     ],
  //     highlights: [
  //       'Fully customized workout plan',
  //       'Home + gym workout options',
  //       'Fat loss or muscle gain focused',
  //       'Detailed nutrition guidance (Indian diet)',
  //       'Weekly progress review & plan updates',
  //       'Injury-friendly modifications',
  //       'Habit & lifestyle coaching',
  //       'Priority WhatsApp support',
  //     ],
  //   },
  //   {
  //     name: 'Elite',
  //     tagline: 'Medical, Corrective & Longevity',
  //     icon: Crown,
  //     color: 'from-purple-500 to-pink-600',
  //     bgAccent: 'bg-purple-50',
  //     borderColor: 'border-purple-300',
  //     buttonColor: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
  //     basePrice: 9999,
  //     bestFor: 'Serious transformation, athletes, long-term results',
  //     description: 'Full-access coaching with post-injury care. Doctor-aware exercise planning, diet, and lifestyle.',
  //     features: [
  //       { name: 'Training Style', value: 'Personalized' },
  //       { name: 'Custom Nutrition', included: true },
  //       { name: 'Check-in Frequency', value: 'Bi-weekly' },
  //       { name: 'Habit Tracking', included: true },
  //       { name: 'App Access', value: 'Full + Priority' },
  //       { name: 'Chat Support', value: 'Unlimited' },
  //       { name: 'Lifestyle Coaching', included: true },
  //       { name: 'Goal Adjustments', value: 'Real-time' },
  //     ],
  //     highlights: [
  //       '1-on-1 personalized coaching',
  //       'Advanced workout programming',
  //       'Transformation-focused nutrition',
  //       'Form correction & technique guidance',
  //       'Mobility, flexibility & recovery routines',
  //       'Weekly check-in calls',
  //       'AI-powered progress tracking',
  //       'Unlimited WhatsApp support',
  //       'Post-injury rehabilitation (knee, back, shoulder)',
  //       'Doctor-aware exercise planning',
  //     ],
  //   },
  // ];





const benefits = pricingPageTranslations.whyChoose.benefits[lang];


  // const benefits = [
  //   'Personalized coaching, not generic plans',
  //   'Wellness + Technology approach',
  //   'Indian lifestyle & food friendly',
  //   'Injury-aware training',
  //   'Flexible home & gym workouts',
  //   'Sustainable, real results',
  // ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-32 sm:top-40 right-4 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-16 sm:bottom-20 left-1/4 sm:left-1/3 w-48 sm:w-72 h-48 sm:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent tracking-tight">
           {pricingPageTranslations.hero.title[lang]}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-light max-w-3xl mx-auto">
            {pricingPageTranslations.hero.subtitle[lang]}
            {/* Fitness at Your Fingertips | Wellness Powered by Technology */}
          </p>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto px-2 sm:px-0">
            {pricingPageTranslations.hero.description[lang]}
            {/* Choose a plan that fits your lifestyle, goals, and commitment level. */}
          </p>
        </div>










{/* Billing calculation */}



 <div>
      {/* Billing Cycle Selector */}
      <div className="flex justify-center mb-10 sm:mb-12">
        <div className="inline-flex rounded-xl bg-white shadow-lg p-1 border border-slate-200">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-2.5 rounded-lg font-semibold text-xs sm:text-base transition-all duration-300 whitespace-nowrap ${
              billingCycle === 'monthly'
                ? 'bg-slate-900 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {pricingPageTranslations.billing.monthly[lang]}
          </button>
          <button
            onClick={() => setBillingCycle('3months')}
            className={`px-4 py-2.5 rounded-lg font-semibold text-xs sm:text-base transition-all duration-300 relative whitespace-nowrap ${
              billingCycle === '3months'
                ? 'bg-slate-900 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {pricingPageTranslations.billing.threeMonths[lang]}

            <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
              10%
            </span>
          </button>
          <button
            onClick={() => setBillingCycle('6months')}
            className={`px-4 py-2.5 rounded-lg font-semibold text-xs sm:text-base transition-all duration-300 relative whitespace-nowrap ${
              billingCycle === '6months'
                ? 'bg-slate-900 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {pricingPageTranslations.billing.sixMonths[lang]}
            <span className="absolute -top-1.5 -right-1.5 bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
              20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          const price = getPrice(plan.basePrice);
          const discount = getDiscount();

          return (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular ? 'ring-4 ring-blue-500 ring-opacity-50 scale-[1.02] sm:scale-100' : ''
              }`}
              style={{
                animationDelay: `${index * 120}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
              }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-bl-2xl font-bold text-xs sm:text-sm shadow-lg">
                  ⭐ {pricingPageTranslations.billing.mostPopular[lang]}

                </div>
              )}

              <div className={`${plan.bgAccent} p-6 sm:p-8 border-b ${plan.borderColor}`}>
                <div
                  className={`inline-flex p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br ${plan.color} mb-3 sm:mb-4 shadow-lg`}
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1 sm:mb-2">{plan.name}</h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 mb-3 sm:mb-4">{plan.tagline}</p>

                <div className="flex items-baseline gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900">₹{price.toLocaleString('en-IN')}</span>
                  <span className="text-base sm:text-lg text-slate-500 font-medium">
                    {billingCycle === 'monthly' ? '/mo' : billingCycle === '3months' ? '/3 mo' : '/6 mo'}
                  </span>
                </div>

                {discount && billingCycle !== 'monthly' && (
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <span className="text-xs sm:text-sm line-through text-slate-400">
                      ₹{plan.basePrice.toLocaleString('en-IN')}
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-bold">{discount}</span>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-slate-600 mt-2 sm:mt-4 italic">{pricingPageTranslations.billing.bestFor[lang]}:
: {plan.bestFor}</p>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-sm sm:text-base text-slate-700 mb-5 sm:mb-6 leading-relaxed">{plan.description}</p>

                <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 sm:gap-3 text-sm">
                      <div className="mt-0.5">
                        {feature.included === true ? (
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                        ) : feature.included === false ? (
                          <X className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 flex-shrink-0" />
                        ) : (
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-400"></div>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-slate-700">{feature.name}:</span>{' '}
                        <span className="text-slate-600">
                          {feature.included === true ? pricingPageTranslations.billing.included[lang]

                          // 'Included'
                           : feature.included === false ? '—' : feature.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full ${plan.buttonColor} text-white font-bold py-3.5 sm:py-4 px-5 sm:px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base group`}
                >
                  {pricingPageTranslations.billing.getStarted[lang]}

                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <details className="mt-5 sm:mt-6 group">
                  <summary className="text-xs sm:text-sm font-semibold text-slate-700 cursor-pointer hover:text-slate-900 flex items-center gap-2">
                    <span>
                      {pricingPageTranslations.billing.viewAll[lang]}

                      {/* View all features */}

                    </span>
                    <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600">
                    {plan.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </div>
          );
        })}
      </div>
    </div>


        {/* Special Program Callout */}






      <section className="relative mx-6 rounded-xl overflow-hidden bg-[#0D1C30]">

  {/* Leaf Image (Little Left Adjusted) */}
  <img
    src={LeafImg}
    alt="Leaf"
    className="absolute -right-28 top-0 h-full w-auto object-cover 
               brightness-[1.4] contrast-[1.1] saturate-[1.2] 
               scale-110 transition-all duration-700"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0D1C30] via-[#0D1C30]/80 to-transparent"></div>

  {/* Content (Height Reduced) */}
  <div className="relative max-w-7xl mx-auto px-8 py-10">

    <div className="max-w-lg">

      {/* Small Icon */}
      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-4 
                      animate-fadeIn">
        <span className="text-xs text-white">⚡</span>
      </div>

      {/* Heading Animation */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#FFFFFF] leading-tight mb-3 
                     animate-slideUp">
                      {pricingPageTranslations.specialProgram.title[lang]}

        {/* 12 Weeks <br />
        Transformation Program */}
      </h2>

      {/* Paragraph Animation */}
      <p className="text-[#CBBBA4] text-sm leading-relaxed mb-5 
                    animate-fadeIn delay-200">
                      {pricingPageTranslations.specialProgram.description[lang]}

        {/* Ready for a complete transformation? Our intensive 12-week
        program combines the best of all our plans for maximum results. */}
      </p>

      {/* Animated Price Button */}
      <button className="px-6 py-3 bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] 
                         text-black font-semibold rounded-lg shadow-md 
                         transition-all duration-300 
                         hover:scale-105 hover:shadow-xl 
                         hover:brightness-110">
        ₹6,000
      </button>

    </div>

  </div>

</section>




        {/* Why Choose DottFit */}
        <div className="bg-white rounded-2xl sm:rounded-3xl mt-14 shadow-xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center mb-6 sm:mb-8">
            {pricingPageTranslations.whyChoose.title[lang]}

            {/* Why Choose DottFit? */}
            </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-slate-50 transition-colors text-sm sm:text-base"
              >
                <div className="flex-shrink-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>
                <span className="text-slate-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[#0B1A2E] via-[#0F1E33] to-[#142A45] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-6 sm:p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">
              {pricingPageTranslations.consultation.title[lang]}

              {/* Not Sure Which Plan Is Right for You? */}
              </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-5 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0">
              {pricingPageTranslations.consultation.subtitle[lang]}

              {/* Book a FREE Fitness Consultation. Our certified coach will guide you to the best plan for your goals. */}
            </p>
            <Link
              to="/contact"
              className="
                inline-flex items-center justify-center gap-2 sm:gap-3
                bg-white text-slate-900 font-bold
                py-3.5 sm:py-4 px-5 sm:px-8
                rounded-xl
                hover:bg-slate-100
                transition-all duration-300
                transform hover:scale-105
                shadow-lg
                text-sm sm:text-base
                whitespace-nowrap
                min-w-[220px] sm:min-w-[260px]
              "
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              {pricingPageTranslations.consultation.button[lang]}

              {/* Book Free Consultation */}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>

        {/* Optional Add-ons */}
        <details className="mt-10 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden group">
          <summary className="p-6 sm:p-8 cursor-pointer hover:bg-slate-50 transition-colors text-xl sm:text-2xl font-black text-slate-900 inline-flex items-center gap-2">
            📌 {pricingPageTranslations.addons.title[lang]}

            {/* Optional Add-ons */}
            <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-6 sm:p-8 pt-0 grid md:grid-cols-2 gap-4">
            {pricingPageTranslations.addons.items.map((addon, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm sm:text-base">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <span className="text-slate-700 font-medium">{addon[lang]}</span>
              </div>
            ))}
          </div>
        </details>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default DottFitPricing;