'use client';

import { useRouter, useSearchParams } from 'next/navigation';

type TheToggleProps = {
  label: string;
};

const TheToggle = ({ label }: TheToggleProps) => {
  // Hooks
  const router = useRouter();
  const searchParams = useSearchParams();

  // Vars
  const isActive = searchParams.get('filter') === label;

  // Functions
  const setFilter = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    isActive ? current.delete('filter') : current.set('filter', label);

    const search = current.toString();
    const query = search ? `?${search}` : '';

    router.push(`/${query}`);
  };

  return (
    <button
      className={`px-2 py-1 text-sm sm:text-base rounded-2xl capitalize border border-transparent hover:border-primary dark:hover:border-white  ${
        isActive &&
        'bg-gradient-to-r dark:from-secondary dark:to-secondary_l1 from-quaternary to-quaternary_l1'
      }`}
      onClick={setFilter}
    >
      {label}
    </button>
  );
};

export default TheToggle;
