'use client';

import Link from 'next/link';

type TodoFormType = {
  submit: (data: FormData) => void;
};

const TodoForm = ({ submit }: TodoFormType) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const handleTextAreaKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const target = e.target as HTMLTextAreaElement;

    e.key === 'Enter' && (target.value += '\n');
  };

  return (
    <form
      action={submit}
      onKeyDown={handleKeyDown}
      className='flex flex-col border rounded'
    >
      <input
        type='text'
        name='title'
        className='bg-transparent px-2 py-1 outline-none text-xl font-semibold'
      />
      <textarea
        onKeyDown={handleTextAreaKeyDown}
        name='note'
        className='bg-transparent px-2 py-1 outline-none h-[100px] '
      />
      <div className='flex gap-1 justify-end'>
        <Link
          href={'..'}
          className='border px-2 py-1 rounded hover:bg-slate-700'
        >
          Cancel
        </Link>
        <button
          type='submit'
          className='border px-2 py-1 rounded hover:bg-slate-700'
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
