import React from 'react';
import styled from 'styled-components';
import RegistrationForm from './RegistrationForm';
import TestimonialCarousel from '../molecules/TestimonialCarousel';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftSection = styled.div`
  flex: 1;
  background: linear-gradient(to bottom right, #111, #1d1d1d);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftContent = styled.div`
  max-width: 500px;
  text-align: center; /* 👈 centre les textes */
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #aaa;
  margin-bottom: 2rem;
`;

const RightSection = styled.div`
  flex: 1;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const RegisterPage = () => {
  return (
    <Container>
      <LeftSection>
        <LeftContent>
          <Title>Manage your Money Anywhere</Title>
          <Subtitle>View all the analytics and grow your business from anywhere!</Subtitle>
          <TestimonialCarousel />
        </LeftContent>
      </LeftSection>

      <RightSection>
        <RegistrationForm />
      </RightSection>
    </Container>
  );
};

export default RegisterPage;
