import {
  SiGimp,
  SiJavascript,
  SiChakraui,
  SiMui,
  SiAxios,
  SiGoodreads,
  SiTypescript,
  SiAdobephotoshop,
  SiInkscape,
  SiExpress,
  SiAdobeillustrator,
  SiMicrosoftoffice,
} from 'react-icons/si';
import {
  FaCartPlus,
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaCss3Alt,
  FaDocker,
  FaMobile,
  FaGithub,
  FaElementor,
  FaJira,
  FaSlack,
} from 'react-icons/fa';
import {
  TbBrandNextjs,
  TbBrandMysql,
  TbCircleLetterA,
  TbSquareRoundedLetterF,
  TbSquareRoundedLetterW,
  TbSquareLetterR,
  TbHexagonLetterY,
  TbHexagonLetterF,
  TbVectorBezier,
} from 'react-icons/tb';
import { IoGitNetwork, IoLogoFigma, IoLogoBitbucket } from 'react-icons/io5';
import { BsStripe, BsVectorPen } from 'react-icons/bs';

const SkillBubbles = () => {
  const SkillBubble = ({ skill, icon }) => {
    return (
      <div>
        <div className='flex items-center bg-bluesteel text-white m-1 py-1 px-3 rounded-full whitespace-nowrap'>
          <div className='mr-2'>{icon}</div> {skill}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className='m-4 flex flex-col justify-center items-center'>
        <h4 className='uppercase text-bluesteel font-semibold text-center'>Skills and Tech</h4>
        <p className='text-[.5rem] pr-14 sm:pr-10 lg:pr-14 border-t-4 border-violhabbit'>&nbsp;</p>

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
      </div>
    </>
  );
};

export default SkillBubbles;
