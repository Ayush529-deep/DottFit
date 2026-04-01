// homePageTranslations.ts
export interface HeroSection {
  title: { en: string; hi: string; te: string };
  subtitle: { en: string; hi: string; te: string };
  transformationBtn: { en: string; hi: string; te: string };
  programsBtn: { en: string; hi: string; te: string };
  features: { en: string[]; hi: string[]; te: string[] };
}

export interface VideoSection {
  title: { en: string; hi: string; te: string };
  subtitle: { en: string; hi: string; te: string };
  note: { en: string; hi: string; te: string };
}

export interface WhyDottFitSection {
  title: { en: string; hi: string; te: string };
  subtitle: { en: string; hi: string; te: string };
  description: { en: string; hi: string; te: string };
  imagesAlt: { en: string[]; hi: string[]; te: string[] };
}

export interface FeatureItem {
  title: { en: string; hi: string; te: string };
  desc: { en: string; hi: string; te: string };
}

export interface FeaturesSection {
  title: { en: string; hi: string; te: string };
  list: FeatureItem[];
}

export interface FounderSection {
  authority: { en: string; hi: string; te: string };
  name: string;
  experience: string;
  description: { en: string[]; hi: string[]; te: string[] };
}

export interface TestimonialsSection {
  title: { en: string; hi: string; te: string };
}

export interface FinalCTASection {
  title: { en: string; hi: string; te: string };
  joinBtn: { en: string; hi: string; te: string };
  downloadBtn: { en: string; hi: string; te: string };
}

export interface HomePageTranslations {
  hero: HeroSection;
  videoSection: VideoSection;
  whyDottFit: WhyDottFitSection;
  features: FeaturesSection;
  founder: FounderSection;
  testimonials: TestimonialsSection;
  finalCTA: FinalCTASection;
}

const homePageTranslations: HomePageTranslations = {
  hero: {
    title: {
      en: "Train Smarter. Live Stronger. Anywhere.",
      hi: "स्मार्ट ट्रेनिंग करें। मजबूत रहें। कहीं से भी।",
      te: "స్మార్ట్‌గా ట్రైన్ చేయండి. బలంగా జీవించండి. ఎక్కడినుంచైనా."
    },
    subtitle: {
      en: "Personalized online training guided by certified experts — built for consistency, results, and modern lifestyles.",
      hi: "प्रमाणित प्रशिक्षकों द्वारा मार्गदर्शित व्यक्तिगत ऑनलाइन प्रशिक्षण — स्थिरता, परिणाम और आधुनिक जीवनशैली के लिए बनाया गया।",
      te: "సర్టిఫైడ్ ఎక్సపర్ట్స్ ద్వారా గైడెడ్ వ్యక్తిగత ఆన్‌లైన్ ట్రైనింగ్ — స్థిరత్వం, ఫలితాలు మరియు ఆధునిక జీవిత శైలుల కోసం."
    },
    transformationBtn: {
      en: "12-WEEK TRANSFORMATION PROGRAM",
      hi: "12-सप्ताह ट्रांसफॉर्मेशन प्रोग्राम",
      te: "12-వారం ట్రాన్స్‌ఫర్మేషన్ ప్రోగ్రాం"
    },
    programsBtn: {
      en: "Explore Programs",
      hi: "प्रोग्राम एक्सप्लोर करें",
      te: "ప్రోగ్రామ్స్ ను ఎక్స్‌ప్లోర్ చేయండి"
    },
    features: {
      en: ["Structured plans", "Real coaches", "Sustainable results"],
      hi: ["संरचित योजनाएं", "वास्तविक कोच", "सतत परिणाम"],
      te: ["సంరచించబడిన ప్లాన్స్", "వాస్తవ కోచ్‌లు", "స్థిరమైన ఫలితాలు"]
    }
  },

  videoSection: {
    title: {
      en: "See How DottFit Transforms Your Training",
      hi: "देखें कि DottFit आपकी ट्रेनिंग को कैसे बदलता है",
      te: "DottFit మీ ట్రైనింగ్ ను ఎలా మార్చిందో చూడండి"
    },
    subtitle: {
      en: "Real coaching. Real workouts. Real transformations.",
      hi: "वास्तविक कोचिंग। वास्तविक वर्कआउट। वास्तविक ट्रांसफॉर्मेशन।",
      te: "వాస్తవ కోచింగ్. వాస్తవ వ్యాయామాలు. వాస్తవ మార్పులు."
    },
    note: {
      en: "Used by professionals • Built for consistency • Designed for modern life",
      hi: "प्रोफेशनल्स द्वारा इस्तेमाल • स्थिरता के लिए बनाया गया • आधुनिक जीवन के लिए डिजाइन किया गया",
      te: "ప్రొఫెషనల్స్ ఉపయోగం • స్థిరత్వం కోసం రూపొందించబడింది • ఆధునిక జీవితానికి డిజైన్ చేయబడింది"
    }
  },

  whyDottFit: {
    title: {
      en: "Why DottFit",
      hi: "क्यों DottFit",
      te: "ఎందుకు DottFit"
    },
    subtitle: {
      en: "Wellness for the modern world",
      hi: "आधुनिक दुनिया के लिए वेलनेस",
      te: "ఆధునిక ప్రపంచానికి వెల్నెస్"
    },
    description: {
      en: "DottFit is your all-in-one structured fitness ecosystem — with personalized workouts, mindfulness tools, progress tracking, and expert guidance to build discipline, clarity, and long-term health.",
      hi: "DottFit आपका ऑल-इन-वन संरचित फिटनेस इकोसिस्टम है — व्यक्तिगत वर्कआउट्स, माइंडफुलनेस टूल्स, प्रोग्रेस ट्रैकिंग और विशेषज्ञ मार्गदर्शन के साथ, जिससे आप अनुशासन बना सकें, स्पष्टता हासिल कर सकें और लंबे समय तक स्वास्थ्य बनाए रख सकें।",
      te: "DottFit మీకు ఒక ఆల్-ఇన్-వన్ ఫిట్‌నెస్ ఎకోసిస్టమ్ అందిస్తుంది — వ్యక్తిగత వ్యాయామాలు, మైండ్‌ఫుల్నెస్ టూల్స్, ప్రగతి ట్రాకింగ్ మరియు నిపుణుల మార్గదర్శనం, ఇది నియమితత్వం, స్పష్టత మరియు దీర్ఘకాల ఆరోగ్యాన్ని పెంచుతుంది."
    },
    imagesAlt: {
      en: ["DottFit app screen 1", "DottFit app screen 2", "DottFit app screen 3", "DottFit app screen 4", "DottFit app screen 5"],
      hi: ["DottFit ऐप स्क्रीन 1", "DottFit ऐप स्क्रीन 2", "DottFit ऐप स्क्रीन 3", "DottFit ऐप स्क्रीन 4", "DottFit ऐप स्क्रीन 5"],
      te: ["DottFit యాప్ స్క్రీన్ 1", "DottFit యాప్ స్క్రీన్ 2", "DottFit యాప్ స్క్రీన్ 3", "DottFit యాప్ స్క్రీన్ 4", "DottFit యాప్ స్క్రీన్ 5"]
    }
  },

  features: {
    title: {
      en: "Features",
      hi: "विशेषताएँ",
      te: "ఫీచర్స్"
    },
    list: [
      {
        title: {
          en: "Smart Training",
          hi: "स्मार्ट ट्रेनिंग",
          te: "స్మార్ట్ ట్రైనింగ్"
        },
        desc: {
          en: "AI-powered workouts customized to your fitness level, goals, and recovery state.",
          hi: "AI-सक्षम वर्कआउट्स जो आपकी फिटनेस स्तर, लक्ष्य और रिकवरी स्थिति के अनुसार अनुकूलित होते हैं।",
          te: "AI ఆధారిత వ్యాయామాలు మీ ఫిట్‌నెస్ స్థాయి, లక్ష్యాలు, మరియు రికవరీ స్థితికి అనుగుణంగా ఉంటాయి."
        }
      },
      {
        title: {
          en: "Real Coaching",
          hi: "वास्तविक कोचिंग",
          te: "వాస్తవ కోచింగ్"
        },
        desc: {
          en: "Live guidance and form checks from certified trainers.",
          hi: "प्रमाणित प्रशिक्षकों से वास्तविक समय में मार्गदर्शन और फॉर्म चेक।",
          te: "సర్టిఫైడ్ ట్రైనర్స్ నుండి ప్రత్యక్ష మార్గదర్శనం మరియు ఫారం చెక్."
        }
      },
      {
        title: {
          en: "Habit System",
          hi: "आदत सिस्टम",
          te: "హ్యాబిట్ సిస్టమ్"
        },
        desc: {
          en: "Build sustainable routines with smart reminders, streaks, and progressive habit stacking.",
          hi: "स्मार्ट रिमाइंडर, स्ट्रिक्स और प्रोग्रेसिव हैबिट स्टैकिंग के साथ स्थायी दिनचर्या बनाएं।",
          te: "స్మార్ట్ రిమైండర్లు, స్ట్రీక్స్ మరియు ప్రోగ్రెస్‌ివ్ హ్యాబిట్ స్టాకింగ్ తో స్థిరమైన రొటీన్‌లు నిర్మించండి."
        }
      },
      {
        title: {
          en: "Progress Tracking",
          hi: "प्रगति ट्रैकिंग",
          te: "ప్రగతి ట్రాకింగ్"
        },
        desc: {
          en: "Detailed analytics, visualizations, and milestone celebrations to keep you motivated.",
          hi: "विस्तृत एनालिटिक्स, विज़ुअलाइजेशन और माइलस्टोन सेलिब्रेशन ताकि आप प्रेरित रहें।",
          te: "విస్తృత విశ్లేషణలు, విజువలైజేషన్లు మరియు మైల్‌స్టోన్ సెలబ్రేషన్లు మీ ప్రేరణ కోసం."
        }
      }
    ]
  },

  founder: {
    authority: {
      en: "Founder Authority",
      hi: "संस्थापक प्राधिकरण",
      te: "స్థాపక అధికారం"
    },
    name: "Luis Lancy Joseph",
    experience: "15+ Years | ACE Certified Trainer",
    description: {
      en: [
        "With 15 years of experience, Luis is a global expert in body transformation and clinical exercise.",
        "He has led wellness programs for giants like Accenture and Dell, coaching clients worldwide to scientific, sustainable, and injury-free progress.",
        "His approach combines cutting-edge science with real-world results — helping thousands achieve lasting health and performance."
      ],
      hi: [
        "15 वर्षों के अनुभव के साथ, लुइस बॉडी ट्रांसफॉर्मेशन और क्लिनिकल एक्सरसाइज में वैश्विक विशेषज्ञ हैं।",
        "Accenture और Dell जैसे दिग्गजों के लिए वेलनेस प्रोग्राम का नेतृत्व करने से लेकर दुनियाभर के क्लाइंट्स को कोचिंग देने तक, वह वैज्ञानिक, स्थायी और पूरी तरह से चोट-मुक्त प्रगति में माहिर हैं।",
        "उनका दृष्टिकोण अत्याधुनिक विज्ञान और वास्तविक दुनिया के परिणामों को मिलाता है — हजारों लोगों को स्थायी स्वास्थ्य और प्रदर्शन हासिल करने में मदद करता है।"
      ],
      te: [
        "15 సంవత్సరాల అనుభవంతో, లూయిస్ శరీర మార్పు మరియు క్లినికల్ వ్యాయామంలో గ్లోబల్ నిపుణుడు.",
        "Accenture మరియు Dell వంటి సంస్థల కోసం వెల్నెస్ ప్రోగ్రామ్‌లను నిర్వహించి, ప్రపంచవ్యాప్తంగా క్లయింట్లను శాస్త్రీయ, స్థిరమైన, గాయంలేని ప్రగతికి మార్గనిర్దేశం చేశాడు.",
        "అతని దృష్టికోణం ఆధునిక శాస్త్రాన్ని వాస్తవ ఫలితాలతో కలిపి, వేలాది మంది దీర్ఘకాలిక ఆరోగ్యం మరియు పనితీరును సాధించడానికి సహాయపడుతుంది."
      ]
    }
  },

  testimonials: {
    title: {
      en: "Testimonials",
      hi: "समीक्षाएँ",
      te: "సమీక్షలు"
    }
  },

  finalCTA: {
    title: {
      en: "Your fitness needs structure, not shortcuts",
      hi: "आपकी फिटनेस को संरचना की आवश्यकता है, शॉर्टकट नहीं",
      te: "మీ ఫిట్‌నెస్‌కు నిర్మాణం అవసరం, షార్ట్‌కట్లు కాదు"
    },
    joinBtn: {
      en: "Join DottFit Today",
      hi: "आज ही DottFit जॉइन करें",
      te: "ఈరోజే DottFit లో చేరండి"
    },
    downloadBtn: {
      en: "Download App",
      hi: "ऐप डाउनलोड करें",
      te: "యాప్ డౌన్లోడ్ చేయండి"
    }
  }
};

export default homePageTranslations;
