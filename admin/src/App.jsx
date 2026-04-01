import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import SideBar from './components/layout/SideBar';
import PrivateRoute from './routes/PrivateRoutes';
 import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import UserManagement from './pages/UserManagement';
import Blogs from './pages/Blogs.jsx';
import Testimonials from "./pages/Testimonials.jsx"
import ContactManagement from './pages/ContactManagement.jsx';
import AssessmentCheckDetails from './pages/AssessmentCheckDetails.jsx';




function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/*"
            element={
              <PrivateRoute>
                <SideBar>
                  <Routes>
                    
                    
                    <Route path="/" element={<UserManagement />} />
                    <Route path="/blog" element={<Blogs />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/contact" element={<ContactManagement/>}/>
                    <Route path="/appointment"element={<AssessmentCheckDetails/>}/>
                    
                    
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </SideBar>
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;








