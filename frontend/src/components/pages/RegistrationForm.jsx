import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import InputWithLabel from '../molecules/InputWithLabel';
import SelectWithLabel from '../molecules/SelectWithLabel';
import PasswordInput from '../molecules/PasswordInput';
import ToggleButtonGroup from '../molecules/ToggleButtonGroup';
import Button from '../atoms/Button';
import Checkbox from '../atoms/Checkbox';

const FormContainer = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 30px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.9rem;
  margin-top: -8px;
  margin-bottom: 12px;
`;

const InfoBox = styled.pre`
  background-color: #f4f4f4;
  font-size: 0.85rem;
  padding: 15px;
  margin-top: 20px;
  border-radius: 8px;
`;

const RegistrationForm = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const result = await response.json();
      console.log('Success:', result);
      setSubmittedData(values);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    companyName: Yup.string().test(
      'is-required-if-merchant',
      'Company name is required',
      function (value) {
        const { accountType } = this.parent;
        if (accountType === 'merchant') {
          return !!value && value.trim() !== '';
        }
        return true;
      }
    ),
   
     email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
    country: Yup.string().required('Country is required'),
    industry: Yup.string().required('Industry is required'),
    phone: Yup.string(),
    privacyPolicy: Yup.boolean().oneOf([true], 'You must accept the privacy policy'),
    accountType: Yup.string().required(),
  });

  return (
    <FormContainer>
      <Title>Create an account</Title>
      <Formik
        initialValues={{
          firstName: '',
          companyName: '',
          email: '',
          password: '',
          phone: '',
          country: '',
          industry: '',
          privacyPolicy: false,
          accountType: 'merchant',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, handleChange, setFieldValue }) => (
          <Form>
            <ToggleButtonGroup
              name="accountType"
              value={values.accountType}
              onChange={setFieldValue}
              options={[
                { label: 'Merchant', value: 'merchant' },
                { label: 'Agent', value: 'agent' },
              ]}
            />
            <ErrorMessage name="accountType" component={ErrorText} />

            <InputWithLabel
              id="firstName"
              name="firstName"
              label="First Name"
              value={values.firstName}
              onChange={handleChange}
              placeholder="Your name"
            />
            <ErrorMessage name="firstName" component={ErrorText} />

            {values.accountType === 'merchant' && (
              <>
                <InputWithLabel
                  id="companyName"
                  name="companyName"
                  label="Company Name"
                  value={values.companyName}
                  onChange={handleChange}
                  placeholder="Company name"
                />
                <ErrorMessage name="companyName" component={ErrorText} />
              </>
            )}

            <InputWithLabel
              id="email"
              name="email"
              label="Business Email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="email@example.com"
            />
            <ErrorMessage name="email" component={ErrorText} />

            <SelectWithLabel
              id="country"
              name="country"
              label="Where is your company based?"
              value={values.country}
              onChange={handleChange}
              options={[
                { value: '', label: 'Select country' },
                { value: 'belgium', label: 'Belgium' },
                { value: 'france', label: 'France' },
                { value: 'usa', label: 'USA' },
              ]}
            />
            <ErrorMessage name="country" component={ErrorText} />

            <SelectWithLabel
              id="industry"
              name="industry"
              label="Please select an Industry"
              value={values.industry}
              onChange={handleChange}
              options={[
                { value: '', label: 'Select industry' },
                { value: 'tech', label: 'Technology' },
                { value: 'finance', label: 'Finance' },
                { value: 'retail', label: 'Retail' },
              ]}
            />
            <ErrorMessage name="industry" component={ErrorText} />

            <InputWithLabel
              id="phone"
              name="phone"
              label="Phone Number"
              value={values.phone}
              onChange={handleChange}
              placeholder="Optional"
            />
            <ErrorMessage name="phone" component={ErrorText} />

            <PasswordInput
              id="password"
              name="password"
              label="Password"
              value={values.password}
              onChange={handleChange}
              placeholder="Create password"
            />
            <ErrorMessage name="password" component={ErrorText} />

            <div style={{ margin: '15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Checkbox
                name="privacyPolicy"
                checked={values.privacyPolicy}
                onChange={handleChange}
              />
              <label htmlFor="privacyPolicy">
                I accept the <a href="/privacy">Privacy Policy</a>
              </label>
            </div>
            <ErrorMessage name="privacyPolicy" component={ErrorText} />

            <Button type="submit" disabled={isSubmitting}>
              Create an Account
            </Button>

            <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.95rem' }}>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => alert('Sign in action à venir')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#FF6600',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  padding: 0,
                  fontWeight: '600',
                }}
              >
                Sign in
              </button>
            </div>

            {submittedData && (
              <InfoBox>{JSON.stringify(submittedData, null, 2)}</InfoBox>
            )}
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default RegistrationForm;
