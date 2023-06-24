'use client';
import { useState } from 'react';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import { RiExternalLinkFill } from 'react-icons/ri';
import SectionHeader from './SectionHeader';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
});

type CVSectionTitleProps = {
  title: string;
};

type CVEntryProps = {
  org: string;
  location: string;
  title: string;
  date?: string;
  children?: any;
};

const CVSectionTitle = ({ title }: CVSectionTitleProps) => {
  return (
    <div className='border-b-2 border-violet mb-4'>
      <p className='text-md lg:text-xl text-teal uppercase tracking-widest mb-1'>
        {title}
      </p>
    </div>
  );
};

const CVEntry = ({ org, location, title, date, children }: CVEntryProps) => {
  return (
    <div className='mb-8'>
      <div className='flex justify-between items-start'>
        <div className='inline'>
          <p className='uppercase font-semibold text-lg lg:text-xl text-slate'>
            {title}
          </p>
          <p className='font-medium text-lg text-grey'>{org}</p>
        </div>

        <div className='inline pt-2'>
          <div className='flex flex-col'>
            <i className='text-right'>{location}</i>
            <i className='text-right'>{date}</i>
          </div>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
};

const Resume = () => {
  const [cvOpen, setCVOpen] = useState(false);

  return (
    <section id='resume-cv' className='pt-0'>
      <div className={josefin.className}>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='uppercase mb-2 pt-12 font-semibold text-teal'>
            Résumé -<a className='tracking-tight'> Curriculum Vitæ</a>
          </h2>
          <p className='text-[.5rem] pr-14 sm:pr-10 lg:pr-14 border-t-4 border-violet'>
            &nbsp;
          </p>

          <div className='flex flex-col justify-center items-center'>
            <a
              href='/docs/resume.pdf'
              target='_blank'
              className='border border-[2px] border-violet rounded-md px-4 w-68 uppercase mt-4'
            >
              <div className='inline-flex items-center justify-center text-sm text-violet font-semibold'>
                <div className='pr-1'>open as a printable PDF</div>
                <RiExternalLinkFill />
              </div>
            </a>

            <button
              onClick={() => setCVOpen(!cvOpen)}
              className='border border-[2px] border-violet rounded-md px-4 w-60 uppercase mt-4'
            >
              {cvOpen ? (
                <p className='inline-flex items-center text-sm text-violet font-semibold tracking-wide'>
                  <a className='pr-1'>hide resume</a>
                  <VscTriangleUp />
                </p>
              ) : (
                <p className='inline-flex items-center text-sm text-violet font-semibold tracking-wide'>
                  <a className='pr-1'>view below</a>

                  <VscTriangleDown />
                </p>
              )}
            </button>
          </div>
        </div>
      </div>

      {cvOpen && (
        <div className='bg-white mt-2 pt-2 p-6 drop-shadow-md'>
          <div className='flex flex-col-reverse sm:flex-row justify-between pb-4'>
            <div className='flex items-center'>
              <p className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase'>
                Max&nbsp;
              </p>
              <p className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-violet uppercase'>
                Skewes
              </p>
            </div>
            <div className='flex flex-col text-left sm:text-right pb-4 sm:pb-0 pt-2'>
              <i className='font-light text-sm xl:text-base'>
                e: maxskewes@gmail.com
              </i>
              <i className='font-light text-sm xl:text-base'>
                github.com/maxskewes
              </i>
              <i className='font-light text-sm xl:text-base'>
                Portland, OR 97215
              </i>
              <i className='font-light text-sm xl:text-base'>
                p: &#40;503&#41; 477-2975
              </i>
            </div>
          </div>

          <div className='mb-10'>
            <CVSectionTitle title={'Professional Summary'} />
            <p>
              User-Centric React Developer with several years of experience
              contributing to design and development of interactive websites and
              custom applications projected to serve over 100,000 users.
              Well-developed ability to collaborate with UX designers, product
              managers, and back-end developers throughout all phase of
              projects. Proficient in ReactJS, Typescript, Node.js, JavaScript,
              HTML, CSS, WordPress, Material-UI, Chakra-UI, Next.js, Bootstrap,
              Formik, Git, GitHub, Bitbucket, Jira, SQL, Slack, and social media
              platforms.
            </p>
          </div>

          <div className='mb-10'>
            <CVSectionTitle title={'Education & Training'} />
            <CVEntry
              org={'University of Oregon'}
              title={'Full-Stack Coding Certificate'}
              location='On site, Portland, OR campus'
            >
              <p className='font-light'>
                Graduated six-month intensive coursework in HTML, CSS,
                JavaScript, React, MySQL, and Node.js.
              </p>
            </CVEntry>
            <CVEntry
              org={'University College Cork'}
              title={'Certificate of Irish Studies'}
              location={'Cork, Ireland'}
            >
              <p className='font-light'>
                First Class Hounours in Modern and Ancient Irish language, music
                theory/practise, Celtic Civilization, Archaeology, and Politics.
              </p>
            </CVEntry>
            <CVEntry
              org={'Marylhurst University'}
              title={'Associate Degree of Liberal Arts'}
              location='Marylhurst, OR'
            >
              <p className='font-light'>
                First Class Hounours in Modern and Ancient Irish language, music
                theory/practise, Celtic Civilization, Archaeology, and Politics.
              </p>
              <i className='text-slate'>
                Minor focus on Irish Language &#40;Gaeilge&#41;.
              </i>
            </CVEntry>
          </div>

          <div className='mb-10'>
            <CVSectionTitle title={'Professional Experience'} />

            <CVEntry
              org={'Resume Scripter'}
              location='Portland, OR'
              title={'React Developer'}
              date={'Oct. 2021 - Feb. 2023'}
            >
              <div className='font-light'>
                <ul className='list-disc pl-4'>
                  <li>
                    Worked with career-tech startup to develop scalable platform
                    to help workforce development teams craft impressive resumes
                    and cover letters in minutes, projected to serve over 50,000
                    job seekers in first year of launch.
                  </li>
                  <li>
                    Collaborated with software engineer and UX consultant
                    throughout development of complex ReactJS application,
                    promoting full adherence to Figma design specifications
                    across multiple display sizes.
                  </li>
                  <li>
                    Developed custom and reusable components, utilizing Chakra
                    UI, formik, and create-react-app, while adhering to UX/UI
                    principles of continuity, intuitivism, equality, and
                    accessibility.
                  </li>
                  <li>
                    Created designated screens and dashboards using Elementor,
                    maintaining consistency of branding and components.
                  </li>
                </ul>
              </div>
            </CVEntry>

            <CVEntry
              org={'Civic Tech Index (Hack for LA)'}
              title={'Lead Front-End Developer'}
              location='Pro Bono: remote - Los Angeles, CA'
              date={'March 2021 - July 2022'}
            >
              <div className='font-light'>
                <ul className='list-disc pl-4'>
                  <li>
                    Served as lead developer for creation of React application
                    projected to serve over 100,000 volunteers worldwide,
                    utilizing ReactJS with Material-UI framework from Figma
                    design.
                  </li>
                  <li>
                    Built online index application uniting civic tech
                    organizations, allowing users to quickly locate and filter
                    organizations and volunteer opportunities based on causes,
                    affiliations, and regions.
                  </li>
                  <li>
                    Leveraged GitHub open-source communities to make charitable
                    work more visible to potential donors and volunteers, with
                    application currently serving 300+ organizations working on
                    hunger remediation, criminal justice reform, and affordable
                    housing.
                  </li>
                  <li>
                    Worked with product managers throughout development of
                    features and improvements, promoting seamless user
                    experiences.
                  </li>
                </ul>
              </div>
            </CVEntry>

            <CVEntry
              org={'Bridgetown Bluegrass Festival'}
              title={'Co-Founder/Organizer/Designer'}
              location='Portland, OR'
              date={'Nov. 2017- present'}
            >
              <div className='font-light'>
                <ul className='list-disc pl-4'>
                  <li>
                    Oversaw launch and expansion of nonprofit music festival
                    showcasing work of over 250 talented artists to date,
                    earning favorable reviews in regional media outlets such as
                    Willamette Week and the Portland Mercury.
                  </li>
                  <li>
                    Contributed to development of organizational website, social
                    media presence, registration processes, and e-commerce
                    features, successfully raising over $15,000 for
                    Portland-based women&apos;s shelter and achieving 80%
                    increase in festival revenue.
                  </li>
                  <li>
                    Created content to engage broader audiences which led to
                    nearly 250% increase in event attendance in one-year-period.
                  </li>
                  <li>
                    Designed festival posters, promotional videos, pamphlets and
                    merchandise, selling out of limited-edition t-shirts during
                    all events.
                  </li>
                  <li>
                    Trained and supervised over 30 dedicated volunteers to date,
                    overseeing scheduling of shifts and venue walkthroughs.
                  </li>
                </ul>
              </div>
            </CVEntry>

            <CVEntry
              org={'Independent Contractor'}
              title={'Wesite/App Developer'}
              location={'remote - Portland, OR'}
              date={'Nov. 2020 - present'}
            >
              <div className='font-light'>
                <ul className='list-disc pl-4'>
                  <li>
                    Created intuitive, modern websites for companies across
                    sectors including legal services, real estate,
                    entertainment, and food and beverage sectors, implementing
                    e-commerce capabilities for products sold across North
                    America.
                  </li>
                  <li>
                    Contracted for building of business websites using ReactJS
                    and frameworks including Material UI, Chakra-UI, and
                    Next.js.
                  </li>
                </ul>
              </div>
            </CVEntry>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
