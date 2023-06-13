import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from './SectionHeader';

type GraphicDesignProps = {
  data: {
    title: string;
    examples: {
      imgTitle: string;
      imgSrc: string;
      imgAlt: string;
    }[];
  };
};

const GraphicDesign = ({ data }: GraphicDesignProps) => {
const {title, examples} = data;

  return (
    <section id="graphic-design">
      <SectionHeader title={title} />
      <div className='container mx-auto p-6 grid grid-cols-3 gap-4'>
        {examples.map(({ imgTitle, imgSrc, imgAlt }) => (
          <div
            key={imgTitle}
            className='col-span-1 flex justify-center items-center bg-grey-light drop-shadow-md rounded'
          >
            <div className='p-2 rounded-md overflow-hidden'>
              <Image
                priority
                width={200}
                height={200}
                className='m-1'
                src={imgSrc}
                alt={imgAlt}
                aria-label={imgAlt}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GraphicDesign;
