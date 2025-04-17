import React from 'react';
import Layout from '../components/Layout';

export default function ImoveisPage() {
  return (
    <Layout>
      <h1>Imóveis à venda</h1>
      <p>
        Trabalhamos com uma curadoria de imóveis pensada para valorizar seu investimento e facilitar a conquista do seu novo lar.
      </p>

      <h2>🏠 Imóveis novos</h2>
      <p>
        Casas e apartamentos recém-construídos, prontos para morar, com acabamentos modernos, excelente localização e documentação regularizada.
      </p>

      <h2>📐 Imóveis na planta</h2>
      <p>
        Projetos em fase de lançamento com condições especiais de pagamento e alto potencial de valorização.
      </p>

      <h2>🚧 Em construção</h2>
      <p>
        Opções de imóveis em fase de obra, ideais para quem deseja acompanhar a entrega e se planejar com tranquilidade.
      </p>

      <h2>🏡 Imóveis usados</h2>
      <p>
        Imóveis prontos para morar com ótimo custo-benefício, localizações consolidadas e possibilidades de negociação flexível.
      </p>
    </Layout>
  );
}