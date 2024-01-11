import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { SiGoodreads, SiTypescript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiAxios } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { IoGitNetwork } from 'react-icons/io5';
import { BsStripe } from 'react-icons/bs';
import { FaCartPlus } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoFigma } from 'react-icons/io5';
import { FaNodeJs } from 'react-icons/fa';
import { SiMui } from 'react-icons/si';
import { SiChakraui } from 'react-icons/si';
import { TbBrandMysql } from 'react-icons/tb';
import { FaDocker } from 'react-icons/fa';
import { TbCircleLetterA } from 'react-icons/tb';
import { TbSquareRoundedLetterF } from 'react-icons/tb';
import { TbSquareRoundedLetterW } from 'react-icons/tb';
import { FaElementor } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaMobile } from 'react-icons/fa';
import { TbSquareLetterR } from 'react-icons/tb';
import { SiAdobephotoshop } from 'react-icons/si';
import { SiAdobeillustrator } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { SiGimp } from 'react-icons/si';
import { SiInkscape } from 'react-icons/si';
// import { SiGoogledocs } from 'react-icons/si';
import { SiMicrosoftoffice } from 'react-icons/si';
import { FaJira } from 'react-icons/fa';
import { IoLogoBitbucket } from 'react-icons/io5';
import { SiExpress } from 'react-icons/si';
import { FaSlack } from 'react-icons/fa';
import { TbHexagonLetterY } from 'react-icons/tb';
import { TbHexagonLetterF } from 'react-icons/tb';
import { BsVectorPen } from 'react-icons/bs';
import { TbVectorBezier } from 'react-icons/tb';

const Skills = () => {
  const SkillBubble = ({ skill, icon }) => {
    return (
      <div>
        <div className='flex items-center bg-bluesteel text-white m-1 py-1 px-3 rounded-full'>
          <div className='mr-2'>{icon}</div> {skill}
        </div>
      </div>
    );
  };

  return (
    <section id='about' className='pt-0'>
      <SectionWrapper title={'Skills and Technologies'}>
        <div className='p-2 mb-4'>
          <div className='flex justify-center items-center flex-wrap'>
            <SkillBubble skill={'typescript'} icon={<SiTypescript />} />
            <SkillBubble skill={'html'} icon={<FaHtml5 />} />
            <SkillBubble skill={'css'} icon={<FaCss3Alt />} />
            <SkillBubble skill={'react'} icon={<FaReact />} />
            <SkillBubble skill={'axios'} icon={<SiAxios />} />
            <SkillBubble skill={'nextjs'} icon={<TbBrandNextjs />} />
            <SkillBubble skill={'git'} icon={<IoGitNetwork />} />
            <SkillBubble skill={'stripe'} icon={<BsStripe />} />
            <SkillBubble skill={'ecommerce'} icon={<FaCartPlus />} />
            <SkillBubble skill={'figma'} icon={<IoLogoFigma />} />
            <SkillBubble skill={'node'} icon={<FaNodeJs />} />
            <SkillBubble skill={'mui'} icon={<SiMui />} />
            <SkillBubble skill={'chakra ui'} icon={<SiChakraui />} />
            <SkillBubble skill={'sql'} icon={<TbBrandMysql />} />
            <SkillBubble skill={'docker'} icon={<FaDocker />} />
            <SkillBubble skill={'rest apis'} icon={<TbCircleLetterA />} />
            <SkillBubble skill={'front-end dev'} icon={<TbSquareRoundedLetterF />} />
            <SkillBubble skill={'full-stack'} icon={<TbSquareRoundedLetterF />} />
            <SkillBubble skill={'web apps'} icon={<TbSquareRoundedLetterW />} />
            <SkillBubble skill={'elementor'} icon={<FaElementor />} />
            <SkillBubble skill={'javascript'} icon={<SiJavascript />} />
            <SkillBubble skill={'mobile app dev'} icon={<FaMobile />} />
            <SkillBubble skill={'responsive design'} icon={<TbSquareLetterR />} />
            <SkillBubble skill={'photoshop'} icon={<SiAdobephotoshop />} />
            <SkillBubble skill={'illustrator'} icon={<SiAdobeillustrator />} />
            <SkillBubble skill={'vector'} icon={<TbVectorBezier />} />
            <SkillBubble skill={'gimp'} icon={<SiGimp />} />
            <SkillBubble skill={'inkscape'} icon={<SiInkscape />} />
            <SkillBubble skill={'graphic design'} icon={<BsVectorPen />} />
            <SkillBubble skill={'microsoft office'} icon={<SiMicrosoftoffice />} />
            <SkillBubble skill={'google docs'} icon={<SiGoodreads />} />
            <SkillBubble skill={'express.js'} icon={<SiExpress />} />
            <SkillBubble skill={'slack'} icon={<FaSlack />} />
            <SkillBubble skill={'formik'} icon={<TbHexagonLetterF />} />
            <SkillBubble skill={'jira'} icon={<FaJira />} />
            <SkillBubble skill={'bitbucket'} icon={<IoLogoBitbucket />} />
            <SkillBubble skill={'yup'} icon={<TbHexagonLetterY />} />
            <SkillBubble skill={'github'} icon={<FaGithub />} />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Skills;
