'use client';
import { useState } from 'react';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import { RiExternalLinkFill } from 'react-icons/ri';
import { Josefin_Sans } from 'next/font/google';
import { ContentLimiter } from './SectionWrapper';

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
    <div className='border-b-2 border-violhabbit mb-4'>
      <p className='text-md lg:text-xl text-bluesteel uppercase tracking-widest mb-1'>
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
          <p className='uppercase font-semibold text-lg lg:text-xl text-zinc-800'>
            {title}
          </p>
          <p className='font-medium text-lg text-zinc-600'>{org}</p>
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
    <section id='resume-cv' className='pb-24 md:pb-40'>
      <div className={josefin.className}>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='uppercase mb-2 pt-12 font-semibold text-bluesteel'>
            Résumé
          </h1>
          <p className='text-[.5rem] pr-14 sm:pr-10 lg:pr-14 border-t-4 border-violhabbit'>
            &nbsp;
          </p>

          <div className='flex flex-col justify-center items-center'>
            <a
              href='/docs/resume.pdf'
              target='_blank'
              className='border border-[2px] border-violhabbit rounded-md px-4 w-68 uppercase mt-4'
            >
              <div className='inline-flex items-center justify-center text-sm text-violhabbit font-semibold'>
                <div className='pr-1'>open as a printable PDF</div>
                <RiExternalLinkFill />
              </div>
            </a>

            {cvOpen ? (
              <button
                onClick={() => setCVOpen(!cvOpen)}
                className='border border-[2px] border-violhabbit bg-violhabbit rounded-md px-4 w-60 uppercase mt-4'
              >
                <p className='inline-flex items-center text-sm text-white font-semibold tracking-wide'>
                  <a className='pr-1'>hide resume</a>
                  <VscTriangleUp />
                </p>
              </button>
            ) : (
              <button
                onClick={() => setCVOpen(!cvOpen)}
                className='border border-[2px] border-violhabbit rounded-md px-4 w-60 uppercase mt-4'
              >
                <p className='inline-flex items-center text-sm text-violhabbit font-semibold tracking-wide'>
                  <a className='pr-1'>view resume below</a>
                  <VscTriangleDown />
                </p>
              </button>
            )}
          </div>
        </div>
      </div>

      {cvOpen && (
        <ContentLimiter>
          <div className='bg-white mt-6 pt-2 p-6 shadow-md'>
            <div className='flex flex-col-reverse sm:flex-row justify-between pb-4'>
              <div className='flex items-center'>
                <p className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-zinc-800 uppercase'>
                  Max&nbsp;
                </p>
                <p className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-violhabbit uppercase'>
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
                  linkedin.com/in/maxskewes
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
                contributing to design and development of interactive websites
                and custom applications projected to serve over 100,000 users.
                Well-developed ability to collaborate with UX designers, product
                managers, and back-end developers throughout all phase of
                projects. Proficient in ReactJS, Typescript, Node.js,
                JavaScript, HTML, CSS, WordPress, Material-UI, Chakra-UI,
                Next.js, Bootstrap, Formik, Git, GitHub, Bitbucket, Jira, SQL,
                Slack, and social media platforms.
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
                org={'University College Cork (Coláiste na hOllscoile Corcaigh)'}
                title={'Arts Degree Programme / Certificate of Irish Studies'}
                location={'Cork, Ireland'}
              >
                <p className='font-light'>
                  First Class Hounours: Modern and Ancient Irish language, Music
                  Theory/Practise, Celtic Civilization, Archaeology, Politics
                </p>
              </CVEntry>
              <CVEntry
                org={'Marylhurst University'}
                title={'Associate Degree of Liberal Arts'}
                location='Marylhurst, OR'
              >
                <p className='font-light'>Assiciate Degree of Liberal Arts</p>
                <i className='text-zinc-500'>
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
                date={'Sep. 2021 - present'}
              >
                <div className='font-light'>
                  <ul className='list-disc pl-4'>
                    <li>
                      <p>
                        Worked with career-tech startup to develop scalable
                        platform to help workforce development teams craft
                        impressive resumes and cover letters in minutes,
                        projected to serve over 50,000 job seekers in first year
                        of launch.
                      </p>
                    </li>
                    <li>
                      <p>
                        Collaborated with software engineer and UX consultant
                        throughout development of complex ReactJS application,
                        promoting full adherence to Figma design specifications
                        across multiple display sizes.
                      </p>
                    </li>
                    <li>
                      <p>
                        Developed custom and reusable components, utilizing
                        Chakra UI, formik, and create-react-app, while adhering
                        to UX/UI principles of continuity, intuitivism,
                        equality, and accessibility.
                      </p>
                    </li>
                    <li>
                      <p>
                        Created designated screens and dashboards using
                        Elementor, maintaining consistency of branding and
                        components.
                      </p>
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
                    <p>
                      <li>
                        Served as lead developer for creation of React
                        application projected to serve over 100,000 volunteers
                        worldwide, utilizing ReactJS with Material-UI framework
                        from Figma design.
                      </li>
                      <li>
                        Built online index application uniting civic tech
                        organizations, allowing users to quickly locate and
                        filter organizations and volunteer opportunities based
                        on causes, affiliations, and regions.
                      </li>
                      <li>
                        Leveraged GitHub open-source communities to make
                        charitable work more visible to potential donors and
                        volunteers, with application currently serving 300+
                        organizations working on hunger remediation, criminal
                        justice reform, and affordable housing.
                      </li>
                      <li>
                        Worked with product managers throughout development of
                        features and improvements, promoting seamless user
                        experiences.
                      </li>
                    </p>
                  </ul>
                </div>
              </CVEntry>

              <CVEntry
                org={'Bridgetown Bluegrass Festival'}
                title={'Co-Founder / Organizer / Designer'}
                location='Portland, OR'
                date={'Nov. 2017- present'}
              >
                <div className='font-light'>
                  <ul className='list-disc pl-4'>
                    <p>
                      <li>
                        Oversaw launch and expansion of nonprofit music festival
                        showcasing work of over 250 talented artists to date,
                        earning favorable reviews in regional media outlets such
                        as Willamette Week and the Portland Mercury.
                      </li>
                      <li>
                        Contributed to development of organizational website,
                        social media presence, registration processes, and
                        e-commerce features, successfully raising over $15,000
                        for Portland-based women&apos;s shelter and achieving
                        80% increase in festival revenue.
                      </li>
                      <li>
                        Created content to engage broader audiences which led to
                        nearly 250% increase in event attendance in
                        one-year-period.
                      </li>
                      <li>
                        Designed festival posters, promotional videos, pamphlets
                        and merchandise, selling out of limited-edition t-shirts
                        during all events.
                      </li>
                      <li>
                        Trained and supervised over 30 dedicated volunteers to
                        date, overseeing scheduling of shifts and venue
                        walkthroughs.
                      </li>
                    </p>
                  </ul>
                </div>
              </CVEntry>

              <CVEntry
                org={'Independent Contractor'}
                title={'Website / App Developer'}
                location={'remote - Portland, OR'}
                date={'Nov. 2020 - present'}
              >
                <div className='font-light'>
                  <ul className='list-disc pl-4'>
                    <p>
                      <li>
                        Created intuitive, modern websites for companies across
                        sectors including legal services, real estate,
                        entertainment, and food and beverage sectors,
                        implementing e-commerce capabilities for products sold
                        across North America.
                      </li>
                      <li>
                        Contracted for building of business websites using
                        ReactJS and frameworks including Material UI, Chakra-UI,
                        and Next.js.
                      </li>
                    </p>
                  </ul>
                </div>
              </CVEntry>
            </div>
          </div>
        </ContentLimiter>
      )}
    </section>
  );
};

export default Resume;
