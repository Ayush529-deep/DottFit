export function WhatsAppButton() {
  const phoneNumber = "919876543210";
  const message = encodeURIComponent("Hi! I'm interested in DottFit programs.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        rounded-full
        bg-[#25D366]
        flex items-center justify-center
        shadow-lg
        hover:scale-110 hover:shadow-xl
        transition-all duration-300
        group
      "
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
      >
        <path d="M19.11 17.35c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.89 1.23 3.09.15.2 2.13 3.26 5.17 4.57.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.57-.08 1.75-.72 2-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z"/>
        <path d="M16 3C8.83 3 3 8.83 3 16c0 2.64.77 5.1 2.1 7.17L3 29l5.97-2.06A12.9 12.9 0 0016 29c7.17 0 13-5.83 13-13S23.17 3 16 3zm0 23.5c-2.2 0-4.24-.64-5.95-1.75l-.43-.27-3.54 1.22 1.16-3.45-.28-.45A10.45 10.45 0 015.5 16C5.5 10.76 10.76 5.5 16 5.5S26.5 10.76 26.5 16 21.24 26.5 16 26.5z"/>
      </svg>

      {/* Tooltip */}
      <span
        className="
          absolute right-full mr-3
          px-3 py-2
          bg-black text-white text-sm
          rounded-lg
          opacity-0 group-hover:opacity-100
          transition-opacity
          whitespace-nowrap
        "
      >
        Chat with us
      </span>
    </a>
  );
}
