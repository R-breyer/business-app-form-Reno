import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #2b2b2b;
  color: white;
  padding: 20px;
  border-radius: 12px;
  max-width: 400px;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Quote = styled.p`
  font-style: italic;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const Author = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: bold;
  color: #fff;
`;

const Role = styled.span`
  font-size: 0.85rem;
  color: #aaa;
`;

const TestimonialCard = ({ quote, author, role }) => {
  return (
    <Card>
      <Quote>“{quote}”</Quote>
      <Author>
        <Name>{author}</Name>
        <Role>{role}</Role>
      </Author>
    </Card>
  );
};

export default TestimonialCard;
