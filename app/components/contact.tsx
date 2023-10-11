import React from 'react';
import ContactForm from '../contact/ContactForm';
import { SectionWrapper } from './SectionWrapper';

const Contact = () => {
  return (
    <section id='contact'>
      <SectionWrapper title={'Contact'}>
        <ContactForm />
      </SectionWrapper>
    </section>
  );
};

export default Contact;
