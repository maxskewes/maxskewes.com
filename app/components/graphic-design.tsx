import Image from 'next/image';
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
      <div className='mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {examples.map(({ imgTitle, imgSrc, imgAlt }) => (
          <div
            key={imgTitle}
            className='col-span-1 flex justify-center items-center bg-grey-light shadow-md rounded'
          >
            <div className='p-2 rounded-md overflow-hidden w-auto h-auto'>
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
