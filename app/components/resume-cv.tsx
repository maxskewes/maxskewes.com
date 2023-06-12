import React from 'react';
import SectionHeader from './SectionHeader';

type CVSectionTitleProps = {
  title: string;
};

const CVSectionTitle = ({ title }: CVSectionTitleProps) => {
  return (
    <div className='border-b-2 border-grey mb-4'>
      <p className='text-xl uppercase tracking-widest mb-1'>{title}</p>
    </div>
  );
};

const Resume = () => {
  return (
    <section id='resume-cv'>
      <div>
        <div>
          <SectionHeader title={'Résumé'} />
          <a
            href='/docs/resume.pdf'
            target='_blank'
            className='p-1 uppercase border border-grey text-grey rounded-md text-sm'
          >
            view as a printable PDF
          </a>
        </div>

        <div className='bg-white mt-2 p-6 drop-shadow-md'>
          <div className='flex justify-between items-start'>
            <div className='flex items-center'>
              <p className='text-5xl uppercase'>Max&nbsp;</p>
              <p className='text-5xl text-violet uppercase'>Skewes</p>
            </div>
            <div className='border-r-4 border-violet h-full'>
              {' '}
              <p className='text-5xl text-violet'>&nbsp;</p>
            </div>
            <div className='flex flex-col text-right ml-38'>
              <a>e: maxskewes@gmail.com</a>
              <a>github.com/maxskewes</a>
              <a>Portland, OR 97215</a>
              <a>p: &#40;503&#41; 477-2975</a>
            </div>
          </div>

          <div className='mb-10'>
            <CVSectionTitle title={'Professional Summary'} />
            <p className='font-serif'>
              User-Centric React Developer with several years of experience contributing to design
              and development of interactive websites and custom applications projected to serve
              over 100,000 users. Well-developed ability to collaborate with UX designers, product
              managers, and back-end developers throughout all phase of projects. Proficient in
              ReactJS, Typescript, Node.js, JavaScript, HTML, CSS, WordPress, Material-UI,
              Chakra-UI, Next.js, Bootstrap, Formik, Git, GitHub, Bitbucket, Jira, SQL, Slack, and
              social media platforms.
            </p>
          </div>

          <div className='mb-10'>
            <CVSectionTitle title={'Education & Training'} />

            <div className='mb-8'>
              <div className='flex justify-between items-end'>
                <p className='uppercase font-medium text-xl'>University of Oregon</p>
                <i className='font-light '>On Site, NW Portland, OR Campus</i>
              </div>
              <p className='font-medium text-2xl'>Full Stack Coding Certificate</p>
              <p className='font-light '>
                Completed intensive coursework in HTML, CSS, JavaScript, React, MySQL, and Node.js.
              </p>
            </div>

            <div className='mb-8'>
              <div className='flex justify-between items-end'>
                <p className='uppercase font-medium text-xl'>University College Cork</p>
                <i className='font-light'>Cork, Ireland</i>
              </div>
              <p className='font-medium text-2xl'>Certificate of Irish Studies</p>
              <p className='font-light '>
                First Class Hounours in Modern and Ancient Irish language, music theory/practise,
                Celtic Civilization, Archaeology, and Politics.
              </p>
            </div>

            <div className='mb-2'>
              <div className='flex justify-between items-end'>
                <p className='uppercase font-medium text-xl'>Marylhurst University</p>
                <i className='font-light'>Marylhurst, OR</i>
              </div>
              <p className='font-medium text-2xl'>Associate Degree of Liberal Arts</p>
              <p className='font-light'>
                First Class Hounours in Modern and Ancient Irish language, music theory/practise,
                Celtic Civilization, Archaeology, and Politics.
              </p>
              <i className='font-light'>with minor focus on Irish Language &#40;Gaeilge&#41;.</i>
            </div>
          </div>

          <div className='mb-10'>
            <CVSectionTitle title={'Professional Experience'} />

            <div className='mb-8'>
              <div className='mb-2'>
                <div className='flex justify-between items-end'>
                  <p className='uppercase font-medium text-xl'>Resume Scripter</p>
                  <i className='font-light'>Portland, OR</i>
                </div>
                <div className='flex justify-between items-end'>
                  <p className='font-medium text-2xl'>React Developer</p>
                  <i className='font-light'>Oct. 2021 - Feb. 2023</i>
                </div>
              </div>
              <div className='font-light'>
                <ul className='list-disc pl-4'>
                  <li>
                    Worked with career-tech startup to develop scalable platform to help workforce
                    development teams craft impressive resumes and cover letters in minutes,
                    projected to serve over 50,000 job seekers in first year of launch.
                  </li>
                  <li>
                    Collaborated with software engineer and UX consultant throughout development of
                    complex ReactJS application, promoting full adherence to Figma design
                    specifications across multiple display sizes.
                  </li>
                  <li>
                    Developed custom and reusable components, utilizing Chakra UI, formik, and
                    create-react-app, while adhering to UX/UI principles of continuity, intuitivism,
                    equality, and accessibility.
                  </li>
                  <li>
                    Created designated screens and dashboards using Elementor, maintaining
                    consistency of branding and components.
                  </li>
                </ul>
              </div>
            </div>

            <div className='mb-8'>
              <div className='mb-2'>
                <div className='flex justify-between items-end'>
                  <p className='uppercase font-medium text-xl'>Civic Tech Index - Hack for LA</p>
                  <i className='font-light'>Pro Bono: remote - LA, CA</i>
                </div>
                <div className='flex justify-between items-end'>
                  <p className='font-medium text-2xl'>Lead Front-End Developer</p>
                  <i className='font-light'>Mar. 2021 - Jul. 2022</i>
                </div>
              </div>
              <div className='font-light'>
                <ul className='list-disc pl-4'>
                  <li>
                    Served as lead developer for creation of React application projected to serve
                    over 100,000 volunteers worldwide, utilizing ReactJS with Material-UI framework
                    from Figma design.
                  </li>
                  <li>
                    Built online index application uniting civic tech organizations, allowing users
                    to quickly locate and filter organizations and volunteer opportunities based on
                    causes, affiliations, and regions.
                  </li>
                  <li>
                    Leveraged GitHub open-source communities to make charitable work more visible to
                    potential donors and volunteers, with application currently serving 300+
                    organizations working on hunger remediation, criminal justice reform, and
                    affordable housing.
                  </li>
                  <li>
                    Worked with product managers throughout development of features and
                    improvements, promoting seamless user experiences.
                  </li>
                </ul>
              </div>
            </div>

            <div className='mb-8'>
              <div className='mb-2'>
                <div className='flex justify-between items-end'>
                  <p className='uppercase font-medium text-xl'>Bridgetown Bluegrass Festival</p>
                  <i className='font-light'>Portland, OR</i>
                </div>
                <div className='flex justify-between items-end'>
                  <p className='font-medium text-2xl'>Co-Founder/Organizer/Designer</p>
                  <i className='font-light'>Nov. 2020 - present</i>
                </div>
              </div>
              <div className='font-light'>
                <ul className='list-disc pl-4'>
                  <li>
                    Oversaw launch and expansion of nonprofit music festival showcasing work of over
                    250 talented artists to date, earning favorable reviews in regional media
                    outlets such as Willamette Week and the Portland Mercury.
                  </li>
                  <li>
                    Contributed to development of organizational website, social media presence,
                    registration processes, and e-commerce features, successfully raising over
                    $15,000 for Portland-based women&apos;s shelter and achieving 80% increase in
                    festival revenue.
                  </li>
                  <li>
                    Created content to engage broader audiences which led to nearly 250% increase in
                    event attendance in one-year-period.
                  </li>
                  <li>
                    Designed festival posters, promotional videos, pamphlets and merchandise,
                    selling out of limited-edition t-shirts during all events.
                  </li>
                  <li>
                    Trained and supervised over 30 dedicated volunteers to date, overseeing
                    scheduling of shifts and venue walkthroughs.
                  </li>
                </ul>
              </div>
            </div>

            <div className='mb-8'>
              <div className='mb-2'>
                <div className='flex justify-between items-end'>
                  <p className='uppercase font-medium text-xl'>Independent Contractor</p>
                  <i className='font-light'>remote - Portland, OR</i>
                </div>
                <div className='flex justify-between items-end'>
                  <p className='font-medium text-2xl'>Website/App Developer</p>
                  <i className='font-light'>Nov. 2020 - present</i>
                </div>
              </div>
              <div className='font-light'>
                <ul className='list-disc pl-4'>
                  <li>
                    Created intuitive, modern websites for companies across sectors including legal
                    services, real estate, entertainment, and food and beverage sectors,
                    implementing e-commerce capabilities for products sold across North America.
                  </li>
                  <li>
                    Contracted for building of business websites using ReactJS and frameworks
                    including Material UI, Chakra-UI, and Next.js.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
