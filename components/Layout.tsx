import React from 'react';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ padding: '20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link href="/">Início</Link> |{" "}
        <Link href="/sobre">Sobre</Link> |{" "}
        <Link href="/imoveis">Imóveis</Link> |{" "}
        <Link href="/contato">Contato</Link>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
