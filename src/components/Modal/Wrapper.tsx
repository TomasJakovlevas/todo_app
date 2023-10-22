type WrapperProp = {
  children: React.ReactNode;
  size?: 's' | 'm' | 'l';
};

const Wrapper = ({ children, size }: WrapperProp) => {
  return (
    <div
      className={`bg-primary px-3 py-3 rounded 
        ${size === 's' && 'w-1/5'}
        ${size === 'm' && 'w-1/3'}
        ${size === 'l' && 'w-1/2'}
      `}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

export default Wrapper;
