import React from 'react';
import ContactForm from '../contact/ContactForm';
import SectionWrapper from './SectionWrapper';

const Contact = () => {
  return (
    <section id='contact'>
      <SectionWrapper title={'Contact'}>
        <div className='m-4'>
          <ContactForm />
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Contact;
