// aboutPageTranslations.ts

export interface AboutHeroSection {
  title: {
    en: string;
    hi: string;
    te: string;
  };
  subtitle: {
    en: string;
    hi: string;
    te: string;
  };
}

export interface AboutDottFitSection {
  title: {
    en: string;
    hi: string;
    te: string;
  };
  paragraph1: {
    en: string;
    hi: string;
    te: string;
  };
  paragraph2: {
    en: string;
    hi: string;
    te: string;
  };
}

export interface CoachSection {
  name: {
    en: string;
    hi: string;
    te: string;
  };
  designation: {
    en: string;
    hi: string;
    te: string;
  };
  paragraph1: {
    en: string;
    hi: string;
    te: string;
  };
  quote: {
    en: string;
    hi: string;
    te: string;
  };
  specializationsTitle: {
    en: string;
    hi: string;
    te: string;
  };
  specializations: {
    en: string[];
    hi: string[];
    te: string[];
  };
  medicalTitle: {
    en: string;
    hi: string;
    te: string;
  };
  medical: {
    en: string[];
    hi: string[];
    te: string[];
  };
  stats: {
    experience: {
      title: { en: string; hi: string; te: string };
      subtitle: { en: string; hi: string; te: string };
    };
    coaching: {
      title: { en: string; hi: string; te: string };
      subtitle: { en: string; hi: string; te: string };
    };
    approach: {
      title: { en: string; hi: string; te: string };
      subtitle: { en: string; hi: string; te: string };
    };
  };
  badge: {
    title: { en: string; hi: string; te: string };
    subtitle: { en: string; hi: string; te: string };
  };
}

export interface AboutPageTranslations {
  hero: AboutHeroSection;
  about: AboutDottFitSection;
  coach: CoachSection;
}

const aboutPageTranslations: AboutPageTranslations = {
  hero: {
    title: {
      en: "About DottFit",
      hi: "DottFit के बारे में",
      te: "DottFit గురించి"
    },
    subtitle: {
      en: "Born from a vision of holistic growth and modern innovation, DottFit is more than just a fitness app—it is a lifestyle architecture for the high-performer.",
      hi: "समग्र विकास और आधुनिक नवाचार की दृष्टि से जन्मा DottFit केवल एक फिटनेस ऐप नहीं है—यह उच्च प्रदर्शन करने वालों के लिए एक लाइफस्टाइल आर्किटेक्चर है।",
      te: "సంపూర్ణ అభివృద్ధి మరియు ఆధునిక నవీనత దృష్టితో రూపొందిన DottFit కేవలం ఫిట్‌నెస్ యాప్ కాదు — ఇది ఉన్నత ప్రదర్శనకారుల కోసం జీవనశైలి నిర్మాణం."
    }
  },

  about: {
    title: {
      en: "About DottFit",
      hi: "DottFit के बारे में",
      te: "DottFit గురించి"
    },
    paragraph1: {
      en: "We believe that true wellness in the modern world requires a perfect harmony between physical strength and digital intelligence.",
      hi: "हम मानते हैं कि आधुनिक दुनिया में सच्चा स्वास्थ्य शारीरिक शक्ति और डिजिटल बुद्धिमत्ता के बीच संतुलन से आता है।",
      te: "ఆధునిక ప్రపంచంలో నిజమైన ఆరోగ్యం శారీరక బలం మరియు డిజిటల్ మేధస్సు మధ్య సమతుల్యతను అవసరం చేస్తుంది."
    },
    paragraph2: {
      en: "Guided by decades of insight and a passion for human potential, we connect the dots between where you are and where you are destined to be.",
      hi: "दशकों के अनुभव और मानव क्षमता के प्रति जुनून के साथ, हम आपके वर्तमान और आपके लक्ष्य के बीच की दूरी को जोड़ते हैं।",
      te: "దశాబ్దాల అనుభవం మరియు మానవ సామర్థ్యంపై ఆసక్తితో, మీరు ఉన్న స్థితి నుండి మీరు చేరుకోవలసిన గమ్యానికి మేము అనుసంధానిస్తాము."
    }
  },

  coach: {
    name: {
      en: "Louis Lancy Joseph",
      hi: "लुइस लैंसी जोसेफ",
      te: "లూయిస్ లాన్సీ జోసెఫ్"
    },
    designation: {
      en: "ACE Certified International Trainer & Online Coach",
      hi: "ACE प्रमाणित अंतरराष्ट्रीय प्रशिक्षक और ऑनलाइन कोच",
      te: "ACE సర్టిఫైడ్ అంతర్జాతీయ ట్రైనర్ & ఆన్‌లైన్ కోచ్"
    },
    paragraph1: {
      en: "With over 15 years of experience, Louis is a global expert in body transformation and clinical exercise.",
      hi: "15 से अधिक वर्षों के अनुभव के साथ, लुइस बॉडी ट्रांसफॉर्मेशन और क्लिनिकल एक्सरसाइज में वैश्विक विशेषज्ञ हैं।",
      te: "15 సంవత్సరాలకుపైగా అనుభవంతో, లూయిస్ బాడీ ట్రాన్స్‌ఫర్మేషన్ మరియు క్లినికల్ వ్యాయామంలో ప్రపంచ నిపుణుడు."
    },
    quote: {
      en: "I don’t believe in quick fixes. My goal is to debunk fitness myths and help you become better every day—mentally and physically.",
      hi: "मैं त्वरित समाधान में विश्वास नहीं करता। मेरा लक्ष्य फिटनेस मिथकों को तोड़ना और आपको हर दिन मानसिक और शारीरिक रूप से बेहतर बनाना है।",
      te: "నేను త్వరిత ఫలితాల్లో నమ్మకం లేదు. నా లక్ష్యం ఫిట్‌నెస్ అపోహలను తొలగించి, ప్రతిరోజూ మానసికంగా మరియు శారీరకంగా మెరుగ్గా మారేందుకు మీకు సహాయం చేయడం."
    },
    specializationsTitle: {
      en: "Specializations",
      hi: "विशेषज्ञता",
      te: "ప్రత్యేక నైపుణ్యాలు"
    },
    specializations: {
      en: ["Physique & Body Toning", "Longevity & Posture", "Injury Rehabilitation"],
      hi: ["फिजिक और बॉडी टोनिंग", "लॉन्गेविटी और पोस्चर", "इंजरी रिहैबिलिटेशन"],
      te: ["ఫిజిక్ & బాడీ టోనింగ్", "దీర్ఘాయువు & పోష్చర్", "గాయాల పునరావాసం"]
    },
    medicalTitle: {
      en: "Medical Fitness",
      hi: "मेडिकल फिटनेस",
      te: "మెడికల్ ఫిట్‌నెస్"
    },
    medical: {
      en: ["Diabetes & Hypertension", "Asthma & Thyroid Care", "Arthritis Management"],
      hi: ["डायबिटीज और हाई ब्लड प्रेशर", "अस्थमा और थायरॉइड केयर", "आर्थराइटिस मैनेजमेंट"],
      te: ["డయాబెటీస్ & హైపర్‌టెన్షన్", "ఆస్తమా & థైరాయిడ్ సంరక్షణ", "ఆర్థ్రైటిస్ నిర్వహణ"]
    },
    stats: {
      experience: {
        title: { en: "15+ Years", hi: "15+ वर्ष", te: "15+ సంవత్సరాలు" },
        subtitle: { en: "Experience", hi: "अनुभव", te: "అనుభవం" }
      },
      coaching: {
        title: { en: "Global", hi: "वैश्विक", te: "ప్రపంచవ్యాప్త" },
        subtitle: { en: "Online Coaching", hi: "ऑनलाइन कोचिंग", te: "ఆన్‌లైన్ కోచింగ్" }
      },
      approach: {
        title: { en: "Scientific", hi: "वैज्ञानिक", te: "శాస్త్రీయ" },
        subtitle: { en: "Approach", hi: "दृष्टिकोण", te: "విధానం" }
      }
    },
    badge: {
      title: {
        en: "ACE Certified",
        hi: "ACE प्रमाणित",
        te: "ACE సర్టిఫైడ్"
      },
      subtitle: {
        en: "International Trainer",
        hi: "अंतरराष्ट्रीय प्रशिक्षक",
        te: "అంతర్జాతీయ ట్రైనర్"
      }
    }
  }
};

export default aboutPageTranslations;
