import React from 'react';
import styled from 'styled-components';
import RegistrationForm from './RegistrationForm';
import TestimonialCarousel from '../molecules/TestimonialCarousel';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
`;

const LeftSection = styled.div`
  width: 50%;
  background: linear-gradient(to bottom right, #111, #1d1d1d);
  color: white;
  padding: 80px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 2rem;
  max-width: 400px;
`;

const RightSection = styled.div`
  width: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;
  box-shadow: -8px 0 20px rgba(0, 0, 0, 0.05);
`;

const RegisterPage = () => {
  return (
    <Container>
      <LeftSection>
        <Title>Manage your Money Anywhere</Title>
        <Subtitle>
          View all the analytics and grow your business from anywhere!
        </Subtitle>

        {/* Composant de carousel avec animations stylées */}
        <TestimonialCarousel />
      </LeftSection>

      <RightSection>
        <RegistrationForm />
      </RightSection>
    </Container>
  );
};

export default RegisterPage;
