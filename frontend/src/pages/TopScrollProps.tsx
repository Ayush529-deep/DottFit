import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface TopScrollProps {
  children?: React.ReactNode;
}

const TopScroll: React.FC<TopScrollProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

export default TopScroll;