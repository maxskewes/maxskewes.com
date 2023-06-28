import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../contact/ContactForm';

const Contact = () => {
  return (
    <section id="contact">
      <SectionHeader title={'Contact'} />
      <div className='m-4'><ContactForm /></div>
    </section>
  );
};

export default Contact;
