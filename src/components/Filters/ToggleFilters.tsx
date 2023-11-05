import TheToggle from '../TheToggle';

type TheToggleProps = {
  filters: Array<string>;
};

const ToggleFilters = ({ filters }: TheToggleProps) => {
  return (
    <div className='flex gap-2'>
      {filters.map((filter) => (
        <TheToggle key={filter} label={filter} />
      ))}
    </div>
  );
};

export default ToggleFilters;
