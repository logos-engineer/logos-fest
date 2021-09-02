import clsx from 'clsx';

const ClassList = ({ active, id, title, setSelected }) => {
  return (
    <div>
      <button
        onClick={() => setSelected(id)}
        className={clsx(
          'mx-3 px-5 py-3 min-w-max rounded-md transition-all',
          active
            ? 'bg-pink-500 text-white'
            : 'bg-white text-black-primary opacity-40'
        )}
      >
        {title}
      </button>
    </div>
  );
};

export default ClassList;
