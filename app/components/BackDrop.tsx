import Image from 'next/image';

const BackDrop = () => {
  return (
    <div className='absolute'>
      <Image
        src='/images/dev-banjo-porch.png'
        alt='Max on porch coding and playing banjo'
        aria-label='Max on porch coding and playing banjo'
        width={0}
        height={0}
        sizes='100%'
        style={{
          zIndex: -1,
          width: '100%',
          height: 'auto',
          position: 'fixed',
          top: 0,
          left: 0,
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default BackDrop;
