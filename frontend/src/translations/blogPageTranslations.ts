export interface BlogHeroSection {
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

export interface BlogGridSection {
  readMore: {
    en: string;
    hi: string;
    te: string;
  };
}

export interface BlogCTASection {
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
  button: {
    en: string;
    hi: string;
    te: string;
  };
}

export interface BlogPageTranslations {
  hero: BlogHeroSection;
  grid: BlogGridSection;
  cta: BlogCTASection;
}

const blogPageTranslations: BlogPageTranslations = {
  hero: {
    title: {
      en: "DottFit Blog",
      hi: "DottFit ब्लॉग",
      te: "DottFit బ్లాగ్"
    },
    subtitle: {
      en: "Expert tips, insights, and guides for your fitness journey",
      hi: "आपकी फिटनेस यात्रा के लिए विशेषज्ञ सुझाव, मार्गदर्शन और जानकारी",
      te: "మీ ఫిట్‌నెస్ ప్రయాణానికి నిపుణుల సూచనలు మరియు మార్గదర్శకాలు"
    }
  },

  grid: {
    readMore: {
      en: "Read More →",
      hi: "और पढ़ें →",
      te: "ఇంకా చదవండి →"
    }
  },

  cta: {
    title: {
      en: "Want Personalized Guidance?",
      hi: "क्या आपको व्यक्तिगत मार्गदर्शन चाहिए?",
      te: "మీకు వ్యక్తిగత మార్గదర్శనం కావాలా?"
    },
    subtitle: {
      en: "Join DottFit and get direct access to Coach Louis and personalized fitness plans",
      hi: "DottFit से जुड़ें और कोच लुइस तथा व्यक्तिगत फिटनेस योजनाओं तक सीधी पहुंच पाएं",
      te: "DottFit లో చేరి కోచ్ లూయిస్ మరియు వ్యక్తిగత ఫిట్‌నెస్ ప్రణాళికలకు ప్రత్యక్ష ప్రాప్యత పొందండి"
    },
    button: {
      en: "Explore Programs",
      hi: "प्रोग्राम देखें",
      te: "ప్రోగ్రామ్‌లను చూడండి"
    }
  }
};

export default blogPageTranslations;
