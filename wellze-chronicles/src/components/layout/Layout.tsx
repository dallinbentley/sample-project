import { useState, type CSSProperties } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const layoutStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#0a0a1a',
  };

  const bodyStyle: CSSProperties = {
    display: 'flex',
    flex: 1,
    position: 'relative',
  };

  const mainStyle: CSSProperties = {
    flex: 1,
    padding: '32px',
    overflow: 'auto',
  };

  return (
    <div style={layoutStyle}>
      <Header />
      <div style={bodyStyle}>
        <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen((prev) => !prev)} />
        <main style={mainStyle}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
