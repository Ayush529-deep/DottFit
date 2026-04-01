import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/blog", key: "blogs" },
  { href: "/pricing", key: "pricing" },
  { href: "/contact", key: "contact" },
  { href: "/testimonials", key: "testimonials" },
  { href: "/community", key: "community" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "Hindi" },
    { code: "te", label: "Telugu" },
  ];

  const currentLang = languages.find(l => l.code === i18n.language)?.label || "English";

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <nav className="max-w-[1440px] mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo-main.png" alt="DotFit Logo" className="h-14 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition",
                  location.pathname === link.href
                    ? "text-blue-700 bg-blue-100"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                )}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* Desktop Language + CTA */}
          <div className="hidden lg:flex items-center gap-4 relative">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                🌐 {currentLang}
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-700 text-sm"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold"
            >
              <Link to="/register">{t("checkFitScore")}</Link>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-100 transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
            <div className="flex flex-col py-3">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-5 py-3 text-base font-medium transition",
                    location.pathname === link.href
                      ? "text-blue-700 bg-blue-50"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                  )}
                >
                  {t(link.key)}
                </Link>
              ))}

              {/* Mobile Language Selector */}
              <div className="px-5 py-3 border-t border-gray-100">
                <p className="text-sm font-medium mb-2">{t("language")}</p>
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm ${
                      i18n.language === lang.code ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="px-5 pt-4 pb-5">
                <Button
                  asChild
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-semibold"
                >
                  <Link to="/pricing" onClick={() => setIsOpen(false)}>
                    {t("getStarted")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}























// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
//   { href: "/blog", label: "Blogs" },
//   { href: "/pricing", label: "Pricing" },
//   { href: "/contact", label: "Contact" },
//   { href: "/testimonials", label: "Testimonials" },
//   { href: "/community", label: "Community" },
// ];

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
//       <nav className="max-w-[1440px] mx-auto px-4">
//         <div className="flex items-center justify-between h-20">

//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src="/logo-main.png"
//               alt="DotFit Logo"
//               className="h-14 object-contain"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 to={link.href}
//                 className={cn(
//                   "px-4 py-2 text-sm font-medium rounded-lg transition",
//                   location.pathname === link.href
//                     ? "text-blue-700 bg-blue-100"
//                     : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
//                 )}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>

//           {/* Desktop CTA */}
//           <div className="hidden lg:flex">
//             <Button
//               asChild
//               className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold"
//             >
//               <Link to="/register">Check Your Fit Score</Link>
//             </Button>
//           </div>

//           {/* Mobile Hamburger */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//             className="
//               lg:hidden
//               p-2.5
//               rounded-xl
//               border border-gray-200
//               text-gray-700
//               hover:bg-gray-100
//               transition
//             "
//           >
//             {isOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
//             <div className="flex flex-col py-3">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   to={link.href}
//                   onClick={() => setIsOpen(false)}
//                   className={cn(
//                     "px-5 py-3 text-base font-medium transition",
//                     location.pathname === link.href
//                       ? "text-blue-700 bg-blue-50"
//                       : "text-gray-700 hover:bg-gray-50 hover:text-blue-700"
//                   )}
//                 >
//                   {link.label}
//                 </Link>
//               ))}

//               <div className="px-5 pt-4 pb-5">
//                 <Button
//                   asChild
//                   className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-semibold"
//                 >
//                   <Link to="/pricing" onClick={() => setIsOpen(false)}>
//                     Get Started
//                   </Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }
