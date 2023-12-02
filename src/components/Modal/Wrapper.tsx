type WrapperProp = {
  children: React.ReactNode;
  size?: 's' | 'm' | 'l';
};

const Wrapper = ({ children, size }: WrapperProp) => {
  return (
    <div
      className={`bg-quaternary_l1 dark:bg-primary px-3 py-3 rounded shadow-2xl	w-[90%]
        ${size === 's' && 'sm:w-1/5'}
        ${size === 'm' && 'sm:w-1/3'}
        ${size === 'l' && 'sm:w-1/2'}
      `}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

export default Wrapper;
