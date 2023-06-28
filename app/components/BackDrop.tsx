import Image from 'next/image';

const BackDrop = () => {
  return (
    <div className='absolute'>
      <Image
        src='/images/dev-banjo-porch.png'
        alt='Max on porch coding and playing banjo'
        aria-label='Max on porch coding and playing banjo'
        width={0}
        height={'0'}
        sizes='100%'
        className='sticky object-cover h-screen w-screen lg:h-auto'
        style={{
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default BackDrop;
