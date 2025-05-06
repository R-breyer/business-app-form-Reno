import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from '../atoms/TestimonialCard';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: visible;
`;

const NavDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#FF6600' : '#aaa')};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const cards = [
  {
    quote: "This analytics platform is a game-changer! It’s easy to use, provides valuable insights, and has helped us make smarter decisions.",
    author: "Casey Bachmeyer",
    role: "Founder, Sisyphus Ventures"
  },
  {
    quote: "Intuitive and powerful – it’s like having a data scientist in your team!",
    author: "Jules Weber",
    role: "Product Lead, DataBuzz"
  },
  {
    quote: "We saved so much time and money thanks to this platform. Highly recommended.",
    author: "Maya Lin",
    role: "COO, Finlytica"
  }
];

const variants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 }
};

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleDotClick = (i) => {
    if (i !== index) setIndex(i);
  };

  return (
    <div>
      <CarouselContainer>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              zIndex: 2
            }}
          >
            <TestimonialCard {...cards[index]} />
          </motion.div>
        </AnimatePresence>

        {/* Affichage de la carte suivante "derrière" avec opacité réduite */}
        {cards[index + 1] && (
          <motion.div
            style={{
              position: 'absolute',
              top: 15,
              left: 20,
              width: '100%',
              opacity: 0.2,
              transform: 'scale(0.95)',
              zIndex: 1
            }}
          >
            <TestimonialCard {...cards[index + 1]} />
          </motion.div>
        )}
      </CarouselContainer>

      <NavDots>
        {cards.map((_, i) => (
          <Dot key={i} onClick={() => handleDotClick(i)} active={i === index} />
        ))}
      </NavDots>
    </div>
  );
};

export default TestimonialCarousel;
