import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <div className='h-[90vh]'>
      <div className='flex flex-col justify-center align-center p-4 sm:p-6 md:p-8'>
        <SectionWrapper title={'Contact'}>
          <div className='px-0 sm:px-2 md:px-4 lg:px-8'>
            <ContactForm />
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
};

export default ContactPage;
