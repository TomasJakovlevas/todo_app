import { useState } from 'react';
import TheToggle from '../TheToggle';

const ToggleFilters = () => {
  return (
    <div className='flex gap-2'>
      <TheToggle label='Canceled' />
      <TheToggle label='Active' />
      <TheToggle label='Inactive' />
    </div>
  );
};

export default ToggleFilters;
