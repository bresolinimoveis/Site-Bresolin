import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ padding: '20px' }}>
      {children}
    </div>
  );
};

export default Layout;
