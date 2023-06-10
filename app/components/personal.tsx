import SectionHeader from './SectionHeader';

type PersonalProps = {
  data: {
    body: string;
  };
};

const Personal = ({ data }: PersonalProps) => {
  const { body } = data;

  return (
    <section>
      <SectionHeader title={'Personal'} />
      <div className='ml-4'>
        <p className='mb-6'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {body}
          </p>
      </div>
    </section>
  );
};

export default Personal;
