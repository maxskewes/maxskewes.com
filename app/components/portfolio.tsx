import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from './SectionHeader';

const Portfolio = () => {
  return (
    <section id='portfolio'>
<SectionHeader title={'App and Website Portfolio'} />
      <div className='grid lg:grid-cols-2 gap-4 auto-rows-max'>
        {/* -------------------dev purpose */}

        <div className='p-6 rounded overflow-hidden bg-grey-light drop-shadow-md'>
          <h4>Resume Scripter</h4>
          <p className='mt-2'>Portland, OR</p>
          <p className='mt-2'>https://resumescripter.com/</p>
          <p className='mt-2'>
            An app built for employees of a resume-building agency to aid with the development of
            highly personalized job-seeker documents; eg resumes, cover letters, on-line presence
            development.
          </p>
          <div className='flex-col text-center'>
            <div className='flex justify-center items-center'>
              <Link href={'https://resumescripter.com/rsworks'}>
                <Image
                  style={{ border: '5px solid white' }}
                  priority
                  width={200}
                  height={200}
                  className='m-1'
                  src='/images/portfolio/rs-video.png'
                  alt='RS Works Demo Link'
                  aria-label='RS Works Demo Link'
                />
              </Link>
            </div>
            <p className='grow-0'>RS Works app demo</p>
          </div>
        </div>

        <div className='p-6 rounded overflow-hidden bg-grey-light drop-shadow-md'>
          <div>
            <h3>Papa G's Organic Tofu</h3>
            <p className='mt-2'>Portland, OR</p>
            <p className='mt-2'>https://papagstofu.com/</p>
          </div>
          <div className='h-full'>
            <div className='flex-col grow-1 justify-between'>
              <p className='mt-2'>
                A website built with Reactjs. Designed and created all components, graphics,
                artwork, and layout
              </p>

              <div className='flex-col text-center'>
                <div className='flex justify-center items-center'>
                  <Image
                    style={{
                      border: '5px solid white',
                      justifyContent: 'center',
                      justifySelf: 'center',
                    }}
                    priority
                    width={200}
                    height={200}
                    className='m-1'
                    src='/images/portfolio/papa-gs-link.png'
                    alt="Papa G's Website Link"
                    aria-label="Papa G's Website Link"
                  />
                </div>
                <p>Link to the Papa G's Organics Website</p>
              </div>
            </div>
          </div>
        </div>

        <div className='p-6 rounded overflow-hidden bg-grey-light drop-shadow-md'>
          <div>
            <h3>Civic Tech Index</h3>
            <p className='mt-2'>Hack for LA</p>
            <p className='mt-2'>http://civictechindex.org/home production currently paused</p>
          </div>
          <div className='h-full'>
            <div className='flex-col grow-1 justify-between'>
              <p className='mt-2'>
                A Hack for LA project, the CTI is web application to catalog every open source civic
                tech project and enable developers to connect willing volunteers with their dream
                projects to help with civic issues.
              </p>

              <div className='flex-col text-center'>
                <div className='flex justify-center items-center'>
                  <Image
                    style={{
                      border: '5px solid white',
                      justifyContent: 'center',
                      justifySelf: 'center',
                    }}
                    priority
                    width={200}
                    height={200}
                    className='m-1'
                    src='/images/portfolio/cti-link.png'
                    alt='CTIs Website Link'
                    aria-label="CTI's Website Link"
                  />
                </div>
                <p>Link to the CTI Website</p>
              </div>
            </div>
          </div>
        </div>

        <div className='p-6 rounded overflow-hidden bg-grey-light drop-shadow-md'>
          <h3>Bridgetown Bluegrass Festival</h3>
          <p className='mt-2'>Portland, OR</p>
          <p className='mt-2'>https://papagstofu.com/</p>
          <p className='mt-2'>
            A full-stack website built with React and Nextjs. Payment APIs developed with Stripe.
            All contact, volunteer, and performance application routing developed with nodemailer
            API. Designed and created all components, graphics, artwork, and layout. Animation
            created with Framer's open-source Motion library for Reactjs.
          </p>
          <div>bbff screenshot</div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
