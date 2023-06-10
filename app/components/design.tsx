import Image from 'next/image';
import Link from 'next/link';

const Design = () => {
    return (
      <section>
        <h2 className='mb-6'>App and Website Portfolio</h2>
        <div className='grid lg:grid-cols-2 gap-4 auto-rows-max'>

             <div className='p-6 rounded-md overflow-hidden bg-grey-light drop-shadow-md'>
          <h3>Resume Scripter</h3>
          <p className='mt-2'>Portland, OR</p>
          <p className='mt-2'>https://resumescripter.com/</p>
          <p className='mt-2'>
            An app built for employees of a resume-building agency to aid with the development of
            highly personalized job-seeker documents; eg resumes, cover letters, on-line presence
            development.
          </p>
          <div className='flex-col text-center'>
     
          <div className='flex justify-center items-center'>
     
              <Image
                style={{ border: '5px solid white' }}
                priority
                width={200}
                height={200}
                className='m-1'
                src='/images/rs-video.png'
                alt='RS Works Demo Link'
                aria-label='RS Works Demo Link'
              />
           
            </div>
            <p className='grow-0'>RS Works app demo</p>
          </div>
        </div>
  
          <div className='flex flex-col rounded-lg'>
            <div className='bg-grey-light p-6 drop-shadow-md'>
              <h3>Papa G's Organic Tofu</h3>
              <p className='mt-2'>Portland, OR</p>
              <p className='mt-2'>https://papagstofu.com/</p>
              <p className='mt-2'>
                A website built with Reactjs. Designed and created all components,
                graphics, artwork, and layout
              </p>
              <div>papa gs screenshot</div>
            </div>
          </div>
  
          <div className='flex flex-col rounded-lg'>
            <div className='bg-grey-light p-6 drop-shadow-md'>
              <h3>Bridgetown Bluegrass Festival</h3>
              <p className='mt-2'>Portland, OR</p>
              <p className='mt-2'>https://papagstofu.com/</p>
              <p className='mt-2'>
                A full-stack website built with React and Nextjs. Payment APIs
                developed with Stripe. All contact, volunteer, and performance
                application routing developed with nodemailer API. Designed and
                created all components, graphics, artwork, and layout. Animation
                created with Framer's open-source Motion library for Reactjs.
              </p>
              <div>bbff screenshot</div>
            </div>
          </div>
  
          <div className='flex flex-col rounded-lg'>
            <div className='bg-grey-light p-6 drop-shadow-md'>
              <h3>Civic Tech Index</h3>
              <p className='mt-2'>Hack for LA</p>
              <p className='mt-2'>
                http://civictechindex.org/home production currently paused
              </p>
              <p className='mt-2'>
                A Hack for LA project, the CTI is web application to catalog every
                open source civic tech project and enable developers to connect
                willing volunteers with their dream projects to help with civic
                issues.
              </p>
              <div>CTI screenshot</div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Design;
  