import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from '../atoms/TestimonialCard';

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px; 
  height: 200px;
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
  background-color: ${({ active }) => (active ? '#FF6600' : '#888')};
  border: none;
  cursor: pointer;
`;

const cardVariants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 }
};

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

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleDotClick = (i) => setIndex(i);

  return (
    <CarouselWrapper>
      <CarouselContainer>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
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

        {/* Carte suivante floutée derrière */}
        {cards[index + 1] && (
          <motion.div
            style={{
              position: 'absolute',
              top: '10px',
              left: '20px',
              width: '90%',
              opacity: 0.4,
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
    </CarouselWrapper>
  );
};

export default TestimonialCarousel;
