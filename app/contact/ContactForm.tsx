'use client';

import { useState } from 'react';
import React from 'react';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
});

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };

    console.log(data);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      //add toast
      console.log('Message sent successfully');
      setLoading(false);
      // reset the form
      event.target.name.value = '';
      event.target.email.value = '';
      event.target.message.value = '';
    }
    if (!response.ok) {
      //add error message
      console.log('Error sending message');
      setLoading(false);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='w-full flex flex-col md:my-4 '>
        <label className='font-bold text-teal pb-1' htmlFor='name'>
          Name
        </label>
        <input
          type='text'
          minLength={3}
          maxLength={150}
          required
          className=' p-4 bg-gray-50 border border-violet rounded-sm'
          autoComplete='off'
          id='name'
        />
      </div>
      <div className='w-full flex flex-col my-4'>
        <label className='font-bold text-teal pb-1' htmlFor='email'>
          Email
        </label>
        <input
          type='email'
          minLength={5}
          maxLength={150}
          required
          className=' p-4 bg-gray-50 border border-violet rounded-sm'
          autoComplete='off'
          id='email'
        />
      </div>
      <div>
        <label className='font-semibold text-teal' htmlFor='message'>
          Message
        </label>
        <div className='pt-1'>
          <textarea
            rows={4}
            required
            minLength={10}
            maxLength={500}
            name='message'
            className='w-full p-4 bg-gray-50 border border-violet rounded-sm'
          />
        </div>
      </div>
      <div className='flex justify-center items-center pt-2 md:pt-6'>
        <div className={josefin.className}>
          <button
            type='submit'
            disabled={loading}
            className='px-4 py-2 w-40 bg-teal disabled:bg-grey disabled:text-violet text-white uppercase font-medium mt-4 rounded-md'
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
}
