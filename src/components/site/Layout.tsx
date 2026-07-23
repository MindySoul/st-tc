import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFab from './WhatsAppFab';
import CookieBanner from './CookieBanner';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useReveal } from '@/hooks/useReveal';
import { useLocation } from 'react-router-dom';

const Layout = () => {
  useScrollTop();
  const loc = useLocation();
  useReveal(loc.pathname);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
      <CookieBanner />
    </div>
  );
};
export default Layout;
