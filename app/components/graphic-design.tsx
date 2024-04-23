import Image from 'next/image';
import { SectionWrapper } from './SectionWrapper';

type GraphicDesignProps = {
  data: {
    title: string;
    examples: {
      srcTitle: string;
      imgAlt: string;
    }[];
  };
};

const GraphicDesign = ({ data }: GraphicDesignProps) => {
  const { title, examples } = data;

  return (
    <section id='graphic-design'>
      <SectionWrapper title={title}>
        <div className='mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {examples.map(({ srcTitle, imgAlt }) => (
            <div
              key={srcTitle}
              className='col-span-1 flex justify-center items-center bg-zinc-100 shadow-md rounded'
            >
              <div className='p-2 rounded-md overflow-hidden'>
                <Image
                  priority
                  width={200}
                  height={200}
                  className='m-1'
                  src={`/images/design/${srcTitle}.png`}
                  alt={imgAlt}
                  aria-label={imgAlt}
                />
              </div>
            </div>
          ))}
        </div>
        </SectionWrapper>
    </section>
  );
};

export default GraphicDesign;
