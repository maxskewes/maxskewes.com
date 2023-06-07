type PersonalProps = {
  data: {
    title: string;
    body: string;
  };
};

const Personal = ({ data }: PersonalProps) => {
  const { title, body } = data;

  return (
    <section>
      <h2 className='mb-8'>{title}</h2>
      <div>
        <p className='mb-6'>{body}</p>
      </div>
    </section>
  );
};

export default Personal;
