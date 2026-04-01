import React from 'react';
import { Heart, Users, Calendar, CheckCircle2, Leaf, ArrowRight, ChevronRight, Check } from 'lucide-react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import communityPageTranslations from "@/translations/communityPageTranslations";


// ✅ Define the type here
type JoinOption = {
  icon: string;
  text: string;
};


export default function DottFitWellness() {
   const { i18n } = useTranslation();
  const lang = (i18n.language || "en") as "en" | "hi" | "te";

const joinOptions: JoinOption[] = Array.isArray(communityPageTranslations.join.options?.[lang])
  ? communityPageTranslations.join.options[lang]
  : [];

  const programs = [
  {
    icon: "🏃",
    title: {
      en: "Basic Functional Fitness",
      hi: "बेसिक फंक्शनल फिटनेस",
      te: "ప్రాథమిక ఫంక్షనల్ ఫిట్‌నెస్",
    },
    tagline: {
      en: "Movement for Daily Life",
      hi: "दैनिक जीवन के लिए मूवमेंट",
      te: "రోజువారీ జీవితానికి కదలిక",
    },
    description: {
      en: "Build strength and mobility that serves your everyday activities",
      hi: "ऐसी ताकत और लचीलापन बनाएं जो आपके रोज़मर्रा के काम में मदद करे",
      te: "మీ రోజువారీ కార్యకలాపాలకు సహాయపడే బలం మరియు మొబిలిటీని అభివృద్ధి చేయండి",
    },
    color: "from-orange-500/20 to-amber-500/20",
    features: {
      en: [
        "Home-friendly exercises",
        "No equipment required",
        "Progressive difficulty levels",
        "Age-appropriate modifications",
      ],
      hi: [
        "घर पर किए जाने वाले व्यायाम",
        "कोई उपकरण आवश्यक नहीं",
        "क्रमिक कठिनाई स्तर",
        "आयु के अनुसार संशोधन",
      ],
      te: [
        "ఇంట్లో చేయగల వ్యాయామాలు",
        "పరికరాలు అవసరం లేదు",
        "దశలవారీ కష్టం స్థాయులు",
        "వయస్సుకు అనుగుణ మార్పులు",
      ],
    },
  },

  {
    icon: "🧘",
    title: {
      en: "Mobility & Joint Health",
      hi: "मोबिलिटी और जॉइंट हेल्थ",
      te: "మొబిలిటీ & సంయుక్త ఆరోగ్యం",
    },
    tagline: {
      en: "Foundation of Movement",
      hi: "मूवमेंट की नींव",
      te: "కదలిక యొక్క పునాది",
    },
    description: {
      en: "Care for your body's foundation with targeted mobility work",
      hi: "लक्षित मोबिलिटी अभ्यास से अपने शरीर की नींव का ध्यान रखें",
      te: "లక్ష్యిత మొబిలిటీ వ్యాయామాలతో మీ శరీర పునాదిని సంరక్షించండి",
    },
    color: "from-rose-500/20 to-pink-500/20",
    features: {
      en: [
        "Joint-friendly movements",
        "Flexibility training",
        "Pain prevention focus",
        "Recovery techniques",
      ],
      hi: [
        "जोड़ों के अनुकूल मूवमेंट",
        "लचीलापन प्रशिक्षण",
        "दर्द रोकथाम पर ध्यान",
        "रिकवरी तकनीक",
      ],
      te: [
        "సంధులకు అనుకూల కదలికలు",
        "లవచికత శిక్షణ",
        "నొప్పి నివారణపై దృష్టి",
        "పునరుద్ధరణ పద్ధతులు",
      ],
    },
  },

  {
    icon: "🌬️",
    title: {
      en: "Breathing & Stress Relief",
      hi: "श्वास और तनाव राहत",
      te: "శ్వాస & ఒత్తిడి ఉపశమనం",
    },
    tagline: {
      en: "Inner Peace Practice",
      hi: "आंतरिक शांति अभ्यास",
      te: "అంతర్గత శాంతి సాధన",
    },
    description: {
      en: "Simple breathing techniques for mental clarity and calm",
      hi: "मानसिक स्पष्टता और शांति के लिए सरल श्वास तकनीक",
      te: "మానసిక స్పష్టత మరియు శాంతి కోసం సులభ శ్వాస పద్ధతులు",
    },
    color: "from-blue-500/20 to-cyan-500/20",
    features: {
      en: [
        "Guided breathing sessions",
        "Stress reduction methods",
        "Mindfulness practices",
        "Sleep improvement tips",
      ],
      hi: [
        "निर्देशित श्वास सत्र",
        "तनाव कम करने के तरीके",
        "माइंडफुलनेस अभ्यास",
        "नींद सुधार सुझाव",
      ],
      te: [
        "మార్గదర్శిత శ్వాస సెషన్లు",
        "ఒత్తిడి తగ్గింపు పద్ధతులు",
        "మైండ్‌ఫుల్‌నెస్ సాధనలు",
        "నిద్ర మెరుగుదల సూచనలు",
      ],
    },
  },

  {
    icon: "📅",
    title: {
      en: "Daily Movement Habits",
      hi: "दैनिक मूवमेंट आदतें",
      te: "రోజువారీ కదలిక అలవాట్లు",
    },
    tagline: {
      en: "Build Consistency",
      hi: "निरंतरता बनाएं",
      te: "నిరంతరత నిర్మించండి",
    },
    description: {
      en: "Develop sustainable habits that fit into your real life",
      hi: "ऐसी आदतें विकसित करें जो आपके वास्तविक जीवन में फिट हों",
      te: "మీ నిజమైన జీవితానికి సరిపోయే స్థిరమైన అలవాట్లు అభివృద్ధి చేయండి",
    },
    color: "from-green-500/20 to-emerald-500/20",
    features: {
      en: [
        "Habit tracking support",
        "Realistic goal setting",
        "Flexible scheduling",
        "Progress celebration",
      ],
      hi: [
        "आदत ट्रैकिंग सहायता",
        "व्यावहारिक लक्ष्य निर्धारण",
        "लचीला शेड्यूल",
        "प्रगति का उत्सव",
      ],
      te: [
        "అలవాటు ట్రాకింగ్ సహాయం",
        "వాస్తవిక లక్ష్య నిర్ధారణ",
        "సౌకర్యవంతమైన షెడ్యూల్",
        "పురోగతి వేడుక",
      ],
    },
  },

  {
    icon: "🥗",
    title: {
      en: "Nutrition Awareness",
      hi: "पोषण जागरूकता",
      te: "పోషకాహార అవగాహన",
    },
    tagline: {
      en: "Knowledge for Health",
      hi: "स्वास्थ्य के लिए ज्ञान",
      te: "ఆరోగ్యానికి జ్ఞానం",
    },
    description: {
      en: "Learn foundational principles for healthy eating",
      hi: "स्वस्थ खाने के मूल सिद्धांत सीखें",
      te: "ఆరోగ్యకరమైన ఆహారం కోసం ప్రాథమిక సూత్రాలు నేర్చుకోండి",
    },
    color: "from-yellow-500/20 to-orange-500/20",
    features: {
      en: [
        "Simple meal guidelines",
        "Local food focus",
        "Budget-friendly tips",
        "Practical education",
      ],
      hi: [
        "सरल भोजन दिशानिर्देश",
        "स्थानीय भोजन पर ध्यान",
        "बजट अनुकूल सुझाव",
        "व्यावहारिक शिक्षा",
      ],
      te: [
        "సులభమైన భోజన మార్గదర్శకాలు",
        "స్థానిక ఆహారంపై దృష్టి",
        "బడ్జెట్‌కు అనుకూల సూచనలు",
        "ప్రాయోగిక విద్య",
      ],
    },
  },

  {
    icon: "💝",
    title: {
      en: "Community Support",
      hi: "सामुदायिक सहयोग",
      te: "సమాజ సహాయం",
    },
    tagline: {
      en: "Together We Grow",
      hi: "हम साथ बढ़ते हैं",
      te: "మనం కలిసి ఎదుగుదాం",
    },
    description: {
      en: "Connect with others on the same journey",
      hi: "उसी यात्रा पर चल रहे लोगों से जुड़ें",
      te: "అదే ప్రయాణంలో ఉన్న వారితో కలవండి",
    },
    color: "from-purple-500/20 to-pink-500/20",
    features: {
      en: [
        "Group accountability",
        "Peer encouragement",
        "Shared experiences",
        "Mutual motivation",
      ],
      hi: [
        "समूह जवाबदेही",
        "साथियों का प्रोत्साहन",
        "साझा अनुभव",
        "आपसी प्रेरणा",
      ],
      te: [
        "గ్రూప్ బాధ్యత",
        "సహచర ప్రోత్సాహం",
        "పంచుకున్న అనుభవాలు",
        "పరస్పర ప్రేరణ",
      ],
    },
  },
];




  // const programs = [
  //   {
  //     icon: "🏃",
  //     title: "Basic Functional Fitness",
  //     tagline: "Movement for Daily Life",
  //     description: "Build strength and mobility that serves your everyday activities",
  //     color: "from-orange-500/20 to-amber-500/20",
  //     features: [
  //       "Home-friendly exercises",
  //       "No equipment required",
  //       "Progressive difficulty levels",
  //       "Age-appropriate modifications"
  //     ]
  //   },
  //   {
  //     icon: "🧘",
  //     title: "Mobility & Joint Health",
  //     tagline: "Foundation of Movement",
  //     description: "Care for your body's foundation with targeted mobility work",
  //     color: "from-rose-500/20 to-pink-500/20",
  //     features: [
  //       "Joint-friendly movements",
  //       "Flexibility training",
  //       "Pain prevention focus",
  //       "Recovery techniques"
  //     ]
  //   },
  //   {
  //     icon: "🌬️",
  //     title: "Breathing & Stress Relief",
  //     tagline: "Inner Peace Practice",
  //     description: "Simple breathing techniques for mental clarity and calm",
  //     color: "from-blue-500/20 to-cyan-500/20",
  //     features: [
  //       "Guided breathing sessions",
  //       "Stress reduction methods",
  //       "Mindfulness practices",
  //       "Sleep improvement tips"
  //     ]
  //   },
  //   {
  //     icon: "📅",
  //     title: "Daily Movement Habits",
  //     tagline: "Build Consistency",
  //     description: "Develop sustainable habits that fit into your real life",
  //     color: "from-green-500/20 to-emerald-500/20",
  //     features: [
  //       "Habit tracking support",
  //       "Realistic goal setting",
  //       "Flexible scheduling",
  //       "Progress celebration"
  //     ]
  //   },
  //   {
  //     icon: "🥗",
  //     title: "Nutrition Awareness",
  //     tagline: "Knowledge for Health",
  //     description: "Learn foundational principles for healthy eating",
  //     color: "from-yellow-500/20 to-orange-500/20",
  //     features: [
  //       "Simple meal guidelines",
  //       "Local food focus",
  //       "Budget-friendly tips",
  //       "Practical education"
  //     ]
  //   },
  //   {
  //     icon: "💝",
  //     title: "Community Support",
  //     tagline: "Together We Grow",
  //     description: "Connect with others on the same journey",
  //     color: "from-purple-500/20 to-pink-500/20",
  //     features: [
  //       "Group accountability",
  //       "Peer encouragement",
  //       "Shared experiences",
  //       "Mutual motivation"
  //     ]
  //   }
  // ];


  const features = [
  {
    icon: "👥",
    title: {
      en: "Group Sessions",
      hi: "समूह सत्र",
      te: "గ్రూప్ సెషన్స్",
    },
    description: {
      en: "Interactive sessions with peers to encourage consistent participation",
      hi: "साथियों के साथ इंटरैक्टिव सत्र, लगातार भागीदारी को बढ़ावा देने के लिए",
      te: "పార్శ్వికులతో ఇంటరాక్టివ్ సెషన్లు, స్థిరమైన పాల్గొనడాన్ని ప్రోత్సహించడానికి",
    },
    items: {
      en: [
        "50-100 participants per batch",
        "2-3 sessions per week",
        "30-45 minutes each",
        "Online or community-based",
      ],
      hi: [
        "प्रत्येक बैच में 50-100 प्रतिभागी",
        "सप्ताह में 2-3 सत्र",
        "प्रत्येक सत्र 30-45 मिनट",
        "ऑनलाइन या समुदाय आधारित",
      ],
      te: [
        "ప్రతి బ్యాచ్‌లో 50-100 పాల్గొనేవారు",
        "వారానికి 2-3 సెషన్లు",
        "ప్రతి సెషన్ 30-45 నిమిషాలు",
        "ఆన్లైన్ లేదా కమ్యూనిటీ ఆధారిత",
      ],
    },
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    icon: "📅",
    title: {
      en: "Time-Bound Programs",
      hi: "समय-सीमित कार्यक्रम",
      te: "కాల పరిమితి కార్యక్రమాలు",
    },
    description: {
      en: "Structured programs with clear timelines and milestones",
      hi: "स्पष्ट समयसीमा और मील के पत्थर के साथ संरचित कार्यक्रम",
      te: "స్పష్టమైన కాలపరిమాణాలు మరియు మైలురాళ్లతో నిర్మిత కార్యక్రమాలు",
    },
    items: {
      en: [
        "Structured 12-week cycles",
        "Rotation-based batches",
        "Clear progression path",
        "Sustainable pace",
      ],
      hi: [
        "संरचित 12-सप्ताह चक्र",
        "रोटेशन आधारित बैच",
        "स्पष्ट प्रगति पथ",
        "सतत गति",
      ],
      te: [
        "నిర్మిత 12-వారాల సైకిల్స్",
        "ఘటిక్రమ బేస్డ్ బ్యాచ్‌లు",
        "స్పష్టమైన పురోగతి మార్గం",
        "సుస్థిరమైన వేగం",
      ],
    },
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    icon: "💖",
    title: {
      en: "Dignity-Centered Approach",
      hi: "सम्मान-केंद्रित दृष्टिकोण",
      te: "గౌరవం-కేంద్రిత దృక్పథం",
    },
    description: {
      en: "Ensuring respect, privacy, and a supportive environment",
      hi: "सम्मान, गोपनीयता और सहायक वातावरण सुनिश्चित करना",
      te: "గౌరవం, గోప్యత మరియు మద్దతు వాతావరణం నిర్ధారించడం",
    },
    items: {
      en: [
        "No cameras or recording",
        "No selling or promotion",
        "No marketing tactics",
        "Pure service mission",
      ],
      hi: [
        "कोई कैमरा या रिकॉर्डिंग नहीं",
        "कोई बिक्री या प्रचार नहीं",
        "कोई मार्केटिंग रणनीति नहीं",
        "शुद्ध सेवा मिशन",
      ],
      te: [
        "కేమరాలు లేదా రికార్డింగ్ లేవు",
        "అమ్మకాలు లేదా ప్రమోషన్ లేదు",
        "మార్కెటింగ్ తంత్రాలు లేవు",
        "పూర్తి సేవా మిషన్",
      ],
    },
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: "✅",
    title: {
      en: "Complete Support",
      hi: "पूर्ण समर्थन",
      te: "సంపూర్ణ మద్దతు",
    },
    description: {
      en: "Guided instructions and ongoing assistance for participants",
      hi: "प्रतिभागियों के लिए मार्गदर्शित निर्देश और निरंतर सहायता",
      te: "పాల్గొనేవారికి మార్గదర్శక సూచనలు మరియు కొనసాగించే సహాయం",
    },
    items: {
      en: [
        "Guided group sessions",
        "Simple home routines",
        "Posture & mobility drills",
        "Lifestyle guidance",
      ],
      hi: [
        "मार्गदर्शित समूह सत्र",
        "सरल घरेलू दिनचर्या",
        "मुद्रा और मोबिलिटी अभ्यास",
        "जीवनशैली मार्गदर्शन",
      ],
      te: [
        "మార్గదర్శక గ్రూప్ సెషన్లు",
        "సరళమైన ఇంటి రొటీన్‌లు",
        "పోస్టర్ & మొబిలిటీ వ్యాయామాలు",
        "లైఫ్‌స్టైల్ మార్గదర్శనం",
      ],
    },
    color: "from-yellow-500/20 to-orange-500/20",
  },
];




  // const features = [
  //   {
  //     icon: <Users className="w-8 h-8" />,
  //     title: "Group Sessions",
  //     items: [
  //       "50-100 participants per batch",
  //       "2-3 sessions per week",
  //       "30-45 minutes each",
  //       "Online or community-based"
  //     ]
  //   },
  //   {
  //     icon: <Calendar className="w-8 h-8" />,
  //     title: "Time-Bound Programs",
  //     items: [
  //       "Structured 12-week cycles",
  //       "Rotation-based batches",
  //       "Clear progression path",
  //       "Sustainable pace"
  //     ]
  //   },
  //   {
  //     icon: <Heart className="w-8 h-8" />,
  //     title: "Dignity-Centered Approach",
  //     items: [
  //       "No cameras or recording",
  //       "No selling or promotion",
  //       "No marketing tactics",
  //       "Pure service mission"
  //     ]
  //   },
  //   {
  //     icon: <CheckCircle2 className="w-8 h-8" />,
  //     title: "Complete Support",
  //     items: [
  //       "Guided group sessions",
  //       "Simple home routines",
  //       "Posture & mobility drills",
  //       "Lifestyle guidance"
  //     ]
  //   }
  // ];

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Syne', sans-serif;
        }
        
        .bebas {
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 0.02em;
        }
        
        .syne {
          font-family: 'Syne', sans-serif;
        }
        
        .gold-gradient {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gold-glow {
          text-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
        }
        
        .grain {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255, 165, 0, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 100, 100, 0.05) 0%, transparent 50%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
          background-attachment: fixed;
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(255, 165, 0, 0.2);
        }
        
        .program-card {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
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
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .icon-center-mobile {
          margin: 0 auto;
        }
        
        @media (min-width: 640px) {
          .icon-center-mobile {
            margin: 0;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-rose-500 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-20 text-center">


         
         <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 
  bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 
  backdrop-blur-sm rounded-full border border-purple-400/40 
  shadow-md">
  
  {/* <Leaf className="w-4 h-4 text-green-400" /> */}
  <Leaf className="w-4 h-4 text-[#9AA88E]" />

  
  <span className="text-sm font-semibold text-white tracking-wide 
    bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 text-transparent">
    {communityPageTranslations.hero.badge[lang]}
  </span>
</div>

          


          {/* <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full border border-amber-500/30">
            <Leaf className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-300 tracking-wide">Community Wellness Initiative</span>
          </div> */}
          
          {/* <h1 className="bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none gold-glow">
            <span className="gold-gradient">DOTTFIT</span>
          </h1> */}







{/* sage green */}

<h1 className="bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none" style={{ color: '#9AA88E' }}>
  <span style={{ color: '#9AA88E', textShadow: '0 0 8px rgba(154, 168, 142, 0.5)' }}>
  DOTTFIT
</span>

</h1>



{/*           
          <p className="syne text-2xl sm:text-3xl md:text-4xl text-amber-400 mb-4 font-medium">
            Wellness for the Modern World
          </p> */}


          <p className="syne text-2xl sm:text-3xl md:text-4xl text-[#9AA88E] mb-4 font-medium">
  {communityPageTranslations.hero.title[lang]}
</p>




          
          <p className="text-lg sm:text-xl text-gray-300 mb-12 font-light">
            {communityPageTranslations.hero.subtitle[lang]}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">





<Link
  to="/pricing"
  className="group px-8 py-4 
             bg-[#9AA88E] 
             hover:bg-[#889879]
             text-black 
             rounded-full 
             font-bold 
             text-lg 
             hover:shadow-lg 
             hover:shadow-[#9AA88E]/40
             hover:scale-105 
             transition-all 
             duration-300 
             flex items-center 
             justify-center 
             gap-2"
>
  {communityPageTranslations.hero.apply[lang]}
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
</Link>



            {/* <Link to="/pricing"
            className="group px-8 py-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-500 text-black rounded-full font-bold text-lg hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
              Apply for Next Batch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link> */}
            <Link to="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              {communityPageTranslations.hero.learn[lang]}
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-5 sm:gap-8 text-gray-300 animate-slide-up">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-green-600/20 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
              <span className="font-medium text-sm">{communityPageTranslations.hero.highlights.free[lang]}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-green-600/20 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
              <span className="font-medium text-sm">{communityPageTranslations.hero.highlights.equipment[lang]}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-green-600/20 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
              <span className="font-medium text-sm">{communityPageTranslations.hero.highlights.selling[lang]}</span>
            </div>
          </div>
        </div>
        
        {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-amber-500 rounded-full mt-2 animate-pulse" />
          </div>
        </div> */}
      </section>

      {/* OUR BELIEF */}
      <section className="py-20 sm:py-28 md:py-36 px-5 sm:px-8 relative">
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">

           
           {/* <Leaf className="w-16 h-16 text-amber-500 mx-auto mb-8" /> */}

      <Leaf className="w-16 h-16 text-[#9AA88E] mx-auto mb-8" />


{/* 
<h2 className="bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 relative">
  OUR{' '}
  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
    bg-clip-text text-transparent animate-[shine_3s_linear_infinite]">
    BELIEF
  </span>
</h2> */}


<h2 className="bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 relative">
 {communityPageTranslations.belief.title.part1[lang]}{' '}
  {/* OUR{' '} */}
  <span style={{ color: '#9AA88E', textShadow: '0 0 8px rgba(154, 168, 142, 0.5)' }}>
    {/* BELIEF */}
     {communityPageTranslations.belief.title.part2[lang]}
  </span>
</h2>




          {/* <Leaf className="w-16 h-16 text-amber-500 mx-auto mb-8" />
          
          <h2 className="bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 gold-glow">
            OUR <span className="gold-gradient">BELIEF</span>
          </h2> */}
          
          <div className="space-y-6 text-xl sm:text-2xl md:text-3xl leading-relaxed">

      

             <p className="font-bold text-[#9AA88E]">
  {communityPageTranslations.belief.line1[lang]}
</p>

<p className="font-bold text-[#9AA88E]">
  {communityPageTranslations.belief.line2[lang]}
</p>



            {/* <p className="font-bold text-amber-400">Wellness should not be a privilege.</p>
            <p className="font-bold text-amber-400">It is a basic human right.</p> */}
            <p className="mt-8 text-gray-300 text-lg sm:text-xl font-light">
              {communityPageTranslations.belief.description[lang]}
            </p>
          </div>
        </div>
      </section>




      {/* WHO IT'S FOR */}
      <section className="py-20 sm:py-28 md:py-36 px-5 sm:px-8 relative">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-5xl mx-auto">


        
        
          <h2 className="bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-12 text-center gold-glow">
              {communityPageTranslations.who.title.part1[lang]}{' '}
  {/* WHO IT&apos;S  */}
  <span className="text-[#9AA88E]">
    {communityPageTranslations.who.title.part2[lang]}
    {/* FOR */}
    </span>
</h2>



          {/* <h2 className="bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-12 text-center gold-glow">
            WHO IT&apos;S <span className="gold-gradient">FOR</span>
          </h2> */}
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {(communityPageTranslations.who.list?.[lang] || [])
            // [
            //   'Adults who cannot afford paid fitness coaching',
            //   'Working individuals with financial limitations',
            //   'People restarting health after illness or stress',
            //   'Communities with limited access to wellness guidance',
            // ]
            .map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900/65 to-black/65 backdrop-blur-sm rounded-2xl border border-white/10">

              <CheckCircle2 className="w-6 h-6 text-[#9AA88E] flex-shrink-0 mt-1" />


                {/* <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" /> */}
                <p className="text-lg text-gray-200">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-rose-900/30 to-pink-900/30 border-2 border-rose-500/30 rounded-3xl p-8 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-white mb-4">{communityPageTranslations.who.noCompromise.title[lang]}</p>
      
             <div className="flex flex-wrap justify-center gap-4 text-rose-300 font-medium mb-6">
  {(communityPageTranslations.who.noCompromise.points[lang] || communityPageTranslations.who.noCompromise.points.en).map((point, i) => (
    <span
      key={i}
      className="px-4 py-2 bg-black/40 rounded-full border border-rose-500/30"
    >
      {point}
    </span>
  ))}
</div>


            {/* <div className="flex flex-wrap justify-center gap-4 text-rose-300 font-medium mb-6">
              <span className="px-4 py-2 bg-black/40 rounded-full border border-rose-500/30">❌ No influencers</span>
              <span className="px-4 py-2 bg-black/40 rounded-full border border-rose-500/30">❌ No marketing funnels</span>
              <span className="px-4 py-2 bg-black/40 rounded-full border border-rose-500/30">❌ No selling inside sessions</span>
            </div> */}
            <p className="text-xl text-gray-300 italic">{communityPageTranslations.who.noCompromise.tagline[lang]}</p>
          </div>
        </div>
      </section>

          





      {/* PROGRAMS */}
      <section className="py-20 sm:py-28 md:py-36 px-5 sm:px-8 relative grain">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">

           



            <h2 className="bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 gold-glow">
               {communityPageTranslations.programsSection.title.part1[lang]}{' '}
              {/* WHAT THIS  */}
              <span className="text-[#9AA88E]">
                {communityPageTranslations.programsSection.title.part2[lang]}
                {/* INITIATIVE */}
                </span> 
                {' '}
  {communityPageTranslations.programsSection.title.part3[lang]}
                {/* IS */}
            </h2>
            <p className="syne text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              {communityPageTranslations.programsSection.subtitle[lang]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programs.map((program, i) => (
              <div
                key={i}
                className="program-card bg-gradient-to-br from-gray-900/75 to-black/75 backdrop-blur-sm p-6 sm:p-8 rounded-3xl card-hover border border-white/5"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="card-icon-wrapper mb-4 sm:mb-5 flex justify-center sm:justify-start">
  <div
    className={`inline-flex text-5xl sm:text-6xl p-4 sm:p-5 bg-gradient-to-br ${program.color} rounded-2xl shadow-lg`}
  >
    {program.icon}
  </div>
</div>

                <h3 className="syne text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center sm:text-left">{program.title[lang]}
</h3>
    
                <p className="text-[#9AA88E] font-medium text-sm sm:text-base mb-3 text-center sm:text-left">
  {program.tagline[lang]}

</p>

                {/* <p className="text-amber-400 font-medium text-sm sm:text-base mb-3 text-center sm:text-left">{program.tagline}</p> */}
                <p className="text-gray-300/90 text-sm sm:text-base mb-5 leading-relaxed text-center sm:text-left">{program.description[lang]}</p>
                <ul className="space-y-2.5 text-sm sm:text-base">
                  {(program.features?.[lang] || []).map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-gray-200/90">
                      
                      <Check className="w-4 sm:w-5 h-4 sm:h-5 text-[#9AA88E] flex-shrink-0 mt-0.5" />

                      {/* <Check className="w-4 sm:w-5 h-4 sm:h-5 text-amber-400 flex-shrink-0 mt-0.5" /> */}
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* THE DOTTFIT SYSTEM */}
      <section className="py-20 sm:py-28 md:py-36 px-5 sm:px-8 relative grain">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">

     


            <h2 className="bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 gold-glow">
              {communityPageTranslations.how.title.part1[lang]}{' '}
              {/* HOW IT  */}
              <span className="text-[#9AA88E]">
                {communityPageTranslations.how.title.part2[lang]}
                {/* WORKS */}
                </span>
            </h2>
            <p className="syne text-lg sm:text-xl text-gray-300">
              {communityPageTranslations.how.subtitle[lang]}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {features.map((feature, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900/65 to-black/65 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/10 card-hover">
                <div className="flex justify-center sm:justify-start mb-4 sm:mb-5">

      
                   <div className="inline-flex p-3 sm:p-4 bg-[#9AA88E]/15 rounded-2xl text-[#9AA88E] icon-center-mobile">
  {feature.icon}
</div>


                  {/* <div className="inline-flex p-3 sm:p-4 bg-amber-500/15 rounded-2xl text-amber-400 icon-center-mobile">
                    {feature.icon}
                  </div> */}
                </div>
                <h3 className="syne text-xl sm:text-2xl font-bold mb-3 text-center sm:text-left">
  {feature.title && feature.title[lang] ? feature.title[lang] : feature.title?.en}

</h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-gray-200/90">
                  {(feature.items?.[lang] || feature.items?.en || []).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 sm:gap-3">

                     <div className="w-1.5 h-1.5 bg-[#9AA88E] rounded-full mt-2 flex-shrink-0"></div> 

                      {/* <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div> */}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-amber-900/20 to-yellow-900/20 border border-amber-500/20 rounded-3xl p-8 sm:p-10">




            <p className="syne text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-[#9AA88E]">
             {communityPageTranslations.how.finalLine[lang]}
            </p>
            <p className="text-base sm:text-lg text-gray-300">
              {communityPageTranslations.how.finalSub[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* WHY WE DO THIS */}
      <section className="py-20 sm:py-28 md:py-36 px-5 sm:px-8 relative">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          <Heart className="w-16 h-16 text-rose-500 mx-auto mb-8" />

  
           

          
          <h2 className="bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 gold-glow">
             {communityPageTranslations.why.title.part1[lang]}{' '}
  <span className="text-[#9AA88E]">{communityPageTranslations.why.title.part2[lang]}</span>
            {/* WHY WE <span className="text-[#9AA88E]">DO THIS</span> */}
          </h2>



          <p className="syne text-2xl sm:text-3xl md:text-4xl italic text-[#9AA88E] mb-12 font-semibold">
            {communityPageTranslations.why.subtitle[lang]}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {communityPageTranslations.why.points[lang]
            // [
            //   'Build health-first communities',
            //   'Reduce preventable lifestyle issues',
            //   'Promote discipline, consistency, and self-respect',
            //   'Give back through action',
            // ]
            .map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 sm:p-8 bg-gradient-to-br from-gray-900/75 to-black/75 backdrop-blur-sm rounded-3xl border border-white/10 card-hover">
                <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  ✓
                </div>
                <p className="text-lg sm:text-xl text-gray-200 text-left">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A QUIET PROMISE */}
      <section className="py-20 sm:py-28 md:py-36 px-5 sm:px-8 relative grain">
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">


        <Leaf className="w-16 h-16 text-[#9AA88E] mx-auto mb-8" />

          {/* <Leaf className="w-16 h-16 text-amber-500 mx-auto mb-8" /> */}
          
          <h2 className="bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 italic gold-glow">
            {communityPageTranslations.promise.title.part1[lang]}{' '}
  <span className="text-[#9AA88E]">{communityPageTranslations.promise.title.part2[lang]}</span>
            {/* A QUIET <span className="text-[#9AA88E]">PROMISE</span> */}
          </h2>
          
          <p className="syne text-xl sm:text-2xl md:text-3xl text-gray-200 mb-8 leading-relaxed font-medium">
            {communityPageTranslations.promise.line1[lang]}
            {/* We do this without cameras, without hype, and without expectations. */}
          </p>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-12">
            {communityPageTranslations.promise.line2[lang]}
            {/* Because real service doesn&apos;t need applause. */}
          </p>
          
          <div className="border-t-2 border-amber-500/30 pt-12">


            <h3 className="bebas text-4xl sm:text-5xl md:text-6xl font-bold text-[#9AA88E] mb-4">DOTTFIT</h3>
            <p className="text-lg sm:text-xl text-gray-300">
              {/* Wellness for the Modern World. For Everyone. */}
              {communityPageTranslations.promise.brandLine[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-28 md:py-36 px-5 sm:px-8 relative">
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative max-w-4xl mx-auto text-center">



          <h2 className="bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 gold-glow">
            {communityPageTranslations.join.title.part1[lang]}{' '}
  <span className="text-[#9AA88E]">{communityPageTranslations.join.title.part2[lang]}</span>
            {/* HOW TO <span className="text-[#9AA88E]">JOIN</span> */}
          </h2>



          <p className="syne text-xl sm:text-2xl text-[#9AA88E] mb-8 italic font-medium">
            {communityPageTranslations.join.subtitle[lang]}
            {/* You don&apos;t need money—only commitment */}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-10">
            {joinOptions
            // [
            //   { icon: "✔", text: "Apply for the next free batch" },
            //   { icon: "❤", text: "Refer someone who needs help" },
            //   { icon: "🤝", text: "Volunteer support" }
            // ]
            .map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900/75 to-black/75 p-6 sm:p-8 rounded-3xl border border-white/10 card-hover">
                <div className="text-5xl sm:text-6xl mb-3">{item.icon}</div>
                <p className="text-lg sm:text-xl font-semibold text-gray-200">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="syne text-lg sm:text-xl font-medium mb-6 text-gray-300 bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-500/20 rounded-2xl p-6">
            {/* All selections are made with fairness and integrity */}
            {communityPageTranslations.join.fairness[lang]}
          </p>



<Link
  to="/pricing"
  className="group px-6 sm:px-12 py-4 sm:py-6 
             bg-gradient-to-r from-[#9AA88E] via-[#889879] to-[#7E8C73] 
             text-black 
             rounded-full 
             font-bold 
             text-base sm:text-xl 
             shadow-2xl shadow-[#9AA88E]/40 
             hover:shadow-[#9AA88E]/60 
             hover:scale-105 
             transition-all 
             duration-300 
             inline-flex 
             items-center 
             justify-center 
             gap-2 sm:gap-4 
             w-full sm:w-auto 
             whitespace-nowrap 
             min-w-[220px]"
>
  {/* Start Your Journey Today */}
  {communityPageTranslations.join.cta[lang]}
  <ChevronRight className="w-5 sm:w-7 h-5 sm:h-7 group-hover:translate-x-2 transition-transform duration-300" />
</Link>



          {/* <Link to="/pricing" className="group px-6 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-500 text-black rounded-full font-bold text-base sm:text-xl shadow-2xl shadow-amber-900/40 hover:shadow-amber-500/60 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-4 w-full sm:w-auto whitespace-nowrap min-w-[220px]">
            Start Your Journey Today
            <ChevronRight className="w-5 sm:w-7 h-5 sm:h-7 group-hover:translate-x-2 transition-transform" />
          </Link> */}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black/80 border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg mb-4 text-gray-300">
            {communityPageTranslations.footer.copyright[lang]}
            {/* © 2024 DottFit Community Wellness Initiative */}
            </p>


          <p className="text-[#9AA88E]">
            {communityPageTranslations.footer.tagline[lang]}
            {/* Built with integrity. Offered with dignity. */}
            </p>
        </div>
      </footer>
    </div>
  );
}