import clsx from 'clsx';

const ClassList = ({ active, id, title, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(id)}
      className={clsx(
        'px-[12px] py-[6px] border-[1px] mr-3 min-w-max text-sm border-black-line rounded-md transition-all md:mr-6 md:px-5 md:py-3 md:text-base',
        active
          ? 'bg-pink-500 text-white border-transparent'
          : 'bg-white text-black-primary opacity-40'
      )}
    >
      {title}
    </button>
  );
};

export default ClassList;
