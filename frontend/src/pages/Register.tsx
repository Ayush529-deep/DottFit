import React, { useState, useEffect } from 'react';
import fitnessPageTranslations from "@/translations/fitnessPageTranslations";
import { useTranslation } from "react-i18next";

import { 
  User, Heart, Activity, Target, Clock, Dumbbell,
  ChevronRight, ChevronLeft, CheckCircle, AlertCircle,
  Bed, Wine, Flame, Award, Phone, Mail, Sparkles, Scale,
  Calculator, TrendingUp, Edit3, Loader
} from 'lucide-react';



interface FormData {
  fullName: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
  fatPercentage: string;
  bmi: string;
  bmr: string;
  occupation: string;
  email: string;
  contactNumber: string;
  hasMedicalConditions: string;
  medicalConditions: string;
  hasMedications: string;
  medications: string;
  hasInjuries: string;
  injuries: string;
  hasJointPain: string;
  jointPain: string;
  hasDoctorAdvice: string;
  doctorAdvice: string;
  sleepHours: string;
  smoking: string;
  alcohol: string;
  alcoholFrequency: string;
  activityLevel: string;
  currentlyExercising: string;
  goals: string[];
  timeline: string;
}

interface Section {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}



const API_URL = typeof window !== 'undefined' && window.location.hostname === 'localhost' 
  ? 'http://localhost:3000/api' 
  : 'https://your-production-url.com/api';

const InputField: React.FC<{
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon?: React.ComponentType<{ className?: string }>;
  required?: boolean;
  name: string;
}> = ({ label, type = "text", value, onChange, placeholder, icon: Icon, required = true, name }) => (
  <div className="space-y-2">
    <label className="flex items-center text-sm font-semibold text-gray-700">
      {Icon && <Icon className="w-4 h-4 mr-2 text-blue-600" />}
      {label} {required && <span className="text-rose-500">*</span>}
    </label>
    <input
      type={type}
      value={value}
      name={name}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-3 sm:px-4 py-3 bg-gradient-to-r from-white to-blue-50/50 border-2 border-blue-200 rounded-xl 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                transition-all duration-300 hover:border-blue-400
                shadow-sm hover:shadow-md text-gray-900 placeholder-gray-400 text-sm sm:text-base"
      required={required}
    />
  </div>
);

const TextAreaField: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  rows?: number;
  required?: boolean;
  name: string;
  disabled?: boolean;
}> = ({ label, value, onChange, placeholder, rows = 4, required = true, name, disabled = false }) => (
  <div className="space-y-2">
    <label className="flex items-center text-sm font-semibold text-gray-700">
      {label} {required && <span className="text-rose-500">*</span>}
    </label>
    <textarea
      value={value}
      name={name}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      className={`w-full px-3 sm:px-4 py-3 bg-gradient-to-r from-white to-purple-50/50 border-2 rounded-xl 
                focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                transition-all duration-300 hover:border-purple-400
                shadow-sm hover:shadow-md text-gray-900 placeholder-gray-400 resize-none text-sm sm:text-base
                ${disabled ? 'opacity-50 cursor-not-allowed border-gray-200' : 'border-purple-200'}`}
      required={required && !disabled}
    />
  </div>
);

const SelectField: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  icon?: React.ComponentType<{ className?: string }>;
  required?: boolean;
  name: string;
}> = ({ label, value, onChange, options, placeholder, icon: Icon, required = true, name }) => (
  <div className="space-y-2">
    <label className="flex items-center text-sm font-semibold text-gray-700">
      {Icon && <Icon className="w-4 h-4 mr-2 text-blue-600" />}
      {label} {required && <span className="text-rose-500">*</span>}
    </label>
    <select
      value={value}
      name={name}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 sm:px-4 py-3 bg-gradient-to-r from-white to-emerald-50/50 border-2 border-emerald-200 rounded-xl 
                focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                transition-all duration-300 hover:border-emerald-400
                shadow-sm hover:shadow-md text-gray-900 text-sm sm:text-base"
      required={required}
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

// const YesNoField: React.FC<{
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
//   placeholder: string;
//   icon?: React.ComponentType<{ className?: string }>;
//   required?: boolean;
//   name: string;
// }> = ({ label, value, onChange, placeholder, icon: Icon, required = true, name }) => (
//   <div className="space-y-2">
//     <label className="flex items-center text-sm font-semibold text-gray-700">
//       {Icon && <Icon className="w-4 h-4 mr-2 text-blue-600" />}
//       {label} {required && <span className="text-rose-500">*</span>}
//     </label>
//     <select
//       value={value}
//       name={name}
//       onChange={(e) => onChange(e.target.value)}
//       className="w-full px-3 sm:px-4 py-3 bg-gradient-to-r from-white to-emerald-50/50 border-2 border-emerald-200 rounded-xl 
//                 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
//                 transition-all duration-300 hover:border-emerald-400
//                 shadow-sm hover:shadow-md text-gray-900 text-sm sm:text-base"
//       required={required}
//     >
//       <option value="">{placeholder}</option>
//       <option value="No">{tCommon.no[lang]}</option>
//       <option value="Yes">{tCommon.yes[lang]}</option>
//     </select>
//   </div>
// );

const GoalCheckbox: React.FC<{
  goal: string;
  selected: boolean;
  onChange: (goal: string) => void;
}> = ({ goal, selected, onChange }) => (
  <label className="flex items-center space-x-3 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl hover:from-amber-100 hover:to-orange-100 cursor-pointer transition-all duration-200 border-2 border-amber-200 hover:border-amber-300 shadow-sm hover:shadow-md">
    <input
      type="checkbox"
      checked={selected}
      onChange={() => onChange(goal)}
      className="w-5 h-5 text-amber-600 bg-white border-2 border-amber-300 rounded focus:ring-amber-500 focus:ring-2"
    />
    <span className="text-gray-700 font-medium text-sm sm:text-base">{goal}</span>
  </label>
);

const ProgressDot: React.FC<{
  index: number;
  completed: boolean;
  current: boolean;
  title: string;
}> = ({ index, completed, current, title }) => (
  <div className="flex flex-col items-center">
    <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full transition-all duration-500 shadow-lg ${
      completed ? 'bg-gradient-to-br from-green-400 to-emerald-500 scale-110 shadow-green-200' :
      current ? 'bg-gradient-to-br from-blue-500 to-cyan-500 scale-110 shadow-blue-200' :
      'bg-white border-2 border-gray-300'
    }`}>
      {completed ? (
        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
      ) : (
        <span className={`font-bold text-sm sm:text-base md:text-lg ${current ? 'text-white' : 'text-gray-500'}`}>
          {index + 1}
        </span>
      )}
    </div>
  </div>
);

const ProgressConnector: React.FC<{ completed: boolean }> = ({ completed }) => (
  <div className={`w-6 sm:w-10 md:w-14 lg:w-20 h-1.5 mx-1 sm:mx-2 mt-4 sm:mt-5 md:mt-6 transition-all duration-500 rounded-full ${
    completed ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gray-200'
  }`} />
);

// const activityLevels = [
//   "Sedentary (desk job, minimal physical activity)",
//   "Lightly active (light exercise 1-3 days/week)",
//   "Moderately active (regular walking/standing, some exercise)",
//   "Very active (hard exercise 4-5 days/week)",
//   "Extremely active (hard exercise daily)"
// ];

// const fitnessGoals = [
//   "Weight loss",
//   "Muscle gain",
//   "Improve stamina/endurance",
//   "Increase strength",
//   "Improve flexibility/mobility",
//   "General health & wellness",
//   "Sports-specific performance"
// ];

// const timelines = [
//   "1-3 months",
//   "3-6 months",
//   "6-12 months",
//   "More than 1 year"
// ];



const FitnessAssessmentForm: React.FC = () => {

   const { i18n } = useTranslation();
  const lang = i18n.language as "en" | "hi" | "te";
  const tForm = fitnessPageTranslations.form;
const tLifestyle = fitnessPageTranslations.lifestyle;
  const tCommon = fitnessPageTranslations.common;

  const [currentSection, setCurrentSection] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [manualBMIMode, setManualBMIMode] = useState<boolean>(false);
  const [manualBMRMode, setManualBMRMode] = useState<boolean>(false);
  const [manualFatPercentageMode, setManualFatPercentageMode] = useState<boolean>(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
const [finalScore, setFinalScore] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    fatPercentage: '',
    bmi: '',
    bmr: '',
    occupation: '',
    email: '',
    contactNumber: '',
    hasMedicalConditions: '',
    medicalConditions: '',
    hasMedications: '',
    medications: '',
    hasInjuries: '',
    injuries: '',
    hasJointPain: '',
    jointPain: '',
    hasDoctorAdvice: '',
    doctorAdvice: '',
    sleepHours: '',
    smoking: '',
    alcohol: '',
    alcoholFrequency: '',
    activityLevel: '',
    currentlyExercising: '',
    goals: [],
    timeline: ''
  });


  const YesNoField: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon?: React.ComponentType<{ className?: string }>;
  required?: boolean;
  name: string;
}> = ({ label, value, onChange, placeholder, icon: Icon, required = true, name }) => (
  <div className="space-y-2">
    <label className="flex items-center text-sm font-semibold text-gray-700">
      {Icon && <Icon className="w-4 h-4 mr-2 text-blue-600" />}
      {label} {required && <span className="text-rose-500">*</span>}
    </label>
    <select
      value={value}
      name={name}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 sm:px-4 py-3 bg-gradient-to-r from-white to-emerald-50/50 border-2 border-emerald-200 rounded-xl 
                focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                transition-all duration-300 hover:border-emerald-400
                shadow-sm hover:shadow-md text-gray-900 text-sm sm:text-base"
      required={required}
    >
      <option value="">{placeholder}</option>
      <option value="No">{tCommon.no[lang]}</option>
      <option value="Yes">{tCommon.yes[lang]}</option>
    </select>
  </div>
);


  const sections: Section[] = [
  // { title: "Personal Information", subtitle: "Basic details about yourself", icon: User, color: "from-blue-500 to-cyan-500" },
  // { title: "Medical History", subtitle: "Your health background", icon: Heart, color: "from-red-500 to-pink-500" },
  // { title: "Lifestyle", subtitle: "Daily habits and routine", icon: Activity, color: "from-green-500 to-emerald-500" },
  // { title: "Current Activity", subtitle: "Your exercise routine", icon: Clock, color: "from-purple-500 to-indigo-500" },
  // { title: "Fitness Goals", subtitle: "What you want to achieve", icon: Target, color: "from-orange-500 to-amber-500" }
  { title: fitnessPageTranslations.sections.personalInfo.title[lang], 
    subtitle:fitnessPageTranslations.sections.personalInfo.subtitle[lang],
    icon: User, 
    color: "from-blue-500 to-cyan-500" },
     {
      title: fitnessPageTranslations.sections.medicalHistory.title[lang],
      subtitle: fitnessPageTranslations.sections.medicalHistory.subtitle[lang],
      icon: Heart,
      color: "from-red-500 to-pink-500",
    },
    {
      title: fitnessPageTranslations.sections.lifestyle.title[lang],
      subtitle: fitnessPageTranslations.sections.lifestyle.subtitle[lang],
      icon: Activity,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: fitnessPageTranslations.sections.currentActivity.title[lang],
      subtitle: fitnessPageTranslations.sections.currentActivity.subtitle[lang],
      icon: Clock,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: fitnessPageTranslations.sections.fitnessGoals.title[lang],
      subtitle: fitnessPageTranslations.sections.fitnessGoals.subtitle[lang],
      icon: Target,
      color: "from-orange-500 to-amber-500",
    },

];


  
  // Calculate BMI
  useEffect(() => {
    if (!manualBMIMode && formData.height && formData.weight) {
      const calculatedBMI = calculateBMI(formData.height, formData.weight);
      if (calculatedBMI !== null && calculatedBMI !== formData.bmi) {
        setFormData(prev => ({ ...prev, bmi: calculatedBMI }));
      }
    }
  }, [formData.height, formData.weight, manualBMIMode]);

  // Calculate BMR
  useEffect(() => {
    if (!manualBMRMode && formData.age && formData.gender && formData.height && formData.weight) {
      const calculatedBMR = calculateBMR(formData.age, formData.gender, formData.height, formData.weight);
      if (calculatedBMR !== null && calculatedBMR !== formData.bmr) {
        setFormData(prev => ({ ...prev, bmr: calculatedBMR }));
      }
    }
  }, [formData.age, formData.gender, formData.height, formData.weight, manualBMRMode]);

  // Calculate Fat Percentage
  useEffect(() => {
    if (!manualFatPercentageMode && formData.bmi && formData.age && formData.gender) {
      const calculatedFatPercentage = calculateFatPercentage(formData.bmi, formData.age, formData.gender);
      if (calculatedFatPercentage !== null && calculatedFatPercentage !== formData.fatPercentage) {
        setFormData(prev => ({ ...prev, fatPercentage: calculatedFatPercentage }));
      }
    }
  }, [formData.bmi, formData.age, formData.gender, manualFatPercentageMode]);

  const calculateBMI = (height: string, weight: string): string | null => {
    if (!height || !weight) return null;

    let heightInMeters = 0;
    let weightInKg = 0;

    if (height.toLowerCase().includes('cm')) {
      const cmMatch = height.match(/(\d+(?:\.\d+)?)/);
      if (cmMatch) heightInMeters = parseFloat(cmMatch[1]) / 100;
    } else if (height.includes("'") || height.toLowerCase().includes('ft')) {
      const feetMatch = height.match(/(\d+)\s*(?:ft|')?(?:\s*(\d+)\s*(?:in|")?)?/i);
      if (feetMatch) {
        const feet = parseFloat(feetMatch[1]) || 0;
        const inches = parseFloat(feetMatch[2]) || 0;
        heightInMeters = (feet * 12 + inches) * 0.0254;
      }
    } else {
      const numMatch = height.match(/(\d+(?:\.\d+)?)/);
      if (numMatch) {
        const num = parseFloat(numMatch[1]);
        heightInMeters = num > 10 ? num / 100 : num;
      }
    }

    if (weight.toLowerCase().includes('kg')) {
      const kgMatch = weight.match(/(\d+(?:\.\d+)?)/);
      if (kgMatch) weightInKg = parseFloat(kgMatch[1]);
    } else if (weight.toLowerCase().includes('lb')) {
      const lbMatch = weight.match(/(\d+(?:\.\d+)?)/);
      if (lbMatch) weightInKg = parseFloat(lbMatch[1]) * 0.453592;
    } else {
      const numMatch = weight.match(/(\d+(?:\.\d+)?)/);
      if (numMatch) {
        const num = parseFloat(numMatch[1]);
        weightInKg = num > 300 ? num * 0.453592 : num;
      }
    }

    if (heightInMeters > 0 && weightInKg > 0) {
      const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);
      return bmi;
    }
    
    return null;
  };

  const calculateBMR = (age: string, gender: string, height: string, weight: string): string | null => {
    if (!age || !gender || !height || !weight) return null;

    const ageNum = parseInt(age);
    let heightInCm = 0;
    let weightInKg = 0;

    if (height.toLowerCase().includes('cm')) {
      const cmMatch = height.match(/(\d+(?:\.\d+)?)/);
      if (cmMatch) heightInCm = parseFloat(cmMatch[1]);
    } else if (height.includes("'") || height.toLowerCase().includes('ft')) {
      const feetMatch = height.match(/(\d+)\s*(?:ft|')?(?:\s*(\d+)\s*(?:in|")?)?/i);
      if (feetMatch) {
        const feet = parseFloat(feetMatch[1]) || 0;
        const inches = parseFloat(feetMatch[2]) || 0;
        heightInCm = (feet * 12 + inches) * 2.54;
      }
    } else {
      const numMatch = height.match(/(\d+(?:\.\d+)?)/);
      if (numMatch) {
        const num = parseFloat(numMatch[1]);
        heightInCm = num > 10 ? num : num * 100;
      }
    }

    if (weight.toLowerCase().includes('kg')) {
      const kgMatch = weight.match(/(\d+(?:\.\d+)?)/);
      if (kgMatch) weightInKg = parseFloat(kgMatch[1]);
    } else if (weight.toLowerCase().includes('lb')) {
      const lbMatch = weight.match(/(\d+(?:\.\d+)?)/);
      if (lbMatch) weightInKg = parseFloat(lbMatch[1]) * 0.453592;
    } else {
      const numMatch = weight.match(/(\d+(?:\.\d+)?)/);
      if (numMatch) {
        const num = parseFloat(numMatch[1]);
        weightInKg = num > 300 ? num * 0.453592 : num;
      }
    }

    if (heightInCm > 0 && weightInKg > 0 && ageNum > 0) {
      let bmr: number;
      if (gender.toLowerCase() === 'male') {
        bmr = (10 * weightInKg) + (6.25 * heightInCm) - (5 * ageNum) + 5;
      } else {
        bmr = (10 * weightInKg) + (6.25 * heightInCm) - (5 * ageNum) - 161;
      }
      return Math.round(bmr).toString();
    }
    
    return null;
  };

  const calculateFatPercentage = (bmi: string, age: string, gender: string): string | null => {
    if (!bmi || !age || !gender) return null;

    const bmiValue = parseFloat(bmi);
    const ageNum = parseInt(age);
    
    if (bmiValue <= 0 || ageNum <= 0) return null;

    const genderFactor = gender.toLowerCase() === 'male' ? 1 : 0;
    let fatPercentage = (1.20 * bmiValue) + (0.23 * ageNum) - (10.8 * genderFactor) - 5.4;
    
    fatPercentage = Math.max(2, Math.min(50, fatPercentage));
    return Math.round(fatPercentage).toString();
  };

  const getBMICategory = (bmi: string): string => {
    if (!bmi) return '';
    const bmiValue = parseFloat(bmi);
    if (bmiValue < 18.5) return 'Underweight';
    if (bmiValue < 25) return 'Normal';
    if (bmiValue < 30) return 'Overweight';
    return 'Obese';
  };

  const getFatPercentageCategory = (fatPercentage: string, gender: string): string => {
    if (!fatPercentage || !gender) return '';
    const fatValue = parseFloat(fatPercentage);
    
    if (gender.toLowerCase() === 'male') {
      if (fatValue < 6) return 'Essential';
      if (fatValue < 14) return 'Athletic';
      if (fatValue < 18) return 'Fitness';
      if (fatValue < 25) return 'Average';
      return 'Obese';
    } else {
      if (fatValue < 14) return 'Essential';
      if (fatValue < 21) return 'Athletic';
      if (fatValue < 25) return 'Fitness';
      if (fatValue < 32) return 'Average';
      return 'Obese';
    }
  };

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (field === 'hasMedicalConditions' && value === tCommon.no[lang]) {
      setFormData(prev => ({ ...prev, medicalConditions: '' }));
    }
    if (field === 'hasMedications' && value === tCommon.no[lang]) {
      setFormData(prev => ({ ...prev, medications: '' }));
    }
    if (field === 'hasInjuries' && value === tCommon.no[lang]) {
      setFormData(prev => ({ ...prev, injuries: '' }));
    }
    if (field === 'hasJointPain' && value === tCommon.no[lang]) {
      setFormData(prev => ({ ...prev, jointPain: '' }));
    }
    if (field === 'hasDoctorAdvice' && value === tCommon.no[lang]) {
      setFormData(prev => ({ ...prev, doctorAdvice: '' }));
    }
  };

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const isCurrentSectionComplete = (): boolean => {
    const currentSectionFields: Record<number, string[]> = {
      0: ['fullName', 'age', 'gender', 'height', 'weight', 'occupation', 'email', 'contactNumber'],
      1: ['hasMedicalConditions', 'hasMedications', 'hasInjuries', 'hasJointPain', 'hasDoctorAdvice'],
      2: ['sleepHours', 'smoking', 'alcohol', 'activityLevel'],
      3: ['currentlyExercising'],
      4: ['goals', 'timeline']
    };
    
    const fields = currentSectionFields[currentSection];
    return fields.every(field => {
      if (field === 'goals') return formData.goals.length > 0;
      if (field === 'alcoholFrequency' && formData.alcohol === tCommon.no[lang]) return true;
      
      if (field === 'hasMedicalConditions' && formData.hasMedicalConditions === tCommon.yes[lang]) {
        return formData.medicalConditions && formData.medicalConditions.trim() !== '';
      }
      if (field === 'hasMedications' && formData.hasMedications === tCommon.yes[lang]) {
        return formData.medications && formData.medications.trim() !== '';
      }
      if (field === 'hasInjuries' && formData.hasInjuries === tCommon.yes[lang]) {
        return formData.injuries && formData.injuries.trim() !== '';
      }
      if (field === 'hasJointPain' && formData.hasJointPain === tCommon.yes[lang]) {
        return formData.jointPain && formData.jointPain.trim() !== '';
      }
      if (field === 'hasDoctorAdvice' && formData.hasDoctorAdvice === tCommon.yes[lang]) {
        return formData.doctorAdvice && formData.doctorAdvice.trim() !== '';
      }
      
      return (formData as any)[field] && (formData as any)[field].toString().trim() !== '';
    });
  };

  // --- HEALTH SCORE CALCULATION ---
  const calculateHealthScore = (): number => {
    let score = 0;
    const bmiVal = parseFloat(formData.bmi);
    
    // Clinical Weight (30%)
    if (bmiVal >= 18.5 && bmiVal <= 24.9) score += 30;
    else if (bmiVal >= 25 && bmiVal <= 29.9) score += 15;
    else score += 5;

    // Lifestyle Habits (30%)
    if (formData.smoking === tCommon.no[lang]) score += 10;
    if (formData.alcohol === tCommon.no[lang]) score += 10;
    if (formData.sleepHours === '7-8 hours') score += 10;

    // Activity (20%)
    if (formData.activityLevel.includes("Very active")) score += 20;
    else if (formData.activityLevel.includes("Moderately")) score += 12;
    else score += 5;

    // Medical History (20%)
    if (formData.hasMedicalConditions === tCommon.no[lang]) score += 10;
    if (formData.hasInjuries === tCommon.no[lang]) score += 10;

    return Math.min(score, 100);
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const calculatedScore = calculateHealthScore();

    try {
      const payload = {
        ...formData,
        healthPercentage: calculatedScore,
        bmi: parseFloat(formData.bmi),
        bmr: parseFloat(formData.bmr),
        fatPercentage: parseFloat(formData.fatPercentage),
        medicalHistory: {
          hasMedicalConditions: formData.hasMedicalConditions === tCommon.yes[lang],
          medicalConditions: formData.medicalConditions,
          hasMedications: formData.hasMedications === tCommon.yes[lang],
          medications: formData.medications,
          hasInjuries: formData.hasInjuries === tCommon.yes[lang],
          injuries: formData.injuries,
          hasJointPain: formData.hasJointPain === tCommon.yes[lang],
          jointPain: formData.jointPain,
          hasDoctorAdvice: formData.hasDoctorAdvice === tCommon.yes[lang],
          doctorAdvice: formData.doctorAdvice
        },
        lifestyle: {
          sleepHours: formData.sleepHours,
          smoking: formData.smoking,
          alcohol: formData.alcohol,
          alcoholFrequency: formData.alcoholFrequency,
          activityLevel: formData.activityLevel
        },
        currentActivity: { currentlyExercising: formData.currentlyExercising },
        fitnessGoals: { goals: formData.goals, timeline: formData.timeline }
      };

      const response = await fetch(`${API_URL}/assessments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle existing email check
        if (result.error && result.error.includes("Email already exists")) {
          setCurrentSection(0);
          throw new Error("This email is already registered. Please use a different one.");
        }
        throw new Error(result.error || 'Failed to submit');
      }

      setFinalScore(calculatedScore);
      setShowScoreModal(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20 sm:pt-24">
      {/* Background Decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/40 to-cyan-300/40 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-300/40 to-pink-300/40 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Header */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 rounded-full mb-6 shadow-lg">
            <Dumbbell className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-sm font-bold text-white tracking-wide">
              {fitnessPageTranslations.hero.badge[lang]}
              {/* FITNESS ASSESSMENT */}
              </span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">
            {/* Complete Your Fitness Profile */}
             {fitnessPageTranslations.hero.title[lang]}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            {fitnessPageTranslations.hero.subtitle[lang]}
            {/* Help us create your personalized fitness plan */}
          </p>
        </div>
      </div>

      {/* Alerts */}
      {error && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-4">
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-700">{error}</p>
          </div>
        </div>
      )}

      {success && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-4">
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-green-700">{success}</p>
          </div>
        </div>
      )}

      {/* Progress */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-10">
        <div className="flex justify-center items-center mb-4 overflow-x-auto pb-2">
          {sections.map((section, index) => (
            <div key={index} className="flex items-center flex-shrink-0">
              <ProgressDot
                index={index}
                completed={index < currentSection}
                current={index === currentSection}
                title={section.title}
              />
              {index < sections.length - 1 && (
                <ProgressConnector completed={index < currentSection} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="inline-block bg-white px-6 py-3 rounded-full shadow-lg border border-gray-200">
            <div className="text-blue-600 font-bold text-lg">{sections[currentSection].title}</div>
            <div className="text-gray-500 text-xs mt-1">{sections[currentSection].subtitle}</div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-3xl border-2 border-blue-200/50 p-8 shadow-2xl">
            {/* Section 0 - Personal Info */}
            {currentSection === 0 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <InputField label={tForm.fullName.label[lang]} value={formData.fullName} name="fullName" onChange={v => handleInputChange('fullName', v)} placeholder={tForm.fullName.placeholder[lang]} icon={User} />
                  <InputField label={tForm.age.label[lang]} type="number" value={formData.age} name="age" onChange={v => handleInputChange('age', v)} placeholder={tForm.age.placeholder[lang]} />
                  <SelectField label={tForm.gender.label[lang]} value={formData.gender} name="gender" onChange={v => handleInputChange('gender', v)} options={tForm.gender.options.map(opt => opt[lang])} placeholder={tForm.gender.placeholder[lang]} />
                  <InputField label={tForm.height.label[lang]} value={formData.height} name="height" onChange={v => handleInputChange('height', v)} placeholder={tForm.height.placeholder[lang]} />
                  <InputField label={tForm.weight.label[lang]} value={formData.weight} name="weight" onChange={v => handleInputChange('weight', v)} placeholder={tForm.weight.placeholder[lang]} />
                  <InputField label={tForm.occupation.label[lang]} value={formData.occupation} name="occupation" onChange={v => handleInputChange('occupation', v)} placeholder={tForm.occupation.placeholder[lang]} />
                  <InputField label={tForm.email.label[lang]} type="email" value={formData.email} name="email" onChange={v => handleInputChange('email', v)} placeholder="your@email.com" icon={Mail} />
                  <InputField label={tForm.contact.label[lang]} type="tel" value={formData.contactNumber} name="contactNumber" onChange={v => handleInputChange('contactNumber', v)} placeholder="+91 98765 43210" icon={Phone} />



                  {/* <InputField label="Full Name" value={formData.fullName} name="fullName" onChange={v => handleInputChange('fullName', v)} placeholder="Your name" icon={User} />
                  <InputField label="Age" type="number" value={formData.age} name="age" onChange={v => handleInputChange('age', v)} placeholder="Your age" />
                  <SelectField label="Gender" value={formData.gender} name="gender" onChange={v => handleInputChange('gender', v)} options={['Male', 'Female', 'Other']} placeholder="Select gender" />
                  <InputField label="Height" value={formData.height} name="height" onChange={v => handleInputChange('height', v)} placeholder="e.g., 5'8 or 172cm" />
                  <InputField label="Weight" value={formData.weight} name="weight" onChange={v => handleInputChange('weight', v)} placeholder="e.g., 150 lbs or 68kg" />
                  <InputField label="Occupation" value={formData.occupation} name="occupation" onChange={v => handleInputChange('occupation', v)} placeholder="Your occupation" />
                  <InputField label="Email" type="email" value={formData.email} name="email" onChange={v => handleInputChange('email', v)} placeholder="your@email.com" icon={Mail} />
                  <InputField label="Contact" type="tel" value={formData.contactNumber} name="contactNumber" onChange={v => handleInputChange('contactNumber', v)} placeholder="+91 98765 43210" icon={Phone} /> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t">
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700">
                      <Calculator className="w-4 h-4 mr-2 text-blue-600" />
                      {fitnessPageTranslations.stats.bmi[lang]}
                      {/* BMI */}
                    </label>
                    <div className="px-4 py-3 bg-green-50 border-2 border-green-200 rounded-xl text-center">
                      <div className="font-bold text-lg">{formData.bmi || '-'}</div>
                      <div className="text-xs text-gray-600">{formData.bmi ? getBMICategory(formData.bmi) : 
                      fitnessPageTranslations.stats.calculate[lang]
                      // 'Calculate'
                      }</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700">
                      <TrendingUp className="w-4 h-4 mr-2 text-purple-600" />
                      {fitnessPageTranslations.stats.bmr[lang]}
                      {/* BMR */}
                    </label>
                    <div className="px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-xl text-center">
                      <div className="font-bold text-lg">{formData.bmr || '-'}</div>
                      <div className="text-xs text-gray-600">
                         {fitnessPageTranslations.stats.calPerDay[lang]}
                        {/* cal/day */}
                        </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700">
                      <Scale className="w-4 h-4 mr-2 text-pink-600" />
                      {fitnessPageTranslations.stats.bodyFat[lang]}
                      {/* Body Fat % */}
                    </label>
                    <div className="px-4 py-3 bg-pink-50 border-2 border-pink-200 rounded-xl text-center">
                      <div className="font-bold text-lg">{formData.fatPercentage || '-'}%</div>
                      <div className="text-xs text-gray-600">{formData.fatPercentage && formData.gender ? getFatPercentageCategory(formData.fatPercentage, formData.gender) :
                      fitnessPageTranslations.stats.auto[lang]
                      //  'Auto'
                       }</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 1 - Medical History */}
            {currentSection === 1 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <YesNoField label={fitnessPageTranslations.medicalHistory.hasMedicalConditions.label[lang]}
                  // "Do you have medical conditions?" 
                  value={formData.hasMedicalConditions} name="hasMedicalConditions" onChange={v => handleInputChange('hasMedicalConditions', v)} placeholder={fitnessPageTranslations.medicalHistory.hasMedicalConditions.placeholder[lang]} />
                  {formData.hasMedicalConditions === tCommon.yes[lang] && (
                    <TextAreaField label={fitnessPageTranslations.medicalHistory.hasMedicalConditions.describe.label[lang]}
                    // "Describe conditions"
                     value={formData.medicalConditions} name="medicalConditions" onChange={v => handleInputChange('medicalConditions', v)} placeholder={fitnessPageTranslations.medicalHistory.hasMedicalConditions.describe.placeholder[lang]}
                    //  "List conditions..."
                      rows={3} />
                  )}
                </div>

                <div className="space-y-4">
                  <YesNoField label={fitnessPageTranslations.medicalHistory.hasMedications.label[lang]} value={formData.hasMedications} name="hasMedications" onChange={v => handleInputChange('hasMedications', v)} placeholder={fitnessPageTranslations.medicalHistory.hasMedications.placeholder[lang]} />
                  {formData.hasMedications === tCommon.yes[lang] && (
                    <TextAreaField label={fitnessPageTranslations.medicalHistory.hasMedications.describe.label[lang]} value={formData.medications} name="medications" onChange={v => handleInputChange('medications', v)} placeholder={fitnessPageTranslations.medicalHistory.hasMedications.describe.placeholder[lang]} rows={3} />
                  )}
                </div>

                <div className="space-y-4">
                  <YesNoField label={fitnessPageTranslations.medicalHistory.hasInjuries.label[lang]}  value={formData.hasInjuries} name="hasInjuries" onChange={v => handleInputChange('hasInjuries', v)} placeholder={fitnessPageTranslations.medicalHistory.hasInjuries.placeholder[lang]} />
                  {formData.hasInjuries === tCommon.yes[lang] && (
                    <TextAreaField label={fitnessPageTranslations.medicalHistory.hasInjuries.describe.label[lang]} value={formData.injuries} name="injuries" onChange={v => handleInputChange('injuries', v)} placeholder={fitnessPageTranslations.medicalHistory.hasInjuries.describe.placeholder[lang]} rows={3} />
                  )}
                </div>

                <div className="space-y-4">
                  <YesNoField label={fitnessPageTranslations.medicalHistory.hasJointPain.label[lang]} value={formData.hasJointPain} name="hasJointPain" onChange={v => handleInputChange('hasJointPain', v)} placeholder={fitnessPageTranslations.medicalHistory.hasJointPain.placeholder[lang]} />
                  {formData.hasJointPain === tCommon.yes[lang] && (
                    <TextAreaField label={fitnessPageTranslations.medicalHistory.hasJointPain.describe.label[lang]} value={formData.jointPain} name="jointPain" onChange={v => handleInputChange('jointPain', v)} placeholder={fitnessPageTranslations.medicalHistory.hasJointPain.describe.placeholder[lang]} rows={3} />
                  )}
                </div>

                <div className="space-y-4">
                  <YesNoField label={fitnessPageTranslations.medicalHistory.hasDoctorAdvice.label[lang]} value={formData.hasDoctorAdvice} name="hasDoctorAdvice" onChange={v => handleInputChange('hasDoctorAdvice', v)} placeholder={fitnessPageTranslations.medicalHistory.hasDoctorAdvice.placeholder[lang]} />
                  {formData.hasDoctorAdvice === tCommon.yes[lang] && (
                    <TextAreaField label={fitnessPageTranslations.medicalHistory.hasDoctorAdvice.describe.label[lang]} value={formData.doctorAdvice} name="doctorAdvice" onChange={v => handleInputChange('doctorAdvice', v)} placeholder={fitnessPageTranslations.medicalHistory.hasDoctorAdvice.describe.placeholder[lang]} rows={3} />
                  )}
                </div>
              </div>
            )}

            {/* Section 2 - Lifestyle */}
            {currentSection === 2 && (
              <div className="space-y-6">
                <SelectField label={fitnessPageTranslations.lifestyle.sleepHours.label[lang]} value={formData.sleepHours} name="sleepHours" onChange={v => handleInputChange('sleepHours', v)} options={tLifestyle.sleepHours.options.map(option => option[lang])} placeholder={fitnessPageTranslations.lifestyle.sleepHours.placeholder[lang]} icon={Bed} />
                <SelectField label={fitnessPageTranslations.lifestyle.smoking.label[lang]} value={formData.smoking} name="smoking" onChange={v => handleInputChange('smoking', v)} options={tLifestyle.smoking.options.map(option => option[lang])} placeholder={fitnessPageTranslations.lifestyle.smoking.placeholder[lang]} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SelectField label={fitnessPageTranslations.lifestyle.alcohol.label[lang]} value={formData.alcohol} name="alcohol" onChange={v => handleInputChange('alcohol', v)} options={tLifestyle.alcohol.options.map(option => option[lang])} placeholder={fitnessPageTranslations.lifestyle.alcohol.placeholder[lang]} icon={Wine} />
                  {formData.alcohol === tCommon.yes[lang] && (
                    <SelectField label={fitnessPageTranslations.lifestyle.alcoholFrequency.label[lang]} value={formData.alcoholFrequency} name="alcoholFrequency" onChange={v => handleInputChange('alcoholFrequency', v)} options={tLifestyle.alcoholFrequency.options.map(option => option[lang])} placeholder={fitnessPageTranslations.lifestyle.alcoholFrequency.placeholder[lang]} />
                  )}
                </div>
                <SelectField label={fitnessPageTranslations.lifestyle.activityLevel.label[lang]} value={formData.activityLevel} name="activityLevel" onChange={v => handleInputChange('activityLevel', v)} options={
  fitnessPageTranslations.lifestyle.activityLevel.options.map(
    option => option[lang]
  )
}
                // {activityLevels}
                 placeholder={fitnessPageTranslations.lifestyle.activityLevel.placeholder[lang]} icon={Flame} />
              </div>
            )}

            {/* Section 3 - Current Activity */}
            {currentSection === 3 && (
              <div className="space-y-6">
                <TextAreaField label={fitnessPageTranslations.exerciseRoutine.label[lang]} value={formData.currentlyExercising} name="currentlyExercising" onChange={v => handleInputChange('currentlyExercising', v)} placeholder={fitnessPageTranslations.exerciseRoutine.placeholder[lang]} rows={6} />
              </div>
            )}

            {/* Section 4 - Fitness Goals */}
            {currentSection === 4 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    {fitnessPageTranslations.fitnessGoalsSection.primaryGoalsLabel[lang]} <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {fitnessPageTranslations.fitnessGoalsSection.goals.map((goal, idx) => (
                      <GoalCheckbox key={idx} goal={goal[lang]} selected={formData.goals.includes(goal.en)}
                       onChange={() => handleGoalToggle(goal.en)}
                      //  onChange={handleGoalToggle} 
                       />
                    ))}
                  </div>
                </div>
                <SelectField label={fitnessPageTranslations.fitnessGoalsSection.timeline.label[lang]} value={formData.timeline} name="timeline" onChange={v => handleInputChange('timeline', v)} options={
    fitnessPageTranslations.fitnessGoalsSection.timeline.options.map(
      option => option[lang]
    )
  } placeholder={fitnessPageTranslations.fitnessGoalsSection.timeline.placeholder[lang]} icon={Award} />
              </div>
            )}

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-10 pt-8 border-t">
              <button 
                type="button" 
                onClick={() => setCurrentSection(prev => Math.max(0, prev - 1))} 
                disabled={currentSection === 0 || loading} 
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-300 hover:border-gray-400 disabled:opacity-30 font-semibold text-gray-700 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
                {fitnessPageTranslations.navigation.back[lang]}
                {/* Back */}
              </button>

              <span className="text-sm text-gray-600 font-medium">{currentSection + 1} / {sections.length}</span>

              {currentSection === sections.length - 1 ? (
                <button 
                  type="submit" 
                  disabled={!isCurrentSectionComplete() || loading} 
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:opacity-50 rounded-lg font-bold text-white transition-all"
                >
                  {loading ? <Loader className="w-5 h-5 animate-spin" /> : <CheckCircle className="w-5 h-5" />}
                  {loading ? fitnessPageTranslations.navigation.submitting[lang]
  : fitnessPageTranslations.navigation.submit[lang]
                  // 'Submitting...' : 'Submit'
                  }
                </button>
              ) : (
                <button 
                  type="button" 
                  onClick={() => setCurrentSection(prev => prev + 1)} 
                  disabled={!isCurrentSectionComplete() || loading} 
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:opacity-50 rounded-lg font-bold text-white transition-all"
                >
                  {fitnessPageTranslations.button.continue[lang]}
                  {/* Click continue to know more details */}
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* {showScoreModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1E2A3A]/90 backdrop-blur-md">
          <div className="bg-white rounded-[2.5rem] p-10 max-w-sm w-full shadow-2xl text-center border-t-8 border-[#E6B65C] animate-in zoom-in duration-300">
            <div className="relative w-40 h-40 mx-auto mb-6 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle cx="80" cy="80" r="72" stroke="#f3f4f6" strokeWidth="10" fill="transparent" />
                <circle 
                  cx="80" cy="80" r="72" stroke="#E6B65C" strokeWidth="10" fill="transparent" 
                  strokeDasharray="452.4" strokeDashoffset={452.4 - (452.4 * finalScore) / 100} 
                  strokeLinecap="round" className="transition-all duration-1000"
                />
              </svg>
              <div className="text-center">
                <span className="text-4xl font-black text-[#1E2A3A]">{finalScore}%</span>
                <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Score</p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1E2A3A] mb-2">Profile Synced!</h3>
            <p className="text-gray-500 text-sm mb-8">Your health baseline has been calculated and stored in the DottFit vault.</p>
            <button onClick={() => window.location.reload()} className="w-full py-4 bg-[#1E2A3A] text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg">
              Finish
            </button>
          </div>
        </div>
      )} */}
{showScoreModal && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1E2A3A]/90 backdrop-blur-md">
    <div className="bg-white rounded-[2.5rem] p-10 max-w-sm w-full shadow-2xl text-center border-t-8 border-[#E6B65C] animate-in zoom-in duration-300">

      {/* SCORE CIRCLE */}
      <div className="relative w-40 h-40 mx-auto mb-6 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          {/* Background circle */}
          <circle
            cx="80"
            cy="80"
            r="72"
            stroke="#E5E7EB"
            strokeWidth="10"
            fill="transparent"
          />

          {/* Progress circle */}
          <circle
            cx="80"
            cy="80"
            r="72"
            stroke="#E6B65C"
            strokeWidth="10"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 72}
            strokeDashoffset={
              2 * Math.PI * 72 -
              (finalScore / 100) * (2 * Math.PI * 72)
            }
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* SCORE TEXT */}
        <div className="relative">
          <div className="text-4xl font-extrabold text-gray-900">
            {finalScore}%
          </div>
          <div className="text-xs text-gray-500 mt-1">
             {fitnessPageTranslations.scoreModal.healthScore[lang]}
            {/* Health Score */}
          </div>
        </div>
      </div>

      {/* MESSAGE */}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
         {fitnessPageTranslations.scoreModal.title[lang]}
        {/* Assessment Complete 🎉 */}
      </h3>
      <p className="text-gray-600 text-sm mb-6">
         {fitnessPageTranslations.scoreModal.description[lang]}
        {/* Based on your responses, this is your overall health score.
        Our experts will tailor a plan just for you. */}
      </p>

      {/* ACTION */}
      <button
        onClick={() => setShowScoreModal(false)}
        className="w-full py-3 rounded-xl font-bold text-white
                   bg-gradient-to-r from-blue-500 to-cyan-500
                   hover:from-blue-600 hover:to-cyan-600
                   transition-all shadow-lg"
      >
        {fitnessPageTranslations.scoreModal.close[lang]}
        {/* Close */}
      </button>
    </div>
  </div>
)}

      {/* Footer */}
      <div className="text-center pb-8 text-gray-500 text-sm">
        <p className="font-medium">
          {fitnessPageTranslations.footer.healthJourney[lang]}
          {/* Your journey to better health starts here 💪 */}
          </p>
      </div>
    </div>
  );
};

export default FitnessAssessmentForm;