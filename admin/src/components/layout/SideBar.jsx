import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Users,
  LogOut,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  FileText,
  Folder,Boxes,
  Search, MessageSquare ,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const SideBar = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredLinks, setFilteredLinks] = useState([]);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  const userDropdownRef = useRef(null);

  const { user, logout } = useAuth();
  const userRole = user?.role || localStorage.getItem("role") || "viewer";
  const userEmail = user?.email || "user@example.com";
  const userName = user?.username || "User";

  // Define navigation structure based on role
  const navItems = [
    
    {
      section: "Users",
      links:
        userRole === "admin"
          ? [
             
              { to: "/", label: "User Management", icon: Users },
            ]
          : [{ to: "/", label: "User Management", icon: Users }],
    },
   
   
    {
      section: "Blog",
      links: [
       
        { to: "/blog", label: "Blog Management", icon:  FileText },
      ],
    },
    {
  section: "Testimonials",
  links:
    userRole === "admin"
      ? [
          { to: "/testimonials", label: "Manage Testimonials", icon: MessageSquare },
        ]
      : [
          { to: "/testimonials", label: "View Testimonials", icon: MessageSquare },
        ],
},
 {
      section: "Contact Management",
      links: [
       
        { to: "/contact", label: "Contact Management", icon:  FileText },
      ],
    },
    //  {
    //   section: "AssessmentCheckDetails",
    //   links: [
       
    //     { to: "/appointment", label: "Assessment Check Users List", icon:  FileText },
    //   ],
    // },
  ];

  // Filter navigation when searching
  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredLinks(navItems);
    } else {
      const lower = searchText.toLowerCase();
      const filtered = navItems
        .map((section) => {
          const matchedLinks = section.links.filter((link) =>
            link.label.toLowerCase().includes(lower)
          );
          return matchedLinks.length > 0
            ? { section: section.section, links: matchedLinks }
            : null;
        })
        .filter(Boolean);
      setFilteredLinks(filtered);
    }
  }, [searchText]);

  // Handle outside clicks for sidebar and dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
      if (
        userDropdownOpen &&
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen, userDropdownOpen]);

  // ✅ Fixed logout handler — use AuthContext only
  const handleLogout = () => {
    logout(); // AuthContext handles clear + redirect
  };

  // Close sidebar after clicking link (on mobile)
  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden" />
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed lg:relative w-72 bg-white h-full flex flex-col z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out shadow-xl border-r`}
      >
        {/* Brand Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <Link to="/admin/dashboard" className="flex items-center">
            <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center mr-3">
              <Boxes className="text-white w-4 h-4" />
            </div>
            <span className="text-xl font-bold text-gray-800">
              Dottfit
            </span>
          </Link>
          <button
            className="lg:hidden text-gray-500"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Input */}
        <div className="px-4 pt-4 hidden lg:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border text-sm focus:ring focus:border-blue-500"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {filteredLinks.map(
            (section, idx) =>
              section.links.length > 0 && (
                <div key={idx}>
                  <p className="text-xs font-semibold text-gray-500 uppercase px-4 mb-2">
                    {section.section}
                  </p>
                  {section.links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={handleLinkClick}
                      className={`flex items-center py-2.5 px-4 rounded transition duration-200 mb-1 ${
                        location.pathname === link.to
                          ? "bg-indigo-700 text-white"
                          : "hover:bg-indigo-700 hover:text-white"
                      }`}
                    >
                      <link.icon className="w-5 h-5 text-indigo-500 mr-2" />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              )
          )}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center py-2.5 px-4 w-full text-left hover:bg-indigo-700 hover:text-white rounded"
          >
            <LogOut className="w-5 h-5 text-indigo-500 mr-2" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <button
              className="text-gray-600 lg:hidden mr-4"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>

            {searchOpen ? (
              <div className="relative w-full max-w-xs">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring focus:border-blue-500 text-sm"
                  autoFocus
                  onBlur={() => setSearchOpen(false)}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
            ) : (
              <button
                className="lg:hidden text-gray-500"
                onClick={() => setSearchOpen(true)}
              >
                <Search size={20} />
              </button>
            )}
          </div>

          {/* User Dropdown */}
          <div className="relative" ref={userDropdownRef}>
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                {userEmail?.charAt(0).toUpperCase()}
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-800">{userName}</p>
                <p className="text-xs text-gray-500">{userRole}</p>
              </div>
              {userDropdownOpen ? (
                <ChevronUp className="text-gray-500 ml-1" size={16} />
              ) : (
                <ChevronDown className="text-gray-500 ml-1" size={16} />
              )}
            </button>

            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md z-20 border">
                <div className="px-4 py-2 border-b">
                  <p className="text-sm font-medium text-gray-800">
                    {userEmail}
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <LogOut size={14} className="mr-2" /> Logout
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto p-4">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default SideBar;

