import clsx from 'clsx'

const ClassList = ({ active, id, title, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(id)}
      className={clsx(
        'px-[12px] py-[6px] mr-3 min-w-max text-sm border border-black-line rounded-md transition-all lg:mr-6 lg:px-5 lg:py-3 lg:text-base',
        active
          ? 'bg-ocean-300 text-white border-transparent'
          : 'bg-white text-black-primary opacity-40'
      )}
    >
      {title}
    </button>
  )
}

export default ClassList
