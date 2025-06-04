import React from 'react';
import { PricingCard } from '../cards/PricingCard';

export const Services: React.FC = () => {
  const productDesignFeatures = [
    {
      icon: <svg>...</svg>, // Include the SVG from the design
      text: "Analyse des besoins utilisateurs et des objectifs métier pour poser des bases solides."
    },
    // Add all features from the design
  ];

  const webDesignFeatures = [
    {
      icon: <svg>...</svg>,
      text: "Un site clair, responsive et optimisé pour présenter votre activité avec impact."
    },
    // Add all features from the design
  ];

  const facilitationFeatures = [
    {
      icon: <svg>...</svg>,
      text: "Création sur-mesure de formats collaboratifs adaptés à ton contexte et à tes enjeux."
    },
    // Add all features from the design
  ];

  return (
    <section className="flex w-full flex-col justify-center items-center bg-white pt-24 pb-32 px-0">
      <div className="flex w-full max-w-[1356px] flex-col justify-center items-center px-6 py-0">
        <div className="flex w-full flex-col items-center gap-[104px]">
          <div className="flex flex-col items-center gap-[22px] self-stretch">
            <div className="text-[#123293] text-center text-[61px] font-black leading-[64px] tracking-[-2.44px]">
              <span className="text-[#191818]">Des offres</span>
              <span className="text-[#123293]">claires</span>
              <span className="text-[#191818]">, des tarifs</span>
              <span className="text-[#123293]">justes</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-8 justify-center items-center w-full">
            <PricingCard
              title="Conception de produits <span class='text-[#123293]'>numériques utiles, ergonomiques et désirables</span>."
              description="Je vous accompagne de l'idée au prototype fonctionnel, en passant par la recherche utilisateur, les wireframes, les maquettes et les tests. Idéal pour les startups et équipes produiten phase de création ou d'évolution."
              price={{
                amount: "380",
                period: "/ jour"
              }}
              features={productDesignFeatures}
              label="Product Design"
            />
            <PricingCard
              title="Des sites <span class='text-[#123293]'>web épurés, performants</span>, pensés pour convertir."
              description="Idéal pour les entrepreneur·es, petites entreprises ou associations qui veulent une présence en ligne efficace et facile à prendre en main"
              price={{
                prefix: "à partir de",
                amount: "700",
                period: ""
              }}
              features={webDesignFeatures}
              label="Web Design"
            />
            <PricingCard
              title="Workshops, design sprints, ateliers d'alignement ou d'idéation."
              description="Je conçois et anime des sessions collaboratives qui font avancer vos projets, en impliquant vos équipes. Disponible à la session ou en accompagnement régulier."
              price={{
                amount: "450",
                period: "/ jour"
              }}
              features={facilitationFeatures}
              label="Facilitation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
