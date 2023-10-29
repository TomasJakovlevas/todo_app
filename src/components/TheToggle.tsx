'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type TheToggleProps = {
  label: string;
  active?: boolean;
};

const TheToggle = ({ label, active }: TheToggleProps) => {
  // Hooks
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Functions
  const setFilter = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    current.set('selected', label);

    const search = current.toString();
    const query = search ? `?${search}` : '';

    router.push(`/${query}`);
  };

  return (
    <button
      className={`px-2 py-1 rounded-2xl ${
        active && 'bg-gradient-to-r from-blue-700 to-blue-400'
      }`}
      onClick={setFilter}
    >
      {label}
    </button>
  );
};

export default TheToggle;
