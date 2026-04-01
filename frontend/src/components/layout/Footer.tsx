// src/components/Footer.tsx
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";
import { footerResources } from "@/translations/footerTranslations";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";
  const footer = footerResources[lang]?.translation || footerResources.en.translation;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="DotFit Logo" className="h-14 w-[500] object-contain" />
              <span className="text-2xl font-bold text-white">{footer.brand.name}</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">{footer.brand.description}</p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">{footer.headings.programs}</h4>
            <ul className="space-y-3">
              {footer.programs.map((label, i) => (
                <li key={i}>
                  <a
                    href={`/${label.replace(/\s+/g, "-").toLowerCase()}`}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">{footer.headings.company}</h4>
            <ul className="space-y-3">
              {footer.company.map((label, i) => (
                <li key={i}>
                  <a
                    href={`/${label.replace(/\s+/g, "-").toLowerCase()}`}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">{footer.headings.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">{footer.contact.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">{footer.contact.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">{footer.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {footer.brand.name}. {footer.copyright}
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            {footer.legal.map((label, i) => (
              <a
                key={i}
                href={`/${label.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-gray-500 text-sm hover:text-yellow-400 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}





























// import { Dumbbell, Mail, Phone, MapPin, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import { footerResources } from "@/translations/footerTranslations"; // yeh jo 

// const footerLinks = {
//   programs: [
//     { label: "Group Program", href: "/programs" },
//     { label: "Premium Coaching", href: "/programs" },
//     { label: "Pricing", href: "/pricing" },
//     { label: "Transformations", href: "/transformation" },
//     { label: "Terms & Conditions", href: "/terms" },
//   ],
//   company: [
//     { label: "About DottFit", href: "/about" },
//     { label: "Coach Louis", href: "/about" },
//     { label: "Blog", href: "/blog" },
//     { label: "FAQ", href: "/faq" },
//   ],
//   legal: [
//     { label: "Privacy Policy", href: "/privacy" },
//     { label: "Refund Policy", href: "/refund" },
//     { label: "Terms & Conditions", href: "/terms" },
//   ],
// };

// const socialLinks = [
//   { icon: Instagram, href: "#", label: "Instagram" },
//   { icon: Facebook, href: "#", label: "Facebook" },
//   { icon: Youtube, href: "#", label: "YouTube" },
//   { icon: Twitter, href: "#", label: "Twitter" },
// ];

// export function Footer() {
//    const { t } = useTranslation(); // i18n hook
//   const lang = t("languageCode") || "en"; // language code: "en", "hi", "te"

//   const footer = footerResources[lang]?.translation || footerResources.en.translation;

//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
//           {/* Brand */}
//           <div className="lg:col-span-2">
//             <div className="flex items-center gap-2 mb-6">
//                <img
//               src="/logo.png"
//               alt="DotFit Logo"
//               className="h-14 w-[500]object-contain"
//             />
//               <span className="text-2xl font-bold text-white">DottFit</span>
//             </div>
//             <p className="text-gray-400 mb-6 max-w-sm">
//               {footer.brand.description}
//               {/* Transform your health with simple workouts, Indian diet plans, and sustainable results. 
//               Designed for busy professionals aged 30-60. */}
//             </p>
//             <div className="flex gap-4">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   aria-label={social.label}
//                   className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all"
//                 >
//                   <social.icon className="w-5 h-5" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Programs */}
//           <div>
//             <h4 className="font-bold text-lg mb-4 text-white">
//               {footer.headings.programs}
//               {/* Programs */}
//               </h4>
//             <ul className="space-y-3">
//               {footerLinks.programs.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     className="text-gray-400 hover:text-yellow-400 transition-colors"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h4 className="font-bold text-lg mb-4 text-white">{footer.headings.company}</h4>
//              <ul className="space-y-3">
//               {footer.company.map((label, i) => (
//                 <li key={i}>
//                   <a
//                     href={`/${label.replace(/\s+/g, "-").toLowerCase()}`}
//                     className="text-gray-400 hover:text-yellow-400 transition-colors"
//                   >
//                     {label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//             {/* <ul className="space-y-3">
//               {footerLinks.company.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     className="text-gray-400 hover:text-yellow-400 transition-colors"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul> */}
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-bold text-lg mb-4 text-white">
//               {footer.headings.contact}
//               {/* Contact */}
//               </h4>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <Mail className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-400">support@dottfit.com</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Phone className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-400">+91 98765 43210</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-400">
//                   {footer.contact.location}
//                   {/* Mumbai, India */}
//                   </span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-gray-500 text-sm">
//              © {new Date().getFullYear()} {footer.brand.name}. {footer.copyright}
//             {/* © {new Date().getFullYear()} DottFit. All rights reserved. */}
//           </p>
//           <div className="flex gap-6 flex-wrap justify-center">
//             {footer.legal.map((label, i) => (
//               <a
//                 key={i}
//                 href={`/${label.replace(/\s+/g, "-").toLowerCase()}`}
//                 className="text-gray-500 text-sm hover:text-yellow-400 transition-colors"
//               >
//                 {label}
//               </a>
//             ))}
//             {/* {footerLinks.legal.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className="text-gray-500 text-sm hover:text-yellow-400 transition-colors"
//               >
//                 {link.label}
//               </a>
//             ))} */}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }