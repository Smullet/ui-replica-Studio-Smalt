
import React from 'react';
import { PricingCard } from '../cards/PricingCard';

export const Services: React.FC = () => {
  const productDesignFeatures = [
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 4L6 11L3 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      text: "Analyse des besoins utilisateurs et des objectifs métier pour poser des bases solides."
    },
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 4L6 11L3 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      text: "Wireframes et prototypes interactifs pour valider les concepts avant développement."
    },
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 4L6 11L3 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      text: "Interface design et tests utilisateurs pour optimiser l'expérience."
    },
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 4L6 11L3 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      text: "Design system et documentation pour faciliter le développement."
    }
  ];

  const webDesignFeatures = [
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 4L6 11L3 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      text: "Un site clair, responsive et optimisé pour présenter votre activité avec impact."
    },
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 4L6 11L3 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      text: "Optimisation SEO et performance pour un référencement naturel efficace."
    },
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 4L6 11L3 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      text: "Formation pour gérer le contenu en autonomie après livraison."
    }
  ];

  const facilitationFeatures = [
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 4L6 11L3 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      text: "Création sur-mesure de formats collaboratifs adaptés à ton contexte et à tes enjeux."
    },
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 4L6 11L3 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      text: "Animation d'ateliers d'idéation, de cadrage ou de co-création avec vos équipes."
    },
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 4L6 11L3 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      text: "Accompagnement méthodologique pour structurer vos projets et aligner vos équipes."
    }
  ];

  return (
    <section className="flex w-full flex-col justify-center items-center bg-white pt-12 md:pt-24 pb-16 md:pb-32 px-4 md:px-0">
      <div className="flex w-full max-w-[1356px] flex-col justify-center items-center px-4 md:px-6 py-0">
        <div className="flex w-full flex-col items-center gap-16 md:gap-[104px]">
          <div className="flex flex-col items-center gap-4 md:gap-[22px] self-stretch">
            <h2 className="text-center text-3xl sm:text-4xl md:text-[61px] font-black leading-tight md:leading-[64px] tracking-[-1px] md:tracking-[-2.44px]">
              <span className="text-[#191818]">Des offres </span>
              <span className="text-[#123293]">claires</span>
              <span className="text-[#191818]">, des tarifs </span>
              <span className="text-[#123293]">justes</span>
            </h2>
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
