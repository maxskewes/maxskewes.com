import Image from 'next/image';

const BackDrop = () => {
  return (
    <div className='absolute'>
      <Image
        priority
        src='/images/dev-banjo-porch.jpg'
        alt='Max on porch coding and playing banjo'
        aria-label='Max on porch coding and playing banjo'
        width={0}
        height={'0'}
        sizes='100%'
        className='fixed object-cover h-screen w-screen lg:h-auto'
        style={{
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default BackDrop;
