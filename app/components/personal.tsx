import { SectionWrapper } from './SectionWrapper';

type PersonalProps = {
  data: {
    body: string;
  };
};

const Personal = ({ data }: PersonalProps) => {
  const { body } = data;

  return (
    <section id='personal' className='pb-1'>
      <SectionWrapper title={'Personal'}>
        <div className='ml-4'>
          <p className='mb-6'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {body}
          </p>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Personal;
